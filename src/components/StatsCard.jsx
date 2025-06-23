// src/components/StatsCard.jsx
import React, { useEffect, useState } from 'react';
import './components.css';

function StatsCard() {
  const [stats, setStats] = useState({
    total: 0,
    interview: 0,
    offer: 0,
  });

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem('jobs')) || [];

    const total = storedJobs.length;
    const interview = storedJobs.filter((job) => job.status === 'Interview').length;
    const offer = storedJobs.filter((job) => job.status === 'Offer').length;

    setStats({ total, interview, offer });
  }, []);

  return (
    <div className="stat-cards">
      <div className="stat-card" style={{ backgroundColor: '#1e90ff' }}>
        <div className="stat-icon">📄</div>
        <div className="stat-content">
          <h4>Total Applications</h4>
          <p>{stats.total}</p>
        </div>
      </div>

      <div className="stat-card" style={{ backgroundColor: '#28a745' }}>
        <div className="stat-icon">🎤</div>
        <div className="stat-content">
          <h4>Interviews</h4>
          <p>{stats.interview}</p>
        </div>
      </div>

      <div className="stat-card" style={{ backgroundColor: '#ffc107' }}>
        <div className="stat-icon">🎉</div>
        <div className="stat-content">
          <h4>Offers</h4>
          <p>{stats.offer}</p>
        </div>
      </div>
    </div>
  );
}

export default StatsCard;
