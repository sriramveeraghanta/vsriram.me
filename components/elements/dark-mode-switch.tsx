import React, { FC } from 'react';
import useDarkMode from 'use-dark-mode';

const DarkModeSwitch: FC = () => {
  const darkMode = useDarkMode(true);

  return (
    <div className="switch-container">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          checked={darkMode.value}
          onChange={darkMode.toggle}
        />
      </div>
    </div>
  );
};

export default DarkModeSwitch;
