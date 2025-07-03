import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import DashboardHome from './pages/DashboardHome';
// Import other pages as you create them

function AppRouter({ stats }) {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<DashboardHome stats={stats} />} />
          {/* Add routes for Employees, Leaves, Expenses, Attendance, Profile, Settings */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default AppRouter;
