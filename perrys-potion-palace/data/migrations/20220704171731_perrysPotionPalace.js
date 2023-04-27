/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("suppliers", (table) => {
      table.increments("supplier_id");
      table.string("supplier_name").notNullable().unique();
    })
    .createTable("employees", (table) => {
      table.increments("employee_id");
      table.string("emp_first_name").notNullable();
      table.string("emp_last_name").notNullable();
      table.string("emp_email").notNullable().unique();
      table.date("hire_date").notNullable();
      table.string("address");
      table.boolean("current").notNullable().defaultTo(true);
    })
    .createTable("customers", (table) => {
      table.increments("customer_id");
      table.string("cust_first_name").notNullable();
      table.string("cust_last_name").notNullable();
      table.string("cust_email").notNullable().unique();
    })
    .createTable("potions", (table) => {
      table.increments("potion_id");
      table.string("potion_name").unique().notNullable();
      table.integer("in_stock").notNullable().defaultTo(0);
      table.float("retail_price").notNullable();
    })
    .createTable("ingredients", (table) => {
      table.increments("ingredient_id");
      table.string("ingredient_name").unique().notNullable();
      table.integer("in_stock").notNullable().defaultTo(0);
      table.float("cost").notNullable().defaultTo(0);
      table.integer("reorder_qty").notNullable().defaultTo(100);
      table
        .integer("supplier_id")
        .unsigned()
        .notNullable()
        .references("supplier_id")
        .inTable("suppliers")
        .onDelete("CASCADE");
    })
    .createTable("potion_ingredients", (table) => {
      table.increments("potion_ingredient_id");
      table.integer("qty_used").notNullable().defaultTo(1);
      table
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredient_id")
        .inTable("ingredients")
        .onDelete("CASCADE");
      table
        .integer("potion_id")
        .unsigned()
        .notNullable()
        .references("potion_id")
        .inTable("potions")
        .onDelete("CASCADE");
    })
    .createTable("sales", (table) => {
      table.increments("sale_id");
      table.timestamp("sold_at").defaultTo(knex.fn.now());
      table
        .integer("potion_id")
        .unsigned()
        .notNullable()
        .references("potion_id")
        .inTable("potions")
        .onDelete("CASCADE");
      table
        .integer("employee_id")
        .unsigned()
        .notNullable()
        .references("employee_id")
        .inTable("employees")
        .onDelete("CASCADE");
      table
        .integer("customer_id")
        .unsigned()
        .notNullable()
        .references("customer_id")
        .inTable("customers")
        .onDelete("CASCADE");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("sales")
    .dropTableIfExists("potion_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("potions")
    .dropTableIfExists("customers")
    .dropTableIfExists("employees")
    .dropTableIfExists("suppliers");
};
