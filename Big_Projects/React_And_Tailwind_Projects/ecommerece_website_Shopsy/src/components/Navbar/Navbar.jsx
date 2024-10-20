import { FaCaretDown, FaCartShopping } from 'react-icons/fa6';
import { IoMdSearch } from 'react-icons/io';
import Logo from '../../assets/logo.png';
import DarkMode from './DarkMode';

const Menu = [
  { id: 1, name: 'Home', link: '/#' },
  { id: 2, name: 'Top Rated', link: '/#' },
  { id: 3, name: 'Kids Wear', link: '/#' },
  { id: 4, name: "Men's Wear", link: '/#' },
  { id: 5, name: "Women's Wear", link: '/#' },
];

const DropdownLinks = [
  { id: 1, name: 'Trending', link: '/#' },
  { id: 2, name: 'New Arrivals', link: '/#' },
  { id: 3, name: 'Best Sellers', link: '/#' },
];
const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className='relative z-50 duration-200 bg-white shadow-md dark:bg-gray-900 dark:text-white'>
      {/* Upper Navbar */}
      <div className='py-2 bg-primary/40'>
        <div className='container flex items-center justify-between '>
          {/* Logo  */}
          <div>
            <a href='#' className='flex gap-2 text-2xl font-bold cms:text-3xl'>
              <img src={Logo} alt='WebsiteLogo' className='w-10 uppercase ' />
              Shopsy
            </a>
          </div>

          {/* Searh bar */}
          <div className='flex items-center gap-4 '>
            <div className='relative hidden sm:block group'>
              <input
                type='text'
                placeholder='search'
                className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary
                dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary dark:focus:placeholder-gray-300
                '
              />
              <IoMdSearch className='absolute text-gray-500 -translate-y-1/2 group-hover:text-primary top-1/2 right-3' />
            </div>

            {/* Order Button */}
            <button
              onClick={() => handleOrderPopup()}
              className='flex items-center gap-3 px-4 py-1 text-white transition-all duration-200 rounded-full bg-gradient-to-r from-primary to-secondary group'
            >
              <span className='hidden transition-all duration-200 group-hover:block '>
                Order
              </span>
              <FaCartShopping className='text-xl text-white cursor-pointer drop-shadow-sm' />
            </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}

      <div data-aos='zoom-in' className='flex justify-center'>
        <ul className='items-center hidden gap-4 sm:flex'>
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className='inline-block px-4 duration-200 hover:text-primary'
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className='relative cursor-pointer group'>
            <a
              href='#'
              className='flex items-center gap-[2px]
              py-2 '
            >
              Trending Products
              <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
            </a>
            <div className='absolute z-[9999] hidden group-hover:block w-[200px] bg-white rounded-md p-2 text-black shadow-md dark:bg-gray-800'>
              <ul>
                {DropdownLinks.map((data) => (
                  <li>
                    <a
                      href={data.link}
                      className='inline-block w-full p-2 duration-300 rounded-md hover:bg-primary/20 dark:bg-gray-800 dark:text-white dark:hover:bg-primary'
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
  );
};

export default Navbar;
