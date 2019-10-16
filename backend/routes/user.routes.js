var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
let userRouter = express.Router();
let User = require('../model/user.model');

userRouter.route('/').get(function(req, res) {
    User.find({}, function(err, users) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.json(users);
        }
    });
});


userRouter.route('/:id').get(function(req, res) {
    let id = req.params.id;
    User.findById(id, function(err, user) {
      res.json(user);
    });
});

userRouter.route('/update/:id').post(function(req, res) {
    User.findById(req.params.id, function(err, user) {
        if (!user)
            res.status(404).send("data is not found");
        else
          user.username = req.body.username;
          user.password = req.body.password;
          user.phone = req.body.phome;
          user.dob = req.body.dob;
          user.email = req.body.email;
          user.dob = req.body.dob;

            user.save().then(user => {
                res.json('User updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});


userRouter.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, req.body)
    .then(book => res.json({ mgs: 'Account Deleted' }))
    .catch(err => res.status(404).json({ error: 'No such User' }));
});

userRouter.route('/add').post(function(req, res) {
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'user': 'user added successfully ' + user});
        })
        .catch(err => {
            res.status(400).send('adding new user failed ' + err);
        });
});


module.exports = userRouter;
