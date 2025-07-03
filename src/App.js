import React, { useState } from 'react';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import AttendanceMarking from './components/AttendanceMarking';
import Notification from './components/Notification';

function App() {
  const [role, setRole] = useState(null); // 'admin' or 'user'
  const [user, setUser] = useState('User1');
  const [employees, setEmployees] = useState([]);
  const [leaves, setLeaves] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [notification, setNotification] = useState('');

  // Admin handlers
  const handleAddEmployee = (emp) => { setEmployees([...employees, { ...emp, id: Date.now() }]); setNotification('Employee added!'); };
  const handleRemoveEmployee = (id) => { setEmployees(employees.filter(e => e.id !== id)); setNotification('Employee removed!'); };
  const handleReconcileLeave = (id, status) => { setLeaves(leaves.map(l => l.id === id ? { ...l, status } : l)); setNotification(`Leave ${status}`); };
  const handleReconcileExpense = (id, status) => { setExpenses(expenses.map(e => e.id === id ? { ...e, status } : e)); setNotification(`Expense ${status}`); };

  // User handlers
  const handleSubmitLeave = (leave) => { setLeaves([...leaves, { ...leave, id: Date.now(), status: 'Pending' }]); setNotification('Leave request submitted!'); };
  const handleSubmitExpense = (expense) => { setExpenses([...expenses, { ...expense, id: Date.now(), status: 'Pending' }]); setNotification('Expense claim submitted!'); };
  const handleMarkAttendance = (entry) => { setAttendance([...attendance, entry]); setNotification('Attendance marked!'); };

  const handleLogout = () => setRole(null);
  const handleCloseNotification = () => setNotification('');

  if (!role) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">PiHR Login</h1>
        <button onClick={() => setRole('admin')} className="bg-blue-500 text-white px-4 py-2 rounded mb-2">Login as Admin</button>
        <button onClick={() => setRole('user')} className="bg-green-500 text-white px-4 py-2 rounded">Login as User</button>
      </div>
    );
  }

  return (
    <div>
      <Notification message={notification} onClose={handleCloseNotification} />
      {role === 'admin' ? (
        <>
          <AdminDashboard
            onLogout={handleLogout}
            employees={employees}
            onAddEmployee={handleAddEmployee}
            onRemoveEmployee={handleRemoveEmployee}
            leaves={leaves}
            expenses={expenses}
            onReconcileLeave={handleReconcileLeave}
            onReconcileExpense={handleReconcileExpense}
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Attendance Records</h2>
            <ul>
              {attendance.map((a, i) => (
                <li key={i}>{a.user} - {a.date}</li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div>
          <UserDashboard
            onLogout={handleLogout}
            onSubmitLeave={handleSubmitLeave}
            onSubmitExpense={handleSubmitExpense}
            leaves={leaves}
            expenses={expenses}
            user={user}
          />
          <AttendanceMarking onMark={handleMarkAttendance} attendance={attendance} user={user} />
        </div>
      )}
    </div>
  );
}

export default App;