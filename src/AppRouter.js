import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
// Import other pages as you create them

const AppRouter = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      {/* Add routes for Employees, Payroll, Tasks, Expenses, Tracking, Login */}
    </Routes>
  </Router>
);

export default AppRouter;
