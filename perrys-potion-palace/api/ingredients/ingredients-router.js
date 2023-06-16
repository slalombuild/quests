const router = require("express").Router();
const {
  validateExistingIngredient,
  validateNewIngredient,
  validateUniqueIngredientId,
} = require("./ingredients-middleware");
const {
  validateIngredientInUse,
} = require("../potion_ingredients/potion_ingredients-middleware");
const Ingredients = require("./ingredients-model");

router.get("/", (req, res, next) => {
  Ingredients.findAllIngredients()
    .then((i) => {
      res.json(i);
    })
    .catch(next);
});

router.get("/:ingredient_id", validateExistingIngredient, (req, res, next) => {
  const { ingredient_id } = req.params;
  Ingredients.findIngredientById(ingredient_id)
    .then((i) => {
      res.json(i);
    })
    .catch(next);
});

router.get(
  "/recipes/:ingredient_id",
  validateExistingIngredient,
  (req, res, next) => {
    const { ingredient_id } = req.params;
    Ingredients.findIngredientInPotions(ingredient_id)
      .then((i) => {
        res.json(i);
      })
      .catch(next);
  }
);

router.post(
  "/",
  validateUniqueIngredientId,
  validateNewIngredient,
  (req, res, next) => {
    const newIngredient = req.body;
    Ingredients.addIngredient(newIngredient)
      .then((i) => {
        res.json(i);
      })
      .catch(next);
  }
);

router.put("/:ingredient_id", validateExistingIngredient, (req, res, next) => {
  const { ingredient_id } = req.params;
  const ingredient = req.body;
  Ingredients.updateIngredient(ingredient_id, ingredient)
    .then((i) => {
      res.json(i);
    })
    .catch(next);
});

router.put(
  "/order/:ingredient_id",
  validateExistingIngredient,
  (req, res, next) => {
    const { ingredient_id } = req.params;
    Ingredients.orderIngredient(ingredient_id)
      .then((i) => {
        res.json(i);
      })
      .catch(next);
  }
);

router.delete(
  "/:ingredient_id",
  validateExistingIngredient,
  validateIngredientInUse,
  (req, res, next) => {
    const { ingredient_id } = req.params;
    Ingredients.deleteIngredient(ingredient_id)
      .then(() => {
        res.json({
          message: "Ingredient removed from database",
        });
      })
      .catch(next);
  }
);

module.exports = router;
