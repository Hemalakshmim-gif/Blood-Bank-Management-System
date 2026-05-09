const express = require("express");
const router = express.Router();
const db = require("../db");

// Create request
router.post("/", (req, res) => {
  const { patient_id, blood_group, units } = req.body;

  const sql =
    "INSERT INTO requests (patient_id, blood_group, units, status) VALUES (?, ?, ?, 'Pending')";

  db.query(sql, [patient_id, blood_group, units], (err) => {
    if (err) res.send(err);
    else res.send("Request created");
  });
});

// Get requests
router.get("/", (req, res) => {
  db.query("SELECT * FROM requests", (err, result) => {
    if (err) res.send(err);
    else res.send(result);
  });
});

// Approve request
router.put("/approve/:id", (req, res) => {
  const id = req.params.id;

  db.query("SELECT * FROM requests WHERE id = ?", [id], (err, result) => {
    const reqData = result[0];

    db.query(
      "UPDATE blood_stock SET units = units - ? WHERE blood_group = ?",
      [reqData.units, reqData.blood_group],
      () => {
        db.query(
          "UPDATE requests SET status='Approved' WHERE id=?",
          [id],
          () => {
            res.send("Approved & stock updated");
          }
        );
      }
    );
  });
});

// Reject
router.put("/reject/:id", (req, res) => {
  const id = req.params.id;

  db.query("UPDATE requests SET status='Rejected' WHERE id=?", [id], () => {
    res.send("Request rejected");
  });
});

module.exports = router;