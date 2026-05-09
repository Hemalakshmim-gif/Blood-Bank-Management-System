import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';

import Dashboard from '../pages/Dashboard/Dashboard';
import Donor from '../pages/Donor/Donor';
import Patient from '../pages/Patient/Patient';
import Request from '../pages/Request/Request';
import BloodStock from '../pages/BloodStock/BloodStock';
import Donation from '../pages/Donation/Donation';
import Reports from '../pages/Reports/Reports';
import Settings from '../pages/Settings/Settings';

function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Auth */}
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        {/* Dashboard */}
        <Route path='/dashboard' element={<Dashboard />} />

        {/* Other Pages */}
        <Route path='/donor' element={<Donor />} />
        <Route path='/patient' element={<Patient />} />
        <Route path='/request' element={<Request />} />
        <Route path='/stock' element={<BloodStock />} />
        <Route path='/donation' element={<Donation />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/settings' element={<Settings />} />

      </Routes>

    </BrowserRouter>

  );
}

export default AppRoutes;