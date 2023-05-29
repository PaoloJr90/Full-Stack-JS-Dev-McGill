-- employees
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    department VARCHAR(255)
);

-- sales
CREATE TABLE sales (
    id SERIAL PRIMARY KEY,
    employee_id INT,
    sale_date DATE,
    sale_amount NUMERIC(10, 2)
);