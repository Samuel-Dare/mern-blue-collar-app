import React, { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light';

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark';

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme');

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Update the theme preference in local storage
    localStorage.theme = isDarkMode ? 'light' : 'dark';
  };

  return (
    <>
      <button onClick={toggleTheme} className="theme-toggle-button">
        {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
      </button>

      <p className="text-red-500">Sam</p>
    </>
  );
};

export default ThemeToggle;
