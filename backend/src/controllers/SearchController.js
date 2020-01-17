const Item = require('../models/Item');

module.exports = {
  async index(req, res) {
    const { latitude, longitude, item_name } = req.query;

    const items = await Item.find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    }).where({
      item_name,
    });

    return res.json(items);
  },
};
