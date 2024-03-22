import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './chat.css';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');

  const fetchMessages = () => {
    axios.get('/api/message', {
      params: { sender: senderEmail, recipient: recipientEmail }
    })
      .then(response => {
        setMessages(response.data);
      })
      .catch(error => {
        console.error(`Error fetching messages: ${error}`);
      });
  };

  useEffect(() => {
    fetchMessages();
  }, [senderEmail, recipientEmail]);

  const sendMessage = () => {
    if (!newMessage || !senderEmail || !recipientEmail) {
      return;
    }

    const messageData = {
      sender: senderEmail,
      recipient: recipientEmail,
      text: newMessage,
    };

    axios.post('/api/sendMessage', messageData)
      .then(() => {
        // After successfully sending the message, fetch the updated message list
        fetchMessages();
        setNewMessage(''); // Clear the input field
      })
      .catch(error => {
        console.error(`Error sending the message: ${error}`);
      });
  };

  return (
    <div>
      <div className="chat-container">
        <div className="message-container">
          {messages.map((message, index) => (
            <div key={index} className={`message sent`}>
              {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage} className="message-input-form">
          <input
            type="text"
            placeholder="Sender's Email"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Recipient's Email"
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
