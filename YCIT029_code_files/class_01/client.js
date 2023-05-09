// const readline = require("readline"); // CommonJS modules syntax
// const chalk = require("chalk"); // CommonJS modules syntax

// ES6 modules syntax
import readline from "readline";
import chalk from "chalk";
import http from "http";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getMenu = (option) => {
  let path;

  switch (option) {
    case "1":
      path = "/menu/vegetarian";
      break;
    case "2":
      path = "/menu/nonVegetarian";
      break;
    case "3":
      path = "/menu/desserts";
      break;
    case "4":
      path = "/menu/beverages";
      break;
    case "5":
      path = "/menu/chefSpecial";
      break;
    default:
      console.error(
        chalk.red("Invalid choice. Please enter a number between 1 and 4.")
      );
      return;
  }

  const options = {
    hostname: "localhost",
    port: 3000,
    path: path,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  // code here is to make a request to the server
  const req = http.request(options, (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      console.log(chalk.green("Menu:"), JSON.parse(data));
      //data); use this to see the raw data from the server
      rl.close();
    });
  });

  req.on("error", (error) => {
    console.error(chalk.red("Error:", error));
  });

  req.end();
};

console.log(chalk.blue("Welcome to our restaurant!"));
console.log(chalk.yellow("Please select a menu option:"));
console.log("1. Vegetarian");
console.log("2. Non-Vegetarian");
console.log("3. Desserts");
console.log("4. Beverages");
console.log("5. Chef's Special");

rl.question(chalk.yellow("Enter your choice (1-5): "), (answer) => {
  getMenu(answer);
  //console.log(chalk.red(answer));
});
