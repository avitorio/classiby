const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const ItemSchema = new mongoose.Schema({
  item_name: String,
  description: String,
  price: Number,
  user_email: String,
  location: {
    type: PointSchema,
    index: '2dsphere',
  },
});

module.exports = mongoose.model('Item', ItemSchema);
