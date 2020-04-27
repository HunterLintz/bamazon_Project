DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
    products_name VARCHAR(30),
    department_name VARCHAR(30),
    price DECIMAL(10, 2),
    stock_quantity INTEGER(10),
    PRIMARY KEY (item_id)
);

INSERT INTO products (products_name, department_name, price, stock_quantity)
VALUES ("Black Tee Shirt", "Clothing", 19.99, 1000);

INSERT INTO products (products_name, department_name, price, stock_quantity)
VALUES ("White Tee Shirt", "Clothing", 19.99, 1000);

INSERT INTO products (products_name, department_name, price, stock_quantity)
VALUES ("Blue Jacket", "Clothing", 29.99, 750);

INSERT INTO products (products_name, department_name, price, stock_quantity)
VALUES ("Can Opener", "Kitchen Supplies", 9.99, 1500);

INSERT INTO products (products_name, department_name, price, stock_quantity)
VALUES ("Spagetti Strainer", "Kitchen Supplies", 4.99, 2000);

INSERT INTO products (products_name, department_name, price, stock_quantity)
VALUES ("Whisk", "Kitchen Supplies", 2.99, 3000);

INSERT INTO products (products_name, department_name, price, stock_quantity)
VALUES ("Hiking Backpack", "Camping Gear", 199.99, 500);

INSERT INTO products (products_name, department_name, price, stock_quantity)
VALUES ("Firewood", "Camping Gear", 19.99, 2500);

INSERT INTO products (products_name, department_name, price, stock_quantity)
VALUES ("Hiking Boots", "Camping Gear", 129.99, 1000);

INSERT INTO products (products_name, department_name, price, stock_quantity)
VALUES ("Camping Tent", "Camping Gear", 299.99, 550);