const db = require("../../data/dbConfig");

function findAllPotions() {
  return db("potions");
}

function findPotionById(potion_id) {
  return db("potions").where({ potion_id }).first();
}

function findBy(param) {
  return db("potions").where(param).first();
}

async function addPotion(potion_info) {
  await db("potions").insert(potion_info);
  return findPotionById(potion_info.potion_id);
}

async function updatePotion(potion_id, potion_info) {
  await db("potions").where({ potion_id }).update(potion_info);
  return db("potions").where({ potion_id }).first();
}

async function deletePotion(potion_id) {
  const ingredientsFound = await db("potion_ingredients").where({
    potion_id,
  });
  if (ingredientsFound.length > 0) {
    await db("potion_ingredients").where({ potion_id }).del();
  }
  await db("potions").where({ potion_id }).del();
}

module.exports = {
  findAllPotions,
  findPotionById,
  findBy,
  addPotion,
  updatePotion,
  deletePotion,
};
