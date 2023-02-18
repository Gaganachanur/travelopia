const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "Travelopia",
  password: "tiger",
  port: 5432,
});

client
  .connect()
  .then((res) => console.log(res))
  .then(() => console.log("bd connected "))
  .catch((e) => console.log("db connected " + e));

const fetchdata = async (req, res) => {
  console.log("hitted fetch");
  const result = await client.query("select * from client_info");

  res.json(result.rows);
};

const addData = async (req, res) => {
  const { name = "", email = "", desti = "", not = "", budget = "" } = req.body;
  console.log("hitted add");
  const result = await client.query(`insert into client_info(
	name, email, desti, "not", budget)
	VALUES ('${name}', '${email}', '${desti}', '${not}', '${budget}') RETURNING *`);
  console.log(result.rows);
  console.log(result.rowCount);
  res.send("added");
};

module.exports = {
  addData,
  fetchdata,
};
