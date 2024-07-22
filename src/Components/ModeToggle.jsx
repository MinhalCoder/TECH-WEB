import React, { useState, useEffect } from 'react';
import './ModeToggle.css';

const ModeToggle = () => {
  const themes = ['light-mode', 'dark-mode', 'theme1-mode', 'theme2-mode'];
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark-mode';
  });

  useEffect(() => {
    themes.forEach(theme => document.body.classList.remove(theme));
    document.body.classList.add(currentTheme);
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme, themes]);

  const toggleMode = () => {
    const nextTheme = themes[(themes.indexOf(currentTheme) + 1) % themes.length];
    setCurrentTheme(nextTheme);
  };

  const getIcon = (theme) => {
    switch (theme) {
      case 'light-mode':
        return '☀️';
      case 'dark-mode':
        return '🌙';
      case 'theme1-mode':
        return '🌸';
      case 'theme2-mode':
        return '🌊'; 
      default:
        return '☀️';
    }
  };

  return (
    <div className="toggle-container">
      <button id="mode-toggle" onClick={toggleMode}>
        <span id="icon">{getIcon(currentTheme)}</span>
      </button>
    </div>
  );
};

export default ModeToggle;
