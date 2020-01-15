const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar_url: String,
  items: [String],
  location: {
    type: PointSchema,
    index: '2dsphere',
  },
});

module.exports = mongoose.model('User', UserSchema);
