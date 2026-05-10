const express = require("express");

const router = express.Router();

const db = require("../db");

// DASHBOARD STATS
router.get("/stats", (req, res) => {

  const dashboardData = {};

  // TOTAL DONORS
  db.query(
    "SELECT COUNT(*) AS totalDonors FROM donors",
    (err, donorResult) => {

      if (err) {
        return res.status(500).send(err);
      }

      dashboardData.totalDonors =
        donorResult[0].totalDonors;

      // TOTAL PATIENTS
      db.query(
        "SELECT COUNT(*) AS totalPatients FROM patients",
        (err, patientResult) => {

          if (err) {
            return res.status(500).send(err);
          }

          dashboardData.totalPatients =
            patientResult[0].totalPatients;

          // TOTAL BLOOD UNITS
          db.query(
            "SELECT SUM(units) AS totalUnits FROM blood_stock",
            (err, stockResult) => {

              if (err) {
                return res.status(500).send(err);
              }

              dashboardData.totalUnits =
                stockResult[0].totalUnits || 0;

              // PENDING REQUESTS
              db.query(
                "SELECT COUNT(*) AS pendingRequests FROM requests WHERE status='Pending'",
                (err, requestResult) => {

                  if (err) {
                    return res.status(500).send(err);
                  }

                  dashboardData.pendingRequests =
                    requestResult[0].pendingRequests;

                  res.send(dashboardData);

                }
              );

            }
          );

        }
      );

    }
  );

});

module.exports = router;