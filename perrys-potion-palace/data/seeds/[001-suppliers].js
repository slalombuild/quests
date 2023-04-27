/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("suppliers").del();
  await knex("suppliers").insert([
    { supplier_name: "ABC Company" },
    { supplier_name: "XYZ Company" },
    { supplier_name: "TLC Company" },
  ]);
};
