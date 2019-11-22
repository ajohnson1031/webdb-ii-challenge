exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin_number: "2RUVIOP43P33RTYIF",
          vehicle_make: "Ford",
          vehicle_model: "Taurus",
          mileage: 20341
        },
        {
          vin_number: "2RUVIOP43P33RTYIA",
          vehicle_make: "Chrysler",
          vehicle_model: "Town & Country",
          mileage: 18931
        },
        {
          vin_number: "2RUVIOP43P33RTYIC",
          vehicle_make: "Jeep",
          vehicle_model: "Cherokee",
          mileage: 5
        }
      ]);
    });
};
