const express = require("express");
const router = express.Router();
const db = require("../db");

// Signup
router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  db.query(sql, [name, email, password], (err) => {
    if (err) res.send(err);
    else res.send("User registered successfully");
  });
});

// Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email=? AND password=?";
  db.query(sql, [email, password], (err, result) => {
    if (err) res.send(err);
    else if (result.length > 0) res.send("Login successful");
    else res.send("Invalid credentials");
  });
});

module.exports = router;