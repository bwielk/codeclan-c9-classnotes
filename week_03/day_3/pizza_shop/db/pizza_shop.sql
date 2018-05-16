DROP TABLE pizza_orders;
DROP TABLE customers;

CREATE TABLE customers (
  id SERIAL4 primary key,
  name VARCHAR(255)
);

CREATE TABLE pizza_orders (
  id SERIAL4 primary key,
  first_name VARCHAR(255),
  topping VARCHAR(255),
  quantity INT2,
  customer_id INT4 references customers(id)
);