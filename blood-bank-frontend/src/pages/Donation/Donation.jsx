import { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import API from '../../services/api';
import './Donation.css';

function Donation() {

  const [formData, setFormData] = useState({
    donor_id: '',
    quantity: '',
    blood_group: ''
  });

  const [donations, setDonations] = useState([]);

  // handle input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // add donation
  const addDonation = async () => {
    try {

      await API.post('/donation', formData);

      alert('Donation added successfully');

      fetchDonations();

      setFormData({
        donor_id: '',
        quantity: '',
        blood_group: ''
      });

    } catch (err) {
      console.log(err);
    }
  };

  // fetch donations
  const fetchDonations = async () => {
    try {

      const res = await API.get('/report/donations');

      setDonations(res.data);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  return (
    <div className='donation-page'>

      <Sidebar />

      <div className='donation-content'>

        <Navbar />

        <h1 className='page-title'>
          Donation Management
        </h1>

        {/* Form */}
        <div className='donation-form card'>

          <h2>Add Donation</h2>

          <input
            type='number'
            placeholder='Donor ID'
            name='donor_id'
            value={formData.donor_id}
            onChange={handleChange}
          />

          <input
            type='number'
            placeholder='Quantity'
            name='quantity'
            value={formData.quantity}
            onChange={handleChange}
          />

          <input
            type='text'
            placeholder='Blood Group'
            name='blood_group'
            value={formData.blood_group}
            onChange={handleChange}
          />

          <button onClick={addDonation}>
            Add Donation
          </button>

        </div>

        {/* Table */}
        <div className='donation-table-section card'>

          <h2>Donation History</h2>

          <table className='donation-table'>

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

      </div>

    </div>
  );
}

export default Donation;