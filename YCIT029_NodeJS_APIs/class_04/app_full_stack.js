import express from "express";

const app = express();

app.use(express.static("public"));
app.use(express.json());

// this is dead code as the static middleware will serve the index.html file.
// is shadowed by the static middleware (app.use(express.static("public")).
// app.get("/", (req,res) => {
//     res.send("Test");
// });

app.post("/customer-info", (req, res) => {
  console.log("customer-info", req.body);
  //console.log(req.headers); // use this to see the headers
  res.end();
});

const PORT = 4002;
app.listen(PORT, () => {
  console.log(`Full stack server is running on port ${PORT}`);
});
