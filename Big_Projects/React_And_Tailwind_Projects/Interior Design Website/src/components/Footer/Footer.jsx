import { FaPhone, FaVoicemail } from 'react-icons/fa';
import Logo from '../../assets/logo.png';
import { FaMessage } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { SlideLeft, SlideUp } from '../../animation/animation';

const Footer = () => {
  return (
    <motion.footer
      variants={SlideLeft(0.2)}
      initial='initial'
      whileInView='animate'
    >
      <div className='container py-11'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          {/* Company infi */}
          <div className='space-y-4 font-semibold'>
            <div className='flex items-center space-x-3'>
              <img src={Logo} alt='Logo of website' className='w-6' />
              <p className='text-xl font-semibold'>Interior</p>
            </div>
            <p className=''>Lahore, Punjab, Pakistan</p>
            <p>@ 2024 All rights reserved</p>
          </div>
          {/* Footer Link  */}
          <div className='grid grid-cols-2 gap-3'>
            <div className='space-y-4'>
              <p className='text-xl font-semibold'>About US</p>
              <ul className='space-y-4 text-sm'>
                <li>Our Story</li>
                <li>Designer</li>
                <li>Our Team</li>
                <li>Craftmanship</li>
              </ul>
            </div>

            <div className='space-y-4'>
              <p className='text-xl font-semibold'>Support</p>
              <ul className='space-y-4 text-sm'>
                <li>FAQ's</li>
                <li>Shipping</li>
                <li>Care Guide</li>
                <li>Gurantee</li>
              </ul>
            </div>
          </div>
          {/* Contact section  */}
          <div className='space-y-4'>
            <p className='text-xl font-semibold'>Contact US</p>
            <ul className='space-y-4 text-base font-semibold'>
              <li className='flex items-center space-x-3'>
                <span>
                  <FaPhone />
                </span>
                <a href='#'>+92 123456789</a>
              </li>
              <li className='flex items-center space-x-3'>
                <span>
                  <FaMessage />
                </span>
                <a href='mailto:contact.zohaib2056804@gmail.com'>Email</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Copyright section  */}
        <div className='pt-6 mt-8 text-center border-t border-gray-300'>
          <p className='text-sm font-semibold'>
            &copy; 2024 Interior. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
