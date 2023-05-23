import express from "express";
import pg from "pg";

const { Client, Query } = pg;

// connection string to connect to the database
// used in the dbInit function
const connectionString =
  "postgres://postgres:password@localhost:5432/workshop2";

// initialize the database with some data and call this function when the server starts
async function dbInit() {
  const client = new pg.Client(connectionString);
  await client.connect();
  const createAndInsertDataQuery = `
  DROP TABLE IF EXISTS users; -- drop the table if it exists
  CREATE TABLE users (
    id serial PRIMARY KEY,
    name text NOT NULL,
    age integer
  );
  
  INSERT INTO users (name, age) VALUES
    ('Alice', 25),
    ('Bob', 30),
    ('Charlie', 22);
  `;

  await client.query(createAndInsertDataQuery);
  await client.end();
}

const app = express();
const port = 3000;
const client = new Client(connectionString);
// server starts here. Call the dbInit function to initialize the database
app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await dbInit(); // wait for the dbInit function to finish before starting the server
});

app.use(express.json());

// simple get request to the users table (in workshop2 database) that returns all the users
app.get("/users", async (req, res) => {
  await client.connect(); // wait for the connection to be established
  // the query method returns a promise that gets inserted into the result variable
  const result = await client.query("SELECT * FROM users");
  // close the connection
  await client.end();
  //console.log("result", result);
  //console.log("rows from result", result.rows);
  res.json({ "rows from result (client.query)": result.rows });
});
