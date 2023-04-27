const Suppliers = require("./suppliers-model");

const validateExistingSupplier = (req, res, next) => {
  const { supplier_id } = req.params;
  Suppliers.findSupplierById(supplier_id)
    .then((s) => {
      if (!s) {
        res.status(404).json({
          message: "Supplier not found",
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

const validateNewSupplier = (req, res, next) => {
  const { supplier_name } = req.body;
  Suppliers.findBy({ supplier_name })
    .then((s) => {
      if (s) {
        // 409 - Conflict
        res.status(409).json({
          message: "Supplier already exists",
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

const validateNoSupplies = (req, res, next) => {
  const { supplier_id } = req.params;
  Suppliers.findAllIngredientsBySupplier(supplier_id)
    .then((s) => {
      if (s.ingredients[0].ingredient_id !== null) {
        res.status(409).json({
          message: "This supplier is currently selling items",
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
  validateExistingSupplier,
  validateNewSupplier,
  validateNoSupplies,
};
