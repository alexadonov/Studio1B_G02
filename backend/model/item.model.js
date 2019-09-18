const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Item = new Schema({
    name: {type: String},
    price: {type: String},
    description: {type: String},
    brand: {type: String},
    model: {type: String},
    inStock: {type: Boolean},
    image: {data: Buffer, contentType: String }
});

module.exports = mongoose.model('item', Item);
