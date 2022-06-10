// //Load .env data into process.env
// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");
// const path = require("path");
// const bodyParser = require("body-parser");
// const axios = require("axios");

// const { Pool } = require("pg");
// const dbParams = require("./lib/db.js");
// const db = new Pool(dbParams);
// db.connect();



// const PORT = 8080;
// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(cors());
// // var testAPIRouter = require("./routes/testAPI");

// const usersRoutes = require("./routes/users");

// // app.use("/testAPI", testAPIRouter);
// app.use("/api/users", usersRoutes(db));

// app.get("/", (req, res) => {
//   res.send("hello");
// });




// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });


//Load .env data into process.env
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const axios = require("axios");

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

//Web server configuration
const port = 8080;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());

//Seperated Routes for Resources
const usersRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");


//Mount all resource routes

app.use("/api/users", usersRoutes(db));
app.use("/api/posts", postRoutes(db));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
