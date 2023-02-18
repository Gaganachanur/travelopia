var express = require("express");
const { fetchdata, addData } = require("./app");
const cors = require("cors");

var app = express();
var PORT = 8000;

app.use(cors());
app.use(express.json());

app.get("/fetch", fetchdata);
app.post("/add", addData);

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
