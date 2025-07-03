import React from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'Dashboard', path: '/' },
  { name: 'Employees', path: '/employees' },
  { name: 'Leaves', path: '/leaves' },
  { name: 'Expenses', path: '/expenses' },
  { name: 'Attendance', path: '/attendance' },
  { name: 'Profile', path: '/profile' },
  { name: 'Settings', path: '/settings' },
];

function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-blue-700 text-white flex flex-col p-4">
        <div className="text-2xl font-bold mb-8">PiHR</div>
        <nav className="flex-1">
          {navItems.map(item => (
            <Link key={item.name} to={item.path} className="block py-2 px-4 rounded hover:bg-blue-600 mb-1">
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}

export default Layout;
