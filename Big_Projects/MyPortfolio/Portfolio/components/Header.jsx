import Link from 'next/link';
import { Button } from './ui/button';
import Nav from './leadingPage/Nav';
import MobileNav from '@/components/leadingPage/MobileNav';

const Header = () => {
  return (
    <header className='py-8 xl:py-12 '>
      <div className='container flex items-center justify-between mx-auto'>
        {/* Logo  */}
        <Link href='/'>
          <h1 className='text-4xl font-semibold'>
            Zohaib <span className='text-accent'>.</span>
          </h1>
        </Link>
        {/* Desktop nav & hire me button */}
        <div className='items-center hidden gap-8 lg:flex'>
          <Nav />
          <Link href='/contact'>
            <Button>Hire me</Button>
          </Link>
        </div>
        {/* Mobile nav  */}
        <div className='flex lg:hidden'>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
