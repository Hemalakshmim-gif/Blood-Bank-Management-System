import { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import API from '../../services/api';
import './Donor.css';

function Donor() {

  // form state
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    blood_group: '',
    contact: ''
  });

  // donor list state
  const [donors, setDonors] = useState([]);

  // input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // add donor
  const addDonor = async () => {
    try {

      await API.post('/donor', formData);

      alert('Donor added successfully');

      fetchDonors();

      setFormData({
        name: '',
        age: '',
        blood_group: '',
        contact: ''
      });

    } catch (err) {
      console.log(err);
    }
  };

  // fetch donors
  const fetchDonors = async () => {
    try {

      const res = await API.get('/donor');

      setDonors(res.data);

    } catch (err) {
      console.log(err);
    }
  };

  // load data
  useEffect(() => {
    fetchDonors();
  }, []);

  return (
    <div className='donor-page'>

      <Sidebar />

      <div className='donor-content'>

        <Navbar />

        <h1 className='page-title'>Donor Management</h1>

        {/* Form Section */}
        <div className='donor-form card'>

          <h2>Add Donor</h2>

          <input
            type='text'
            placeholder='Donor Name'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type='number'
            placeholder='Age'
            name='age'
            value={formData.age}
            onChange={handleChange}
          />

          <input
            type='text'
            placeholder='Blood Group'
            name='blood_group'
            value={formData.blood_group}
            onChange={handleChange}
          />

          <input
            type='text'
            placeholder='Contact Number'
            name='contact'
            value={formData.contact}
            onChange={handleChange}
          />

          <button onClick={addDonor}>
            Add Donor
          </button>

        </div>

        {/* Table Section */}
        <div className='donor-table-section card'>

          <h2>Donor List</h2>

          <table className='donor-table'>

            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Blood Group</th>
                <th>Contact</th>
              </tr>
            </thead>

            <tbody>

              {donors.map((donor) => (

                <tr key={donor.id}>
                  <td>{donor.id}</td>
                  <td>{donor.name}</td>
                  <td>{donor.age}</td>
                  <td>{donor.blood_group}</td>
                  <td>{donor.contact}</td>
                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Donor;