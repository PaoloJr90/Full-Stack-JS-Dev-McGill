-- Subqueries in FROM, JOIN, and HAVING clauses
-- Subqueries are quite versatile and can be used in a variety of scenarios in SQL. We've covered subqueries in WHERE and SELECT clauses, but there are other common places where you might use subqueries. Here are a few examples:

-- Subquery in FROM clause: Sometimes you might need to manipulate your data in a certain way that is best done in a subquery before doing the main query on it. Here's a simplified example:
SELECT 
    employee_id, 
    AVG(sale_amount) AS avg_sale
FROM 
    (SELECT employee_id, sale_amount 
     FROM sales 
     WHERE sale_date > '2022-01-01') AS recent_sales
GROUP BY 
    employee_id;

-- In this example, the subquery filters out sales that happened after a certain date, and the outer query then performs an operation on this subset of data.

-- Subquery in JOIN clause: Subqueries can also be used within JOIN clauses. Here's an example:
SELECT 
    e.first_name, 
    e.last_name, 
    rs.total_sales
FROM 
    employees e
JOIN 
    (SELECT employee_id, SUM(sale_amount) as total_sales 
     FROM sales 
     GROUP BY employee_id) rs ON e.id = rs.employee_id;
-- This query first aggregates sales data by employee id and then joins this aggregated data with the employees table.

-- Subquery in HAVING clause: Here's an example:
SELECT 
    employee_id, 
    COUNT(*) as num_sales
FROM 
    sales
GROUP BY 
    employee_id
HAVING 
    COUNT(*) > (SELECT COUNT(*) FROM sales GROUP BY employee_id ORDER BY COUNT(*) DESC LIMIT 1);
-- This example finds employees who have made more sales than the employee with the least number of sales. 
--The subquery is used in the HAVING clause to dynamically determine the number of sales made by the "lowest performing" employee.

-- Remember, while subqueries can be powerful, they can also make your SQL queries more complex and harder to understand. 
-- It's often a good idea to see if you can accomplish the same thing with a simpler query structure first. 
-- Also, in some cases, subqueries can lead to performance issues, so it's always a good idea to test and optimize your queries.