/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("employees").del();
  await knex("employees").insert([
    {
      emp_first_name: "Jessica",
      emp_last_name: "Jones",
      emp_email: "jjones@jessicajones.com",
      hire_date: "November 20, 2015",
      address: "485 W 46th Street, New York City, NY",
      current: true,
    },
    {
      emp_first_name: "Wanda",
      emp_last_name: "Maximoff",
      emp_email: "scarlet_witch@avengers.com",
      hire_date: "April 4, 2014",
      address: "2800 Sherwood Drive, Westview, NJ",
      current: true,
    },
    {
      emp_first_name: "Peter",
      emp_last_name: "Quill",
      emp_email: "starlord@guardiansofthegalaxy.com",
      hire_date: "August 1, 2014",
      address: "The Benetar",
      current: true,
    },
    {
      emp_first_name: "Peter",
      emp_last_name: "Parker",
      emp_email: "spiderman@earth616.com",
      hire_date: "May 16, 2016",
      address: "20 Ingram Street, Forest Hills, Queens, New York City, NY",
      current: true,
    },
  ]);
};
