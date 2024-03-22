import React, { useState, useEffect } from 'react';
import axios from 'axios';

const containerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const headingStyle = {
  fontSize: '24px',
  marginBottom: '20px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '16px',
};

const buttonStyle = {
  backgroundColor: '#007BFF',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const emailStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  marginBottom: '15px',
  borderRadius: '4px',
};

function Mailbox() {
  const [emails, setEmails] = useState([]);
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch emails from your backend API and update the state
    axios.get('/api/emails')
      .then(response => setEmails(response.data))
      .catch(error => console.error('Error fetching emails', error));
  }, []);

  const handleSendEmail = () => {
    // Send an email by making a POST request to your backend API
    axios.post('/api/send-email', { recipient, subject, message })
      .then(response => {
        // Update the state with the sent email
        setEmails([...emails, response.data]);
      })
      .catch(error => console.error('Error sending email', error));

    // Clear the form
    setRecipient('');
    setSubject('');
    setMessage('');
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Mailbox Application</h1>
      <div>
        <input
          type="text"
          placeholder="Recipient"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          style={inputStyle}
        />
      </div>
      <div>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={inputStyle}
        />
      </div>
      <div>
        <button onClick={handleSendEmail} style={buttonStyle}>
          Send Email
        </button>
      </div>
      <div>
        <h2>Inbox</h2>
        {emails.map((email, index) => (
          <div key={index} style={emailStyle}>
            <p>Recipient: {email.recipient}</p>
            <p>Subject: {email.subject}</p>
            <p>Message: {email.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mailbox
