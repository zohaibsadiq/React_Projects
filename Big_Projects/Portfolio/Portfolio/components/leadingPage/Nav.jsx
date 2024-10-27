'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'services',
    href: '/services',
  },
  {
    name: 'resume',
    href: '/resume',
  },
  {
    name: 'work',
    href: '/work',
  },
  {
    name: 'contact',
    href: '/contact',
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className='flex gap-8'>
      {links.map((link, index) => {
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`${
              link.href === pathname && 'text-accent border-b-2 border-accent'
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
