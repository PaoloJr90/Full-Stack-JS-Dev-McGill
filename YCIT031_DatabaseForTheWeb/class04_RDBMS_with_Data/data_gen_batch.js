import { faker } from "@faker-js/faker";
import pg from "pg";

// generate 5,000 records of data in the format of ($1, $2, $3, $4, $5), ($6, $7, $8, $9, $10), etc.
// see the text variable below for the query that will be used to insert the data
// this is the format that the pg library expects
// the str variable below is to be used after the text variable
let str = "";
for (let k = 0; k < 5000; k++) {
  str += `($${k * 5 + 1}, $${k * 5 + 2}, $${k * 5 + 3}, $${k * 5 + 4}, $${
    k * 5 + 5
  }),`;
}

// remove the last comma from the string above
let modifiedStr = str.slice(0, -1);

// the text variable below is the SQL query that will be used to insert the data
const text =
  `
INSERT INTO patients (last_name, first_name, birth_date, gender, email)
VALUES ` + modifiedStr;

const client = new pg.Client({
  host: "localhost",
  port: 5432,
  database: "data_generator",
  user: "postgres",
  password: "password",
});

await client.connect();

const NUM_OF_RECORDS = 50000;
const RECORDS_PER_BATCH = 5000;

const NUM_OF_BATCHES = Math.floor(NUM_OF_RECORDS / RECORDS_PER_BATCH);

// loop through the number of batches, and for each batch, loop through the number of records per batch
// concatenate the data into an array, and then insert the data into the database
for (let i = 1; i <= NUM_OF_BATCHES; i++) {
  let data = [];

  for (let j = 1; j <= RECORDS_PER_BATCH; j++) {
    const lastName = faker.person.lastName(); // fake last name from the faker library
    const firstName = faker.person.firstName(); // fake first name from the faker library
    const email = faker.internet.email(); // fake email from the faker library
    const genderArr = ["male", "female", "non-binary", "other", "unknown"];
    // randomly select an element from the genderArr array
    const gender = genderArr[Math.floor(Math.random() * genderArr.length)];
    const dob = faker.date.past({ years: 90 }).toISOString().split("T")[0]; // ex:2000-01-01
    data = data.concat([lastName, firstName, dob, gender, email]);
  }

  // text = SQL query, data = array of data to be inserted
  await client.query(text, data);
  console.log(`Batch ${i} pushed`);
}

// close the connection to the database after the batch process is complete
await client.end();
console.log("Batch process complete, client disconnected");
