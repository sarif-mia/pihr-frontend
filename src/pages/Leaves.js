import React, { useState } from 'react';

function Leaves({ user, leaves, onSubmitLeave, onRemoveLeave }) {
  const [form, setForm] = useState({ type: '', startDate: '', endDate: '', reason: '' });
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.type || !form.startDate || !form.endDate || !form.reason) {
      setError('All fields are required');
      return;
    }
    onSubmitLeave({ ...form, employee: user });
    setForm({ type: '', startDate: '', endDate: '', reason: '' });
    setError('');
  };

  const myLeaves = leaves.filter(l => l.employee === user);

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Leave Management</h2>
      <form onSubmit={handleSubmit} className="mb-6 space-y-3">
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <select name="type" value={form.type} onChange={handleChange} className="w-full border rounded px-3 py-2">
          <option value="">Select leave type</option>
          <option value="sick">Sick Leave</option>
          <option value="vacation">Vacation Leave</option>
          <option value="emergency">Emergency Leave</option>
        </select>
        <input name="startDate" type="date" value={form.startDate} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        <input name="endDate" type="date" value={form.endDate} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        <textarea name="reason" value={form.reason} onChange={handleChange} placeholder="Reason" className="w-full border rounded px-3 py-2" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-bold">Submit Leave Request</button>
      </form>
      <h3 className="text-lg font-semibold mb-2">My Leave Requests</h3>
      <ul className="divide-y">
        {myLeaves.length === 0 && <li className="py-4 text-gray-400">No leave requests yet.</li>}
        {myLeaves.map(l => (
          <li key={l.id} className="flex items-center justify-between py-3">
            <div>
              <div className="font-medium">{l.type} Leave</div>
              <div className="text-sm text-gray-600">{l.startDate} - {l.endDate}</div>
              <div className="text-sm">{l.reason}</div>
              <div className="text-xs text-gray-500">Status: {l.status || 'Pending'}</div>
            </div>
            {(!l.status || l.status === 'Pending') && (
              <button onClick={() => onRemoveLeave(l.id)} className="text-red-500 ml-4">Cancel</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaves;
