import React, { useState } from 'react';

function Login({ onLogin, onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showRegister, setShowRegister] = useState(false);
  const [regUsername, setRegUsername] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regError, setRegError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please enter username and password');
      return;
    }
    onLogin(username, password, setError);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!regUsername || !regPassword) {
      setRegError('Please enter username and password');
      return;
    }
    onRegister(regUsername, regPassword, setRegError, () => {
      setShowRegister(false);
      setUsername(regUsername);
      setPassword(regPassword);
      setRegUsername('');
      setRegPassword('');
      setRegError('');
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {showRegister ? (
        <form onSubmit={handleRegister} className="bg-white p-8 rounded shadow-md w-80">
          <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
          {regError && <div className="text-red-500 mb-2 text-center">{regError}</div>}
          <input value={regUsername} onChange={e => setRegUsername(e.target.value)} placeholder="Username" className="w-full mb-3 px-3 py-2 border rounded" />
          <input value={regPassword} onChange={e => setRegPassword(e.target.value)} type="password" placeholder="Password" className="w-full mb-3 px-3 py-2 border rounded" />
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded font-bold">Register</button>
          <button type="button" onClick={() => setShowRegister(false)} className="w-full mt-2 text-blue-600 underline">Back to Login</button>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-80">
          <h1 className="text-2xl font-bold mb-4 text-center">PiHR Login</h1>
          {error && <div className="text-red-500 mb-2 text-center">{error}</div>}
          <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" className="w-full mb-3 px-3 py-2 border rounded" />
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" className="w-full mb-3 px-3 py-2 border rounded" />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-bold">Login</button>
          <button type="button" onClick={() => setShowRegister(true)} className="w-full mt-2 text-green-600 underline">Register</button>
        </form>
      )}
    </div>
  );
}

export default Login;
