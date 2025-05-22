import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Chat.css';

const Chat = () => {
  const { t } = useTranslation();
  const [message, setMessage] = useState('');
  const [messages] = useState([
    { id: 1, text: 'Hello! How can I help you today?', sender: 'agent' },
    { id: 2, text: 'I have a question about my order', sender: 'customer' },
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // TODO: Implement message sending logic
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="sidebar">
        <h3>{t('conversations')}</h3>
        <ul className="chat-list">
          <li className="chat-item active">
            <strong>Customer Support</strong><br />
            <small>Active conversation</small>
          </li>
          <hr />
          <li className="chat-item">
            <strong>Technical Support</strong><br />
            <small>Resolved</small>
          </li>
        </ul>
      </div>

      <div className="chat-area">
        <h3>{t('chat')}</h3>
        <div className="messages">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`message ${msg.sender === 'agent' ? 'left' : 'right'}`}
            >
              <div className="message-bubble">
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSendMessage} className="chat-form">
          <input
            type="text"
            placeholder={t('typeMessage')}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">{t('send')}</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
