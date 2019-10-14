var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
let historyRouter = express.Router();
let History = require('../model/history.model');

historyRouter.route('/').get(function(req, res) {
    History.find({}, function(err, history) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.json(history);
        }
    });
});


historyRouter.route('/:id').get(function(req, res) {
    let id = req.params.id;
    History.findById(id, function(err, history) {
      res.json(history);
    });
});

historyRouter.route('/update/:id').post(function(req, res) {
    History.findById(req.params.id, function(err, history) {
        if (!history)
            res.status(404).send("data is not found");
        else
          history.reatilerId = req.body.retailerId;
          history.customerId = req.body.customerId;
          history.productId = req.body.productId;
          history.name = req.body.name;
          history.price = req.body.price;

            history.save().then(history => {
                res.json('history updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});


historyRouter.delete('/:id', (req, res) => {
  History.findByIdAndRemove(req.params.id, req.body)
    .then(book => res.json({ mgs: 'history Deleted' }))
    .catch(err => res.status(404).json({ error: 'No such history' }));
});

historyRouter.route('/add').post(function(req, res) {
    let history = new History(req.body);
    history.save()
        .then(history => {
            res.status(200).json({'history': 'history added successfully ' + history});
        })
        .catch(err => {
            res.status(400).send('adding new history failed ' + err);
        });
});


module.exports = historyRouter;
