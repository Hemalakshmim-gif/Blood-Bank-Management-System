import './Auth.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import API from '../../services/api';

function Signup() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Handle Input Change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  // Signup API
  const handleSignup = async () => {

    try {

      const res = await API.post(
        '/auth/signup',
        formData
      );

      alert(res.data);

    } catch (err) {

      console.log(err);

      alert('Signup failed');

    }

  };

  return (

    <div className='auth-page'>

      {/* Left */}
      <div className='auth-left'>

        <h1>Create Your Account</h1>

        <p>
          Join the blood bank management
          platform and manage healthcare
          operations efficiently.
        </p>

      </div>

      {/* Right */}
      <div className='auth-right'>

        <div className='auth-card'>

          <h2>Signup</h2>

          <input
            type='text'
            placeholder='Full Name'
            name='name'
            onChange={handleChange}
          />

          <input
            type='email'
            placeholder='Email'
            name='email'
            onChange={handleChange}
          />

          <input
            type='password'
            placeholder='Password'
            name='password'
            onChange={handleChange}
          />

          <button onClick={handleSignup}>
            Signup
          </button>

          <p>
            Already have an account?

            <Link to='/'>
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>

  );
}

export default Signup;