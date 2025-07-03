import React, { useState } from 'react';

function Employees({ employees, onAddEmployee, onRemoveEmployee }) {
  const [name, setName] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onAddEmployee({ name: name.trim() });
      setName('');
    }
  };

  const handleEdit = (id, currentName) => {
    setEditingId(id);
    setEditName(currentName);
  };

  const handleEditSave = (id) => {
    if (editName.trim()) {
      // For now, just remove and add as a new employee (no backend)
      onRemoveEmployee(id);
      onAddEmployee({ name: editName.trim() });
      setEditingId(null);
      setEditName('');
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Employee Management</h2>
      <form onSubmit={handleAdd} className="flex gap-2 mb-6">
        <input
          className="border rounded px-3 py-2 flex-1"
          placeholder="Employee Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded font-bold">Add</button>
      </form>
      <ul className="divide-y">
        {employees.length === 0 && <li className="py-4 text-gray-400">No employees yet.</li>}
        {employees.map(emp => (
          <li key={emp.id} className="flex items-center justify-between py-3">
            {editingId === emp.id ? (
              <>
                <input
                  className="border rounded px-2 py-1 flex-1 mr-2"
                  value={editName}
                  onChange={e => setEditName(e.target.value)}
                />
                <button onClick={() => handleEditSave(emp.id)} className="bg-green-500 text-white px-3 py-1 rounded mr-2">Save</button>
                <button onClick={() => setEditingId(null)} className="text-gray-500">Cancel</button>
              </>
            ) : (
              <>
                <span className="flex-1">{emp.name}</span>
                <button onClick={() => handleEdit(emp.id, emp.name)} className="text-blue-600 mr-4">Edit</button>
                <button onClick={() => onRemoveEmployee(emp.id)} className="text-red-500">Remove</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Employees;
