const PotionIngredients = require("./potion_ingredients-model");

const validateExistingPotionIngredient = (req, res, next) => {
  const { potion_ingredient_id } = req.params;
  PotionIngredients.findPIById(potion_ingredient_id)
    .then((p) => {
      if (!p) {
        res.status(404).json({
          message: "Potion-ingredient relationship not found",
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

const validateNewPotionIngredient = (req, res, next) => {
  const { potion_id, ingredient_id } = req.body;
  PotionIngredients.findBy({ potion_id, ingredient_id })
    .then((p) => {
      if (p) {
        // 409 - Conflict
        res.status(409).json({
          message: "Potion-ingredient relationship already exists",
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

const validateIngredientInUse = (req, res, next) => {
  const { ingredient_id } = req.params;
  PotionIngredients.findBy({ ingredient_id })
    .then((i) => {
      if (i) {
        res.status(404).json({
          message: "This ingredient is still in use",
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

const validateUniquePotionIngredientId = (req, res, next) => {
  const { potion_ingredient_id } = req.body;
  PotionIngredients.findPIById(potion_ingredient_id)
    .then((p) => {
      if (p || potion_ingredient_id === null) {
        res.status(404).json({
          message:
            "This potion_ingredient_id is already in use. Please try another.",
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
  validateExistingPotionIngredient,
  validateNewPotionIngredient,
  validateIngredientInUse,
  validateUniquePotionIngredientId,
};
