import React, { useState } from 'react';
import { Helmet} from 'react-helmet';
import Dashboard from './Dashboard/dashboard';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Communication from './Communication/communication';
import TrainingandDevelopment from './TrainingandDevelopement/traininganddevelopment';
import ChangePassword from './SecurityandControl/ChangePassword';
import Settings from './Settings/settings';
import HelpandFAQ from './HelpandFAQ/helpandfaq';

function App() {
  const [dashboardActive, setDashboardActive] = useState(true);
  const [communicationActive, setCommunicationActive] = useState(false);
  const [trainingActive, setTrainingActive] = useState(false);
  const [securityActive, setSecurityActive] = useState(false);
  const [settingsActive, setSettingsActive] = useState(false);
  const [helpAndFAQActive, setHelpAndFAQActive] = useState(false);

  const handleDashboardClick = () => {
    setDashboardActive(true);
    setCommunicationActive(false);
    setTrainingActive(false);
    setSecurityActive(false);
    setSettingsActive(false);
    setHelpAndFAQActive(false);
  };

  const handleCommunicationClick = () => {
    setDashboardActive(false);
    setCommunicationActive(true);
    setTrainingActive(false);
    setSecurityActive(false);
    setSettingsActive(false);
    setHelpAndFAQActive(false);
  };

  const handleTrainingClick = () => {
    setDashboardActive(false);
    setCommunicationActive(false);
    setTrainingActive(true);
    setSecurityActive(false);
    setSettingsActive(false);
    setHelpAndFAQActive(false);
  };

  const handleSecurityClick = () => {
    setDashboardActive(false);
    setCommunicationActive(false);
    setTrainingActive(false);
    setSecurityActive(true);
    setSettingsActive(false);
    setHelpAndFAQActive(false);
  };

  const handleSettingsClick = () => {
    setDashboardActive(false);
    setCommunicationActive(false);
    setTrainingActive(false);
    setSecurityActive(false);
    setSettingsActive(true);
    setHelpAndFAQActive(false);
  };

  const handleHelpAndFAQClick = () => {
    setDashboardActive(false);
    setCommunicationActive(false);
    setTrainingActive(false);
    setSecurityActive(false);
    setSettingsActive(false);
    setHelpAndFAQActive(true);
  };

  return (
    <div className="app-container">
      <BrowserRouter>
      <Helmet/>
        <nav className="left-sidebar">
          <br />
          <div className="user-info">
            <img
              src="user.png"
              style={{ width: "80px", height: "80px" }}
              alt="Mr. User"
            />
            <div className="user-name">Mr. USER</div>
          </div>
          <br />
          <ul className="nav-list">
            <li className={`nav-item ${dashboardActive ? 'active' : ''}`}>
              <Link to="/dashboard" onClick={handleDashboardClick}>
                Dashboard
              </Link>
            </li>
            <li className={`nav-item ${communicationActive ? 'active' : ''}`}>
              <Link to="/communication" onClick={handleCommunicationClick}>
                Communication
              </Link>
            </li>
            <li className={`nav-item ${trainingActive ? 'active' : ''}`}>
              <Link to="/TrainingandDevelopment" onClick={handleTrainingClick}>
                Training & Development
              </Link>
            </li>
            <li className={`nav-item ${securityActive ? 'active' : ''}`}>
              <Link to="/SecurityandControl" onClick={handleSecurityClick}>
                Security and Control
              </Link>
            </li>
            <li className={`nav-item ${settingsActive ? 'active' : ''}`}>
              <Link to="/Settings" onClick={handleSettingsClick}>
                Settings
              </Link>
            </li>
            <li className={`nav-item ${helpAndFAQActive ? 'active' : ''}`}>
              <Link to="/HelpandFAQ" onClick={handleHelpAndFAQClick}>
                Help & FAQ
              </Link>
            </li>
          </ul>
        </nav>
        <main className="main-content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path='/communication' element={<Communication />} />
            <Route path='/TrainingandDevelopment' element={<TrainingandDevelopment/>} />
            <Route path='/securityandcontrol' element={<ChangePassword/>} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/HelpandFAQ' element={<HelpandFAQ/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
