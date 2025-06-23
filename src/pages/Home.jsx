// src/pages/Home.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

function Home() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ padding: '20px' }}>
          <h2>Welcome to the Job Dashboard</h2>
        </div>
      </div>
    </>
  );
}

export default Home;
