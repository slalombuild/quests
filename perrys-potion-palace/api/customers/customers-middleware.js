const Customers = require("./customers-model");

const validateExistingCustomer = (req, res, next) => {
  const customerId = req.params.customer_id || req.body.customer_id;
  const customer_id = parseInt(customerId);
  Customers.findCustomerById(customer_id)
    .then((c) => {
      if (!c) {
        res.status(404).json({
          message: "Customer not found",
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

const validateNewCustomer = (req, res, next) => {
  const { cust_email } = req.body;
  Customers.findBy({ cust_email })
    .then((c) => {
      if (c) {
        res.status(404).json({
          message: "Customer email already exists",
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

const validateUniqueCustomerId = (req, res, next) => {
  const { customer_id } = req.body;
  Customers.findCustomerById(customer_id)
    .then((c) => {
      if (c || customer_id === null) {
        res.status(404).json({
          message: "This customer_id is already in use, please try another.",
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
  validateExistingCustomer,
  validateNewCustomer,
  validateUniqueCustomerId,
};
