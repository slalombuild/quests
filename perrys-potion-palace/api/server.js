const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const SuppliersRouter = require("./suppliers/suppliers-router");
const PotionsRouter = require("./potions/potions-router");
const CustomersRouter = require("./customers/customers-router");
const EmployeesRouter = require("./employees/employees-router");
const IngredientsRouter = require("./ingredients/ingredients-router");
const PotionIngredients = require("./potion_ingredients/potion_ingredients-router");
const SalesRouter = require("./sales/sales-router");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/suppliers", SuppliersRouter);
server.use("/api/employees", EmployeesRouter);
server.use("/api/customers", CustomersRouter);
server.use("/api/potions", PotionsRouter);
server.use("/api/ingredients", IngredientsRouter);
server.use("/api/potion-ingredients", PotionIngredients);
server.use("/api/sales", SalesRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: {
      error:
        "This endpoint may not be built yet! Check the function being used in -router.js and check for // SOLVE HERE in the associated -model.js. If you have already built a solution, check the error message and stack below.",
      errorMessage: err.message,
    },
    stack: err.stack,
  });
});

module.exports = server;
