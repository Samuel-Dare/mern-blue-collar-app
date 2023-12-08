import { NavLink } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';

function Logo() {
  const { isDarkMode } = useDarkMode();

  return (
    <NavLink to="/">
      {isDarkMode ? (
        <img src="../assets/logoB.png" alt="logo" className="w-[100px]" />
      ) : (
        <img src="../assets/logoA.png" alt="logo" className="w-[100px]" />
      )}
    </NavLink>
  );
}

export default Logo;
