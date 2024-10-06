const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  carModel: String,
  price: String,
  phone: String,
  city: String,
  copies: String,
  images: [String],
});

const Vehicles = mongoose.model('Vehicles', vehicleSchema);
module.exports = Vehicles;
