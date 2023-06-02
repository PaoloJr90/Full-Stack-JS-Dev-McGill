//const express = require("express"); // CommonJS modules syntax
import express from "express"; // ES6 modules syntax

const app = express();
const port = 3000;

// menu options for the restaurant
// an object with 4 properties, each property is an array of strings
const menu = {
  vegetarian: [
    "Grilled Portobello Mushroom",
    "Quinoa Salad",
    "Eggplant Parmesan",
  ],
  nonVegetarian: ["Grilled Chicken", "Beef Steak", "Shrimp Scampi"],
  desserts: ["Tiramisu", "Chocolate Lava Cake", "Cheesecake"],
  beverages: ["Mojito", "Pina Colada", "Mango Lassi"],
  chefSpecial: ["Lobster", "Crab", "Oysters"],
};

// let's try to "hit" this route/endpoint. Invoke it somehow.
// want the server to respond with "greeting!!!" from the res.send() method
// need to modify client.kjs res.on("end") method to console.log the data
// app.get("/menu/vegetarian", (req, res) => {
//   res.send("greeting!!!"); // send a response back to the client
// });

app.get("/menu/vegetarian", (req, res) => {
  res.json(menu.vegetarian);
});

app.get("/menu/nonVegetarian", (req, res) => {
  res.json(menu.nonVegetarian);
});

app.get("/menu/desserts", (req, res) => {
  res.json(menu.desserts);
});

app.get("/menu/beverages", (req, res) => {
  res.json(menu.beverages);
});

app.get("/menu/chefSpecial", (req, res) => {
  res.json(menu.chefSpecial);
});

app.listen(port, () => {
  console.log(`Menu server listening at http://localhost:${port}`);
});

//console.log("end of script");
