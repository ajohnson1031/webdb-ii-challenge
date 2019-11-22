exports.up = function(knex) {
  return knex.schema.createTable("sales", tbl => {
    tbl.increments();
    tbl
      .string("vin_number", 17)
      .unique()
      .notNullable()
      .references("cars.vin_number");
    tbl.string("customer_name", 50).notNullable();
    tbl.string("sale_price", 11).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("sales");
};
