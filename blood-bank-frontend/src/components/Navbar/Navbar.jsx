import './Navbar.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  FaBell,
  FaSearch,
  FaMoon,
  FaSun,
  FaBars
} from 'react-icons/fa';

function Navbar({ toggleSidebar, darkMode, setDarkMode }) {

  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();

  // logout
  const handleLogout = () => {
    navigate('/');
  };

  return (

    <div className='navbar'>

      {/* Left */}
      <div className='navbar-left'>

        {/* Mobile Sidebar Button */}
        <button
          className='menu-btn'
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>

        {/* Search */}
        <div className='search-box'>

          <FaSearch />

          <input
            type='text'
            placeholder='Search here...'
          />

        </div>

      </div>

      {/* Right */}
      <div className='navbar-right'>

        {/* Notifications */}
        <div className='icon-btn notification-btn'>

          <FaBell />

          <span className='notification-badge'>
            3
          </span>

        </div>

        {/* Dark Mode */}
        <div
          className='icon-btn'
          onClick={() => {
          if (setDarkMode) {
              setDarkMode(!darkMode);
          }
        }}
        >
        {darkMode ? <FaSun /> : <FaMoon />}
        </div>

        {/* Admin */}
        <div className='profile-container'>

          <div
            className='profile'
            onClick={() => setShowMenu(!showMenu)}
          >
            Admin ▾
          </div>

          {showMenu && (

            <div className='dropdown-menu'>

              <div
                className='dropdown-item'
                onClick={() => navigate('/settings')}
              >
                Settings
              </div>

              <div
                className='dropdown-item logout-item'
                onClick={handleLogout}
              >
                Logout
              </div>

            </div>

          )}

        </div>

      </div>

    </div>

  );
}

export default Navbar;