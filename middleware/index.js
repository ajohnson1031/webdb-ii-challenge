const validateEntry = (req, res, next) => {
  console.log(req.body);
  !req.body.vin_number ||
  !req.body.vehicle_make ||
  !req.body.vehicle_model ||
  !req.body.mileage
    ? res.status(400).json({
        message:
          "New car entry requires VIN number, vehicle make, vehicle model and mileage. Please reconfigure your request"
      })
    : next();
};

module.exports = validateEntry;
