import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const liStyle = 'border-colorBrand500 border-b p-5 md:border-none md:p-0';

function NavListItems() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="md:flex md:justify-between">
      {/* Mobile Menu Icon */}
      <button
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        className="focus:bg-colorGrey100-5 md:hidden"
      >
        <FaBars />
      </button>

      {/* Navigation Menu (Hidden on Small Screens) */}
      <ul
        className={`${
          isMobileMenuOpen
            ? 'bg-colorGrey50  border-colorBrand500 absolute left-0 h-screen w-1/3  space-y-5 border-y-2 p-5 opacity-95'
            : 'hidden'
        }  md:flex md:gap-10 `}
      >
        <li className={liStyle}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={liStyle}>
          <NavLink to="/about">About</NavLink>
        </li>
        <li className={liStyle}>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="hidden md:block">
          <ThemeToggle />
        </li>
        <li className="align-center flex gap-4 p-5 md:hidden">
          Switch Theme <ThemeToggle />
        </li>
      </ul>
    </div>
  );
}

export default NavListItems;
