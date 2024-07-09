const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
  city: String,
  timezone: String,
  country: String,
  population: String,
  currency: String,
  language: String,
  favoriteBeer: String,
});

module.exports = mongoose.model('City', CitySchema);