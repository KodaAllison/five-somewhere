const express = require('express');
const City = require('../models/City');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const cities = await City.find();
    res.json(cities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;