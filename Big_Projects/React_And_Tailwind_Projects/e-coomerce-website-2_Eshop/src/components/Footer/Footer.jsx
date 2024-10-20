import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaMobileAlt,
} from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

const FooterLinks = [
  {
    title: 'Home',
    link: '/#',
  },
  {
    title: 'About',
    link: '/#',
  },
  {
    title: 'Services',
    link: '/#',
  },
  {
    title: 'Contact',
    link: '/#',
  },
];

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
      <div className='container'>
        <div className='grid pt-5 pb-20 md:grid-cols-3'>
          {/* company details  */}
          <div className='px-4 py-8'>
            <a
              href='#'
              className='text-2xl font-semibold tracking-widest uppercase text-primary sm:text-3xl'
            >
              Eshop
            </a>
            <p className='pt-3 text-gray-600 lg:pr-24 dark:text-white'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos a
              voluptatum recusandae laborum facere suscipit eligendi corporis
              est, sunt blanditiis.
            </p>
            <p className='mt-4 text-gray-500'>Made with Heart by zohaib</p>
            <button>
              <a
                href='https://www.linkedin.com/in/zohaib-sadiq-541981268'
                target='_blank'
                className='inline-block px-4 py-2 mt-4 text-sm text-white rounded-full bg-primary/90'
              >
                Let's Connect
              </a>
            </button>
          </div>
          {/* Footer links  */}
          <div className='grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10'>
            <div className='px-4 py-8 '>
              <h1 className='mb-3 text-xl font-bold sm:text-left '>
                Quick Links
              </h1>
              <ul className='space-y-3'>
                {FooterLinks.map((link, index) => (
                  <li key={index} className='mt-4'>
                    <a
                      href={link.link}
                      className='text-gray-600 duration-300 hover:text-black hover:dark:text-white dark:text-gray-400'
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* second Col Link  */}
            <div className='px-4 py-8 '>
              <h1 className='mb-3 text-xl font-bold sm:text-left '>
                Important Links
              </h1>
              <ul className='space-y-3'>
                {FooterLinks.map((link, index) => (
                  <li key={index} className='mt-4'>
                    <a
                      href={link.link}
                      className='text-gray-600 duration-300 hover:text-black hover:dark:text-white dark:text-gray-400'
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Company Address  */}
            <div className='col-span-2 px-4 py-8 sm:col-auto'>
              <h1 className='mb-3 text-xl font-bold sm:text-left '>Address</h1>
              <div>
                <div className='flex items-start gap-3'>
                  <FaLocationArrow />
                  <p>Lahore, Punjab</p>
                </div>
                <div className='flex items-start gap-3 mt-6'>
                  <FaMobileAlt /> <p>+92 3210000000</p>
                </div>

                {/* Social links  */}
                <div className='flex items-start gap-3 mt-6'>
                  <a href='#'>
                    <FaInstagram className='text-2xl duration-300 hover:text-primary ' />
                  </a>
                  <a href='#'>
                    <FaFacebook className='text-2xl duration-300 hover:text-primary ' />
                  </a>
                  <a href='#'>
                    <FaLinkedin className='text-2xl duration-300 hover:text-primary ' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
