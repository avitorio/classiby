const User = require('../models/User');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index(req, res) {
    const users = await User.find();

    return res.json(users);
  },
  async store(req, res) {
    const { name, email, items, latitude, longitude } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      const itemsArray = parseStringAsArray(items);

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };

      user = await User.create({
        name,
        email,
        items: itemsArray,
        location,
      });
    }

    return res.json(user);
  },
};
