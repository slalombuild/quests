const db = require("../../data/dbConfig");

function findAllPotionIngredients() {
  return db("potion_ingredients as pi")
    .leftJoin("potions as p", "p.potion_id", "pi.potion_id")
    .leftJoin("ingredients as i", "i.ingredient_id", "pi.ingredient_id")
    .select("pi.*", "p.potion_name", "i.ingredient_name");
}

function findPIById(potion_ingredient_id) {
  return db("potion_ingredients").where({ potion_ingredient_id }).first();
}

function findBy(param) {
  return db("potion_ingredients").where(param).first();
}

async function addIngredientToPotion(potion_ingredient) {
  await db("potion_ingredients").insert(potion_ingredient);
  return findPIById(potion_ingredient.potion_ingredient_id);
}

async function updateIngredientInPotion(
  potion_ingredient_id,
  potion_ingredient
) {
  await db("potion_ingredients")
    .where({ potion_ingredient_id })
    .update(potion_ingredient);
  return db("potion_ingredients").where({ potion_ingredient_id }).first();
}

async function deleteIngredientFromPotion(potion_ingredient_id) {
  await db("potion_ingredients").where({ potion_ingredient_id }).del();
}

module.exports = {
  findAllPotionIngredients,
  findPIById,
  findBy,
  addIngredientToPotion,
  updateIngredientInPotion,
  deleteIngredientFromPotion,
};
