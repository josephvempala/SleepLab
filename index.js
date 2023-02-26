const express = require("express"),
  app = express();

app.set("view engine", "ejs");

app.use(express.static('./'))

app.use(express.json({limit: '100kb'}));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/inner-page", (req, res) => {
  res.render("inner-page");
});

app.listen(3000,  () => {
  console.log("Server is running on port 3000 ");
});