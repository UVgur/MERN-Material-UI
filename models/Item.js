const mongoose = require('mongoose');
const Schema = mongoose.Schema;



//Create Schema: defines the object "item" structure. (to be stored in the DB)
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    secret: {
        type: String,
        required: false
    }
});

module.exports = Item = mongoose.model('item', ItemSchema );