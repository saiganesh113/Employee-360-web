import React, { useState } from 'react';
import Header from '../Header/header';
import Mailbox from '../Mailbox';
import './communication.css';
import Chat from '../Chat/chat';
import Mettings from '../Mettings';

function Communication() {
  const [activeTab, setActiveTab] = useState('chat');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='cc'>
      <Header />
      <div className='tabs'>
        <button
          className={`tab-button ${activeTab === 'chat' ? 'active' : ''}`}
          onClick={() => handleTabChange('chat')}
        >
          Chat
        </button>
        <button
          className={`tab-button ${activeTab === 'mailbox' ? 'active' : ''}`}
          onClick={() => handleTabChange('mailbox')}
        >
          Mailbox
        </button>
        <button
          className={`tab-button ${activeTab === 'calendar' ? 'active' : ''}`}
          onClick={() => handleTabChange('calendar')}
        >
          Calendar
        </button>
      </div>
      {activeTab === 'chat' && <Chat />}
      {activeTab === 'mailbox' && <Mailbox/>}
      {activeTab === 'calendar' && <Mettings/>}
    </div>
  );
}

export default Communication;
