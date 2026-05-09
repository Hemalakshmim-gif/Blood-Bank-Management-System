import { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import API from '../../services/api';
import './Patient.css';

function Patient() {

  const [formData, setFormData] = useState({
    name: '',
    blood_group: '',
    condition_info: ''
  });

  const [patients, setPatients] = useState([]);

  // input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // add patient
  const addPatient = async () => {
    try {

      await API.post('/patient', formData);

      alert('Patient added successfully');

      fetchPatients();

      setFormData({
        name: '',
        blood_group: '',
        condition_info: ''
      });

    } catch (err) {
      console.log(err);
    }
  };

  // fetch patients
  const fetchPatients = async () => {
    try {

      const res = await API.get('/patient');

      setPatients(res.data);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <div className='patient-page'>

      <Sidebar />

      <div className='patient-content'>

        <Navbar />

        <h1 className='page-title'>
          Patient Management
        </h1>

        {/* Form */}
        <div className='patient-form card'>

          <h2>Add Patient</h2>

          <input
            type='text'
            placeholder='Patient Name'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type='text'
            placeholder='Blood Group'
            name='blood_group'
            value={formData.blood_group}
            onChange={handleChange}
          />

          <textarea
            placeholder='Condition Information'
            name='condition_info'
            value={formData.condition_info}
            onChange={handleChange}
          />

          <button onClick={addPatient}>
            Add Patient
          </button>

        </div>

        {/* Table */}
        <div className='patient-table-section card'>

          <h2>Patient List</h2>

          <table className='patient-table'>

            <thead>

              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Blood Group</th>
                <th>Condition</th>
              </tr>

            </thead>

            <tbody>

              {patients.map((patient) => (

                <tr key={patient.id}>

                  <td>{patient.id}</td>
                  <td>{patient.name}</td>
                  <td>{patient.blood_group}</td>
                  <td>{patient.condition_info}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Patient;