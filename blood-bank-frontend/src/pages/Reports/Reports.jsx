import { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import API from '../../services/api';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

import './Reports.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Reports() {

  const [donations, setDonations] = useState([]);
  const [requests, setRequests] = useState([]);
  const [stock, setStock] = useState([]);

  // fetch reports
  const fetchReports = async () => {
    try {

      const donationRes = await API.get('/report/donations');
      const requestRes = await API.get('/report/requests');
      const stockRes = await API.get('/stock');

      setDonations(donationRes.data);
      setRequests(requestRes.data);
      setStock(stockRes.data);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  // chart data
  const chartData = {
    labels: stock.map(item => item.blood_group),

    datasets: [
      {
        label: 'Blood Units',
        data: stock.map(item => item.units),
        backgroundColor: '#d62828'
      }
    ]
  };

  return (
    <div className='reports-page'>

      <Sidebar />

      <div className='reports-content'>

        <Navbar />

        <h1 className='page-title'>
          Reports & Analytics
        </h1>

        {/* Chart */}
        <div className='chart-card'>

          <h2>Blood Stock Analytics</h2>

          <Bar data={chartData} />

        </div>

        {/* Donation Table */}
        <div className='report-table card'>

          <h2>Donation Reports</h2>

          <table>

            <thead>

              <tr>
                <th>ID</th>
                <th>Donor ID</th>
                <th>Quantity</th>
                <th>Date</th>
              </tr>

            </thead>

            <tbody>

              {donations.map((donation) => (

                <tr key={donation.id}>

                  <td>{donation.id}</td>
                  <td>{donation.donor_id}</td>
                  <td>{donation.quantity}</td>
                  <td>{donation.date}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Request Table */}
        <div className='report-table card'>

          <h2>Request Reports</h2>

          <table>

            <thead>

              <tr>
                <th>ID</th>
                <th>Patient ID</th>
                <th>Blood Group</th>
                <th>Units</th>
                <th>Status</th>
              </tr>

            </thead>

            <tbody>

              {requests.map((req) => (

                <tr key={req.id}>

                  <td>{req.id}</td>
                  <td>{req.patient_id}</td>
                  <td>{req.blood_group}</td>
                  <td>{req.units}</td>
                  <td>{req.status}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Reports;