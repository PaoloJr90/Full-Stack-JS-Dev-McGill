-- products
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    price NUMERIC(10, 2),
    category_id INT
);

-- categories
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

-- orders
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_id INT,
    order_date DATE
);

-- order_items
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT
);