const router = require("express").Router();
const {
  validateExistingSupplier,
  validateNewSupplier,
  validateNoSupplies,
  validateUniqueSuppliersId,
} = require("./suppliers-middleware");
const Suppliers = require("./suppliers-model");

router.get("/", (req, res, next) => {
  Suppliers.findAllSuppliers()
    .then((s) => {
      res.json(s);
    })
    .catch(next);
});

router.get("/:supplier_id", validateExistingSupplier, (req, res, next) => {
  const { supplier_id } = req.params;
  Suppliers.findSupplierById(supplier_id)
    .then((s) => {
      res.json(s);
    })
    .catch(next);
});

router.get(
  "/ingredients/:supplier_id",
  validateExistingSupplier,
  (req, res, next) => {
    const { supplier_id } = req.params;
    Suppliers.findAllIngredientsBySupplier(supplier_id)
      .then((s) => {
        res.json(s);
      })
      .catch(next);
  }
);

router.post(
  "/",
  validateUniqueSuppliersId,
  validateNewSupplier,
  (req, res, next) => {
    const supplier = req.body;
    Suppliers.addSupplier(supplier)
      .then((s) => {
        res.json(s);
      })
      .catch(next);
  }
);

router.put(
  "/:supplier_id",
  validateExistingSupplier,
  validateNewSupplier,
  (req, res, next) => {
    const { supplier_id } = req.params;
    const { supplier_name } = req.body;
    Suppliers.updateSupplierName(supplier_id, supplier_name)
      .then((s) => {
        res.json(s);
      })
      .catch(next);
  }
);

router.delete(
  "/:supplier_id",
  validateExistingSupplier,
  validateNoSupplies,
  (req, res, next) => {
    const { supplier_id } = req.params;
    Suppliers.removeSupplier(supplier_id)
      .then(() => {
        res.json({ message: "Supplier deleted successfully" });
      })
      .catch(next);
  }
);

module.exports = router;
