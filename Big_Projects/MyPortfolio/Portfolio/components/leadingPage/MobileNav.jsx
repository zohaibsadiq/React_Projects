'use client';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

const Links = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
  { name: 'Resume', path: '/resume' },
  { name: 'Work', path: '/work' },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className='flex items-center justify-center'>
        <CiMenuFries className='text-[32px] text-accent' />
      </SheetTrigger>
      <SheetContent className='flex flex-col p-6'>
        {/* Logo */}
        <div className='mt-32 mb-4 text-2xl text-center'>
          <Link href='/'>
            <h1 className='text-4xl font-semibold'>
              Zohaib <span className='text-accent'>.</span>
            </h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className='flex flex-col items-center justify-center gap-8'>
          {Links.map((link, index) => (
            <Link
              href={link.path}
              className={`${
                link.path === pathname && 'text-accent border-b-2 border-accent'
              } text-xl capitalize transition-all  hover:text-accent`}
              key={link.path}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
