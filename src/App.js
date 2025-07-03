import React, { useState } from 'react';
import AppRouter from './AppRouter';
import Notification from './components/Notification';
import Login from './pages/Login';

function App() {
  const [role, setRole] = useState(null); // 'admin' or 'user'
  const [user, setUser] = useState('');
  const [employees, setEmployees] = useState([]);
  const [leaves, setLeaves] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [notification, setNotification] = useState('');
  const [users, setUsers] = useState([{ username: 'admin', password: 'admin', role: 'admin' }, { username: 'user', password: 'user', role: 'user' }]);

  // Login handler
  const handleLogin = (username, password, setError) => {
    const found = users.find(u => u.username === username && u.password === password);
    if (found) {
      setRole(found.role);
      setUser(found.username);
    } else {
      setError('Invalid username or password');
    }
  };

  // Register handler
  const handleRegister = (username, password, setError, onSuccess) => {
    if (users.some(u => u.username === username)) {
      setError('Username already exists');
      return;
    }
    const newUser = { username, password, role: 'user' };
    setUsers([...users, newUser]);
    setNotification('Registration successful! You can now log in.');
    if (onSuccess) onSuccess();
  };

  // Handlers (no duplicates)
  const handleAddEmployee = (emp) => { setEmployees([...employees, { ...emp, id: Date.now() }]); setNotification('Employee added!'); };
  const handleRemoveEmployee = (id) => { setEmployees(employees.filter(e => e.id !== id)); setNotification('Employee removed!'); };
  const handleReconcileLeave = (id, status) => { setLeaves(leaves.map(l => l.id === id ? { ...l, status } : l)); setNotification(`Leave ${status}`); };
  const handleReconcileExpense = (id, status) => { setExpenses(expenses.map(e => e.id === id ? { ...e, status } : e)); setNotification(`Expense ${status}`); };
  const handleSubmitLeave = (leave) => { setLeaves([...leaves, { ...leave, id: Date.now(), status: 'Pending' }]); setNotification('Leave request submitted!'); };
  const handleRemoveLeave = (id) => { setLeaves(leaves.filter(l => l.id !== id)); setNotification('Leave request cancelled!'); };
  const handleSubmitExpense = (expense) => { setExpenses([...expenses, { ...expense, id: Date.now(), status: 'Pending' }]); setNotification('Expense claim submitted!'); };
  const handleRemoveExpense = (id) => { setExpenses(expenses.filter(e => e.id !== id)); setNotification('Expense claim cancelled!'); };
  const handleMarkAttendance = (entry) => { setAttendance([...attendance, entry]); setNotification('Attendance marked!'); };
  const handleLogout = () => { setRole(null); setUser(''); };
  const handleCloseNotification = () => setNotification('');

  // Dashboard stats
  const stats = {
    employees: employees.length,
    leaves: leaves.filter(l => l.status === 'Pending').length,
    expenses: expenses.filter(e => e.status === 'Pending').length,
    attendance: attendance.filter(a => a.date === new Date().toISOString().slice(0, 10)).length,
  };

  if (!role) {
    return <Login onLogin={handleLogin} onRegister={handleRegister} />;
  }

  return (
    <>
      <Notification message={notification} onClose={handleCloseNotification} />
      <AppRouter
        stats={stats}
        role={role}
        user={user}
        employees={employees}
        leaves={leaves}
        expenses={expenses}
        attendance={attendance}
        onAddEmployee={handleAddEmployee}
        onRemoveEmployee={handleRemoveEmployee}
        onReconcileLeave={handleReconcileLeave}
        onReconcileExpense={handleReconcileExpense}
        onSubmitLeave={handleSubmitLeave}
        onRemoveLeave={handleRemoveLeave}
        onSubmitExpense={handleSubmitExpense}
        onRemoveExpense={handleRemoveExpense}
        onMarkAttendance={handleMarkAttendance}
        onLogout={handleLogout}
      />
    </>
  );
}

export default App;