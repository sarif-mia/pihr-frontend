import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-600 p-4 text-white flex gap-4">
    <Link to="/" className="font-bold">PiHR</Link>
    <Link to="/employees">Employees</Link>
    <Link to="/payroll">Payroll</Link>
    <Link to="/tasks">Tasks</Link>
    <Link to="/expenses">Expenses</Link>
    <Link to="/tracking">Tracking</Link>
    <Link to="/login" className="ml-auto">Login</Link>
  </nav>
);

export default Navbar;
