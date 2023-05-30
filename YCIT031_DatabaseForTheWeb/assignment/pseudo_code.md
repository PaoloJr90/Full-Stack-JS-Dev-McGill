# some pseudo-code for and e-Commerce tool store database and web application

## Description of for some of the routes and functionality

1. **GET /products** - get all products

   ```javascript
   router.get("/", async (req, res) => {
     // ... some code here
     // await SQL query from db.getProducts();
   });
   ```

2. **GET /users** - get all users

   ```javascript
   router.get("/", authMiddleware, async (req, res) => {
     // get all users
     const users = await db.getUsers();
     // send a 200 response with the users
     res.status(200).json(users);
   });
   ```

3. **POST /products/{id}/purchase** - purchase a product

   ```javascript
   router.post("/:id/purchase", authMiddleware, async (req, res) => {
     // ... some code here
     // await db.purchaseProduct(id, userId);
     // db.purchaseProdcut(id, userId) contains the SQL query to update the database
   });
   ```

4. **DELETE /products/{id}** - delete a product

   ```javascript
   router.delete("/:id", authMiddleware, async (req, res) => {
     // ... some code here
     // await db.deleteProduct(id);
     // db.deleteProduct(id) contains the SQL query to update the database
   });
   ```

5. **Database Connection (pg)** - connect to the database

   ```javascript
   const { Pool } = require("pg");
   const pool = new Pool({
     user: "postgres",
     host: "localhost",
     database: "tools_store",
     password: "postgres",
     port: 5432,
   });
   ```
