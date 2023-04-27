const router = require("express").Router();
const {
  validateExistingEmployee,
  validateNewEmployee,
} = require("./employees-middleware");
const Employees = require("./employees-model");

router.get("/", (req, res, next) => {
  Employees.findAllEmployees()
    .then((e) => {
      res.json(e);
    })
    .catch(next);
});

router.get("/:employee_id", validateExistingEmployee, (req, res, next) => {
  const { employee_id } = req.params;
  Employees.findEmployeeById(employee_id)
    .then((e) => {
      res.json(e);
    })
    .catch(next);
});

router.post("/", validateNewEmployee, (req, res, next) => {
  const employeeInfo = req.body;
  Employees.addEmployee(employeeInfo)
    .then((e) => {
      res.status(201).json(e);
    })
    .catch(next);
});

router.put("/:employee_id", validateExistingEmployee, (req, res, next) => {
  const { employee_id } = req.params;
  const employeeInfo = req.body;
  Employees.editEmployee(employee_id, employeeInfo)
    .then((e) => {
      res.status(201).json(e);
    })
    .catch(next);
});

router.delete("/:employee_id", validateExistingEmployee, (req, res, next) => {
  const { employee_id } = req.params;
  Employees.deleteEmployee(employee_id)
    .then(() => {
      res.json({ message: "Employee retired from database" });
    })
    .catch(next);
});

module.exports = router;
