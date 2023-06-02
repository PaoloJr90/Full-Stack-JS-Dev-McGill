-- products
INSERT INTO products (name, price, category_id) VALUES 
('Product A', 100, 1), 
('Product B', 200, 1), 
('Product C', 150, 2), 
('Product D', 300, 2);

-- categories
INSERT INTO categories (name) VALUES 
('Category 1'), 
('Category 2');

-- orders
INSERT INTO orders (customer_id, order_date) VALUES 
(1, '2023-05-01'), 
(2, '2023-05-02'), 
(3, '2023-05-03');

-- order_items
INSERT INTO order_items (order_id, product_id, quantity) VALUES 
(1, 1, 1), 
(1, 2, 2), 
(2, 1, 3), 
(2, 3, 1), 
(3, 4, 2);