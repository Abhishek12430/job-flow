import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import StatsCard from '../components/StatsCard';
import Chart from '../components/Chart';
import Applications from '../components/Applications';
import AllJobs from './AllJobs';
import AddJob from './AddJob';
import Notifications from './Notifications';
import './pages.css';
import { motion } from 'framer-motion';

function Dashboard() {
  const [dashboard, setDashboard] = useState(true);
  const [alljobs, setAllJobs] = useState(false);
  const [addjob, setAddJobs] = useState(false);
  const [notifications, setNotifications] = useState(false);

  const handleOpen = (dashboard, alljobs, addjob, notifications) => {
    setDashboard(dashboard);
    setAllJobs(alljobs);
    setAddJobs(addjob);
    setNotifications(notifications);
  };

  return (
    <div className="Dashmain">
      <div className="sidehead">
        <Sidebar handleOpen={handleOpen} />
      </div>

      <motion.div
        className="DashContain"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="profile">
          <Header />
        </div>

        {/* -------------------- */}
        {dashboard && (
          <>
            <motion.div
              className="dashdiv1"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <StatsCard />
            </motion.div>

            <div className="dashdiv2">
              <motion.div
                className="dashdiv21"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Chart />
              </motion.div>

              <motion.div
                className="dashdiv22"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Applications />
              </motion.div>
            </div>
          </>
        )}

        {alljobs && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AllJobs />
          </motion.div>
        )}

        {addjob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AddJob />
          </motion.div>
        )}

        {notifications && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Notifications />
          </motion.div>
        )}
        {/* ------------------------ */}
      </motion.div>
    </div>
  );
}

export default Dashboard;
