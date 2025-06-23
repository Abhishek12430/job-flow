// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Dashboard from './pages/Dashboard';
// import AllJobs from './pages/AllJobs';
// import AddJob from './pages/AddJob';
// import Notifications from './pages/Notifications';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/Login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/jobs" element={<AllJobs />} />
//         <Route path="/add-job" element={<AddJob />} />
//         <Route path="/notifications" element={<Notifications />} />
//       </Routes>
//       <ToastContainer position="top-right" autoClose={2000} />
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AllJobs from './pages/AllJobs';
import AddJob from './pages/AddJob';
import Notifications from './pages/Notifications';
import PrivateRoute from './utils/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* 🔓 Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 🔐 Protected Routes */}
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/jobs" element={<PrivateRoute><AllJobs /></PrivateRoute>} />
        <Route path="/add-job" element={<PrivateRoute><AddJob /></PrivateRoute>} />
        <Route path="/notifications" element={<PrivateRoute><Notifications /></PrivateRoute>} />
      </Routes>

      <ToastContainer position="top-right" autoClose={2000} />
    </Router>
  );
}

export default App;
