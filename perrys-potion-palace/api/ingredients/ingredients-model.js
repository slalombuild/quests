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
  // SOLVE HERE
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
  // SOLVE HERE
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
