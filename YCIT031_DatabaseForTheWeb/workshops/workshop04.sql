-- delete the database if it exists
DROP DATABASE IF EXISTS restaurant_pj;

-- Create the database
CREATE DATABASE restaurant_pj;

-- Connect to the database
\c restaurant_pj;

CREATE TABLE restaurants (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    opening_hours VARCHAR(50),
    cuisine_type VARCHAR(100)
);

CREATE TABLE chefs (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    experience_years INTEGER,
    specialty VARCHAR(255),
    restaurant_id INTEGER,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants (id) ON DELETE CASCADE
);

CREATE TABLE dishes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(5, 2),
    description TEXT,
    chef_id INTEGER,
    FOREIGN KEY (chef_id) REFERENCES chefs (id) ON DELETE CASCADE
);

CREATE TABLE ingredients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    unit VARCHAR(50)
);
 -- this table is the junction table between dishes and ingredients tables
 -- it is used to implement a many-to-many relationship between dishes and ingredients
 -- a dish can have many ingredients, and an ingredient can be used in many dishes
 -- the primary key is a composite key made up of dish_id and ingredient_id
 -- the "junction" is evidenced by the fact that the primary key is made up of two foreign keys
CREATE TABLE dish_ingredients (
    dish_id INTEGER,
    ingredient_id INTEGER,
    quantity DECIMAL(5, 2),
    PRIMARY KEY (dish_id, ingredient_id),
    FOREIGN KEY (dish_id) REFERENCES dishes (id) ON DELETE CASCADE,
    FOREIGN KEY (ingredient_id) REFERENCES ingredients (id) ON DELETE CASCADE
);


-- insert data into restaurants table
INSERT INTO restaurants (name, location, phone, opening_hours, cuisine_type)
VALUES 
('La Bella Italia', 'New York', '1234567890', '10 AM - 11 PM', 'Italian'),
('Sushi Express', 'Los Angeles', '0987654321', '11 AM - 10 PM', 'Japanese'),
('The Spice Market', 'San Francisco', '1234987650', '9 AM - 9 PM', 'Indian'),
('Pasta Fresca', 'Toronto', '2345678901', '10 AM - 10 PM', 'Italian'),
('Ocean Bites', 'Vancouver', '3456789012', '11 AM - 10 PM', 'Seafood'),
('Ginger Express', 'Ottawa', '4567890123', '12 PM - 9 PM', 'Chinese'),
('Grilled Heaven', 'Edmonton', '5678901234', '11 AM - 11 PM', 'American'),
('French Delight', 'Quebec City', '6789012345', '10 AM - 10 PM', 'French'),
('Crispy Poutine', 'Montreal', '7890123456', '11 AM - 10 PM', 'Canadian'),
('Biryani House', 'Winnipeg', '8901234567', '12 PM - 9 PM', 'Indian'),
('Kimchi Place', 'Calgary', '9012345678', '11 AM - 11 PM', 'Korean');

-- insert data into chefs table
INSERT INTO chefs (name, experience_years, specialty, restaurant_id)
VALUES 
('Mario Rossi', 15, 'Pasta', 1),
('Sakura Tanaka', 12, 'Sushi', 2),
('Raj Kapoor', 20, 'Curry', 3),
('Giorgio Conti', 10, 'Lasagna', 4),
('Molly Sanderson', 12, 'Fish & Chips', 5),
('Liam Ong', 14, 'General Tso Chicken', 6),
('Aaron Stone', 16, 'Steak', 7),
('Marie Claude', 18, 'Croissant', 8),
('Andre Lavoie', 13, 'Poutine', 9),
('Ananya Sharma', 14, 'Biryani', 10),
('Jae Lee', 15, 'Bulgogi', 11);

-- insert data into dishes table
INSERT INTO dishes (name, price, description, chef_id)
VALUES 
('Spaghetti Carbonara', 18.00, 'Classic Italian pasta dish with eggs, cheese, pancetta, and pepper', 1),
('California Roll', 10.50, 'Sushi roll filled with cucumber, crab, and avocado', 2),
('Chicken Tikka Masala', 15.00, 'Grilled chunks of chicken enveloped in a creamy spiced tomato sauce', 3),
('Lasagna Bolognese', 20.00, 'Traditional Italian lasagna with meat and cheese', 4),
('Fish & Chips', 15.00, 'Classic dish with crispy fish fillet and fries', 5),
('General Tso Chicken', 18.50, 'Fried chicken in a sweet, slightly spicy sauce, with steamed rice', 6),
('Ribeye Steak', 25.00, 'Grilled ribeye steak with veggies', 7),
('Croissant and Coffee', 8.00, 'Freshly baked croissant with hot coffee', 8),
('Classic Poutine', 10.00, 'Fries with cheese curds and gravy', 9),
('Chicken Biryani', 18.00, 'Aromatic rice with spiced chicken', 10),
('Beef Bulgogi', 20.00, 'Sweet and savory marinated beef', 11);

-- insert data into ingredients table
-- Ingredients
INSERT INTO ingredients (name, unit)
VALUES 
('Eggs', 'pcs'),
('Cheese', 'grams'),
('Pancetta', 'grams'),
('Cucumber', 'pcs'),
('Crab', 'grams'),
('Avocado', 'pcs'),
('Chicken', 'grams'),
('Tomato Sauce', 'grams'),
('Lasagna Sheets', 'pcs'),
('Meat Sauce', 'grams'),
('Bechamel Sauce', 'grams'),
('Fish Fillet', 'grams'),
('Potatoes', 'grams'),
('Chicken', 'grams'),
('Rice', 'grams'),
('Soy Sauce', 'ml'),
('Beef', 'grams'),
('Bulgogi Marinade', 'grams'),
('Coffee', 'ml'),
('Gravy', 'ml');

-- insert data into dish_ingredients table
INSERT INTO dish_ingredients (dish_id, ingredient_id, quantity)
VALUES 
(1, 1, 2),
(1, 2, 100),
(1, 3, 200),
(2, 4, 1),
(2, 5, 100),
(2, 6, 1),
(3, 7, 200),
(3, 8, 300),
(4, 9, 2),
(4, 10, 300),
(4, 11, 200),
(5, 12, 200),
(5, 13, 300),
(6, 14, 200),
(6, 15, 300),
(7, 16, 300),
(8, 19, 250),
(9, 13, 300),
(9, 2, 150),
(9, 20, 100),
(10, 14, 200),
(10, 15, 300),
(11, 17, 300),
(11, 18, 200);


-- inner join restaurants and chefs tables where restaurant_id = 6
SELECT r.name, r.location, r.cuisine_type FROM restaurants AS r
INNER JOIN chefs as c
ON r.id = c.restaurant_id
WHERE restaurant_id = 6;

-- left join chefs and dishes tables where experience_years > 15
SELECT c.name, c.experience_years, c.specialty, d.name, d.price FROM chefs AS c
LEFT JOIN dishes AS d
ON c.id = d.chef_id
WHERE experience_years > 15;

-- simple right join chefs and dishes tables where experience_years > 15
SELECT * FROM chefs AS c
RIGHT JOIN dishes AS d
ON c.id = d.chef_id
WHERE experience_years > 15;

-- left join dishes and chefs tables where price > 15
SELECT * FROM dishes
LEFT JOIN chefs
ON dishes.chef_id = chefs.id
WHERE price > 15;

-- inner join restaurants, chefs and dishes tables where experience_years >= 10 and price > 15
SELECT r.name, r.location, r.cuisine_type, c.name, c.experience_years, c.specialty, d.name, d.price FROM restaurants AS r
INNER JOIN chefs AS c
ON r.id = c.restaurant_id
INNER JOIN dishes AS d
ON c.id = d.chef_id
WHERE experience_years >= 10 AND price > 15;

-- inner join restaurants, chefs, dishes and dish_ingredients tables where experience_years >= 10 and price > 15
SELECT r.name, r.location, r.cuisine_type, c.name, c.experience_years, c.specialty, d.name, d.price, i.name, di.quantity, i.unit FROM restaurants AS r
INNER JOIN chefs AS c
ON r.id = c.restaurant_id
INNER JOIN dishes AS d
ON c.id = d.chef_id
INNER JOIN dish_ingredients AS di
ON d.id = di.dish_id
INNER JOIN ingredients AS i
ON di.ingredient_id = i.id
WHERE experience_years >= 10 AND price > 15;