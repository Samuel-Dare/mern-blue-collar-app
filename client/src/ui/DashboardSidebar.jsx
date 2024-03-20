import { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import { useScreenSize } from '../context/ScreenSize';

const liStyle =
  'border-colorBrand500 border-b p-5 text-2xl text-colorGrey100 font-semibold md:p-0 md:border-none hover:text-colorGrey0 transition-transform duration-300 ease-in-out transform hover:translate-y-1';

const activeLinkStyle =
  'bg-colorBrand1 p-4 inline-block w-full text-colorGrey0';

function DashboardSidebar() {
  const { isSmallScreen } = useScreenSize();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(
    isSmallScreen ? false : true,
  );

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = useCallback(() => {
    if (isMobileMenuOpen) setMobileMenuOpen(false);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    // Add padding to the body when the sidebar is open
    if (isMobileMenuOpen && !isSmallScreen) {
      document.body.style.paddingLeft = '250px'; // Adjust this value based on your sidebar width
      document.body.style.overflowX = 'hidden';
      document.body.style.transition = 'padding-left 0.2s ease';
    } else {
      document.body.style.paddingLeft = '0';
      document.body.style.overflowX = 'auto';
    }

    document.getElementById('divToCloseMenu').addEventListener('click', () => {
      if (isSmallScreen && isMobileMenuOpen) closeMobileMenu();
    });

    // Remove the added padding when the component unmounts
    return () => {
      document.body.style.paddingLeft = '0';
      document
        .getElementById('divToCloseMenu')
        .addEventListener('click', () => {
          if (isSmallScreen && isMobileMenuOpen) closeMobileMenu();
        });
    };
  }, [isMobileMenuOpen, isSmallScreen, closeMobileMenu]);

  return (
    <>
      <button
        className="fixed right-10 top-14 z-20 focus:outline-none"
        onClick={toggleMobileMenu}
      >
        <FaBars />
      </button>

      <div
        id="divToCloseMenu"
        className={isMobileMenuOpen ? ' absolute h-screen w-full' : ''}
      ></div>

      <ul
        className={`${
          isMobileMenuOpen
            ? 'fixed left-0 top-0 mt-[80px] h-screen w-2/3 space-y-7 overflow-y-auto bg-colorBrand2 p-5 text-left text-colorGrey100 opacity-95 md:w-[250px] md:p-10 md:pt-20 md:opacity-100'
            : 'hidden'
        }`}
      >
        <li className={`${liStyle}`}>
          <NavLink
            to="/dashboard"
            onClick={isSmallScreen && closeMobileMenu}
            className={({ isActive }) => (isActive ? activeLinkStyle : '')}
          >
            Dashboard
          </NavLink>
        </li>
        <li className={`${liStyle}`}>
          <NavLink
            to="/bookings"
            onClick={isSmallScreen && closeMobileMenu}
            className={({ isActive }) => (isActive ? activeLinkStyle : '')}
          >
            Bookings
          </NavLink>
        </li>
        <li className={`${liStyle}`}>
          <NavLink
            to="/reviews"
            onClick={isSmallScreen && closeMobileMenu}
            className={({ isActive }) => (isActive ? activeLinkStyle : '')}
          >
            Reviews
          </NavLink>
        </li>
        <li className={`${liStyle}`}>
          <NavLink
            to="/profile"
            onClick={isSmallScreen && closeMobileMenu}
            className={({ isActive }) => (isActive ? activeLinkStyle : '')}
          >
            Profile
          </NavLink>
        </li>
        <li className={`${liStyle}`}>
          <NavLink
            to="/contact"
            onClick={isSmallScreen && closeMobileMenu}
            className={({ isActive }) => (isActive ? activeLinkStyle : '')}
          >
            Contact
          </NavLink>
        </li>
        <li className={`${liStyle}`}>
          <NavLink
            to="/logout"
            onClick={isSmallScreen && closeMobileMenu}
            className={({ isActive }) => (isActive ? activeLinkStyle : '')}
          >
            Logout
          </NavLink>
        </li>
        <li className={`${liStyle}`}>
          <NavLink
            to="/deleteAccount"
            onClick={isSmallScreen && closeMobileMenu}
            className={({ isActive }) => (isActive ? activeLinkStyle : '')}
          >
            Delete Account
          </NavLink>
        </li>

        <li className={`${liStyle}`}>
          {isSmallScreen && (
            <div className="flex gap-4">
              Switch Theme
              <ThemeToggle />
            </div>
          )}
        </li>
      </ul>
    </>
  );
}

export default DashboardSidebar;
