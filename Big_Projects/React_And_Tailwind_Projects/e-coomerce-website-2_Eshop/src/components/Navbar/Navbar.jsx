import React from 'react';
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6';
import { IoMdSearch } from 'react-icons/io';
import DarkMode from './DarkMode';

const MenuLists = [
  {
    id: 1,
    name: 'Home',
    link: '/#',
  },
  {
    id: 2,
    name: 'Shop',
    link: '/#',
  },
  {
    id: 3,
    name: 'About',
    link: '/#',
  },
  {
    id: 4,
    name: 'Contact',
    link: '/#',
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: 'Trending Products',
    link: '/#',
  },
  {
    id: 2,
    name: 'New Arrivals',
    link: '/#',
  },
  {
    id: 3,
    name: 'Best Sellers',
    link: '/#',
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className='relative z-40 duration-200 bg-white dark:bg-gray-900 dark:text-white '>
      <nav className='py-4 '>
        <div className='container flex items-center justify-between '>
          {/* Logo and Link Section  */}
          <div className='flex items-center gap-4'>
            <a
              href='#'
              className='text-2xl font-semibold tracking-widest uppercase text-primary sm:text-3xl'
            >
              Eshop
            </a>
            {/* Menu Items  */}
            <div className='hidden lg:block'>
              <ul className='flex items-center gap-4 '>
                {MenuLists.map((data, index) => (
                  <li key={index}>
                    <a
                      className='inline-block px-4 font-semibold text-gray-500 duration-200 hover:text-black dark:hover:text-white '
                      href={data.link}
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
                {/* dropdown  */}
                <li className='relative cursor-pointer group'>
                  <a
                    href=''
                    className='flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py2 '
                  >
                    Quick Link{' '}
                    <span>
                      <FaCaretDown className='duration-300 group-hover:rotate-180' />
                    </span>
                  </a>
                  {/* Dropdown List  */}
                  <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2  dark:text-white '>
                    <ul className='space-y-2 '>
                      {DropdownLinks.map((data, index) => (
                        <li key={index}>
                          <a
                            className='inline-block w-full p-2 font-semibold text-gray-500 duration-200 rounded-md dark:text-white hover:text-black dark:hover:text-white hover:bg-primary/20'
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Navbar Rigth Section  */}
          <div className='flex items-center justify-between gap-4'>
            {/* Search Bar Section  */}
            <div className='relative hidden group sm:block'>
              <input type='text' placeholder='Search' className='search-bar ' />
              <IoMdSearch className='absolute text-xl text-gray-600 duration-200 -translate-y-1/2 right-3 dark:text-gray-400 top-1/2 group-hover:text-primary ' />
            </div>
            {/* Order button section */}
            <button className='relative p-3' onClick={handleOrderPopup}>
              <FaCartShopping className='text-xl text-gray-600 dark:text-gray-400 ' />
              <div className='absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full '>
                4
              </div>
            </button>
            {/* Dark mode section  */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
