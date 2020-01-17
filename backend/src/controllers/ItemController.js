const Item = require('../models/Item');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index(req, res) {
    const items = await Item.find();

    return res.json(items);
  },
  async store(req, res) {
    const {
      item_name,
      description,
      price,
      user_email,
      latitude,
      longitude,
    } = req.body;

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };

    item = await Item.create({
      item_name,
      description,
      price,
      user_email,
      location,
    });

    return res.json(item);
  },
};
