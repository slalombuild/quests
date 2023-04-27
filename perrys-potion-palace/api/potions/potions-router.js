const router = require("express").Router();
const {
  validateExistingPotion,
  validateNewPotion,
} = require("./potions-middleware");
const { validateNoSales } = require("../sales/sales-middleware");
const Potions = require("./potions-model");

router.get("/", (req, res, next) => {
  Potions.findAllPotions()
    .then((p) => {
      res.json(p);
    })
    .catch(next);
});

router.get("/:potion_id", validateExistingPotion, (req, res, next) => {
  const { potion_id } = req.params;
  Potions.findPotionById(potion_id)
    .then((p) => {
      res.json(p);
    })
    .catch(next);
});

router.post("/", validateNewPotion, (req, res, next) => {
  const potion_info = req.body;
  Potions.addPotion(potion_info)
    .then((p) => {
      res.status(201).json(p);
    })
    .catch(next);
});

router.put("/:potion_id", validateExistingPotion, (req, res, next) => {
  const { potion_id } = req.params;
  const potion_info = req.body;
  Potions.updatePotion(potion_id, potion_info)
    .then((p) => {
      res.status(201).json(p);
    })
    .catch(next);
});

router.delete(
  "/:potion_id",
  validateNoSales,
  validateExistingPotion,
  (req, res, next) => {
    const { potion_id } = req.params;
    Potions.deletePotion(potion_id)
      .then((p) => {
        res.json({
          message: "Potion deleted successfully",
        });
      })
      .catch(next);
  }
);

module.exports = router;
