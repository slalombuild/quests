# Perry's Potion Palace API

Slalom Quests is a series of meetup events that will help you level up skills that will help you break into tech. Our current series focuses on backend relational database design, SQL queries, and REST Node API development spread over three sessions.

In this event, you'll learn about RESTful APIs and writing Knex queries for NodeJS, working to create endpoints together in breakout rooms with Slalom engineers.

[Join our Discord to meet like-minded developers and attend future sessions](https://discord.gg/FcbvFQQRSp)

## Starting the project

**A Note about this repo**

This repo connects to your database on bit.io. A limitation of bit.io is that you must manually add the id. Were this Postgres or SQLite3, creating a new table column would automatically provide the next number for the id. Keep this in mind when using the POST endpoints. Seed files have been provided for you if you wish to connect using Postgres or SQLite3 in the future.

### bit.io and Github

**Fork this repo** and clone it in your terminal. Before starting, install the packages with `npm install`.

Create a bit.io account and a new public database called `PerrysPotionPalace`. Inject this into the query builder and press 'enter' to populate your tables.

```
CREATE TABLE suppliers (supplier_id int, supplier_name varchar(255)); CREATE TABLE employees (employee_id int, emp_first_name varchar(255), emp_last_name varchar(255), emp_email varchar(255), hire_date varchar(255), address varchar(255), current boolean); CREATE TABLE customers (customer_id int, cust_first_name varchar(255), cust_last_name varchar(255), cust_email varchar(255)); CREATE TABLE potions (potion_id int, potion_name varchar(255), in_stock int, retail_price float); CREATE TABLE ingredients (ingredient_id int, ingredient_name varchar(255), in_stock int, cost float, reorder_qty int, supplier_id int); CREATE TABLE potion_ingredients (potion_ingredient_id int, qty_used int, ingredient_id int, potion_id int); CREATE TABLE sales (sale_id int, potion_id int, employee_id int, customer_id int); INSERT INTO suppliers (supplier_id, supplier_name) VALUES (1, 'ABC Company'); INSERT INTO suppliers (supplier_id, supplier_name) VALUES (2, 'XYZ Company'); INSERT INTO suppliers (supplier_id, supplier_name) VALUES (3, 'TLC Company'); INSERT INTO employees (employee_id, emp_first_name, emp_last_name, emp_email, hire_date, address, current) VALUES (1, 'Jessica', 'Jones', 'jjones@jessicajones.com','November 20, 2015', '485 W 46th Street, New York City, NY', true); INSERT INTO employees (employee_id, emp_first_name, emp_last_name, emp_email, hire_date, address, current) VALUES (2,'Wanda', 'Maximoff', 'scarlet_witch@avengers.com', 'April 4, 2014', '2800 Sherwood Drive, Westview, NJ', true); INSERT INTO employees (employee_id, emp_first_name, emp_last_name, emp_email, hire_date, address, current) VALUES (3,'Peter', 'Quill', 'starlord@guardiansofthegalaxy.com', 'August 1, 2014', 'The Benetar', true); INSERT INTO employees (employee_id, emp_first_name, emp_last_name, emp_email, hire_date, address, current) VALUES (4,'Peter', 'Parker', 'spiderman@earth616.com', 'May 16, 2016', '20 Ingram Street, Forest Hills, Queens, New York City, NY', true); INSERT INTO customers (customer_id, cust_first_name, cust_last_name, cust_email) VALUES(1, 'walk-in','walk-in','walkin@null.com'); INSERT INTO customers (customer_id, cust_first_name, cust_last_name, cust_email) VALUES(2, 'Steve','Harper','steve@harper.com'); INSERT INTO customers (customer_id, cust_first_name, cust_last_name, cust_email) VALUES(3, 'Tina','Long','tina@long.com'); INSERT INTO customers (customer_id, cust_first_name, cust_last_name, cust_email) VALUES(4, 'Abbey','Johnson','abbey@johnson.com'); INSERT INTO customers (customer_id, cust_first_name, cust_last_name, cust_email) VALUES(5, 'Tom','Smith','tom@smith.com'); INSERT INTO customers (customer_id, cust_first_name, cust_last_name, cust_email) VALUES(6, 'Mary','Allen','mary@allen.com'); INSERT INTO customers (customer_id, cust_first_name, cust_last_name, cust_email) VALUES(7,'Ethan', 'Harris','ethan@harris.com'); INSERT INTO potions (potion_id, potion_name, in_stock, retail_price) VALUES(1,'Polyjuice Potion',10,11.25); INSERT INTO potions (potion_id, potion_name, in_stock, retail_price) VALUES(2,'Truth Serum',15,10.25); INSERT INTO potions (potion_id, potion_name, in_stock, retail_price) VALUES(3,'Love Potion',8,9.99); INSERT INTO ingredients (ingredient_id, ingredient_name, in_stock, cost, reorder_qty, supplier_id) VALUES( 1, 'Gillyweed', 6000, 3.75, 1000, 2); INSERT INTO ingredients (ingredient_id, ingredient_name, in_stock, cost, reorder_qty, supplier_id) VALUES( 2, 'Bat Wing', 800, 2.5, 800, 1); INSERT INTO ingredients (ingredient_id, ingredient_name, in_stock, cost, reorder_qty, supplier_id) VALUES( 3, 'Unicorn Hair', 15000, 3.25, 2000, 2); INSERT INTO ingredients (ingredient_id, ingredient_name, in_stock, cost, reorder_qty, supplier_id) VALUES( 4, 'Lacewing Fly', 2000, 1.8, 800, 1); INSERT INTO ingredients (ingredient_id, ingredient_name, in_stock, cost, reorder_qty, supplier_id) VALUES( 5, 'Mandrake Root', 650, 2.25, 500, 1); INSERT INTO ingredients (ingredient_id, ingredient_name, in_stock, cost, reorder_qty, supplier_id) VALUES( 6, 'Jar', 50, 0.75, 25, 3); INSERT INTO potion_ingredients (potion_ingredient_id, qty_used, potion_id, ingredient_id) VALUES(1, 2, 1, 1); INSERT INTO potion_ingredients (potion_ingredient_id, qty_used, potion_id, ingredient_id) VALUES(2, 1, 1, 3); INSERT INTO potion_ingredients (potion_ingredient_id, qty_used, potion_id, ingredient_id) VALUES(3, 4, 1, 5); INSERT INTO potion_ingredients (potion_ingredient_id, qty_used, potion_id, ingredient_id) VALUES(4, 1, 1, 6); INSERT INTO potion_ingredients (potion_ingredient_id, qty_used, potion_id, ingredient_id) VALUES(5, 3, 2, 1); INSERT INTO potion_ingredients (potion_ingredient_id, qty_used, potion_id, ingredient_id) VALUES(6, 1, 2, 2); INSERT INTO potion_ingredients (potion_ingredient_id, qty_used, potion_id, ingredient_id) VALUES(7, 2, 2, 3); INSERT INTO potion_ingredients (potion_ingredient_id, qty_used, potion_id, ingredient_id) VALUES(8, 1, 2, 6); INSERT INTO sales (sale_id, potion_id, employee_id, customer_id) VALUES(1, 1, 1, 1); INSERT INTO sales (sale_id, potion_id, employee_id, customer_id) VALUES(2, 2, 4, 1); INSERT INTO sales (sale_id, potion_id, employee_id, customer_id) VALUES(3, 1, 2, 4); INSERT INTO sales (sale_id, potion_id, employee_id, customer_id) VALUES(4, 3, 3, 3); INSERT INTO sales (sale_id, potion_id, employee_id, customer_id) VALUES(5, 3, 3, 2); INSERT INTO sales (sale_id, potion_id, employee_id, customer_id) VALUES(6, 3, 1, 5); INSERT INTO sales (sale_id, potion_id, employee_id, customer_id) VALUES(7, 2, 1, 5); INSERT INTO sales (sale_id, potion_id, employee_id, customer_id) VALUES(8, 1, 2, 6); INSERT INTO sales (sale_id, potion_id, employee_id, customer_id) VALUES(9, 1, 4, 7);
```

In the `.env` file, change the `USERNAME_BIT_IO`, `PASSWORD_BIT_IO`, and `DATABASE` fields to match the information you find in your bit.io database's `Connect` tab on the right. If you created a database called `PerrysPotionPalace`, you do not need to change the `DATABASE` name.

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
