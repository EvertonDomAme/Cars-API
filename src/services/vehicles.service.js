const Vehicle = require('../models/vehicle');
const { options } = require('../routes/vehicles.route');

const findVehiclesService = async () => {
  const vehicles = await Vehicle.find();
  return vehicles;
};

const findVehicleByIdService = async (id) => {
  return await Vehicle.findById(id);
};

const createVehicleService = async (newVehicle) => {
  return await Vehicle.create(newVehicle);
};

const updateVehicleService = async (id, vehicleUpdated) => {
  return await Vehicle.findByIdAndUpdate(id, vehicleUpdated, {returnDocument: "after"});
};

const deleteVehicleService = async (id) => {
  return await Vehicle.findByIdAndDelete(id);
};

module.exports = {
  findVehiclesService,
  findVehicleByIdService,
  createVehicleService,
  updateVehicleService,
  deleteVehicleService
}