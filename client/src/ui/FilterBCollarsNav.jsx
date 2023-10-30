import { NavLink } from 'react-router-dom';
import Logo from './Logo';

function FilterBCollarsNav() {
  return (
    <>
      <Logo />
      <ul className="flex gap-5">
        <li>
          <NavLink to="">Find Professionals</NavLink>
        </li>
        <li>
          <NavLink to="">Available Professionals</NavLink>
        </li>
      </ul>
    </>
  );
}

export default FilterBCollarsNav;
