var express = require("express");
var app = express();
var PORT = 8000;

const fetchdata = require("./app");
const addData = require("./app");
var cors = require("cors");

app.use(cors());

app.get("/fetch", fetchdata);
app.post("/add", addData);

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
