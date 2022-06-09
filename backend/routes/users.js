const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/users", (req, res) => {
    console.log("hello")
    db.query(
      `SELECT * FROM users;`)
      .then((data) => {
        const users = data.rows;
        res.send({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;

};

// var express = require("express");
// var router = express.Router();

// router.get("/", function(req, res, next) {
//     res.send("API is working properly");
// });

// module.exports = router;