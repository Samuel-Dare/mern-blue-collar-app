import { NavLink } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';
import { useUser } from '../features/authentication/useUser';

function Logo() {
  const { isDarkMode } = useDarkMode();
  const { isAuthenticated } = useUser();

  return (
    <NavLink to={isAuthenticated ? '/dashboard' : '/'}>
      {isDarkMode ? (
        <img
          src="../assets/bk-logo3-removedbg.png"
          alt="logo"
          className="w-[100px]"
        />
      ) : (
        <img
          src="../assets/bk-logo1-removedbg.png"
          alt="logo"
          className="w-[100px]"
        />
      )}
    </NavLink>
  );
}

export default Logo;
