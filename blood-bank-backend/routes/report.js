const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/donations", (req, res) => {
  db.query("SELECT * FROM donations", (err, result) => {
    if (err) res.send(err);
    else res.send(result);
  });
});

router.get("/requests", (req, res) => {
  db.query("SELECT * FROM requests", (err, result) => {
    if (err) res.send(err);
    else res.send(result);
  });
});

module.exports = router;