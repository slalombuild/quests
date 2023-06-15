const db = require("../../data/dbConfig");

function findAllSuppliers() {
  return db("suppliers");
}

function findSupplierById(supplier_id) {
  return db("suppliers").where({ supplier_id }).first();
}

async function findAllIngredientsBySupplier(supplier_id) {
  const ingredients = await db("suppliers as s")
    .leftJoin("ingredients as i", "s.supplier_id", "i.supplier_id")
    .where("s.supplier_id", supplier_id)
    .select(
      "i.ingredient_id",
      "i.ingredient_name",
      "i.in_stock",
      "i.cost",
      "i.reorder_qty"
    );
  const supplier = await db("suppliers").where({ supplier_id }).first();
  const ingredientsBySupplier = {
    ...supplier,
    ingredients,
  };
  return ingredientsBySupplier;
}

function findBy(param) {
  return db("suppliers").where(param).first();
}

async function addSupplier(supplier) {
  await db("suppliers").insert(supplier);
  return findSupplierById(supplier.supplier_id);
}

async function updateSupplierName(supplier_id, supplier_name) {
  await db("suppliers").where({ supplier_id }).update({ supplier_name });
  return db("suppliers").where({ supplier_id });
}

async function removeSupplier(supplier_id) {
  await db("suppliers").where({ supplier_id }).del();
}

module.exports = {
  findAllSuppliers,
  findSupplierById,
  findAllIngredientsBySupplier,
  findBy,
  addSupplier,
  updateSupplierName,
  removeSupplier,
};
