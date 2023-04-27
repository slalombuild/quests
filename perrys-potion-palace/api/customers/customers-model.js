const db = require("../../data/dbConfig");

function findCustomerById(customer_id) {
  // SOLVE HERE
}

function findAllCustomers() {
  // SOLVE HERE
  return db("customers");
}

function findBy(param) {
  // SOLVE HERE
}

async function addCustomer(customer) {
  // SOLVE HERE
}

async function updateCustomer(customer_id, customer) {
  // SOLVE HERE
}

async function deleteCustomer(customer_id) {
  // SOLVE HERE
}

module.exports = {
  findCustomerById,
  findAllCustomers,
  findBy,
  addCustomer,
  updateCustomer,
  deleteCustomer,
};
