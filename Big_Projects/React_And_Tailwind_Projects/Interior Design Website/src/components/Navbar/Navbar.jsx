import Logo from '../../assets/logo.png';

import { motion } from 'framer-motion';

const NavLinks = [
  {
    id: 1,
    title: 'Home',
    link: '#',
  },
  {
    id: 2,
    title: 'About',
    link: '#',
  },
  {
    id: 3,
    title: 'Services',
    link: '#',
  },
  {
    id: 4,
    title: 'Contact',
    link: '#',
  },
];

const Navbar = () => {
  return (
    <header>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className='container flex items-center justify-between py-6'
      >
        {/* Logo section  */}
        <div className='flex items-center gap-3'>
          <img src={Logo} alt='Logo' className='w-10' />
          <span className='text-2xl font-bold'>Interior</span>
        </div>
        {/* Link section  */}

        <div className='hidden md:flex '>
          {
            <ul className='flex space-x-7'>
              {NavLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.link} className='mx-4 text-lg font-semibold'>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          }
        </div>
        {/* Button section  */}
        <div>
          <button className='primary-btn '>Try For Free</button>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
