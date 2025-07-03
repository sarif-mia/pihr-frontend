import React, { useState } from 'react';

function Profile({ user, onUpdateProfile }) {
  const [form, setForm] = useState(user || {});
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onUpdateProfile(form, setMessage);
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      {message && <div className="mb-2 text-green-600">{message}</div>}
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Name</label>
        <input name="name" value={form.name || ''} onChange={handleChange} className="w-full mb-4 px-3 py-2 border rounded" />
        <label className="block mb-2">Email</label>
        <input name="email" value={form.email || ''} onChange={handleChange} className="w-full mb-4 px-3 py-2 border rounded" />
        <label className="block mb-2">Password</label>
        <input name="password" type="password" value={form.password || ''} onChange={handleChange} className="w-full mb-4 px-3 py-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Update Profile</button>
      </form>
    </div>
  );
}

export default Profile;
