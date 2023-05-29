-- Subqueries in SELECT statements
--say we want to display each employee's total sales along with the average sales of all employees for comparison.

SELECT 
    e.first_name, 
    e.last_name, 
    SUM(s.sale_amount) AS total_sales,
    (SELECT AVG(sale_amount) FROM sales) AS average_sales
FROM 
    employees e
JOIN 
    sales s ON s.employee_id = e.id
GROUP BY 
    e.first_name, e.last_name;

-- In this query, for each row, total_sales shows the total sales made by the particular employee, and average_sales shows the average sales amount across all sales, providing a point of comparison for each employee's performance.
-- Please note that the subquery (SELECT AVG(sale_amount) FROM sales) runs once for the entire operation, not for each row, as it doesn't depend on any outer query columns.