const Sales = require("./sales-model");

const validateExistingSale = (req, res, next) => {
  const { sale_id } = req.params;
  Sales.findSaleById(sale_id)
    .then((s) => {
      if (!s) {
        res.status(404).json({
          message: "Sale does not exist",
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

const validateNoSales = (req, res, next) => {
  const { potion_id } = req.params;
  Sales.findBy({ potion_id })
    .then((s) => {
      if (s) {
        res.status(409).json({
          message: "Cannot remove potion if a sale has been made",
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

const validateUniqueSaleId = (req, res, next) => {
  const { sale_id } = req.body;
  Sales.findSaleById(sale_id)
    .then((s) => {
      if (s || sale_id === null) {
        res.status(404).json({
          message: "This sale_id is already in use. Please try another.",
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
  validateExistingSale,
  validateNoSales,
  validateUniqueSaleId,
};
