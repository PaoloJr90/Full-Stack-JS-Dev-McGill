import express from "express";
import pg from "pg";

// SERVER-SIDE CODE
// connection to the database
const pool = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "workshop3",
  password: "password",
  port: 5432,
});

// await syntax since the connect method returns a promise
await pool.connect().catch((err) => {
  console.error("database connection error", err.stack);
});
console.log("Database connected");

const app = express();
const port = 3000;
const router = express.Router();

app.listen(port, () => {
  console.log(`Server is operational and listening on port ${port}`);
});

// Spain:
//   "SELECT row_to_json FROM addresses WHERE country = 'Spain' AND city = 'Madrid' ORDER BY RANDOM() LIMIT 3;",

// get 2 random addresses from the database where country is Germany
// using CLI arguments to specify the country with Chalk
app.get("/Germany", async (req, res) => {
  try {
    const { rows } = await pool.query(
      "SELECT row_to_json(addresses) FROM addresses WHERE country = 'Germany' ORDER BY RANDOM() LIMIT 2;"
    );
    res.json(rows);
  } catch (error) {
    console.error("Error executing PostgreSQL query:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// get 3 random addresses from the database where country is Italy
// using CLI arguments to specify the country with Chalk
app.get("/Italy", async (req, res) => {
  try {
    const { rows } = await pool.query(
      "SELECT row_to_json(addresses) FROM addresses WHERE country = 'Italy' ORDER BY RANDOM() LIMIT 3;"
    );
    res.json(rows);
  } catch (error) {
    console.error("Error executing PostgreSQL query:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// get 4 random addresses from the database where stree_suffix is Trail
// using CLI arguments to specify the country with Chalk
app.get("/trailsInUS", async (req, res) => {
  try {
    const { rows } = await pool.query(
      "SELECT row_to_json(addresses) FROM addresses WHERE street_suffix = 'Trail' AND country_code = 'US' ORDER BY RANDOM() LIMIT 4;"
    );
    res.json(rows);
  } catch (error) {
    console.error("Error executing PostgreSQL query:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// get 3 random addresses from the database where country is Netherlands and city starts with E
// using CLI arguments to specify the country with Chalk
app.get("/Netherlands", async (req, res) => {
  try {
    const { rows } = await pool.query(
      "SELECT row_to_json(addresses) FROM addresses WHERE country = 'Netherlands' AND city LIKE 'E%' ORDER BY RANDOM() LIMIT 3;"
    );
    res.json(rows);
  } catch (error) {
    console.error("Error executing PostgreSQL query:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// get 5 random addresses from the database where the latitude is between 40 and 50 and longitude is between -10 and 10
// using CLI arguments to specify the country with Chalk
app.get("/coordinates", async (req, res) => {
  try {
    const { rows } = await pool.query(
      "SELECT row_to_json(addresses) FROM addresses WHERE latitude BETWEEN 40 AND 50 AND longitude BETWEEN -70 AND 110 ORDER BY RANDOM() LIMIT 5;"
    );
    res.json(rows);
  } catch (error) {
    console.error("Error executing PostgreSQL query:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// get the number of addreses for each country
app.get("/counts", async (req, res) => {
  try {
    const { rows } = await pool.query(
      "SELECT country, COUNT(*) FROM addresses GROUP BY country;"
    );
    res.json(rows);
  } catch (error) {
    console.error("Error executing PostgreSQL query:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
