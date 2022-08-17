const mongoose = require("mongoose");
const validId = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send({ message: "Invalid ID!" });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  if (
    !req.body ||
    !req.body.name ||
    !req.body.picture ||
    !req.body.color ||
    !req.body.manufacturer ||
    !req.body.manufacture_year ||
    !req.body.model_year ||
    !req.body.selling_price ||
    !req.body.description
  ) {
    return res
      .status(400)
      .send({ message: "All vehicle's fields has been sent..." });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};
