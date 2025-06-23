// src/pages/Applications.jsx
import React, { useEffect, useState } from 'react';
import './components.css';

function Applications() {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
    setJobData(jobs);
  }, []);

  return (
    <div className="app-overview">
      <h3>Application Overview</h3>
      <ul>
        {jobData.map((job) => (
          <li key={job.id}>
            <div>
              <strong>{job.position}</strong> at <span>{job.company}</span>
            </div>
            <span className={`status ${job.status.toLowerCase()}`}>{job.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Applications;
