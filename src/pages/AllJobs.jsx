// src/pages/AllJobs.jsx
import React, { useState, useEffect } from 'react';
import './pages.css';

function AllJobs() {
  const [jobs, setJobs] = useState([]);
  const [statusFilter, setStatusFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 4;

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem('jobs')) || [];
    setJobs(storedJobs);
  }, []);

  const handleDelete = (id) => {
    const updated = jobs.filter((job) => job.id !== id);
    setJobs(updated);
    localStorage.setItem('jobs', JSON.stringify(updated));
  };

  const handleEdit = (id) => {
    const selectedJob = jobs.find((job) => job.id === id);
    console.log('Edit job:', selectedJob);
  };

  const filteredJobs = jobs.filter((job) => {
    const matchStatus = statusFilter === 'All' || job.status === statusFilter;
    const matchSearch =
      job.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    return matchStatus && matchSearch;
  });

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const paginatedJobs = filteredJobs.slice(startIndex, startIndex + jobsPerPage);

  return (
    <div className="all-jobs-container">
      <div className="all-jobs-header">
        <h2>All Job Applications</h2>
        <div className="filter-search-container">
          <input
            type="text"
            placeholder="Search by position or company"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>

      <table className="jobs-table">
        <thead>
          <tr>
            <th>Position</th>
            <th>Company</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedJobs.map((job) => (
            <tr key={job.id}>
              <td>{job.position}</td>
              <td>{job.company}</td>
              <td>
                <span className={`badge ${job.status.toLowerCase()}`}>{job.status}</span>
              </td>
              <td>{job.date}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(job.id)}>✏️</button>
                <button className="delete-btn" onClick={() => handleDelete(job.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination-container">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`pagination-btn ${currentPage === i + 1 ? 'active' : ''}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AllJobs;
