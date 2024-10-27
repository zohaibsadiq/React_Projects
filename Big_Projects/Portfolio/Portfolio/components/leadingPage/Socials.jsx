import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, link: '' },
  { icon: <FaLinkedin />, link: '' },
  { icon: <FaTwitter />, link: '' },
];

const Socials = ({ containerStyle, iconsStyle }) => {
  return (
    <div className={containerStyle}>
      {socials.map((social, index) => (
        <Link key={index} href={social.link} className={iconsStyle}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
