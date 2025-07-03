import React, { useState } from 'react';

function AdminDashboard({ onLogout, employees, onAddEmployee, onRemoveEmployee, leaves, expenses, onReconcileLeave, onReconcileExpense }) {
  const [tab, setTab] = useState('employees');
  const [empName, setEmpName] = useState('');

  // Handlers
  const addEmployee = (e) => {
    e.preventDefault();
    if (empName) {
      onAddEmployee({ name: empName });
      setEmpName('');
    }
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button onClick={onLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </div>
      <div className="mb-4 flex gap-2">
        <button onClick={() => setTab('employees')} className={`px-3 py-1 rounded ${tab==='employees' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Employees</button>
        <button onClick={() => setTab('leaves')} className={`px-3 py-1 rounded ${tab==='leaves' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Leave</button>
        <button onClick={() => setTab('expenses')} className={`px-3 py-1 rounded ${tab==='expenses' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Expenses</button>
      </div>
      {/* Employees Tab */}
      {tab === 'employees' && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Employee Management</h2>
          <form onSubmit={addEmployee} className="mb-4 flex gap-2">
            <input value={empName} onChange={e => setEmpName(e.target.value)} placeholder="Employee Name" className="border px-2 py-1 rounded" />
            <button type="submit" className="bg-green-500 text-white px-3 py-1 rounded">Add</button>
          </form>
          <ul>
            {employees.map(emp => (
              <li key={emp.id} className="flex justify-between items-center border-b py-1">
                {emp.name}
                <button onClick={() => onRemoveEmployee(emp.id)} className="text-red-500">Remove</button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* Leave Tab */}
      {tab === 'leaves' && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Leave Management</h2>
          <ul>
            {leaves.map(l => (
              <li key={l.id} className="flex justify-between items-center border-b py-1">
                {l.employee} - {l.reason}
                <span className={`ml-2 text-xs ${l.status === 'Approved' ? 'text-green-600' : l.status === 'Denied' ? 'text-red-600' : 'text-gray-500'}`}>[{l.status || 'Pending'}]</span>
                {l.status === 'Pending' && (
                  <>
                    <button onClick={() => onReconcileLeave(l.id, 'Approved')} className="ml-2 bg-green-500 text-white px-2 py-1 rounded">Approve</button>
                    <button onClick={() => onReconcileLeave(l.id, 'Denied')} className="ml-2 bg-red-500 text-white px-2 py-1 rounded">Deny</button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* Expenses Tab */}
      {tab === 'expenses' && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Expense Management</h2>
          <ul>
            {expenses.map(exp => (
              <li key={exp.id} className="flex justify-between items-center border-b py-1">
                {exp.employee} - ${exp.amount}
                <span className={`ml-2 text-xs ${exp.status === 'Approved' ? 'text-green-600' : exp.status === 'Denied' ? 'text-red-600' : 'text-gray-500'}`}>[{exp.status || 'Pending'}]</span>
                {exp.status === 'Pending' && (
                  <>
                    <button onClick={() => onReconcileExpense(exp.id, 'Approved')} className="ml-2 bg-green-500 text-white px-2 py-1 rounded">Approve</button>
                    <button onClick={() => onReconcileExpense(exp.id, 'Denied')} className="ml-2 bg-red-500 text-white px-2 py-1 rounded">Deny</button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;