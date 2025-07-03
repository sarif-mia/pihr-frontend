import React from 'react';

function DashboardHome({ stats }) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded shadow p-6 text-center">
          <div className="text-2xl font-bold text-blue-700">{stats.employees}</div>
          <div className="text-gray-500">Employees</div>
        </div>
        <div className="bg-white rounded shadow p-6 text-center">
          <div className="text-2xl font-bold text-green-700">{stats.leaves}</div>
          <div className="text-gray-500">Pending Leaves</div>
        </div>
        <div className="bg-white rounded shadow p-6 text-center">
          <div className="text-2xl font-bold text-yellow-700">{stats.expenses}</div>
          <div className="text-gray-500">Pending Expenses</div>
        </div>
        <div className="bg-white rounded shadow p-6 text-center">
          <div className="text-2xl font-bold text-purple-700">{stats.attendance}</div>
          <div className="text-gray-500">Attendance Today</div>
        </div>
      </div>
      <div className="bg-white rounded shadow p-6">Welcome to your HR dashboard. Use the sidebar to manage employees, leaves, expenses, and more.</div>
    </div>
  );
}

export default DashboardHome;
