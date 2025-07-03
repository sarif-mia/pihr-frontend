import React from 'react';

function UserDashboardHome({ user, leaves, expenses, attendance, onMarkAttendance, onRequestLeave, onRequestExpense }) {
  const today = new Date().toISOString().slice(0, 10);
  const alreadyMarked = attendance.some(a => a.user === user && a.date === today);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome, {user}!</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded shadow p-6 text-center">
          <div className="text-lg font-semibold mb-2">Attendance</div>
          {alreadyMarked ? (
            <div className="text-green-600">Marked for today</div>
          ) : (
            <button onClick={onMarkAttendance} className="bg-blue-500 text-white px-4 py-2 rounded">Mark Attendance</button>
          )}
          <ul className="mt-2 text-sm text-gray-600">
            {attendance.filter(a => a.user === user).map((a, i) => (
              <li key={i}>{a.date}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded shadow p-6 text-center">
          <div className="text-lg font-semibold mb-2">Leave Requests</div>
          <button onClick={onRequestLeave} className="bg-green-500 text-white px-4 py-2 rounded mb-2">Request Leave</button>
          <ul className="mt-2 text-sm text-gray-600">
            {leaves.filter(l => l.employee === user).map((l, i) => (
              <li key={i}>{l.reason} <span className="text-xs">[{l.status || 'Pending'}]</span></li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded shadow p-6 text-center">
          <div className="text-lg font-semibold mb-2">Expense Claims</div>
          <button onClick={onRequestExpense} className="bg-yellow-500 text-white px-4 py-2 rounded mb-2">Request Expense</button>
          <ul className="mt-2 text-sm text-gray-600">
            {expenses.filter(e => e.employee === user).map((e, i) => (
              <li key={i}>${e.amount} <span className="text-xs">[{e.status || 'Pending'}]</span></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserDashboardHome;
