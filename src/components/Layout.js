import React from 'react';
import { Link } from 'react-router-dom';

const adminNavItems = [
  { name: 'Dashboard', path: '/' },
  { name: 'Employees', path: '/employees' },
  { name: 'Leaves', path: '/leaves' },
  { name: 'Expenses', path: '/expenses' },
  { name: 'Attendance', path: '/attendance' },
  { name: 'Profile', path: '/profile' },
  { name: 'Settings', path: '/settings' },
];

const userNavItems = [
  { name: 'Dashboard', path: '/' },
  { name: 'Leaves', path: '/leaves' },
  { name: 'Expenses', path: '/expenses' },
  { name: 'Attendance', path: '/attendance' },
  { name: 'Profile', path: '/profile' },
  { name: 'Settings', path: '/settings' },
];

function Layout({ children, onLogout, role }) {
  const navItems = role === 'admin' ? adminNavItems : userNavItems;
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-blue-700 text-white flex flex-col p-4 shadow-lg">
        <div className="text-2xl font-extrabold mb-8 tracking-wide flex items-center gap-2">
          <span className="bg-white text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-bold">P</span>
          PiHR
        </div>
        <nav className="flex-1">
          {navItems.map(item => (
            <Link key={item.name} to={item.path} className="block py-2 px-4 rounded hover:bg-blue-600 mb-1 transition-colors font-medium">
              {item.name}
            </Link>
          ))}
        </nav>
        <button
          onClick={onLogout}
          className="mt-8 bg-gradient-to-r from-red-500 to-red-700 px-4 py-2 rounded shadow hover:from-red-600 hover:to-red-800 font-bold transition-all flex items-center gap-2 justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" />
          </svg>
          Logout
        </button>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}

export default Layout;
