// src/components/Sidebar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './components.css';
function Sidebar({ handleOpen }) {
  const navigate = useNavigate();

  const handleChange1 = () => handleOpen(true, false, false, false);
  const handleChange2 = () => handleOpen(false, true, false, false);
  const handleChange3 = () => handleOpen(false, false, true, false);
  const handleChange4 = () => handleOpen(false, false, false, true);

  const handleLogout = () => {
    localStorage.removeItem('logged');
    toast.success('Logged out successfully!');
    navigate('/');
  };

  return (
    <div className="sidebar-inner">
      <div className="sidebar-links">
        <h4 onClick={handleChange1}>Dashboard</h4>
        <h4 onClick={handleChange2}>All Jobs</h4>
        <h4 onClick={handleChange3}>Add Job</h4>
        <h4 onClick={handleChange4}>Notifications</h4>
      </div>
      <div className="sidebar-logout">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Sidebar;
