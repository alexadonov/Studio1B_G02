const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Item = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: String,
        required: true
    },
    description: {type: String},
    brand: {type: String},
    model: {type: String},
    inStock: {type: Boolean, default: true},
    image: {
        type: String
    },
    popItem: {type: Boolean, default: false},
    retailerId: {
        type: String, 
        required: true
    }
});

module.exports = mongoose.model('item', Item);
