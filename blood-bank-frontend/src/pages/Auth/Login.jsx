import './Auth.css';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleLogin = () => {

    // temporary login
    navigate('/dashboard');

  };

  return (

    <div className='auth-page'>

      {/* Left */}
      <div className='auth-left'>

        <h1>Blood Bank Management System</h1>

        <p>
          Manage blood donations,
          requests, stock and patients
          efficiently.
        </p>

      </div>

      {/* Right */}
      <div className='auth-right'>

        <div className='auth-card'>

          <h2>Login</h2>

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

          <button onClick={handleLogin}>
            Login
          </button>

          <p>
            Don't have an account?

            <Link to='/signup'>
              Signup
            </Link>

          </p>

        </div>

      </div>

    </div>

  );
}

export default Login;