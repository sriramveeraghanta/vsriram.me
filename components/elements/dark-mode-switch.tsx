import React, { FC } from 'react';
// react themes
import { useTheme } from 'next-themes';
// react icons
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkModeSwitch: FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="switch-container">
      <div>
        {theme === 'light' && (
          <button className="btn btn-theme-light" onClick={() => setTheme('dark')}>
            <FaMoon />
          </button>
        )}
        {theme === 'dark' && (
          <button className="btn btn-theme-dark" onClick={() => setTheme('light')}>
            <FaSun />
          </button>
        )}
      </div>
    </div>
  );
};

export default DarkModeSwitch;
