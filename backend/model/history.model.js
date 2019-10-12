const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let History = new Schema({
    retailerId: {type: String},
    customerId: {type: String},
    productId: {type: String},
    name: {type: String},
    price: {type: String}
    // productOwner: {type: ObjectId}
});

module.exports = mongoose.model('history', History);
