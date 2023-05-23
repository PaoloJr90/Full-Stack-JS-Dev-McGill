import http from "http";
import chalk from "chalk";
// could use commander package to parse arguments in a future version
import readline from "readline";

// CLIENT-SIDE CODE
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// start the client and display the options
const startClient = () => {
  console.log(chalk.white.bold.underline("Welcome to the Address Book!"));
  console.log(chalk.bold.italic("Please select an option:"));
  console.log(chalk.white.bold("-----------------------------"));
  console.log("1. Get 2 random addresses for Germany");
  console.log("2. Get 3 random addresses for Italy");
  console.log("3. Get 4 random addresses that are Trails in the United States");
  console.log(
    "4. Get 3 random addresses for the Netherlands where city name starts with E"
  );
  console.log(
    "5. Get 5 random addresses in your preferred latitude and longitude"
  );
  console.log("6. Get total counts of addresses for each country");

  rl.question(chalk.yellow("Option selected (1-6): "), (answer) => {
    getQuery(answer);
  });
};

// options for the client to select
const getQuery = (option) => {
  let path;

  switch (option) {
    case "1":
      path = "/Germany";
      break;
    case "2":
      path = "/Italy";
      break;
    case "3":
      path = "/trailsInUS";
      break;
    case "4":
      path = "/Netherlands";
      break;
    case "5":
      path = "/coordinates";
      break;
    case "6":
      // sixth option is to get the total counts of addresses for each country
      return displayCountsOption();
    default:
      console.error(
        chalk.red.bold.italic(
          "Invalid option. Please enter a number between 1 and 6."
        )
      );
      return startClient();
  }

  // options for the random addresses request
  const options = {
    hostname: "localhost",
    port: 3000,
    path: path,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  // request for the random addresses responses
  const req = http.request(options, (res) => {
    let data = "";

    // the data event is fired when a chunk of data is received
    res.on("data", (chunk) => {
      data += chunk;
    });

    // the end event is fired when all the data has been received
    res.on("end", () => {
      try {
        if (data) {
          const parsedData = JSON.parse(data);
          // display the addresses in the console with the parsed data
          displayAddresses(parsedData);
        } else {
          console.error(chalk.red("Error parsing data: Empty response"));
          startClient();
        }
      } catch (error) {
        console.error(chalk.red("Error parsing data:", error));
        startClient();
      }
    });
  });

  req.end();

  // function to display the addresses in the console
  const displayAddresses = (addresses) => {
    if (addresses && addresses.length > 0) {
      console.log(chalk.green("Data received:"));
      // forEach loop calls a function for each element in the array
      addresses.forEach((addressItem) => {
        const address = addressItem.row_to_json; // extract the address object from the row_to_json object
        console.log(chalk.yellow("--------------------"));
        console.log(chalk.green("Street:    "), address.street_address);
        console.log(chalk.green("City:      "), address.city);
        console.log(chalk.green("State/Province:  "), address.state_province);
        console.log(chalk.green("Country:    "), address.country);
        console.log(chalk.yellow("--------------------"));
      });
    } else {
      console.log(chalk.red.bold.italic("No addresses found."));
    }

    startClient();
  };
};

// function to display total counts of each country addresses
const displayCountsOption = () => {
  // options for the counts request
  const options = {
    hostname: "localhost",
    port: 3000,
    path: "/counts",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  // request for the counts responses
  const req = http.request(options, (res) => {
    let data = "";

    // the data event is fired when a chunk of data is received
    res.on("data", (chunk) => {
      data += chunk;
    });

    // the end event is fired when all the data has been received
    res.on("end", () => {
      try {
        if (data) {
          const parsedData = JSON.parse(data);
          // display the addresses in the console with the parsed data
          displayCounts(parsedData);
        } else {
          console.error(chalk.red("Error parsing data: Empty response"));
          startClient();
        }
      } catch (error) {
        console.error(chalk.red("Error parsing data:", error));
        startClient();
      }
    });
  });

  req.end();

  // function to display the counts in the console
  const displayCounts = (counts) => {
    //console.log("counts", counts); // debugging statement
    if (counts && counts.length > 0) {
      console.log(chalk.green("Data received:"));
      // forEach loop calls a function for each element in the array
      counts.forEach((countItem) => {
        //console.log("countItem", countItem); // debugging statement
        // no need to extract the address object from the row_to_json object
        // because the response is already an array of objects
        console.log(chalk.yellow("--------------------"));
        console.log(chalk.green("Country:    "), countItem.country);
        console.log(chalk.green("Count:      "), countItem.count);
        console.log(chalk.yellow("--------------------"));
      });
    } else {
      console.log(chalk.red.bold.italic("No data found."));
    }

    startClient();
  };
};

startClient();
