import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const liStyle = 'border-colorBrand500 border-b p-5 md:border-none md:p-0';

function DashboardNavListItems() {
  const [selectedTab, setSelectedTab] = useState('Dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to manage sidebar visibility

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <ul
      className="absolute right-0 top-24 w-1/5 space-y-5 border-y-2 border-colorBrand500 bg-colorGrey50 p-5
            pb-16 opacity-95"
    >
      <li
        className={`mb-2 ${selectedTab === 'Dashboard' ? 'bg-blue-500' : ''}`}
        onClick={() => handleTabClick('Dashboard')}
      >
        <a href="#" className="block rounded-full px-4 py-2">
          Dashboard
        </a>
      </li>
      <li
        className={`mb-2 ${selectedTab === 'Settings' ? 'bg-blue-500' : ''}`}
        onClick={() => handleTabClick('Settings')}
      >
        <a href="#" className="block rounded-full px-4 py-2">
          Settings
        </a>
      </li>
      <li
        className={`mb-2 ${
          selectedTab === 'Delete Account' ? 'bg-blue-500' : ''
        }`}
        onClick={() => handleTabClick('Delete Account')}
      >
        <a href="#" className="block rounded-full px-4 py-2">
          Delete Account
        </a>
      </li>
      <li
        className={`mb-2 ${selectedTab === 'Contact Us' ? 'bg-blue-500' : ''}`}
        onClick={() => handleTabClick('Contact Us')}
      >
        <a href="#" className="block rounded-full px-4 py-2">
          Contact Us
        </a>
      </li>
      <li
        className={`mb-2 ${selectedTab === 'Logout' ? 'bg-blue-500' : ''}`}
        onClick={() => handleTabClick('Logout')}
      >
        <a href="#" className="hover:colorRed700 block rounded-full px-4 py-2">
          Logout
        </a>
      </li>
      <li className="align-center flex gap-4">
        <a href="#" className="block rounded-full px-4 py-2">
          Switch Theme <ThemeToggle />
        </a>
      </li>
    </ul>
  );
}

export default DashboardNavListItems;
