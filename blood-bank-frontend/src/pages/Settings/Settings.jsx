import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import './Settings.css';

function Settings() {

  return (
    <div className='settings-page'>

      <Sidebar />

      <div className='settings-content'>

        <Navbar />

        <h1 className='page-title'>
          Settings
        </h1>

        {/* Profile Settings */}
        <div className='settings-card'>

          <h2>Profile Settings</h2>

          <input
            type='text'
            placeholder='Admin Name'
          />

          <input
            type='email'
            placeholder='Admin Email'
          />

          <button>
            Update Profile
          </button>

        </div>

        {/* Password Settings */}
        <div className='settings-card'>

          <h2>Change Password</h2>

          <input
            type='password'
            placeholder='Current Password'
          />

          <input
            type='password'
            placeholder='New Password'
          />

          <input
            type='password'
            placeholder='Confirm Password'
          />

          <button>
            Change Password
          </button>

        </div>

        {/* Preferences */}
        <div className='settings-card'>

          <h2>Preferences</h2>

          <div className='setting-option'>
            <label>Email Notifications</label>

            <input type='checkbox' />
          </div>

          <div className='setting-option'>
            <label>Dark Mode</label>

            <input type='checkbox' />
          </div>

        </div>

        {/* Logout */}
        <div className='settings-card logout-card'>

          <h2>Logout</h2>

          <button className='logout-btn'>
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}

export default Settings;