# 💼 JobFlow – Job Application Tracker

**JobFlow** is a simple and responsive job tracking app that helps you manage your job applications, built using React, Vite, and localStorage. This project is ideal for beginners practicing frontend development with CRUD operations.

---

## 🚀 Tech Stack

- **Frontend**: React + Vite
- **Routing**: React Router DOM
- **State Management**: useState, useEffect
- **Storage**: localStorage (for job data, authentication)
- **Styling**: Custom CSS
- **UI Animation**: Framer Motion
- **Notifications**: React Toastify

---

## ✨ Features

- 🔐 Login and Logout functionality
- ➕ Add new job application
- 📋 View all added jobs in "All Jobs" page
- 📂 View applied jobs in "Applications" page
- 🔁 Update or delete existing jobs
- 📊 Stats card dashboard
- 🧭 Sidebar and Header navigation
- 👤 Profile image with dropdown (View / Change profile)
- 📱 Fully responsive UI (mobile to desktop)

---

## 📁 Folder Structure

├── jobflow-client/ # Frontend Project
│ ├── public/ # Static assets and redirects
│ │ ├── index.html
│ │ └── _redirects
│ ├── src/
│ │ ├── assets/ # Images and icons
│ │ ├── components/ # Reusable UI components (Sidebar, Header, etc.)
│ │ ├── pages/ # Pages like Dashboard, AddJob, AllJobs, etc.
│ │ ├── context/ # AuthProvider and context setup
│ │ ├── App.jsx # App component with routes
│ │ └── main.jsx # App entry point
│ ├── package.json
│ └── vite.config.js



---

## 🛠️ Installation & Running Locally

Follow these steps to set up the project locally:

### 1. **Clone the Repository**

```bash
git clone https://github.com/your-username/jobflow.git
cd jobflow/jobflow-client

### 1. **Install Dependencies**
npm install

##Run the App
npm run dev
