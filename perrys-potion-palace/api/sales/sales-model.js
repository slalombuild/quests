const db = require("../../data/dbConfig");

function findSaleById(sale_id) {
  return db("sales").where({ sale_id }).first();
}

function findBy(param) {
  return db("sales").where(param).first();
}

async function findAllSales() {
  // SOLVE HERE
}

function findSaleById(sale_id) {
  // SOLVE HERE
}

async function findAllSalesByCustomer(customer_id) {
  // SOLVE HERE
}

async function findAllSalesByItem(potion_id) {
  // SOLVE HERE
}

async function findAllSalesByEmployee(employee_id) {
  // SOLVE HERE
}

async function sellPotions(sale) {
  // SOLVE HERE
}

async function refundPotion(sale_id) {
  // SOLVE HERE
}

module.exports = {
  findSaleById,
  findBy,
  findAllSales,
  findAllSalesByCustomer,
  findAllSalesByItem,
  findAllSalesByEmployee,
  sellPotions,
  refundPotion,
};
