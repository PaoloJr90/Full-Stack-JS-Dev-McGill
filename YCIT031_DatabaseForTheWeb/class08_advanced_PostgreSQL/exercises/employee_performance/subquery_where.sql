-- Subquery in WHERE clause
-- Problem statement:
-- Find the total sales made by employees who didn't take a vacation in January.

-- vacation
CREATE TABLE vacation (
    id SERIAL PRIMARY KEY,
    employee_id INT,
    vacation_start DATE,
    vacation_end DATE
);

-- data
INSERT INTO vacation (employee_id, vacation_start, vacation_end) VALUES 
(1, '2023-01-15', '2023-01-25'), 
(2, '2023-01-20', '2023-01-30'), 
(3, '2023-02-05', '2023-02-15'), 
(4, '2023-02-10', '2023-02-20');
Now, let's find out the total sales made by employees who didn't take a vacation in January. We can use a subquery in the WHERE clause to filter out those employees:

SELECT 
    e.first_name, 
    e.last_name, 
    SUM(s.sale_amount) AS total_sales
FROM 
    employees e
JOIN 
    sales s ON s.employee_id = e.id
WHERE 
    e.id NOT IN (
        SELECT v.employee_id 
        FROM vacation v 
        WHERE 
            (v.vacation_start >= '2023-01-01' AND v.vacation_start <= '2023-01-31') OR
            (v.vacation_end >= '2023-01-01' AND v.vacation_end <= '2023-01-31')
    )
GROUP BY 
    e.first_name, e.last_name
ORDER BY 
    total_sales DESC;

This query will return the total sales made by employees who didn't take a vacation in January 2023, ordered by total sales from high to low.