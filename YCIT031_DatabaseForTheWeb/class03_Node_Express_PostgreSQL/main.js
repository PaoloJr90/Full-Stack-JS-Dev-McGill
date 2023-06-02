import pg from "pg";
const { Client, Query } = pg;

const client = new Client({
  host: "localhost",
  port: 5432,
  database: "medical_app",
  user: "postgres",
  password: "password",
});

// using callbacks syntax
// client.connect((err) => {
//   if (err) {
//     console.error("connection error", err.stack);
//   } else {
//     console.log("connected");
//   }
// });

// using async/await syntax since the connect method returns a promise
await client
  .connect()
  .catch((err) => console.error("connection error", err.stack));

console.log("connected");

// using promises instead of callbacks syntax
client
  .query("INSERT INTO patients DEFAULT VALUES RETURNING *;") // this returns a promise that gets inserted into the next then (result)
  .then((result) => {
    // default values is a keyword that inserts the default values for all columns
    //console.log("result", result); // returning * returns all the columns of the inserted row
    const id = result.rows[0].id;
    return id;
  })
  .then((id) => {
    const text = `INSERT INTO patient_registrations (patient_id, last_name, first_name, birth_date, gender) 
    VALUES ($1, $2, $3, $4, $5);`;
    const data = [id, "Smith", "John", "1980-01-01", "male"];
    return client.query(text, data);
  })
  .then(() => {
    console.log("Operation Completed");
  })

  // .then(() => {
  //     return client.query("SELECT NOW() as now"); // this returns a promise that gets inserted into the next then (val)
  //   })
  //   .then((data) => {
  //     //console.log("val", val); // this is the result of the query
  //     const d = data.rows[0].now;
  //     console.log("Timestamp for NOW() function", d); // this is the result of the query
  //   })
  //   .then(() => {
  //     return client.query("SELECT * FROM patient_registrations");
  //   })
  //   .then((data) => {
  //     console.log(data.rows[0]);
  //   })
  .catch((err) => console.error("query error", err));

console.log("Hello");
