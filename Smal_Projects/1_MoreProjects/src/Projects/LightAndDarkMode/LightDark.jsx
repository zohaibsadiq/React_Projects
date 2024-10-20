import React from 'react';
import useLocalStorage from './useLocalStorage';
import './LightDark.css';
const LightDark = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  const handleToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  console.log(theme);

  return (
    <div className={`light-dark-mode `} datatheme={theme}>
      <div className='container'>
        <button onClick={handleToggleTheme}>Change Theme</button>
        <h1>Light and Dark Mode</h1>
      </div>
    </div>
  );
};

export default LightDark;
