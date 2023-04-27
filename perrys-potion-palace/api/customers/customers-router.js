const router = require("express").Router();
const {
  validateExistingCustomer,
  validateNewCustomer,
} = require("./customers-middleware");
const Customers = require("./customers-model");

router.get("/", (req, res, next) => {
  Customers.findAllCustomers()
    .then((c) => {
      res.json(c);
    })
    .catch(next);
});

router.get("/:customer_id", validateExistingCustomer, (req, res, next) => {
  const { customer_id } = req.params;
  Customers.findCustomerById(customer_id)
    .then((c) => {
      res.json(c);
    })
    .catch(next);
});

router.post("/", validateNewCustomer, (req, res, next) => {
  const newCustomer = req.body;
  Customers.addCustomer(newCustomer)
    .then((c) => {
      res.status(201).json(c);
    })
    .catch(next);
});

router.put("/:customer_id", validateExistingCustomer, (req, res, next) => {
  const { customer_id } = req.params;
  const customerInfo = req.body;
  Customers.updateCustomer(customer_id, customerInfo)
    .then((c) => {
      res.status(201).json(c);
    })
    .catch(next);
});

router.delete("/:customer_id", validateExistingCustomer, (req, res, next) => {
  const { customer_id } = req.params;
  Customers.deleteCustomer(customer_id)
    .then(() => {
      res.json({ message: "Customer removed from database successfully" });
    })
    .catch(next);
});

module.exports = router;
