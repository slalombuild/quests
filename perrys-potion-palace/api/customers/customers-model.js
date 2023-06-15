const db = require("../../data/dbConfig");

function findCustomerById(customer_id) {
  return db("customers").where({ customer_id }).first();
}

function findAllCustomers() {
  return db("customers");
}

function findBy(param) {
  return db("customers").where(param).first();
}

async function addCustomer(customer) {
  await db("customers").insert(customer);
  return findCustomerById(customer.customer_id);
}

async function updateCustomer(customer_id, customer) {
  await db("customers").where({ customer_id }).update(customer);
  return db("customers").where({ customer_id }).first();
}

async function deleteCustomer(customer_id) {
  await db("customers").where({ customer_id }).del();
}

module.exports = {
  findCustomerById,
  findAllCustomers,
  findBy,
  addCustomer,
  updateCustomer,
  deleteCustomer,
};
