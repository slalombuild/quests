const db = require("../../data/dbConfig");

function findEmployeeById(employee_id) {
  return db("employees").where({ employee_id }).first();
}

function findAllEmployees() {
  return db("employees");
}

function findBy(param) {
  return db("employees").where(param).first();
}

async function addEmployee(employee) {
  const [employee_id] = await db("employees").insert(employee, "employee_id");
  return db("employees").where({ employee_id }).first();
}

async function editEmployee(employee_id, employee) {
  await db("employees").where({ employee_id }).update(employee);
  return db("employees").where({ employee_id }).first();
}

async function deleteEmployee(employee_id) {
  await db("employees").where({ employee_id }).update("current", false);
}

module.exports = {
  findEmployeeById,
  findAllEmployees,
  findBy,
  addEmployee,
  editEmployee,
  deleteEmployee,
};
