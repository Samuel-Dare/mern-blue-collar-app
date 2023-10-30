import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import { useDashboardSidebar } from '../context/DashboardSidebarContext';

const liStyle = 'border-colorBrand500 border-b p-5 md:border-none md:p-0';

function DashboardSidebar() {
  const { selectedSidebarItem, onSidebarItemClick } = useDashboardSidebar();

  return (
    <ul
      className="h-screen w-1/4 space-y-5 bg-colorGrey50 py-5 ps-20
             shadow-sm"
    >
      <li
        className={`mb-2 ${
          selectedSidebarItem === 'Dashboard' ? 'bg-blue-500' : ''
        }`}
        onClick={() => onSidebarItemClick('Dashboard')}
      >
        <a href="#" className="block rounded-full px-4 py-2">
          Dashboard
        </a>
      </li>
      <li
        className={`mb-2 ${
          selectedSidebarItem === 'Settings' ? 'bg-blue-500' : ''
        }`}
        onClick={() => onSidebarItemClick('Settings')}
      >
        <a href="#" className="block rounded-full px-4 py-2">
          Settings
        </a>
      </li>
      <li
        className={`mb-2 ${
          selectedSidebarItem === 'Contact Us' ? 'bg-blue-500' : ''
        }`}
        onClick={() => onSidebarItemClick('Contact Us')}
      >
        <a href="#" className="block rounded-full px-4 py-2">
          Contact Us
        </a>
      </li>
      <li
        className={`mb-2 ${
          selectedSidebarItem === 'Logout' ? 'bg-blue-500' : ''
        }`}
        onClick={() => onSidebarItemClick('Logout')}
      >
        <a href="#" className="hover:colorRed700 block rounded-full px-4 py-2">
          Logout
        </a>
      </li>
      <li
        className={`mb-2 ${
          selectedSidebarItem === 'Delete Account' ? 'bg-blue-500' : ''
        }`}
        onClick={() => onSidebarItemClick('Delete Account')}
      >
        <a href="#" className="block rounded-full px-4 py-2">
          Delete Account
        </a>
      </li>
    </ul>
  );
}

export default DashboardSidebar;
