const { Router } = require('express');
const User = require('./models/User');

const routes = Router();

routes.post('/users', async (req, res) => {
  const { name, email, latitude, longitude } = req.body;

  const location = {
    type: 'Point',
    coordinates: [longitude, latitude],
  };

  const user = await User.create({
    name,
    email,
    location,
  });

  return res.json(user);
});

module.exports = routes;
