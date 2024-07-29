// TO RUN THIS FILE, REMOVE THE TYPE=MODULE IN PACKAGE.JSON FILE
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/contact", (req, res) => {
  res.send("Contact");
});

app.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "/services.html"));
});

app.get("/about", (req, res) => {
  console.log(req.query.id);
  res.send("About");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
