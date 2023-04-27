# Perry's Potion Palace API Endpoints

## Tables

- [Customers](#customers)
- [Employees](#employees)
- [Ingredients](#ingredients)
- [Potion Ingredients](#potion-ingredients)
- [Potions](#potions)
- [Sales](#sales)
- [Suppliers](#suppliers)

### Customers

#### Find a specific customer

Returns a single customer's information

```http
GET /api/customers/:customer_id
```

| Parameter     | Type     | Description |
| ------------- | -------- | ----------- |
| `customer_id` | `number` | Customer id |

```js
{
  customer_id: 2,
  cust_first_name: "Steve",
  cust_last_name: "Harper",
  cust_email: "steve@harper.com"
}
```

#### Find all sales for a customer

Returns an array of purchases a customer has made

```http
GET /api/customers/sales/:customer_id
```

| Parameter     | Type     | Description |
| ------------- | -------- | ----------- |
| `customer_id` | `number` | Customer id |

```js
{
  customer_id: 5,
  cust_first_name: "Tom",
  cust_last_name: "Smith",
  cust_email: "tom@smith.com",
  sales: [
    {
      potion_id: 3,
      employee_id: 1,
      potion_name: "Love Potion",
      retail_price: 9.99,
      emp_first_name: "Jessica",
      emp_last_name: "Jones"
    },
    {
      potion_id: 2,
      employee_id: 1,
      potion_name: "Truth Serum",
      retail_price: 10.25,
      emp_first_name: "Jessica",
      emp_last_name: "Jones"
    }
  ]
}
```

#### Add new customer

Creates new customer in database.

```http
POST /api/customers
```

| Parameter         | Type     | Description                     |
| ----------------- | -------- | ------------------------------- |
| `cust_first_name` | `string` | Customer first name             |
| `cust_last_name`  | `string` | Customer last name              |
| `cust_email`      | `string` | Customer email _must be unique_ |

```js
{
  customer_id: 8,
  cust_first_name: "Keith",
  cust_last_name: "Habersberger",
  cust_email: "keith@try.com"
}
```

#### Update customer

Update existing customer

```http
PUT /api/customers/:customer_id
```

| Parameter         | Type     | Description                     |
| ----------------- | -------- | ------------------------------- |
| `customer_id`     | `number` | Customer id                     |
| `cust_first_name` | `string` | Customer first name             |
| `cust_last_name`  | `string` | Customer last name              |
| `cust_email`      | `string` | Customer email _must be unique_ |

```js
{
  customer_id: 8,
  cust_first_name: "Keith",
  cust_last_name: "Habersberger",
  cust_email: "keith@secondtry.com"
}
```

#### Delete customer

Removes a customer from the database

```http
DELETE /api/customers/:customer_id
```

| Parameter     | Type     | Description |
| ------------- | -------- | ----------- |
| `customer_id` | `number` | Customer id |

```js
{
  message: "Customer removed from database successfully";
}
```

### Employees

#### Find all employees

Returns all employees

```http
GET /api/employees
```

```js
[
  {
    employee_id: 1,
    emp_first_name: "Jessica",
    emp_last_name: "Jones",
    emp_email: "jjones@jessicajones.com",
    hire_date: "2015-11-20T06:00:00.000Z",
    address: "485 W 46th Street, New York City, NY",
    current: true,
  },
  {
    employee_id: 2,
    emp_first_name: "Wanda",
    emp_last_name: "Maximoff",
    emp_email: "scarlet_witch@avengers.com",
    hire_date: "2014-04-04T05:00:00.000Z",
    address: "2800 Sherwood Drive, Westview, NJ",
    current: true,
  },
  {
    employee_id: 3,
    emp_first_name: "Peter",
    emp_last_name: "Quill",
    emp_email: "starlord@guardiansofthegalaxy.com",
    hire_date: "2014-08-01T05:00:00.000Z",
    address: "The Benetar",
    current: true,
  },
  {
    employee_id: 4,
    emp_first_name: "Peter",
    emp_last_name: "Parker",
    emp_email: "spiderman@earth616.com",
    hire_date: "2016-05-16T05:00:00.000Z",
    address: "20 Ingram Street, Forest Hills, Queens, New York City, NY",
    current: true,
  },
];
```

#### Find a specific employee

Find a specific employee by id

```http
GET /api/employees/:employee_id
```

| Parameter     | Type     | Description |
| ------------- | -------- | ----------- |
| `employee_id` | `number` | Employee id |

```js
{
  employee_id: 1,
  emp_first_name: "Jessica",
  emp_last_name: "Jones",
  emp_email: "jjones@jessicajones.com",
  hire_date: "2015-11-20T06:00:00.000Z",
  address: "485 W 46th Street, New York City, NY",
  current: true
}
```

#### Add new employee

Add new employee to database. First name and last name are not required to be unique but together they must be

```http
POST /api/employees
```

| Parameter        | Type      | Description                          |
| ---------------- | --------- | ------------------------------------ |
| `emp_first_name` | `string`  | Employee first name                  |
| `emp_last_name`  | `string`  | Employee last name                   |
| `emp_email`      | `string`  | Employee email                       |
| `hire_date`      | `date`    | Start date. Defaults to current date |
| `address`        | `string`  | Employee address                     |
| `current`        | `boolean` | Active employee?                     |

```js
{
  employee_id: 5,
  emp_first_name: "Thor",
  emp_last_name: "Odinson",
  emp_email: "thor@odinson.com",
  hire_date: "2011-05-02T05:00:00.000Z",
  address: "Coldingham Roat, St Abbs, Berwickshire, TD14 5PL",
  current: true
}
```

#### Update employee

Updates employee in database. First name and last name are not required to be unique but together they must be

```http
PUT /api/employees/:employee_id
```

| Parameter        | Type      | Description                          |
| ---------------- | --------- | ------------------------------------ |
| `employee_id`    | `number`  | Employee id                          |
| `emp_first_name` | `string`  | Employee first name                  |
| `emp_last_name`  | `string`  | Employee last name                   |
| `emp_email`      | `string`  | Employee email                       |
| `hire_date`      | `date`    | Start date. Defaults to current date |
| `address`        | `string`  | Employee address                     |
| `current`        | `boolean` | Active employee?                     |

```js
{
  employee_id: 5,
  emp_first_name: "Thor",
  emp_last_name: "Odinson",
  emp_email: "thor@odinson.com",
  hire_date: "2011-05-02T05:00:00.000Z",
  address: "Coldingham Road, St Abbs, Berwickshire, TD14 5PL",
  current: true
}
```

#### Delete employee

Switches an employee's employment status `current` to false

```http
DELETE /api/employees/:employee_id
```

| Parameter     | Type     | Description |
| ------------- | -------- | ----------- |
| `employee_id` | `number` | Employee id |

```js
{
  message: "Employee retired from database";
}
```

### Ingredients

#### Get All Ingredients

Returns all ingredients in database

```http
GET /api/ingredients
```

```js
[
  {
    ingredient_id: 1,
    ingredient_name: "Gillyweed",
    in_stock: 6000,
    cost: 3.75,
    reorder_qty: 1000,
    supplier_id: 2,
  },
  {
    ingredient_id: 2,
    ingredient_name: "Bat Wing",
    in_stock: 800,
    cost: 2.5,
    reorder_qty: 800,
    supplier_id: 1,
  },
  {
    ingredient_id: 3,
    ingredient_name: "Unicorn Hair",
    in_stock: 15000,
    cost: 3.25,
    reorder_qty: 2000,
    supplier_id: 2,
  },
  {
    ingredient_id: 4,
    ingredient_name: "Lacewing Fly",
    in_stock: 2000,
    cost: 1.8,
    reorder_qty: 800,
    supplier_id: 1,
  },
  {
    ingredient_id: 5,
    ingredient_name: "Mandrake Root",
    in_stock: 650,
    cost: 2.25,
    reorder_qty: 500,
    supplier_id: 1,
  },
  {
    ingredient_id: 6,
    ingredient_name: "Jar",
    in_stock: 50,
    cost: 0.75,
    reorder_qty: 25,
    supplier_id: 3,
  },
];
```

#### Get Specific Ingredient

Returns a specific ingredient from database

```http
GET /api/ingredients/:ingredient_id
```

| Parameter       | Type     | Description   |
| --------------- | -------- | ------------- |
| `ingredient_id` | `number` | Ingredient id |

```js
{
  ingredient_id: 1,
  ingredient_name: "Gillyweed",
  in_stock: 6000,
  cost: 3.75,
  reorder_qty: 1000,
  supplier_id: 2
}
```

#### Get all potions an ingredient is used in

Returns an ingredient and any recipes it is used in

```http
GET /api/ingredients/recipes/:ingredient_id
```

| Parameter       | Type     | Description   |
| --------------- | -------- | ------------- |
| `ingredient_id` | `number` | Ingredient id |

```js
{
  ingredient_id: 1,
  ingredient_name: "Gillyweed",
  in_stock: 6000,
  cost: 3.75,
  reorder_qty: 1000,
  supplier_id: 2,
  potions: [
    {
      potion_id: 2,
      potion_name: "Truth Serum",
      in_stock: 15,
      retail_price: 10.25,
      potion_ingredient_id: 5,
      qty_used: 3
    },
    {
      potion_id: 1,
      potion_name: "Polyjuice Potion",
      in_stock: 9,
      retail_price: 11.25,
      potion_ingredient_id: 1,
      qty_used: 2
    }
  ]
}
```

#### Add New Ingredient

Adds new ingredient to database.

```http
POST /api/ingredients
```

| Parameter         | Type     | Description                          |
| ----------------- | -------- | ------------------------------------ |
| `ingredient_name` | `string` | Raw ingredient name _must be unique_ |
| `in_stock`        | `string` | Initial stock                        |
| `cost`            | `number` | Cost of ingredient from supplier     |
| `reorder_qty`     | `number` | Number to order per request          |
| `supplier_id`     | `number` | Foreign key to suppliers table       |

```js
{
  ingredient_id: 7,
  ingredient_name: "Wormwood",
  in_stock: 200,
  cost: 2.58,
  reorder_qty: 200,
  supplier_id: 3
}
```

#### Update Ingredient

Updates ingredient information

```http
PUT /api/ingredients/:ingredient_id
```

| Parameter         | Type     | Description                          |
| ----------------- | -------- | ------------------------------------ |
| `ingredient_id`   | `number` | Ingredient id                        |
| `ingredient_name` | `string` | Raw ingredient name _must be unique_ |
| `in_stock`        | `string` | Initial stock                        |
| `cost`            | `number` | Cost of ingredient from supplier     |
| `reorder_qty`     | `number` | Number to order per request          |
| `supplier_id`     | `number` | Foreign key to suppliers table       |

```js
{
  ingredient_id: 7,
  ingredient_name: "Wormwood",
  in_stock: 200,
  cost: 3.22,
  reorder_qty: 200,
  supplier_id: 3
}
```

#### Reorder Ingredient

Reorders the qty of ingredients based on the `reorder_qty` parameter

```http
PUT /api/ingredients/order/:ingredient_id
```

| Parameter       | Type     | Description   |
| --------------- | -------- | ------------- |
| `ingredient_id` | `number` | Ingredient id |

```js
{
  ingredient_id: 7,
  ingredient_name: "Wormwood",
  in_stock: 400,
  cost: 3.22,
  reorder_qty: 200,
  supplier_id: 3
}
```

#### Delete Ingredient

Deletes ingredient from database. Cannot be deleted if used in any existing recipes

```http
DELETE /api/ingredients/:ingredient_id
```

| Parameter       | Type     | Description   |
| --------------- | -------- | ------------- |
| `ingredient_id` | `number` | Ingredient id |

```js
{
  message: "Ingredient removed from database";
}
```

### Potion Ingredients

#### Get all potion-ingredient relationships

Returns all potion and ingredient table relationships

```http
GET /api/potion-ingredients
```

```js
[
  {
    potion_ingredient_id: 1,
    qty_used: 2,
    ingredient_id: 1,
    potion_id: 1,
    potion_name: "Polyjuice Potion",
    ingredient_name: "Gillyweed",
  },
  {
    potion_ingredient_id: 2,
    qty_used: 1,
    ingredient_id: 3,
    potion_id: 1,
    potion_name: "Polyjuice Potion",
    ingredient_name: "Unicorn Hair",
  },
  {
    potion_ingredient_id: 3,
    qty_used: 4,
    ingredient_id: 5,
    potion_id: 1,
    potion_name: "Polyjuice Potion",
    ingredient_name: "Mandrake Root",
  },
  {
    potion_ingredient_id: 4,
    qty_used: 1,
    ingredient_id: 6,
    potion_id: 1,
    potion_name: "Polyjuice Potion",
    ingredient_name: "Jar",
  },
  {
    potion_ingredient_id: 5,
    qty_used: 3,
    ingredient_id: 1,
    potion_id: 2,
    potion_name: "Truth Serum",
    ingredient_name: "Gillyweed",
  },
  {
    potion_ingredient_id: 6,
    qty_used: 1,
    ingredient_id: 2,
    potion_id: 2,
    potion_name: "Truth Serum",
    ingredient_name: "Bat Wing",
  },
  {
    potion_ingredient_id: 7,
    qty_used: 2,
    ingredient_id: 3,
    potion_id: 2,
    potion_name: "Truth Serum",
    ingredient_name: "Unicorn Hair",
  },
  {
    potion_ingredient_id: 8,
    qty_used: 1,
    ingredient_id: 6,
    potion_id: 2,
    potion_name: "Truth Serum",
    ingredient_name: "Jar",
  },
];
```

#### Add an ingredient to a potion

Adds an ingredient for use in a potion

```http
POST /api/potion-ingredients
```

| Parameter       | Type     | Description                                     |
| --------------- | -------- | ----------------------------------------------- |
| `ingredient_id` | `number` | Ingredient id                                   |
| `potion_id`     | `number` | Potion id                                       |
| `qty_used`      | `number` | Number of an ingredient used to create a potion |

```js
{
  potion_ingredient_id: 9,
  qty_used: 4,
  ingredient_id: 2,
  potion_id: 1
}
```

#### Update an ingredient in a potion

Updates a potion-ingredient relationship

```http
PUT /api/potion-ingredients/:potion_ingredient_id
```

| Parameter              | Type     | Description                                     |
| ---------------------- | -------- | ----------------------------------------------- |
| `potion_ingredient_id` | `number` | Potion ingredient id                            |
| `ingredient_id`        | `number` | Ingredient id                                   |
| `potion_id`            | `number` | Potion id                                       |
| `qty_used`             | `number` | Number of an ingredient used to create a potion |

```js
{
  potion_ingredient_id: 9,
  qty_used: 2,
  ingredient_id: 4,
  potion_id: 1
}
```

#### Delete ingredient in potion

Removes an ingredient from a potion recipe

```http
DELETE /api/potion-ingredients/:potion_ingredient_id
```

| Parameter              | Type     | Description          |
| ---------------------- | -------- | -------------------- |
| `potion_ingredient_id` | `number` | Potion ingredient id |

```js
{
  message: "Ingredient successfully deleted from recipe";
}
```

### Potions

#### Get All Potions

Returns all potions

```http
GET /api/potions/
```

```js
[
  {
    potion_id: 1,
    potion_name: "Polyjuice Potion",
    in_stock: 10,
    retail_price: 11.25,
  },
  {
    potion_id: 2,
    potion_name: "Truth Serum",
    in_stock: 15,
    retail_price: 10.25,
  },
  {
    potion_id: 3,
    potion_name: "Love Potion",
    in_stock: 8,
    retail_price: 9.99,
  },
];
```

#### Get A Potion By Id

Returns a single potion

```http
GET /api/potions/:potion_id
```

| Parameter   | Type     | Description |
| ----------- | -------- | ----------- |
| `potion_id` | `number` | Potion id   |

```js
{
  potion_id: 1,
  potion_name: "Polyjuice Potion",
  in_stock: 10,
  retail_price: 11.25,
}
```

#### Add a new potion

Adds new potion to database

```http
POST /api/potions
```

| Parameter      | Type     | Description                  |
| -------------- | -------- | ---------------------------- |
| `potion_name`  | `number` | Potion name _must be unique_ |
| `in_stock`     | `number` | Quantity available for sale  |
| `retail_price` | `number` | Retail price of potion       |

```js
{
  potion_id: 4,
  potion_name: "Felix Felicis",
  in_stock: 1,
  retail_price: 19.99,
}
```

#### Update potion

Updates potion in database

```http
PUT /api/potions/:potion_id
```

| Parameter      | Type     | Description                  |
| -------------- | -------- | ---------------------------- |
| `potion_id`    | `number` | Potion id                    |
| `potion_name`  | `number` | Potion name _must be unique_ |
| `in_stock`     | `number` | Quantity available for sale  |
| `retail_price` | `number` | Retail price of potion       |

```js
{
  potion_id: 4,
  potion_name: "Felix Felicis",
  in_stock: 2,
  retail_price: 24.99,
}
```

#### Delete potion

Removes a potion from the database

```http
DELETE /api/potions/:potion_id
```

| Parameter   | Type     | Description |
| ----------- | -------- | ----------- |
| `potion_id` | `number` | Potion id   |

```js
{
  message: "Potion deleted successfully";
}
```

### Sales

#### Find All Sales

Returns all sales reported

```http
GET /api/sales
```

```js
[
  {
    sale_id: 1,
    sold_at: "2023-01-20T19:33:09.468Z",
    potion_id: 1,
    employee_id: 1,
    customer_id: 1,
    potion_name: "Polyjuice Potion",
    retail_price: 11.25,
    emp_first_name: "Jessica",
    emp_last_name: "Jones",
    cust_first_name: "walk-in",
    cust_last_name: "walk-in",
    cust_email: "walkin@null.com",
  },
  {
    sale_id: 2,
    sold_at: "2023-01-20T19:33:09.468Z",
    potion_id: 2,
    employee_id: 4,
    customer_id: 1,
    potion_name: "Truth Serum",
    retail_price: 10.25,
    emp_first_name: "Peter",
    emp_last_name: "Parker",
    cust_first_name: "walk-in",
    cust_last_name: "walk-in",
    cust_email: "walkin@null.com",
  },
  {
    sale_id: 3,
    sold_at: "2023-01-20T19:33:09.468Z",
    potion_id: 1,
    employee_id: 2,
    customer_id: 4,
    potion_name: "Polyjuice Potion",
    retail_price: 11.25,
    emp_first_name: "Wanda",
    emp_last_name: "Maximoff",
    cust_first_name: "Abbey",
    cust_last_name: "Johnson",
    cust_email: "abbey@johnson.com",
  },
  {
    sale_id: 4,
    sold_at: "2023-01-20T19:33:09.468Z",
    potion_id: 3,
    employee_id: 3,
    customer_id: 3,
    potion_name: "Love Potion",
    retail_price: 9.99,
    emp_first_name: "Peter",
    emp_last_name: "Quill",
    cust_first_name: "Tina",
    cust_last_name: "Long",
    cust_email: "tina@long.com",
  },
  {
    sale_id: 5,
    sold_at: "2023-01-20T19:33:09.468Z",
    potion_id: 3,
    employee_id: 3,
    customer_id: 2,
    potion_name: "Love Potion",
    retail_price: 9.99,
    emp_first_name: "Peter",
    emp_last_name: "Quill",
    cust_first_name: "Steve",
    cust_last_name: "Harper",
    cust_email: "steve@harper.com",
  },
  {
    sale_id: 6,
    sold_at: "2023-01-20T19:33:09.468Z",
    potion_id: 3,
    employee_id: 1,
    customer_id: 5,
    potion_name: "Love Potion",
    retail_price: 9.99,
    emp_first_name: "Jessica",
    emp_last_name: "Jones",
    cust_first_name: "Tom",
    cust_last_name: "Smith",
    cust_email: "tom@smith.com",
  },
  {
    sale_id: 7,
    sold_at: "2023-01-20T19:33:09.468Z",
    potion_id: 2,
    employee_id: 1,
    customer_id: 5,
    potion_name: "Truth Serum",
    retail_price: 10.25,
    emp_first_name: "Jessica",
    emp_last_name: "Jones",
    cust_first_name: "Tom",
    cust_last_name: "Smith",
    cust_email: "tom@smith.com",
  },
  {
    sale_id: 8,
    sold_at: "2023-01-20T19:33:09.468Z",
    potion_id: 1,
    employee_id: 2,
    customer_id: 6,
    potion_name: "Polyjuice Potion",
    retail_price: 11.25,
    emp_first_name: "Wanda",
    emp_last_name: "Maximoff",
    cust_first_name: "Mary",
    cust_last_name: "Allen",
    cust_email: "mary@allen.com",
  },
  {
    sale_id: 9,
    sold_at: "2023-01-20T19:33:09.468Z",
    potion_id: 1,
    employee_id: 4,
    customer_id: 7,
    potion_name: "Polyjuice Potion",
    retail_price: 11.25,
    emp_first_name: "Peter",
    emp_last_name: "Parker",
    cust_first_name: "Ethan",
    cust_last_name: "Harris",
    cust_email: "ethan@harris.com",
  },
  {
    sale_id: 10,
    sold_at: "2023-01-20T19:49:50.894Z",
    potion_id: 1,
    employee_id: 4,
    customer_id: 1,
    potion_name: "Polyjuice Potion",
    retail_price: 11.25,
    emp_first_name: "Peter",
    emp_last_name: "Parker",
    cust_first_name: "walk-in",
    cust_last_name: "walk-in",
    cust_email: "walkin@null.com",
  },
];
```

#### Find A Sale

Returns a single sale

```http
GET /api/sales/:sale_id
```

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| `sale_id` | `number` | Sale id     |

```js
{
  sale_id: 1,
  sold_at: "2023-01-20T19:33:09.468Z",
  potion_id: 1,
  employee_id: 1,
  customer_id: 1,
  potion_name: "Polyjuice Potion",
  retail_price: 11.25,
  emp_first_name: "Jessica",
  emp_last_name: "Jones",
  cust_first_name: "walk-in",
  cust_last_name: "walk-in",
  cust_email: "walkin@null.com"
}
```

#### Find All Sales For A Customer

Returns all sales reported for a customer

```http
GET /api/sales/customer/:customer_id
```

| Parameter     | Type     | Description |
| ------------- | -------- | ----------- |
| `customer_id` | `number` | Customer id |

```js
{
  customer_id: 2,
  cust_first_name: "Steve",
  cust_last_name: "Harper",
  cust_email: "steve@harper.com",
  sales: [
    {
      sale_id: 5,
      sold_at: "2023-01-20T19:33:09.468Z",
      potion_id: 3,
      employee_id: 3,
      potion_name: "Love Potion",
      retail_price: 9.99,
      emp_first_name: "Peter",
      emp_last_name: "Quill"
    }
  ]
}
```

#### Find All Sales For A Potion

Returns all sales reported for a potion

```http
GET /api/sales/potion/:potion_id
```

| Parameter   | Type     | Description |
| ----------- | -------- | ----------- |
| `potion_id` | `number` | Potion id   |

```js
{
  potion_id: 1,
  potion_name: "Polyjuice Potion",
  in_stock: 9,
  retail_price: 11.25,
  sales: [
    {
      sale_id: 1,
      sold_at: "2023-01-20T19:33:09.468Z",
      customer_id: 1,
      employee_id: 1,
      emp_first_name: "Jessica",
      emp_last_name: "Jones",
      cust_first_name: "walk-in",
      cust_last_name: "walk-in",
      cust_email: "walkin@null.com"
    },
    {
      sale_id: 3,
      sold_at: "2023-01-20T19:33:09.468Z",
      customer_id: 4,
      employee_id: 2,
      emp_first_name: "Wanda",
      emp_last_name: "Maximoff",
      cust_first_name: "Abbey",
      cust_last_name: "Johnson",
      cust_email: "abbey@johnson.com"
    },
    {
      sale_id: 8,
      sold_at: "2023-01-20T19:33:09.468Z",
      customer_id: 6,
      employee_id: 2,
      emp_first_name: "Wanda",
      emp_last_name: "Maximoff",
      cust_first_name: "Mary",
      cust_last_name: "Allen",
      cust_email: "mary@allen.com"
    },
    {
      sale_id: 9,
      sold_at: "2023-01-20T19:33:09.468Z",
      customer_id: 7,
      employee_id: 4,
      emp_first_name: "Peter",
      emp_last_name: "Parker",
      cust_first_name: "Ethan",
      cust_last_name: "Harris",
      cust_email: "ethan@harris.com"
    },
    {
      sale_id: 10,
      sold_at: "2023-01-20T19:49:50.894Z",
      customer_id: 1,
      employee_id: 4,
      emp_first_name: "Peter",
      emp_last_name: "Parker",
      cust_first_name: "walk-in",
      cust_last_name: "walk-in",
      cust_email: "walkin@null.com"
    }
  ]
}
```

#### Find All Sales For An Employee

Returns all sales reported for an employee

```http
GET /api/sales/employee/:employee_id
```

| Parameter     | Type     | Description |
| ------------- | -------- | ----------- |
| `employee_id` | `number` | Employee id |

```js
{
  employee_id: 1,
  emp_first_name: "Jessica",
  emp_last_name: "Jones",
  emp_email: "jjones@jessicajones.com",
  hire_date: "2015-11-20T06:00:00.000Z",
  address: "485 W 46th Street, New York City, NY",
  current: true,
  sales: [
    {
      sale_id: 7,
      sold_at: "2023-01-20T19:33:09.468Z",
      customer_id: 5,
      potion_id: 2,
      potion_name: "Truth Serum",
      retail_price: 10.25,
      cust_first_name: "Tom",
      cust_last_name: "Smith",
      cust_email: "tom@smith.com"
    },
    {
      sale_id: 6,
      sold_at: "2023-01-20T19:33:09.468Z",
      customer_id: 5,
      potion_id: 3,
      potion_name: "Love Potion",
      retail_price: 9.99,
      cust_first_name: "Tom",
      cust_last_name: "Smith",
      cust_email: "tom@smith.com"
    },
    {
      sale_id: 1,
      sold_at: "2023-01-20T19:33:09.468Z",
      customer_id: 1,
      potion_id: 1,
      potion_name: "Polyjuice Potion",
      retail_price: 11.25,
      cust_first_name: "walk-in",
      cust_last_name: "walk-in",
      cust_email: "walkin@null.com"
    }
  ]
}
```

#### Add a sale

Add sale to database. Removes 1 from the qty in potions per sale.

```http
POST /api/sales/sale
```

| Parameter     | Type        | Description                            |
| ------------- | ----------- | -------------------------------------- |
| `sold_at`     | `timestamp` | Time of sale. Defaults to current time |
| `potion_id`   | `number`    | Potion id                              |
| `employee_id` | `number`    | Employee id                            |
| `customer_id` | `number`    | Customer id                            |

```js
{
  sale_id: 13,
  sold_at: "2023-01-20T20:45:11.705Z",
  potion_id: 1,
  employee_id: 4,
  customer_id: 1,
  potion_name: "Polyjuice Potion",
  retail_price: 11.25,
  emp_first_name: "Peter",
  emp_last_name: "Parker",
  cust_first_name: "walk-in",
  cust_last_name: "walk-in",
  cust_email: "walkin@null.com"
}
```

#### Refund sale

Removes sale from database. Adds 1 from the qty in potions per sale.

```http
DELETE /api/sales/:sale_id
```

| Parameter     | Type        | Description                            |
| ------------- | ----------- | -------------------------------------- |
| `sold_at`     | `timestamp` | Time of sale. Defaults to current time |
| `potion_id`   | `number`    | Potion id                              |
| `employee_id` | `number`    | Employee id                            |
| `customer_id` | `number`    | Customer id                            |

```js
{
  message: "Refund completed";
}
```

### Suppliers

#### Get All Suppliers

Returns all suppliers

```http
GET /api/suppliers/
```

```js
[
  {
    supplier_id: 1,
    supplier_name: "ABC Company",
  },
  {
    supplier_id: 2,
    supplier_name: "XYZ Company",
  },
  {
    supplier_id: 3,
    supplier_name: "TLC Company",
  },
];
```

#### Get A Specific Supplier

Returns a specific supplier

```http
GET /api/suppliers/:supplier_id
```

| Parameter     | Type     | Description |
| ------------- | -------- | ----------- |
| `supplier_id` | `number` | Supplier id |

```js
{
  supplier_id: 1,
  supplier_name: "ABC Company"
}
```

#### Get All Ingredients By Supplier

Returns an array of all ingredients a supplier offers

```http
GET /api/suppliers/ingredients/:supplier_id
```

| Parameter     | Type     | Description |
| ------------- | -------- | ----------- |
| `supplier_id` | `number` | Supplier id |

```js
{
  supplier_id: 1,
  supplier_name: "ABC Company",
  ingredients: [
    {
      ingredient_id: 2,
      ingredient_name: "Bat Wing",
      in_stock: 800,
      cost: 2.5,
      reorder_qty: 800
    },
    {
      ingredient_id: 4,
      ingredient_name: "Lacewing Fly",
      in_stock: 2000,
      cost: 1.8,
      reorder_qty: 800
    },
    {
      ingredient_id: 5,
      ingredient_name: "Mandrake Root",
      in_stock: 650,
      cost: 2.25,
      reorder_qty: 500
    }
  ]
}
```

#### Add New Supplier

Adds new supplier to database

```http
POST /api/suppliers
```

| Parameter       | Type     | Description                           |
| --------------- | -------- | ------------------------------------- |
| `supplier_name` | `string` | Name of new supplier _must be unique_ |

```js
{
  supplier_id: 4,
  supplier_name: "New Company",
}
```

#### Update Existing Supplier

Updates an existing supplier

```http
PUT /api/suppliers/:supplier_id
```

| Parameter       | Type     | Description                                    |
| --------------- | -------- | ---------------------------------------------- |
| `supplier_id`   | `number` | Supplier id                                    |
| `supplier_name` | `string` | New name of existing supplier _must be unique_ |

```js
{
  supplier_id: 4,
  supplier_name: "Old Company",
}
```

#### Delete Supplier

Removes a supplier from the database

```http
DELETE /api/suppliers/:supplier_id
```

| Parameter     | Type     | Description |
| ------------- | -------- | ----------- |
| `supplier_id` | `number` | Supplier id |

```js
{
  message: "Supplier deleted successfully";
}
```
