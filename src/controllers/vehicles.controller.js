const vehiclesService = require("../services/vehicles.service");

const findVehiclesController = async (req, res) => {
  res.send(await vehiclesService.findVehiclesService());
};

const findVehicleByIdController = async (req, res) => {
  const chosenVehicle = await vehiclesService.findVehicleByIdService(
    req.params.id
  );

  if (!chosenVehicle) {
    return res.status(404).send({ message: "Vehicle not found!" });
  }

  res.send(chosenVehicle);
};

const createVehicleController = async (req, res) => {
  res.send(await vehiclesService.createVehicleService(req.body));
};

const updateVehicleController = async (req, res) => {
  res.send(await vehiclesService.updateVehicleService(req.params.id, req.body));
};

const deleteVehicleController = async (req, res) => {
  const vehicle = await vehiclesService.deleteVehicleService(req.params.id);
  if (!vehicle) {
    return res.status(404).send({ message: "Vehicle not found!" });
  }

  res.send({ message: `Vehicle ${vehicle.name} successfully deleted` });
};

module.exports = {
  findVehiclesController,
  findVehicleByIdController,
  createVehicleController,
  updateVehicleController,
  deleteVehicleController,
};
