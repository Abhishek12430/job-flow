// src/components/Notifications.jsx
import React, { useState, useEffect } from 'react';
import './pages.css';

const initialMockNotifications = [
  {
    id: 1,
    message: 'Job "Frontend Developer" was added successfully.',
    type: 'success',
    time: '5 minutes ago',
  },
  {
    id: 2,
    message: 'Job "QA Tester" was deleted.',
    type: 'danger',
    time: '2 hours ago',
  },
  {
    id: 3,
    message: 'Job "Backend Developer" was updated.',
    type: 'info',
    time: 'Yesterday',
  },
];

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  // Load from localStorage or default
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('notifications'));
    if (saved) {
      setNotifications(saved);
    } else {
      setNotifications(initialMockNotifications);
    }
  }, []);

  // Save to localStorage when changed
  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }, [notifications]);

  const handleClear = () => {
    setNotifications([]);
    localStorage.removeItem('notifications');
  };

  return (
    <div className='Notification-container'>
      <div className='note1'>
        <h2>Notifications</h2>
        <button className='clear-btn' onClick={handleClear}>
          Clear Notifications
        </button>
      </div>

      {notifications.length === 0 ? (
        <p style={{ marginTop: '15px', color: '#999' }}>
          No notifications to display.
        </p>
      ) : (
        <div className='note-list'>
          {notifications.map((note) => (
            <div key={note.id} className={`note-item ${note.type}`}>
              <p className='note-message'>{note.message}</p>
              <span className='note-time'>{note.time}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Notifications;
