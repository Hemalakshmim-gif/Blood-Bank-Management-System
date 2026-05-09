const express = require("express");
const router = express.Router();
const db = require("../db");

// Add donor
router.post("/", (req, res) => {
  const { name, age, blood_group, contact } = req.body;

  const sql =
    "INSERT INTO donors (name, age, blood_group, contact) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, age, blood_group, contact], (err) => {
    if (err) res.send(err);
    else res.send("Donor added successfully");
  });
});

// Get donors
router.get("/", (req, res) => {
  db.query("SELECT * FROM donors", (err, result) => {
    if (err) res.send(err);
    else res.send(result);
  });
});

module.exports = router;