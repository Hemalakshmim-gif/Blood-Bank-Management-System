import './Sidebar.css';

import { NavLink } from 'react-router-dom';

function Sidebar({ sidebarOpen }) {

  return (

    <div className={`sidebar ${sidebarOpen ? 'show-sidebar' : ''}`}>

      <h2 className='logo'>
        Blood Bank
      </h2>

      <nav>

        <NavLink to='/dashboard'>Dashboard</NavLink>
        <NavLink to='/donor'>Donors</NavLink>
        <NavLink to='/patient'>Patients</NavLink>
        <NavLink to='/request'>Requests</NavLink>
        <NavLink to='/stock'>Blood Stock</NavLink>
        <NavLink to='/donation'>Donations</NavLink>
        <NavLink to='/reports'>Reports</NavLink>
        <NavLink to='/settings'>Settings</NavLink>

      </nav>

    </div>

  );
}

export default Sidebar;