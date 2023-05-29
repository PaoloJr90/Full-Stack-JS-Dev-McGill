-- using Common Table Expressions (CTE)

-- CTEs can often help make code more readable and maintainable. 
-- They can sometimes be used in place of subqueries, but not always, as the use cases are different.

-- Let's assume we have a table called orders, and we want to calculate the total sales per day and then find out which day had the highest sales.
-- Here's an example of how you could do it using a CTE:
WITH daily_sales AS (
    SELECT 
        DATE(order_date) AS order_day,
        SUM(amount) AS total_sales
    FROM orders
    GROUP BY DATE(order_date)
)
SELECT 
    order_day, 
    total_sales
FROM daily_sales
WHERE total_sales = (SELECT MAX(total_sales) FROM daily_sales);

-- In the above SQL:
-- We first define a CTE daily_sales that calculates the total sales for each day.
-- We then use that CTE in our main query to find out the day which had the highest sales.
-- We used a subquery in the WHERE clause here, but the CTE helped us avoid a more complex subquery that would have been necessary to calculate the total sales per day directly in the main query. 
-- Thus, CTEs can simplify the writing of complex SQL by breaking down the operations into more manageable parts.