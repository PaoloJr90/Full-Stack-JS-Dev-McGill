-- can also do these in pgAdmin

-- copy table from database to csv file
-- COPY [Table Name] TO '[File Name]' DELIMITER ',' CSV HEADER;
-- example:
-- COPY "public"."tbl_employees" TO 'C:\Users\ycit\Desktop\employees.csv' DELIMITER ',' CSV HEADER;

-- copy query result-set to csv file
-- COPY ([Query]) TO '[File Name]' DELIMITER ',' CSV HEADER;
-- example:
-- COPY (SELECT * FROM "public"."tbl_employees") TO 'C:\Users\ycit\Desktop\employees.csv' DELIMITER ',' CSV HEADER;
