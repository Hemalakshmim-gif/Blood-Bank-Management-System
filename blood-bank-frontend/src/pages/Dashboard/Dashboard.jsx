import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';

import './Dashboard.css';

function Dashboard() {

  const stats = {
    totalDonors: 120,
    totalPatients: 80,
    totalUnits: 350,
    pendingRequests: 12
  };

  return (

    <div className='dashboard-container'>

      <Sidebar />

      <div className='dashboard-content'>

        <Navbar />

        <h1 className='page-title'>
          Dashboard
        </h1>

        <div className='cards-container'>

          <div className='dashboard-card'>

            <h3>Total Donors</h3>

            <h1>{stats.totalDonors}</h1>

          </div>

          <div className='dashboard-card'>

            <h3>Total Patients</h3>

            <h1>{stats.totalPatients}</h1>

          </div>

          <div className='dashboard-card'>

            <h3>Blood Units</h3>

            <h1>{stats.totalUnits}</h1>

          </div>

          <div className='dashboard-card'>

            <h3>Pending Requests</h3>

            <h1>{stats.pendingRequests}</h1>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Dashboard;