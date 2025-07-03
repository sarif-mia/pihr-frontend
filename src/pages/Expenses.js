import React, { useState } from 'react';

function Expenses({ user, expenses, onSubmitExpense, onRemoveExpense }) {
  const [form, setForm] = useState({ type: '', amount: '', dateIncurred: '', description: '' });
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.type || !form.amount || !form.dateIncurred || !form.description) {
      setError('All fields are required');
      return;
    }
    onSubmitExpense({ ...form, employee: user, amount: parseFloat(form.amount) });
    setForm({ type: '', amount: '', dateIncurred: '', description: '' });
    setError('');
  };

  const myExpenses = expenses.filter(e => e.employee === user);

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Expense Claims</h2>
      <form onSubmit={handleSubmit} className="mb-6 space-y-3">
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <select name="type" value={form.type} onChange={handleChange} className="w-full border rounded px-3 py-2">
          <option value="">Select expense type</option>
          <option value="travel">Travel</option>
          <option value="food">Food</option>
          <option value="supplies">Supplies</option>
        </select>
        <input name="amount" type="number" min="0" value={form.amount} onChange={handleChange} placeholder="Amount" className="w-full border rounded px-3 py-2" />
        <input name="dateIncurred" type="date" value={form.dateIncurred} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full border rounded px-3 py-2" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-bold">Submit Expense</button>
      </form>
      <h3 className="text-lg font-semibold mb-2">My Expense Claims</h3>
      <ul className="divide-y">
        {myExpenses.length === 0 && <li className="py-4 text-gray-400">No expense claims yet.</li>}
        {myExpenses.map(e => (
          <li key={e.id} className="flex items-center justify-between py-3">
            <div>
              <div className="font-medium">{e.type} Expense</div>
              <div className="text-sm text-gray-600">Amount: ${e.amount} | Date: {e.dateIncurred}</div>
              <div className="text-sm">{e.description}</div>
              <div className="text-xs text-gray-500">Status: {e.status || 'Pending'}</div>
            </div>
            {(!e.status || e.status === 'Pending') ? (
              <button onClick={() => onRemoveExpense(e.id)} className="text-red-500 ml-4">Cancel</button>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Expenses;
