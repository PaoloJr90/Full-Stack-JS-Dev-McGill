-- Scenario 1:
-- Our boss might be interested in the most popular dishes. To figure this out, we can count the number of times each dish appears in the order_items table. This will involve a join between order_items and dishes tables, and a GROUP BY clause to count the number of times each dish was ordered.
  
SELECT d.name, SUM(oi.quantity) as total_quantity_ordered
FROM order_items oi
JOIN dishes d ON oi.dish_id = d.id
GROUP BY d.name
ORDER BY total_quantity_ordered DESC;

-- Scenario 2:
-- We could be asked to find out which restaurants are generating the most revenue. This would involve summing the total from the orders table for each restaurant, which would involve a join between the orders and restaurants tables, and a GROUP BY clause to sum the totals for each restaurant.

SELECT r.name, SUM(o.total) as total_revenue
FROM orders o
JOIN restaurants r ON o.restaurant_id = r.id
GROUP BY r.name
ORDER BY total_revenue DESC;

-- Scenario 3:
-- The boss might want to know which customers are spending the most. To find this, we can sum the total field in the orders table for each customer, which would involve a join between the orders and customers tables, and a GROUP BY clause to sum the totals for each customer.

SELECT c.name, SUM(o.total) as total_spent
FROM orders o
JOIN customers c ON o.customer_id = c.id
GROUP BY c.name
ORDER BY total_spent DESC;

-- Scenario 4:
-- A report might be needed on which dishes use the most of a certain ingredient, for inventory purposes. This would involve joining the dishes, dish_ingredients, and ingredients tables, and using a GROUP BY clause to sum the quantity of the specified ingredient for each dish.

SELECT d.name, SUM(di.quantity) as total_quantity
FROM dish_ingredients di
JOIN dishes d ON di.dish_id = d.id
JOIN ingredients i ON di.ingredient_id = i.id
WHERE i.name = 'Cheese'
GROUP BY d.name
ORDER BY total_quantity DESC;

-- Scenario 5:
-- Our boss might be curious about the busiest times of day for orders. To find this, we can extract the hour from the order_date field in the orders table, and count the number of orders for each hour. This will involve use of a GROUP BY clause and possibly a function to extract the hour from the timestamp.

SELECT EXTRACT(HOUR FROM o.order_date) as hour, COUNT(*) as count
FROM orders o
GROUP BY hour
ORDER BY count DESC;