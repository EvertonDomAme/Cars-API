const express = require("express");
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

const vehiclesController = require("../controllers/vehicles.controller");
const {
  validId,
  validObjectBody,
} = require("../middlewares/vehicle.middleware");

router.get("/all-vehicles", vehiclesController.findVehiclesController);

router.get(
  "/one-vehicle/:id",  validId,
  vehiclesController.findVehicleByIdController
);


router.post(
  "/create-vehicle",
  validObjectBody,
  vehiclesController.createVehicleController
);

router.put(
  "/update-vehicle/:id",
  validObjectBody,
  vehiclesController.updateVehicleController
);

router.delete(
  "/delete-vehicle/:id",
  validId,
  vehiclesController.deleteVehicleController
);

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = router;
