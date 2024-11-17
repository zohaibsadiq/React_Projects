import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const socials = [
  { icon: <FaGithub />, link: 'https://github.com/zohaibsadiq' },
  { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/zohaib-sadiq-541981268' },
  {
    icon: <MdEmail />,
    link: 'https://mail.google.com/mail/?view=cm&fs=1&to=zohaib2056804@gmail.com', // Redirects to Gmail compose
  },
];

const Socials = ({ containerStyle, iconsStyle }) => {
  return (
    <div className={containerStyle}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.link}
          className={iconsStyle}
          target='_blank' // Opens Gmail or external links in a new tab
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
