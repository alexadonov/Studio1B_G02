const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {type: String },
    phone: {type: String },
    dob: { type: String },
    userType: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', User);
