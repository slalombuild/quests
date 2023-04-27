/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("ingredients").del();
  await knex("ingredients").insert([
    {
      ingredient_name: "Gillyweed",
      in_stock: 6000,
      cost: 3.75,
      reorder_qty: 1000,
      supplier_id: 2,
    },
    {
      ingredient_name: "Bat Wing",
      in_stock: 800,
      cost: 2.5,
      reorder_qty: 800,
      supplier_id: 1,
    },
    {
      ingredient_name: "Unicorn Hair",
      in_stock: 15000,
      cost: 3.25,
      reorder_qty: 2000,
      supplier_id: 2,
    },
    {
      ingredient_name: "Lacewing Fly",
      in_stock: 2000,
      cost: 1.8,
      reorder_qty: 800,
      supplier_id: 1,
    },
    {
      ingredient_name: "Mandrake Root",
      in_stock: 650,
      cost: 2.25,
      reorder_qty: 500,
      supplier_id: 1,
    },
    {
      ingredient_name: "Jar",
      in_stock: 50,
      cost: 0.75,
      reorder_qty: 25,
      supplier_id: 3,
    },
  ]);
};
