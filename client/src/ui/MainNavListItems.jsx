import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import ServicesDropdown from './ServicesDropdown';
import { useScreenSize } from '../context/ScreenSize';

const liStyle =
  'border-colorBrand500 border-b p-5 md:border-none text-2xl md:p-0';

function NavListItems() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);

  const { isSmallScreen } = useScreenSize();

  const toggleDropdown = () => {
    setIsServiceDropdownOpen(!isServiceDropdownOpen);
  };

  return (
    <div className="text-colorGrey800 md:flex md:justify-between">
      {/* Mobile Menu Icon */}
      <button
        className="focus:outline-none md:hidden"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        <FaBars />
      </button>

      {/* Navigation Menu (Hidden on Small Screens) */}
      <ul
        className={`${
          isSmallScreen && isMobileMenuOpen
            ? 'absolute left-0 top-0 h-screen w-2/3 space-y-5 border-y-2 border-colorBrand500 bg-colorGrey50 p-5 opacity-95'
            : 'hidden'
        }  md:flex md:gap-7 `}
      >
        <li
          className={liStyle}
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <NavLink to="/services">Services</NavLink>
          {isServiceDropdownOpen && <ServicesDropdown />}
        </li>
        <li className={liStyle}>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li className={liStyle}>
          <NavLink to="/signup-login">Sign up/Log in</NavLink>
        </li>
        <li className={liStyle}>
          <NavLink to="/become-a-professional">Become a BCollar</NavLink>
        </li>
        <li className={liStyle}>
          <NavLink to="/contactus">Contact Us</NavLink>
        </li>
        <li className={isSmallScreen ? liStyle + ' flex gap-4' : liStyle}>
          {isSmallScreen && 'Switch Theme'}
          <ThemeToggle />
        </li>
      </ul>
    </div>
  );
}

export default NavListItems;
