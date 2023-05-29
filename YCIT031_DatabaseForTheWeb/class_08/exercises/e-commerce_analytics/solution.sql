-- Total sales per product category:
SELECT c.name AS category, SUM(p.price * oi.quantity) AS total_sales
FROM order_items oi
JOIN products p ON p.id = oi.product_id
JOIN categories c ON c.id = p.category_id
GROUP BY c.name;

-- The best selling product:
SELECT p.name AS product, SUM(oi.quantity) AS quantity_sold
FROM order_items oi
JOIN products p ON p.id = oi.product_id
GROUP BY p.name
ORDER BY quantity_sold DESC
LIMIT 1;

-- The trend of sales over time:
SELECT o.order_date, SUM(p.price * oi.quantity) AS daily_sales
FROM order_items oi
JOIN orders o ON o.id = oi.order_id
JOIN products p ON p.id = oi.product_id
GROUP BY o.order_date
ORDER BY o.order_date;