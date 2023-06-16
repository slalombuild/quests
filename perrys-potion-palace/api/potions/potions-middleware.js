const Potions = require("./potions-model");

const validateExistingPotion = (req, res, next) => {
  const potionId = req.params.potion_id || req.body.potion_id;
  const potion_id = parseInt(potionId);
  Potions.findPotionById(potion_id)
    .then((p) => {
      if (!p) {
        res.status(404).json({
          message: "Potion not found",
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

const validateNewPotion = (req, res, next) => {
  const { potion_name } = req.body;
  Potions.findBy({ potion_name })
    .then((p) => {
      if (p) {
        // 409 - Conflict
        res.status(409).json({
          message: "Potion already exists",
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

const validateUniquePotionId = (req, res, next) => {
  const { potion_id } = req.body;
  Potions.findPotionById(potion_id)
    .then((p) => {
      if (p || potion_id === null) {
        res.status(404).json({
          message: "This potion_id is already in use. Please try another.",
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
  validateExistingPotion,
  validateNewPotion,
  validateUniquePotionId,
};
