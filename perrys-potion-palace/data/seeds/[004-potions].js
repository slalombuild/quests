/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("potions").del();
  await knex("potions").insert([
    { potion_name: "Polyjuice Potion", in_stock: 10, retail_price: 11.25 },
    { potion_name: "Truth Serum", in_stock: 15, retail_price: 10.25 },
    { potion_name: "Love Potion", in_stock: 8, retail_price: 9.99 },
  ]);
};
