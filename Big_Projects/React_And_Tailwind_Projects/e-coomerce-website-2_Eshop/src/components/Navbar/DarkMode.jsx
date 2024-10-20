import React, { useEffect, useState } from 'react';
import LightButton from '../../assets/website/light-mode-button.png';
import DarkButton from '../../assets/website/dark-mode-button.png';

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  const element = document.documentElement; // access the root element which is the html tag

  useEffect(() => {
    // useEffect to set the theme in the local storage and add the dark class to the root element
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className='relative'>
      <img
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        src={LightButton}
        alt=''
        className={`w-12 cursor-pointer absolute right-0 z-10 ${
          theme === 'dark' ? 'opacity-0' : 'opacity-100'
        } transition-all duration-300`}
      />
      <img src={DarkButton} alt='' className={'w-12 cursor-pointer'} />
    </div>
  );
};

export default DarkMode;
