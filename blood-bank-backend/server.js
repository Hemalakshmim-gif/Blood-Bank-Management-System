const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/dashboard", require("./routes/dashboard"));
app.use("/auth", require("./routes/auth"));
app.use("/donor", require("./routes/donor"));
app.use("/patient", require("./routes/patient"));
app.use("/request", require("./routes/request"));
app.use("/stock", require("./routes/stock"));
app.use("/donation", require("./routes/donation"));
app.use("/report", require("./routes/report"));

/* =========================
   Dashboard Stats API
========================= */

app.get('/dashboard/stats', (req, res) => {

  const stats = {};

  // Total donors
  db.query(
    'SELECT COUNT(*) AS totalDonors FROM donors',
    (err, donorResult) => {

      if (err) return res.send(err);

      stats.totalDonors = donorResult[0].totalDonors;

      // Total patients
      db.query(
        'SELECT COUNT(*) AS totalPatients FROM patients',
        (err2, patientResult) => {

          if (err2) return res.send(err2);

          stats.totalPatients = patientResult[0].totalPatients;

          // Total blood units
          db.query(
            'SELECT SUM(units) AS totalUnits FROM blood_stock',
            (err3, stockResult) => {

              if (err3) return res.send(err3);

              stats.totalUnits =
                stockResult[0].totalUnits || 0;

              // Pending requests
              db.query(
                "SELECT COUNT(*) AS pendingRequests FROM requests WHERE status='Pending'",
                (err4, requestResult) => {

                  if (err4) return res.send(err4);

                  stats.pendingRequests =
                    requestResult[0].pendingRequests;

                  // send all stats
                  res.send(stats);

                }
              );

            }
          );

        }
      );

    }
  );

});

/* =========================
   Home Route
========================= */

app.get("/", (req, res) => {
  res.send("Backend running clean 🚀");
});

/* =========================
   Start Server
========================= */

app.listen(5000, () => {
  console.log("Server running on port 5000");
});