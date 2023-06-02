-- employees
INSERT INTO employees (first_name, last_name, department) VALUES 
('John', 'Doe', 'Sales'), 
('Jane', 'Smith', 'Sales'), 
('Bob', 'Johnson', 'Marketing'), 
('Alice', 'Brown', 'Sales');

-- sales
INSERT INTO sales (employee_id, sale_date, sale_amount) VALUES 
(1, '2023-01-01', 500), 
(1, '2023-01-02', 700), 
(2, '2023-01-03', 1000), 
(2, '2023-01-04', 1200), 
(3, '2023-01-05', 300), 
(4, '2023-01-06', 400);