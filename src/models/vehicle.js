const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  picture: { type: String, required: true },
  color: { type: String, required: true },
  manufacturer: { type: String, required: true },
  manufacture_year: { type: Number, required: true },
  model_year: { type: Number, required: true },
  selling_price: { type: Number, required: true },
  description: { type: String, required: true },
});

const Vehicle = mongoose.model('vehicles', VehicleSchema);

module.exports = Vehicle;