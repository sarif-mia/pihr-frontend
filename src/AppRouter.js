import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import DashboardHome from './pages/DashboardHome';
import UserDashboardHome from './pages/UserDashboardHome';
import Employees from './pages/Employees';
import Leaves from './pages/Leaves';
import Expenses from './pages/Expenses';
import Attendance from './pages/Attendance';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function AppRouter({ stats, role, user, employees, leaves, expenses, attendance, onAddEmployee, onRemoveEmployee, onMarkAttendance, onSubmitLeave, onRemoveLeave, onSubmitExpense, onRemoveExpense, onLogout }) {
  return (
    <Router>
      <Layout onLogout={onLogout} role={role}>
        <Routes>
          <Route path="/" element={role === 'admin' ? <DashboardHome stats={stats} /> : <UserDashboardHome user={user} leaves={leaves} expenses={expenses} attendance={attendance} onMarkAttendance={() => onMarkAttendance({ user, date: new Date().toISOString().slice(0, 10) })} onRequestLeave={() => {}} onRequestExpense={() => {}} />} />
          <Route path="/employees" element={<Employees employees={employees} onAddEmployee={onAddEmployee} onRemoveEmployee={onRemoveEmployee} />} />
          <Route path="/leaves" element={<Leaves user={user} leaves={leaves} onSubmitLeave={onSubmitLeave} onRemoveLeave={onRemoveLeave} />} />
          <Route path="/expenses" element={<Expenses user={user} expenses={expenses} onSubmitExpense={onSubmitExpense} onRemoveExpense={onRemoveExpense} />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default AppRouter;
