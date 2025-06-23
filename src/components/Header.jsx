// src/components/Header.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './components.css';

function Header() {
  const userData = JSON.parse(localStorage.getItem('logged'))?.data;
  const userName = userData?.name || 'User';

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profileImg, setProfileImg] = useState(localStorage.getItem('profileImg') || '');
  const fileInputRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        localStorage.setItem('profileImg', reader.result);
        setProfileImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    localStorage.removeItem('profileImg');
    setProfileImg('');
  };

  const toggleDropdown = () => setDropdownOpen(prev => !prev);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <motion.header
      className="dashboard-header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="header-left">
        <h1>JobFlow Tracker</h1>
        <p className="subtitle">Manage your job applications effortlessly</p>
      </div>

      <div className="header-right" ref={dropdownRef}>
        <p className="welcome-msg">Welcome, {userName}</p>

        <div className="avatar-wrapper" onClick={toggleDropdown}>
          <img
            src={
              profileImg ||
              'https://cdn-icons-png.flaticon.com/512/149/149071.png'
            }
            alt="User Avatar"
            className="avatar"
          />

          {dropdownOpen && (
            <div className="dropdown-menu">
              
              <button onClick={() => fileInputRef.current.click()}>🖼 Change Profile</button>
              {profileImg && (
                <button onClick={handleRemoveImage}>❌ Remove Profile</button>
              )}
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleImageUpload}
              />
            </div>
          )}
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
