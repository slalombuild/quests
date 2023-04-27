/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("potion_ingredients").del();
  await knex("potion_ingredients").insert([
    { qty_used: 2, potion_id: 1, ingredient_id: 1 },
    { qty_used: 1, potion_id: 1, ingredient_id: 3 },
    { qty_used: 4, potion_id: 1, ingredient_id: 5 },
    { qty_used: 1, potion_id: 1, ingredient_id: 6 },
    { qty_used: 3, potion_id: 2, ingredient_id: 1 },
    { qty_used: 1, potion_id: 2, ingredient_id: 2 },
    { qty_used: 2, potion_id: 2, ingredient_id: 3 },
    { qty_used: 1, potion_id: 2, ingredient_id: 6 },
  ]);
};
