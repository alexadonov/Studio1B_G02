const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Item = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {type: String},
    brand: {type: String},
    model: {type: String},
    inStock: {type: Boolean},
    image: {data: Buffer, contentType: String }
    // productOwner: {type: ObjectId}
});

module.exports = mongoose.model('item', Item);
