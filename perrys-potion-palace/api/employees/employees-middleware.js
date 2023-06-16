const Employees = require("./employees-model");

const validateExistingEmployee = (req, res, next) => {
  const { employee_id } = req.params;
  Employees.findEmployeeById(employee_id)
    .then((e) => {
      if (!e) {
        res.status(404).json({
          message: "Employee not found",
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

const validateActiveEmployee = (req, res, next) => {
  const { employee_id } = req.body;
  Employees.findEmployeeById(employee_id)
    .then((e) => {
      if (!e) {
        res.status(404).json({
          message: "Employee not found",
        });
      } else if (e.current === false) {
        res.status(404).json({
          message: `${e.emp_first_name} ${e.emp_last_name} does not work here anymore.`,
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

const validateNewEmployee = (req, res, next) => {
  const { emp_first_name, emp_last_name, emp_email } = req.body;
  Employees.findBy({ emp_email })
    .then((e) => {
      if (e) {
        res.status(404).json({
          message: `${emp_first_name} ${emp_last_name} is already an employee`,
        });
      } else {
        next();
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

const validateUniqueEmployeeId = (req, res, next) => {
  const { employee_id } = req.body;
  Employees.findEmployeeById(employee_id)
    .then((e) => {
      if (e || employee_id === null) {
        res.status(404).json({
          message: "This employee_id is already in use, please try another.",
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
  validateActiveEmployee,
  validateExistingEmployee,
  validateNewEmployee,
  validateUniqueEmployeeId,
};
