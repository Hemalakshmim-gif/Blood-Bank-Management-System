const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { donor_id, quantity, blood_group } = req.body;

  db.query(
    "INSERT INTO donations (donor_id, quantity, date) VALUES (?, ?, CURDATE())",
    [donor_id, quantity],
    (err) => {
      if (err) return res.send(err);

      db.query(
        "UPDATE blood_stock SET units = units + ? WHERE blood_group = ?",
        [quantity, blood_group],
        () => {
          res.send("Donation added & stock updated");
        }
      );
    }
  );
});

module.exports = router;