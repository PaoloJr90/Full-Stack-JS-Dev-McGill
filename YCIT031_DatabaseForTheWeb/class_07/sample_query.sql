-- Note: We're not using the "AS" keyword for aliases in this example. 
-- Although "AS" is optional in many SQL dialects, 
-- we're omitting it here to make the query easier for developers.

SELECT
  c.customer_id,
  c.first_name || ' ' || c.last_name customer_name,
  o.order_id,
  p.product_id,
  p.name product_name,
  op.quantity,
  op.price,
  SUM(op.quantity * op.price) total_amount
FROM
  customers c
  INNER JOIN orders o ON c.customer_id = o.customer_id
  INNER JOIN order_products op ON o.order_id = op.order_id
  INNER JOIN products p ON op.product_id = p.product_id
WHERE
  o.order_date >= '2023-01-01' AND o.order_date < '2023-02-01'
  AND p.category IN ('Electronics', 'Books')
  AND c.country = 'CANADA'
GROUP BY
  c.customer_id,
  c.first_name,
  c.last_name,
  o.order_id,
  p.product_id,
  p.name,
  op.quantity,
  op.price
HAVING
  SUM(op.quantity * op.price) > 1000
ORDER BY
  total_amount DESC;
