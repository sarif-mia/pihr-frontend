import React, { useState } from 'react';

const users = {
  admin: { password: 'admin123', role: 'admin' },
  user1: { password: 'user123', role: 'user' }
};

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const user = users[username];
    if (user && user.password === password) {
      onLogin({ username, role: user.role });
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded space-y-4 w-80">
        <h2 className="text-xl font-semibold text-center">Login</h2>
        <input className="w-full p-2 border rounded" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input className="w-full p-2 border rounded" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;