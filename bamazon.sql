DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products (
item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
product_name VARCHAR (50) NOT NULL,
department_name VARCHAR (40),
price DECIMAL (8, 2),
stock_qty INTEGER (10),
in_stock BOOLEAN DEFAULT true,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ("Fender Deluxe Strat Guitar", "Musical Instruments", 699.99, 8),
	   ("ESP Floyd Rose Guitar", "Musical Instruments", 799.98, 5),
	   ("Akai Miniak Keyboard", "Musical Instruments", 449.99, 0),
	   ("Fender P Bass Guitar", "Musical Instruments", 1599.99, 3),
	   ("Heil Talk Box", "Musical Instruments", 99.00, 14),
	   ("HP Desktop 9000", "Electronics", 799.98, 22),
	   ("Apple MacBook Pro", "Electronics", 1499.98, 19),
	   ("HP Envy Desktop", "Electronics", 469.00, 6),
	   ("Nvidia GeForce GTX 1060", "Electronics", 499.95, 13),
	   ("MSI GAMING GeForce GTX 1060 6GB", "Electronics", 359.98, 17),
	   ("Bar III Blazer 38R", "Clothing", 299.98, 3),
	   ("Columbia Tee Shirt", "Clothing", 19.98, 120),
	   ("Nike Tee Shirt", "Clothing", 599.98, 8),
	   ("Dockers Straight Fit Pant", "Clothing", 11.12, 87),
	   ("Dockers Quarter Zip Sweater Fleece", "Clothing", 14.51, 17),
	   ("Bath Rug", "Bedding & Bath", 9.98, 208),
	   ("Shower Curtain", "Bedding & Bath", 12.98, 48),
	   ("Decorative Pillow", "Bedding & Bath", 39.98, 18),
	   ("King Sized Mattress", "Bedding & Bath", 799.98, 11),
	   ("Towel", "Bedding & Bath", 9.98, 8);