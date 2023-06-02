// import faker
import { faker } from "@faker-js/faker";
import pg from "pg";

const pool = new pg.Pool({
  host: "localhost",
  port: 5432,
  database: "data_generator",
  user: "postgres",
  password: "password",
});

const connection = await pool.connect();

for (let i = 0; i < 100000; i++) {
  const firstName = faker.person.firstName(); // fake first name from faker
  const lastName = faker.person.lastName(); // fake last name from faker
  const email = faker.internet.email(); // fake email from faker
  const genderArr = ["male", "female", "non-binary", "other", "unknown"];

  // random selection from genderArr array
  const gender = genderArr[Math.floor(Math.random() * genderArr.length)];
  const dob = faker.past({ years: 90 }).toISOString().split("T")[0]; // ex:2000-01-01
  // SQL query
  const text = `INSERT INTO patients (last_name, first_name, birth_date, gender, email) VALUES ($1, $2, $3, $4, $5)`;
  //
  const data = [lastName, firstName, dob, gender, email];

  await connection.query(text, data);

  if (i > 0) {
    if (i % 1000 === 0) {
      // when i has a remainder of 0 when divided by 1000, log the number of rows processed
      console.log(`${i} rows processed`);
    }
  }
}
