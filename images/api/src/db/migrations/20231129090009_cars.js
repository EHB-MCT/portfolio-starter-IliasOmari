/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("cars", function (table) {
    table.increments("id");
    table.string("carModel", 255).notNullable();
    table.string("manufacturer", 255).notNullable();
    table.string("img", 255);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("cars");
};
