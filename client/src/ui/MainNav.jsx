import React from 'react';
import ThemeToggle from './ThemeToggle';
import { NavLink } from 'react-router-dom';

export default function MainNav() {
  return (
    <nav className="bg-colorAccent flex list-none justify-between p-10">
      <div>
        <li>
          <NavLink to="/">BlueCollars</NavLink>
        </li>
      </div>

      <div className="flex justify-between space-x-5">
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </div>
    </nav>
  );
}
