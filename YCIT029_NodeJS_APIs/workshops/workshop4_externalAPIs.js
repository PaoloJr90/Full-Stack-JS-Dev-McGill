// import axios library
// axios provides a simple-to-use library of functions/commands for making HTTP requests
import axios from "axios";

// import open library to open a URL in the default browser
import open from "open";

// import fs library to write to a file
import fs from "fs";

// get Astronomy Picture of the Day from NASA API using demo key
// from https://github.com/nasa/apod-api
// scrape the result and print the title, date, explanation, url, and media type
axios
  .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", {
    headers: { "Content-Type": "application/json" },
  })
  // .then is used as a callback function to handle the response
  // the result keyword is part of the axios library to handle the response
  .then((result) => {
    let url = result.data.url;
    console.log(`Request status = ${result.status} ${result.statusText}`);
    //console.log("Headers are", result.headers);
    //console.log("Config is", result.config);
    //console.log(result.data);
    console.log("Response:");
    console.log(
      `Title of image --> ${result.data.title} "/n" Date of image --> ${result.data.date}`
    );
    console.log(`Explanation of image --> ${result.data.explanation}`);
    console.log(`URL --> ${result.data.url}`);
    console.log(`Media type --> ${result.data.media_type}`);
    // open the url from the response in the default browser
    open(url);
  });

// use same code as above but with query string parameters
// use the count parameter to get multiple images
axios
  .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=3", {
    headers: { "Content-Type": "application/json" },
  })
  // .then is used as a callback function to handle the response
  // the result keyword is part of the axios library to handle the response
  .then((result) => {
    console.log(`Request status = ${result.status} ${result.statusText}`);
    //console.log("Headers are", result.headers);
    //console.log("Config is", result.config);
    console.log(`Here are the details from the three images:`);
    console.log(`First image title --> ${result.data[0].title}`);
    console.log(`First image date --> ${result.data[0].date}`);
    console.log(`First image explanation --> ${result.data[0].explanation}`);
    console.log(`First image URL --> ${result.data[0].url}`);
    console.log(`First image media type --> ${result.data[0].media_type}`);
    console.log(`Second and Third image details are similar...`);
    console.log(result.data[1] + "\n" + result.data[2]);
    // console.log("Response:");
    // console.log(`Title of image --> ${result.data.title}`);
    // console.log(`Date of image --> ${result.data.date}`);
    // console.log(`Explanation of image --> ${result.data.explanation}`);
    // console.log(`URL --> ${result.data.url}`);
    // console.log(`Media type --> ${result.data.media_type}`);
    // console.log(`Service version --> ${result.data.service_version}`);
    // console.log(`Copyright --> ${result.data.copyright}`);
  });
