// src/pages/AddJob.jsx
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';
import './pages.css';

function AddJob() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('Applied');
  const [note, setNote] = useState('');
  const [resumeName, setResumeName] = useState('');
  const [resumeData, setResumeData] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumeName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setResumeData(reader.result);
        localStorage.setItem('uploadedResume', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveFile = () => {
    setResumeData(null);
    setResumeName('');
    localStorage.removeItem('uploadedResume');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newJob = {
      id: Date.now(),
      company,
      position,
      location,
      status,
      note,
      date: selectedDate.toISOString().split('T')[0],
      resumeName,
      resumeData
    };

    const existing = JSON.parse(localStorage.getItem('jobs')) || [];
    localStorage.setItem('jobs', JSON.stringify([...existing, newJob]));

    // ✅ Clear form fields
    setCompany('');
    setPosition('');
    setLocation('');
    setStatus('Applied');
    setNote('');
    setResumeName('');
    setResumeData(null);
    setSelectedDate(new Date());

    // ✅ Optional feedback
    toast.success('Job added successfully!');
  };

  return (
    <div className="addjob-container">
      <ToastContainer />
      <div className="addjob-header">
        <h2>Add Job</h2>
      </div>

      <form className="addjob-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="form-field">
            <label>Company</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label>Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option>Applied</option>
              <option>Interview</option>
              <option>Offer</option>
              <option>Rejected</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <div className="form-field">
            <label>Position</label>
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label>Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="form-field full-width">
            <label>Application Date</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="yyyy-MM-dd"
              className="custom-date-picker"
            />
          </div>
        </div>

        <div className="form-group">
          <div className="form-field full-width">
            <label>Note</label>
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="form-field full-width">
            <label>Upload Resume</label>
            <div className="custom-file-upload">
              <label htmlFor="resumeUpload" className="upload-btn">
                📎 {resumeName ? 'Replace File' : 'Choose File'}
              </label>
              <input
                id="resumeUpload"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
                onClick={(e) => {
                  e.target.value = null;
                }}
              />
              {resumeName && (
                <>
                  <p style={{ marginTop: '8px', color: '#1d4ed8' }}>
                    ✅ Uploaded: {resumeName}
                  </p>
                  <button
                    type="button"
                    onClick={handleRemoveFile}
                    className="remove-file-btn"
                  >
                    ❌ Remove File
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default AddJob;
