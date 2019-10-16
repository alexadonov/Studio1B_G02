var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
let itemRouter = express.Router();
let Item = require('../model/item.model');

//Get Data
itemRouter.route('/').get(function(req, res) {
    Item.find({}, function(err, items) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.json(items);
        }
    });
});

//Add new Data
itemRouter.route('/add').post(function(req, res) {
    let item = new Item(req.body);
    item.save()
        .then(item => {
            res.status(200).json({'item': 'item added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new item failed');
        });
});

itemRouter.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Item.findById(id, function(err, item) {
        res.json(item);
    });
});

//Delete
itemRouter.delete('/:id', (req, res) => {
  Item.findByIdAndRemove(req.params.id, req.body)
    .then(book => res.json({ mgs: 'Item Deleted' }))
    .catch(err => res.status(404).json({ error: 'No such Item' }));
});

//Edit
itemRouter.route('/update/:id').post(function(req, res) {
    Item.findById(req.params.id, function(err, item) {
        if (!item)
            res.status(404).send("data is not found");
        else
            item.name = req.body.name;
            item.price = req.body.price;
            item.description = req.body.description;
            item.brand = req.body.brand;
            item.model = req.body.model;
            item.inStock = req.body.inStock;
            item.popItem = req.body.popItem;
            item.retailerId = req.body.retailerId;
            item.save().then(item => {
                res.json('item updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

module.exports = itemRouter;
