import React, { useState } from 'react';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';

function App() {
  const [role, setRole] = useState('admin'); // 'admin' or 'user'
  const [user, setUser] = useState('User1');
  // Shared state for demo
  const [employees, setEmployees] = useState([]);
  const [leaves, setLeaves] = useState([]);
  const [expenses, setExpenses] = useState([]);

  // Admin handlers
  const handleAddEmployee = (emp) => setEmployees([...employees, { ...emp, id: Date.now() }]);
  const handleRemoveEmployee = (id) => setEmployees(employees.filter(e => e.id !== id));
  const handleReconcileLeave = (id, status) => setLeaves(leaves.map(l => l.id === id ? { ...l, status } : l));
  const handleReconcileExpense = (id, status) => setExpenses(expenses.map(e => e.id === id ? { ...e, status } : e));

  // User handlers
  const handleSubmitLeave = (leave) => setLeaves([...leaves, { ...leave, id: Date.now(), status: 'Pending' }]);
  const handleSubmitExpense = (expense) => setExpenses([...expenses, { ...expense, id: Date.now(), status: 'Pending' }]);

  const handleLogout = () => setRole(null);

  if (!role) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">PiHR Login</h1>
        <button onClick={() => setRole('admin')} className="bg-blue-500 text-white px-4 py-2 rounded mb-2">Login as Admin</button>
        <button onClick={() => setRole('user')} className="bg-green-500 text-white px-4 py-2 rounded">Login as User</button>
      </div>
    );
  }

  return role === 'admin' ? (
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
  ) : (
    <UserDashboard
      onLogout={handleLogout}
      onSubmitLeave={handleSubmitLeave}
      onSubmitExpense={handleSubmitExpense}
      leaves={leaves}
      expenses={expenses}
      user={user}
    />
  );
}

export default App;