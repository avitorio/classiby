const User = require('../models/User');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index(req, res) {
    const { latitude, longitude, items } = req.query;

    const itemsArray = parseStringAsArray(items);

    const users = await User.find({
      items: {
        $in: itemsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });

    return res.json(users);
  },
};
