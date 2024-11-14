const express = require("express");
const data = require("./data");

const app = express();

app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST");

  next();
});

app.get("/products", (req, res) => {
  res.json(data);
});

app.get("/detail/:id", (req, res) => {
  const result = data.filter((item) => (item.id = req.params.id))[0];
  res.json(result);
});

app.listen(3000, () => {
  console.log("this server is running...");
});
