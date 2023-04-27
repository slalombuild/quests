/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("sales").del();
  await knex("sales").insert([
    { potion_id: 1, employee_id: 1, customer_id: 1 },
    { potion_id: 2, employee_id: 4, customer_id: 1 },
    { potion_id: 1, employee_id: 2, customer_id: 4 },
    { potion_id: 3, employee_id: 3, customer_id: 3 },
    { potion_id: 3, employee_id: 3, customer_id: 2 },
    { potion_id: 3, employee_id: 1, customer_id: 5 },
    { potion_id: 2, employee_id: 1, customer_id: 5 },
    { potion_id: 1, employee_id: 2, customer_id: 6 },
    { potion_id: 1, employee_id: 4, customer_id: 7 },
  ]);
};
