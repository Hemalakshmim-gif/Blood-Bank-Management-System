import { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import API from '../../services/api';
import './Request.css';

function Request() {

  const [formData, setFormData] = useState({
    patient_id: '',
    blood_group: '',
    units: ''
  });

  const [requests, setRequests] = useState([]);

  // handle input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // create request
  const createRequest = async () => {
    try {

      await API.post('/request', formData);

      alert('Blood request created');

      fetchRequests();

      setFormData({
        patient_id: '',
        blood_group: '',
        units: ''
      });

    } catch (err) {
      console.log(err);
    }
  };

  // fetch requests
  const fetchRequests = async () => {
    try {

      const res = await API.get('/request');

      setRequests(res.data);

    } catch (err) {
      console.log(err);
    }
  };

  // approve request
  const approveRequest = async (id) => {
    try {

      await API.put(`/request/approve/${id}`);

      alert('Request approved');

      fetchRequests();

    } catch (err) {
      console.log(err);
    }
  };

  // reject request
  const rejectRequest = async (id) => {
    try {

      await API.put(`/request/reject/${id}`);

      alert('Request rejected');

      fetchRequests();

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className='request-page'>

      <Sidebar />

      <div className='request-content'>

        <Navbar />

        <h1 className='page-title'>
          Blood Requests
        </h1>

        {/* Form */}
        <div className='request-form card'>

          <h2>Create Request</h2>

          <input
            type='number'
            placeholder='Patient ID'
            name='patient_id'
            value={formData.patient_id}
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
            type='number'
            placeholder='Units Required'
            name='units'
            value={formData.units}
            onChange={handleChange}
          />

          <button onClick={createRequest}>
            Create Request
          </button>

        </div>

        {/* Table */}
        <div className='request-table-section card'>

          <h2>Request List</h2>

          <table className='request-table'>

            <thead>

              <tr>
                <th>ID</th>
                <th>Patient ID</th>
                <th>Blood Group</th>
                <th>Units</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>

            </thead>

            <tbody>

              {requests.map((req) => (

                <tr key={req.id}>

                  <td>{req.id}</td>
                  <td>{req.patient_id}</td>
                  <td>{req.blood_group}</td>
                  <td>{req.units}</td>

                  <td>

                    <span className={`status ${req.status}`}>
                      {req.status}
                    </span>

                  </td>

                  <td>

                    <button
                      className='approve-btn'
                      onClick={() => approveRequest(req.id)}
                    >
                      Approve
                    </button>

                    <button
                      className='reject-btn'
                      onClick={() => rejectRequest(req.id)}
                    >
                      Reject
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Request;