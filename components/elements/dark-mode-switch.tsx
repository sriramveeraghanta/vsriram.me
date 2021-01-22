import React, { FC, useEffect, useState } from 'react';
// react themes
import { useTheme } from 'next-themes';
// react icons
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkModeSwitch: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <div className="switch-container">
      <div>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="btn btn-theme-light"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </div>
  );
};

export default DarkModeSwitch;
