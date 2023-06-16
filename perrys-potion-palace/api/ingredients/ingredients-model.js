const db = require("../../data/dbConfig");

function findAllIngredients() {
  return db("ingredients");
}

function findIngredientById(ingredient_id) {
  return db("ingredients").where({ ingredient_id }).first();
}

function findBy(param) {
  return db("ingredients").where(param).first();
}

async function findIngredientInPotions(ingredient_id) {
  const potions = await db("potions as p")
    .leftJoin("potion_ingredients as pi", "p.potion_id", "pi.potion_id")
    .where("pi.ingredient_id", ingredient_id)
    .select("p.*", "pi.potion_ingredient_id", "pi.qty_used");
  const ingredient = await db("ingredients").where({ ingredient_id }).first();
  ingredient.potions = potions;
  return ingredient;
}

async function addIngredient(ingredient) {
  await db("ingredients").insert(ingredient);
  return findIngredientById(ingredient.ingredient_id);
}

async function updateIngredient(ingredient_id, ingredient) {
  await db("ingredients").where({ ingredient_id }).update(ingredient);
  return db("ingredients").where({ ingredient_id }).first();
}

async function orderIngredient(ingredient_id) {
  const { in_stock, reorder_qty } = await db("ingredients")
    .where({
      ingredient_id,
    })
    .first();
  const new_qty = in_stock + reorder_qty;
  await db("ingredients")
    .where({ ingredient_id })
    .update({ in_stock: new_qty });
  return db("ingredients").where({ ingredient_id }).first();
}

async function deleteIngredient(ingredient_id) {
  await db("ingredients").where({ ingredient_id }).del();
}

module.exports = {
  findAllIngredients,
  findIngredientById,
  findBy,
  findIngredientInPotions,
  addIngredient,
  updateIngredient,
  orderIngredient,
  deleteIngredient,
};
