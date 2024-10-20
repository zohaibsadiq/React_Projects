import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from 'react-icons/fa6';
import footerLogo from '../../assets/logo.png';
import FooterBanner from '../../assets/website/footer-pattern.jpg';
import { FaMobileAlt } from 'react-icons/fa';

const BannerImg = {
  backgroundImage: `url(${FooterBanner})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom',
  height: '100%',
  width: '100%',
};

const FooterLinks = [
  { title: 'Home', link: '#' },
  { title: 'Shop', link: '#' },
  { title: 'About Us', link: '#' },
  { title: 'Contact Us', link: '#' },
];

const Footer = () => {
  return (
    <div className='text-white ' style={BannerImg}>
      <div className='container'>
        <div data-aos='zoom-in' className='grid pt-5 md:grid-cols-3 pb-44 '>
          {/* company details  */}
          <div className='px-4 py-8'>
            <h1 className='flex items-center gap-3 mb-3 text-xl font-bold text-justify sm:text-3xl sm:text-left'>
              <img src={footerLogo} alt='' className='max-w-[50px] ' />
              Shopsy
            </h1>
            <p className='text-sm text-justify sm:text-base'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pellentesque odio vel massa luctus feugiat. Integer vitae
            </p>
          </div>
          {/* Footer Links  */}
          <div className='grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10'>
            <div>
              <div clpy-8 px-4>
                <h1 className='mb-3 text-xl font-bold text-justify sm:text-left'>
                  Important Links
                </h1>
                <ul className='flex flex-col gap-3 '>
                  {FooterLinks.map((link, index) => (
                    <li
                      key={index}
                      className='text-gray-300 duration-300 cursor-pointer hover:text-primary hover:translate-x-1'
                    >
                      <a href={link.link}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div clpy-8 px-4>
                <h1 className='mb-3 text-xl font-bold text-justify sm:text-left'>
                  Links
                </h1>
                <ul className='flex flex-col gap-3 '>
                  {FooterLinks.map((link, index) => (
                    <li
                      key={index}
                      className='text-gray-300 duration-300 cursor-pointer hover:text-primary hover:translate-x-1'
                    >
                      <a href={link.link}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Social links  */}
            <div>
              {' '}
              <div className='flex items-center gap-3 mt-6 '>
                <a href='#'>
                  <FaInstagram className='text-3xl' />
                </a>
                <a href='#'>
                  <FaFacebook className='text-3xl ' />
                </a>
                <a href='#'>
                  <FaLinkedin className='text-3xl ' />
                </a>
              </div>
              <div className='mt-6'>
                <div className='flex items-center gap-3'>
                  <FaLocationArrow />
                  <p>Lahore, Punjab</p>
                </div>
                <div className='flex items-center gap-3 mt-3'>
                  <FaMobileAlt />
                  <p>+92 3210000000</p>
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
