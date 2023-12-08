import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import { useDashboardSidebar } from '../context/DashboardSidebarContext';
import { useScreenSize } from '../context/ScreenSize';

const linkStyle = 'block rounded-full px-4 py-2';

function DashboardSidebar() {
  const { isSmallScreen } = useScreenSize();

  const { selectedSidebarItem, onSidebarItemClick } = useDashboardSidebar();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <button
        className="fixed right-10 top-14 focus:outline-none md:hidden"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        <FaBars />
      </button>

      <ul
        className={
          isSmallScreen && isMobileMenuOpen
            ? 'fixed left-0 top-0 h-screen w-2/3 space-y-5 border-y-2 border-colorBrand500 bg-colorGrey50 p-5 opacity-95'
            : 'hidden h-screen space-y-5 bg-colorGrey50 py-5 ps-20 shadow-sm md:block md:w-[300px]'
        }
      >
        <li
          className={`mb-2 ${
            selectedSidebarItem === 'Dashboard' ? 'bg-colorBrand100' : ''
          }`}
          onClick={() => onSidebarItemClick('Dashboard')}
        >
          <Link className={linkStyle}>Dashboard</Link>
        </li>
        <li
          className={`mb-2 ${
            selectedSidebarItem === 'Settings' ? 'bg-colorBrand100' : ''
          }`}
          onClick={() => onSidebarItemClick('Settings')}
        >
          <Link className={linkStyle}>Settings</Link>
        </li>
        <li
          className={`mb-2 ${
            selectedSidebarItem === 'Contact Us' ? 'bg-colorBrand100' : ''
          }`}
          onClick={() => onSidebarItemClick('Contact Us')}
        >
          <Link className={linkStyle}>Contact Us</Link>
        </li>
        <li
          className={`mb-2 ${
            selectedSidebarItem === 'Logout' ? 'bg-colorRed100' : ''
          }`}
          onClick={() => onSidebarItemClick('Logout')}
        >
          <Link className={linkStyle}>Logout</Link>
        </li>
        <li
          className={`mb-2 ${
            selectedSidebarItem === 'Delete Account' ? 'bg-colorRed700' : ''
          }`}
          onClick={() => onSidebarItemClick('Delete Account')}
        >
          <Link className={linkStyle}>Delete Account</Link>
        </li>

        <li
          className={`mb-2 ${
            selectedSidebarItem === 'Switch Theme' ? 'bg-colorRed700' : ''
          }`}
        >
          {isSmallScreen && (
            <div className={linkStyle + ' flex gap-4'}>
              Switch Theme
              <ThemeToggle />
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default DashboardSidebar;
