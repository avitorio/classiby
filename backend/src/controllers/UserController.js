const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const users = await User.find();

    return res.json(users);
  },
  async store(req, res) {
    const { name, email, latitude, longitude } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };

      user = await User.create({
        name,
        email,
        location,
      });
    }

    return res.json(user);
  },
};
