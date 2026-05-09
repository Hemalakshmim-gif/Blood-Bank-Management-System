const express = require("express");
const router = express.Router();
const db = require("../db");

// Add patient
router.post("/", (req, res) => {
  const { name, blood_group, condition_info } = req.body;

  const sql =
    "INSERT INTO patients (name, blood_group, condition_info) VALUES (?, ?, ?)";

  db.query(sql, [name, blood_group, condition_info], (err) => {
    if (err) res.send(err);
    else res.send("Patient added successfully");
  });
});

// Get patients
router.get("/", (req, res) => {
  db.query("SELECT * FROM patients", (err, result) => {
    if (err) res.send(err);
    else res.send(result);
  });
});

module.exports = router;