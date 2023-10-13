import { FiSun, FiMoon } from 'react-icons/fi';
import { useDarkMode } from '../context/DarkModeContext';

export default function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode} className="theme-toggle-button">
      {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
}
