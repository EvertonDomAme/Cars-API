const Car = require('../models/car');
const { options } = require('../routes/cars.route');

const findCarsService = async () => {
  const cars = await Car.find();
  return cars;
};

const findCarByIdService = async () => {
  return await Car.findById(id);
};

const createCarService = async (newCar) => {
  return await Car.create(newCar);
};

const updateCarService = async (id, carUpdated) => {
  return await Car.findByIdAndUpdate(id, carUpdated, {returnDocument: "after"});
};

const deleteCarService = async (id) => {
  return await Car.findByIdAndDelete(id);
};

module.exports = {
  findCarsService,
  findCarByIdService,
  createCarService,
  updateCarService,
  deleteCarService
}