const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {type: String },
    phone: {type: String },
    dob: { type: String }
});

module.exports = mongoose.model('User', User);
