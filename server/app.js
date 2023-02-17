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
  const result = await client.query("select * from client_info");

  res.json(result.rows);
};

const addData = async (req, res) => {
  const { firstName, email } = req.body;

  const result = await client.query(`insert into client_info(
	name, email, desti, "not", budget, tot_budget)
	VALUES ('${firstName}', '${email}', 'mysore', '2', '3000', '6000') RETURNING *`);
  console.log(result.rows);
  console.log(result.rowCount);
};

module.exports = [fetchdata, addData];
