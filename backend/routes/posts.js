const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM posts;`)
      .then((data) => {
        const posts = data.rows;
        res.send({ posts });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/", (req, res) => {
    const values = [req.body.user_id, req.body.message, req.body.status_id];
    console.log(req.body);

    const query = `INSERT INTO posts (user_id, message,status_id) VALUES ($1, $2, $3)`;
    db.query(query, values)
      .then(() => {
        res.send("Post added");
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.put("/:id", (req, res) => {
    const values = [req.params.id, req.body.status_id];
    // console.log(req.body);

    const query = `UPDATE posts SET status_id = $2 WHERE id = $1`;
    db.query(query, values)
      .then(() => {
        res.send("Post updated");
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.delete("/:id", (req,res) => {
    const value = [req.params.id];
    console.log(value)
    const query = `DELETE from posts WHERE id = $1`;
    db.query(query, value)
      .then(() => {
        res.send("Post Deleted");
      })
      .catch((err) => {
        res.status(500).json({ error: err.message})
      })
  })
  return router;
};
