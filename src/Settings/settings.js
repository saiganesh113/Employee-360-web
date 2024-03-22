import React, { useState } from 'react';
import './settings.css';
import Header from '../Header/header';

function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [language, setLanguage] = useState('English');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Implement logic to save dark mode preference (e.g., in local storage)
  };

  const togglePushNotifications = () => {
    setPushNotifications(!pushNotifications);
    // Implement logic to enable/disable push notifications (e.g., update user settings)
  };

  const changeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    // Implement logic to change the language (e.g., update user settings)
  };

  const handleEditProfile = () => {
    // Implement logic to navigate to the edit profile page (e.g., use a router)
  };

  const handleLogout = () => {
    // Implement logic for user logout (e.g., clear authentication token, redirect to login)
  };

  return (
    <>
      <div className='ss'>
        <div className={`settings-container ${darkMode ? 'dark-mode' : ''}`}>
          <Header />
          <h1>Account Settings</h1>
          <div className="settings-options">
            <div className="settings-option">
              <button onClick={handleEditProfile}>Edit Profile</button>
            </div>
            <div className="settings-option">
              <label>Language:</label>
              <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                {/* Add more language options as needed */}
              </select>
            </div>
            <div className="settings-option">
              <label>Push Notifications:</label>
              <input type="checkbox" checked={pushNotifications} onChange={togglePushNotifications} />
            </div>
            <div className="settings-option">
              <label>Dark Mode:</label>
              <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
            </div>
          </div>
          <h1 className='more'>More</h1>
          <div className="more-options">
            <div className="more-option">
              <button onClick={() => console.log('About Us clicked')}>About Us</button>
            </div>
            <div className="more-option">
              <button onClick={() => console.log('Privacy Policy clicked')}>Privacy Policy</button>
            </div>
            <div className="more-option">
              <button onClick={() => console.log('Terms and Conditions clicked')}>Terms and Conditions</button>
            </div>
            <div className="more-option">
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
