const router = require("express").Router();
const {
  validateExistingPotionIngredient,
  validateNewPotionIngredient,
} = require("./potion_ingredients-middleware");
const { validateExistingPotion } = require("../potions/potions-middleware");
const PotionIngredients = require("./potion_ingredients-model");

router.get("/", (req, res, next) => {
  PotionIngredients.findAllPotionIngredients()
    .then((p) => {
      res.json(p);
    })
    .catch(next);
});

router.post("/", validateNewPotionIngredient, (req, res, next) => {
  const potion_ingredient = req.body;
  PotionIngredients.addIngredientToPotion(potion_ingredient).then((p) => {
    res.status(201).json(p).catch(next);
  });
});

router.put(
  "/:potion_ingredient_id",
  validateExistingPotion,
  validateExistingPotionIngredient,
  (req, res, next) => {
    const { potion_ingredient_id } = req.params;
    const potion_ingredient = req.body;
    PotionIngredients.updateIngredientInPotion(
      potion_ingredient_id,
      potion_ingredient
    )
      .then((p) => {
        res.status(201).json(p);
      })
      .catch(next);
  }
);

router.delete(
  "/:potion_ingredient_id",
  validateExistingPotionIngredient,
  (req, res, next) => {
    const { potion_ingredient_id } = req.params;
    PotionIngredients.deleteIngredientFromPotion(potion_ingredient_id)
      .then(() => {
        res.json({ message: "Ingredient successfully deleted from recipe" });
      })
      .catch(next);
  }
);

module.exports = router;
