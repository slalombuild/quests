# Perry's Potion Palace API

Slalom Quests is a series of meetup events that will help you level up skills that will help you break into tech. Our current series focuses on backend relational database design, SQL queries, and REST Node API development spread over three sessions.

In this event, you'll learn about RESTful APIs and writing Knex queries for NodeJS, working to create endpoints together in breakout rooms with Slalom engineers.

[Join our Discord to meet like-minded developers and attend future sessions](https://discord.gg/FcbvFQQRSp)

## Starting the project

**A Note about this repo**

This repo connects to your database on [neon.tech](https://neon.tech/). A limitation of using neon.tech is that you must manually add the id, because implementation bypasses using the `data/migrations` file that indicates the fields for each table. Were this using the file, when a new `POST` is made, the migration file indicates to automatically create a new id for the table row. Keep this in mind when using the POST endpoints. Seed files have been provided for you if you wish to connect using Postgres or SQLite3 in the future.

### neon.tech and Github

**Fork this repo** and clone it in your terminal. Before starting, install the packages with `npm install`.

Create a neon.tech account and any project name; we recommend PerrysPotionPalace for ease of reference. neon.tech allows you one (1) free project per account.

Once you see the project dashboard, access the `SQL Editor` tab on the left and inject this into the query builder, then press 'Run' to populate your tables.

```
CREATE TABLE suppliers (
  supplier_id int PRIMARY KEY,
  supplier_name varchar(255) NOT NULL
);
CREATE TABLE employees (
  employee_id int PRIMARY KEY,
  emp_first_name varchar(255) NOT NULL,
  emp_last_name varchar(255) NOT NULL,
  emp_email varchar(255) NOT NULL,
  hire_date varchar(255) NOT NULL,
  address varchar(255) NOT NULL,
  current boolean NOT NULL
);
CREATE TABLE customers (
  customer_id int PRIMARY KEY,
  cust_first_name varchar(255) NOT NULL,
  cust_last_name varchar(255) NOT NULL,
  cust_email varchar(255) NOT NULL
);
CREATE TABLE potions (
  potion_id int PRIMARY KEY,
  potion_name varchar(255) NOT NULL,
  in_stock int NOT NULL,
  retail_price float NOT NULL
);
CREATE TABLE ingredients (
  ingredient_id int PRIMARY KEY,
  ingredient_name varchar(255) NOT NULL,
  in_stock int NOT NULL,
  cost float NOT NULL,
  reorder_qty int NOT NULL,
  supplier_id int NOT NULL
);
CREATE TABLE potion_ingredients (
  potion_ingredient_id int PRIMARY KEY,
  qty_used int NOT NULL,
  ingredient_id int NOT NULL,
  potion_id int NOT NULL
);
CREATE TABLE sales (
  sale_id int PRIMARY KEY,
  potion_id int NOT NULL,
  employee_id int NOT NULL,
  customer_id int NOT NULL
);
INSERT INTO suppliers (supplier_id, supplier_name) VALUES (1, 'ABC Company');
INSERT INTO suppliers (supplier_id, supplier_name) VALUES (2, 'XYZ Company');
INSERT INTO suppliers (supplier_id, supplier_name) VALUES (3, 'TLC Company');
INSERT INTO employees (employee_id, emp_first_name, emp_last_name, emp_email, hire_date, address, current) VALUES (1, 'Jessica', 'Jones', 'jjones@jessicajones.com','November 20, 2015', '485 W 46th Street, New York City, NY', true);
INSERT INTO employees (employee_id, emp_first_name, emp_last_name, emp_email, hire_date, address, current) VALUES (2,'Wanda', 'Maximoff', 'scarlet_witch@avengers.com', 'April 4, 2014', '2800 Sherwood Drive, Westview, NJ', true);
INSERT INTO employees (employee_id, emp_first_name, emp_last_name, emp_email, hire_date, address, current) VALUES (3,'Peter', 'Quill', 'starlord@guardiansofthegalaxy.com', 'August 1, 2014', 'The Benetar', true);
INSERT INTO employees (employee_id, emp_first_name, emp_last_name, emp_email, hire_date, address, current) VALUES (4,'Peter', 'Parker', 'spiderman@earth616.com', 'May 16, 2016', '20 Ingram Street, Forest Hills, Queens, New York City, NY', true);
INSERT INTO customers (customer_id, cust_first_name, cust_last_name, cust_email) VALUES(1, 'walk-in','walk-in','walkin@null.com');
INSERT INTO customers (customer_id, cust_first_name, cust_last_name, cust_email) VALUES(2, 'Steve','Harper','steve@harper.com');
INSERT INTO customers (customer_id, cust_first_name, cust_last_name, cust_email) VALUES(3, 'Tina','Long','tina@long.com');
INSERT INTO customers (customer_id, cust_first_name, cust_last_name, cust_email) VALUES(4, 'Abbey','Johnson','abbey@johnson.com');
INSERT INTO customers (customer_id, cust_first_name, cust_last_name, cust_email) VALUES(5, 'Tom','Smith','tom@smith.com');
INSERT INTO customers (customer_id, cust_first_name, cust_last_name, cust_email) VALUES(6, 'Mary','Allen','mary@allen.com');
INSERT INTO customers (customer_id, cust_first_name, cust_last_name, cust_email) VALUES(7,'Ethan', 'Harris','ethan@harris.com');
INSERT INTO potions (potion_id, potion_name, in_stock, retail_price) VALUES(1,'Polyjuice Potion',10,11.25);
INSERT INTO potions (potion_id, potion_name, in_stock, retail_price) VALUES(2,'Truth Serum',15,10.25);
INSERT INTO potions (potion_id, potion_name, in_stock, retail_price) VALUES(3,'Love Potion',8,9.99);
INSERT INTO ingredients (ingredient_id, ingredient_name, in_stock, cost, reorder_qty, supplier_id) VALUES( 1, 'Gillyweed', 6000, 3.75, 1000, 2);
INSERT INTO ingredients (ingredient_id, ingredient_name, in_stock, cost, reorder_qty, supplier_id) VALUES( 2, 'Bat Wing', 800, 2.5, 800, 1);
INSERT INTO ingredients (ingredient_id, ingredient_name, in_stock, cost, reorder_qty, supplier_id) VALUES( 3, 'Unicorn Hair', 15000, 3.25, 2000, 2);
INSERT INTO ingredients (ingredient_id, ingredient_name, in_stock, cost, reorder_qty, supplier_id) VALUES( 4, 'Lacewing Fly', 2000, 1.8, 800, 1);
INSERT INTO ingredients (ingredient_id, ingredient_name, in_stock, cost, reorder_qty, supplier_id) VALUES( 5, 'Mandrake Root', 650, 2.25, 500, 1);
INSERT INTO ingredients (ingredient_id, ingredient_name, in_stock, cost, reorder_qty, supplier_id) VALUES( 6, 'Jar', 50, 0.75, 25, 3);
INSERT INTO potion_ingredients (potion_ingredient_id, qty_used, potion_id, ingredient_id) VALUES(1, 2, 1, 1);
INSERT INTO potion_ingredients (potion_ingredient_id, qty_used, potion_id, ingredient_id) VALUES(2, 1, 1, 3);
INSERT INTO potion_ingredients (potion_ingredient_id, qty_used, potion_id, ingredient_id) VALUES(3, 4, 1, 5);
INSERT INTO potion_ingredients (potion_ingredient_id, qty_used, potion_id, ingredient_id) VALUES(4, 1, 1, 6);
INSERT INTO potion_ingredients (potion_ingredient_id, qty_used, potion_id, ingredient_id) VALUES(5, 3, 2, 1);
INSERT INTO potion_ingredients (potion_ingredient_id, qty_used, potion_id, ingredient_id) VALUES(6, 1, 2, 2);
INSERT INTO potion_ingredients (potion_ingredient_id, qty_used, potion_id, ingredient_id) VALUES(7, 2, 2, 3);
INSERT INTO potion_ingredients (potion_ingredient_id, qty_used, potion_id, ingredient_id) VALUES(8, 1, 2, 6);
INSERT INTO sales (sale_id, potion_id, employee_id, customer_id) VALUES(1, 1, 1, 1);
INSERT INTO sales (sale_id, potion_id, employee_id, customer_id) VALUES(2, 2, 4, 1);
INSERT INTO sales (sale_id, potion_id, employee_id, customer_id) VALUES(3, 1, 2, 4);
INSERT INTO sales (sale_id, potion_id, employee_id, customer_id) VALUES(4, 3, 3, 3);
INSERT INTO sales (sale_id, potion_id, employee_id, customer_id) VALUES(5, 3, 3, 2);
INSERT INTO sales (sale_id, potion_id, employee_id, customer_id) VALUES(6, 3, 1, 5);
INSERT INTO sales (sale_id, potion_id, employee_id, customer_id) VALUES(7, 2, 1, 5);
INSERT INTO sales (sale_id, potion_id, employee_id, customer_id) VALUES(8, 1, 2, 6);
INSERT INTO sales (sale_id, potion_id, employee_id, customer_id) VALUES(9, 1, 4, 7);
```

In the `.env` file, change the `PGUSER`, `PGPASSWORD`, `PGHOST`, and `PGDATABASE` fields to match the information you find in your neon.tech database's `Dashboard` tab in the card labeled "Connection Details". The .env file has an example layout for you to use.

In the terminal, run `npm run start` to test endpoints in Postman.

### Postman

In Postman, click the `import` button in the top left and open the file `api/perryspotionpalace.postman_collection.json`. All endpoints, pre-built and your task, have been pre-created here.

In the top right, click the eye icon and add a new variable `url` with the initial and current values set to `http://localhost:8050/api`. This will allow you to use the Postman collection imported above without updating each query; if you change the `PORT` in the `.env` file, you will need to update this variable with the number you select.

### Incomplete endpoints

You'll find in the initial repo there are several `[table]-model.js` files with `// SOLVE HERE` in the function. If you run these in Postman without completing the task, you will get an error message. If you have completed the task but still run into an error message, read the message and stack to help you debug.

## Resources

[Endpoints Documentation](api/Endpoints.md)

This document contains all of the endpoints and their expected outputs. Use this document to confirm your query matches the expected response.

[Knex documentation](https://knexjs.org/guide/) -> [Query builder](https://knexjs.org/guide/query-builder.html)
