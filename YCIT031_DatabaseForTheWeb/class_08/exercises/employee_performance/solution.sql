-- getting the employee with the highest sales
SELECT 
    e.first_name, 
    e.last_name, 
    SUM(s.sale_amount) AS total_sales
FROM 
    employees e
JOIN 
    sales s ON s.employee_id = e.id
GROUP BY 
    e.first_name, e.last_name
ORDER BY 
    total_sales DESC
LIMIT 1;