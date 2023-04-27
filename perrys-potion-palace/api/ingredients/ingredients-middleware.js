const Ingredients = require("./ingredients-model");

const validateExistingIngredient = (req, res, next) => {
  const ingredientId = req.params.ingredient_id || req.body.ingredient_id;
  const ingredient_id = parseInt(ingredientId);
  Ingredients.findIngredientById(ingredient_id)
    .then((i) => {
      if (!i) {
        res.status(404).json({
          message: "Ingredient not found",
        });
      } else {
        next();
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
};

const validateNewIngredient = (req, res, next) => {
  const { ingredient_name } = req.body;
  Ingredients.findBy({ ingredient_name })
    .then((i) => {
      if (i) {
        // 409 - Conflict
        res.status(409).json({
          message: "Ingredient already exists in recipe",
        });
      } else {
        next();
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
};

module.exports = {
  validateExistingIngredient,
  validateNewIngredient,
};
