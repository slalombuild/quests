const router = require("express").Router();
const {
  validateExistingCustomer,
} = require("../customers/customers-middleware");
const { validateExistingPotion } = require("../potions/potions-middleware");
const {
  validateExistingEmployee,
  validateActiveEmployee,
} = require("../employees/employees-middleware");
const {
  validateExistingSale,
  validateUniqueSaleId,
} = require("./sales-middleware");
const Sales = require("./sales-model");

router.get("/", (req, res, next) => {
  Sales.findAllSales()
    .then((s) => {
      res.json(s);
    })
    .catch(next);
});

router.get("/:sale_id", (req, res, next) => {
  const { sale_id } = req.params;
  Sales.findSaleById(sale_id)
    .then((s) => {
      res.json(s);
    })
    .catch(next);
});

router.get(
  "/customer/:customer_id",
  validateExistingCustomer,
  (req, res, next) => {
    const { customer_id } = req.params;
    Sales.findAllSalesByCustomer(customer_id)
      .then((s) => {
        res.json(s);
      })
      .catch(next);
  }
);

router.get("/potion/:potion_id", validateExistingPotion, (req, res, next) => {
  const { potion_id } = req.params;
  Sales.findAllSalesByItem(potion_id)
    .then((s) => {
      res.json(s);
    })
    .catch(next);
});

router.get(
  "/employee/:employee_id",
  validateExistingEmployee,
  (req, res, next) => {
    const { employee_id } = req.params;
    Sales.findAllSalesByEmployee(employee_id)
      .then((s) => {
        res.json(s);
      })
      .catch(next);
  }
);

router.post(
  "/",
  validateUniqueSaleId,
  validateExistingPotion,
  validateActiveEmployee,
  validateExistingCustomer,
  (req, res, next) => {
    const sale = req.body;
    Sales.sellPotions(sale)
      .then((s) => {
        res.status(201).json(s);
      })
      .catch(next);
  }
);

router.delete("/:sale_id", validateExistingSale, (req, res, next) => {
  const { sale_id } = req.params;
  Sales.refundPotion(sale_id)
    .then(() => {
      res.json({ message: "Refund completed" });
    })
    .catch(next);
});

module.exports = router;
