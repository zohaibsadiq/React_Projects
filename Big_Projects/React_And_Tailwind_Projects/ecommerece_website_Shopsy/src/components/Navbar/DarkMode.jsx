import React from 'react';
import lightButtonPng from '../../assets/website/light-mode-button.png';
import darkButtonPng from '../../assets/website/dark-mode-button.png';
const DarkMode = () => {
  const [darkMode, setDarkMode] = React.useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  const element = document.documentElement; // Selecting the root element

  React.useEffect(() => {
    if (darkMode === 'dark') {
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode, element]);

  return (
    <div className='relative '>
      <img
        src={lightButtonPng}
        alt='LigthButton'
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
          darkMode === 'dark' ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={() => setDarkMode(darkMode === 'dark' ? 'light' : 'dark')}
      />
      <img
        src={darkButtonPng}
        alt='DarkButton'
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300  `}
        onClick={() => setDarkMode(darkMode === 'dark' ? 'light' : 'dark')}
      />
    </div>
  );
};

export default DarkMode;
