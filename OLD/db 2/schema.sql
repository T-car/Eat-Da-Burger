-- Drops the bamazon_db if it exists currently --
DROP DATABASE IF EXISTS bamazon_db;
-- Creates the "bamazon_db" database --
CREATE DATABASE burgers_db;

-- Makes it so all of the following code will affect bamazon_db --
USE burgers_db;

-- Creates the table "products" within bamazon_db --
CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(45) NULL,
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);