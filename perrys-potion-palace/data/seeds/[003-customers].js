/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("customers").del();
  await knex("customers").insert([
    {
      cust_first_name: "walk-in",
      cust_last_name: "walk-in",
      cust_email: "walkin@null.com",
    },
    {
      cust_first_name: "Steve",
      cust_last_name: "Harper",
      cust_email: "steve@harper.com",
    },
    {
      cust_first_name: "Tina",
      cust_last_name: "Long",
      cust_email: "tina@long.com",
    },
    {
      cust_first_name: "Abbey",
      cust_last_name: "Johnson",
      cust_email: "abbey@johnson.com",
    },
    {
      cust_first_name: "Tom",
      cust_last_name: "Smith",
      cust_email: "tom@smith.com",
    },
    {
      cust_first_name: "Mary",
      cust_last_name: "Allen",
      cust_email: "mary@allen.com",
    },
    {
      cust_first_name: "Ethan",
      cust_last_name: "Harris",
      cust_email: "ethan@harris.com",
    },
  ]);
};
