//Load .env data into process.env
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const app = express();
const path = require("path");

const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();



const PORT = 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const usersRoutes = require("./routes/users");

app.use("api/users", usersRoutes(db));

app.get("/", (req, res) => {
  res.send("hello");
});




app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
