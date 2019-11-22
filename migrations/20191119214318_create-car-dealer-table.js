exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl
      .string("vin_number", 17)
      .unique()
      .notNullable();
    tbl.string("vehicle_make", 25).notNullable();
    tbl.string("vehicle_model", 25).notNullable();
    tbl
      .integer("mileage")
      .unsigned()
      .notNullable();
    tbl.string("transmission_type", 25).nullable();
    tbl.string("title_status", 25).nullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
