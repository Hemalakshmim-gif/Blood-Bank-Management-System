const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.query("SELECT * FROM blood_stock", (err, result) => {
    if (err) res.send(err);
    else res.send(result);
  });
});

module.exports = router;