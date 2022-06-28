const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM comments;`)
      .then((data) => {
        const comment = data.rows;
        res.send({ comment });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/", (req, res) => {
    const values = [req.body.comment, req.body.post_id];
    console.log(2, req.body);

    const query = `INSERT INTO comments (comment, post_id) VALUES ($1, $2)`;
    db.query(query, values)
      .then(() => {
        res.send("Comment added");
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
