const db = require("../../data/dbConfig");

function findSaleById(sale_id) {
  return db("sales").where({ sale_id }).first();
}

function findBy(param) {
  return db("sales").where(param).first();
}

async function findAllSales() {
  return db("sales as s")
    .leftJoin("potions as p", "s.potion_id", "p.potion_id")
    .leftJoin("employees as e", "s.employee_id", "e.employee_id")
    .leftJoin("customers as c", "s.customer_id", "c.customer_id")
    .select(
      "s.*",
      "p.potion_name",
      "p.retail_price",
      "e.emp_first_name",
      "e.emp_last_name",
      "c.*"
    );
}

function findSaleById(sale_id) {
  return db("sales as s")
    .leftJoin("potions as p", "s.potion_id", "p.potion_id")
    .leftJoin("employees as e", "s.employee_id", "e.employee_id")
    .leftJoin("customers as c", "s.customer_id", "c.customer_id")
    .select(
      "s.*",
      "p.potion_name",
      "p.retail_price",
      "e.emp_first_name",
      "e.emp_last_name",
      "c.*"
    )
    .where({ sale_id })
    .first();
}

async function findAllSalesByCustomer(customer_id) {
  const sales = await db("sales as s")
    .leftJoin("potions as p", "s.potion_id", "p.potion_id")
    .leftJoin("employees as e", "s.employee_id", "e.employee_id")
    .where("s.customer_id", customer_id)
    .select(
      "s.sale_id",
      "s.potion_id",
      "s.employee_id",
      "p.potion_name",
      "p.retail_price",
      "e.emp_first_name",
      "e.emp_last_name"
    );
  const customer = await db("customers").where({ customer_id }).first();
  return {
    ...customer,
    sales,
  };
}

async function findAllSalesByItem(potion_id) {
  const sales = await db("sales as s")
    .leftJoin("employees as e", "s.employee_id", "e.employee_id")
    .leftJoin("customers as c", "s.customer_id", "c.customer_id")
    .where("s.potion_id", potion_id)
    .select(
      "s.sale_id",
      "s.customer_id",
      "s.employee_id",
      "e.emp_first_name",
      "e.emp_last_name",
      "c.*"
    );
  const potion = await db("potions").where({ potion_id }).first();
  return {
    ...potion,
    sales,
  };
}

async function findAllSalesByEmployee(employee_id) {
  const sales = await db("sales as s")
    .leftJoin("potions as p", "s.potion_id", "p.potion_id")
    .leftJoin("customers as c", "s.customer_id", "c.customer_id")
    .where("s.employee_id", employee_id)
    .select(
      "s.sale_id",
      "s.customer_id",
      "s.potion_id",
      "p.potion_name",
      "p.retail_price",
      "c.*"
    );
  const employee = await db("employees").where({ employee_id }).first();
  return {
    ...employee,
    sales,
  };
}

async function sellPotions(sale) {
  await db("sales").insert(sale);
  const { in_stock } = await db("potions")
    .where("potion_id", sale.potion_id)
    .select("in_stock")
    .first();
  const newQty = parseInt(in_stock) - 1;
  await db("potions")
    .where("potion_id", sale.potion_id)
    .update("in_stock", newQty);
  return findSaleById(sale.sale_id);
}

async function refundPotion(sale_id) {
  const sale = await db("sales").where({ sale_id }).first();
  const { in_stock } = await db("potions")
    .where("potion_id", sale.potion_id)
    .first();
  const newQty = parseInt(in_stock) + 1;
  await db("potions")
    .where("potion_id", sale.potion_id)
    .update("in_stock", newQty);
  await db("sales").where({ sale_id }).del();
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
