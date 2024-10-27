import Photo from '@/components/leadingPage/Photo';
import Socials from '@/components/leadingPage/Socials';
import Stats from '@/components/leadingPage/Stats';
import { Button } from '@/components/ui/button';
import { FileDownIcon } from 'lucide-react';

const Home = () => {
  return (
    <section className='h-full'>
      <div className='container h-full mx-auto'>
        {/* Hero Section */}
        <div className='flex flex-col items-center justify-between lg:flex-row'>
          {/* Text section  */}
          <div className='order-2 text-center lg:text-left lg:order-none'>
            <span className='text-xl'>Software Developer</span>
            <h1 className='h1'>
              Hello I&apos;m <br />
              <span className='text-accent'>Zohaib Sadiq</span>
            </h1>

            <p className='max-w-[500px] mb-9 text-white/80'>
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologie
            </p>
            {/* btn and social links  */}
            <div className='flex flex-col items-center gap-8 lg:flex-row'>
              <Button
                variant='outline'
                size='lg'
                className='flex items-center gap-2 uppercase'
              >
                <span>Download CV</span>
                <FileDownIcon className='text-xl' />
              </Button>
              <div className='mb-8 lg:mb-0'>
                <Socials
                  containerStyle='flex gap-6'
                  iconsStyle='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 '
                />
              </div>
            </div>
          </div>

          {/* photo section  */}
          <div className='order-1 mb-8 lg:order-none lg:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
      {/* Stats Section */}
      <Stats />
    </section>
  );
};

export default Home;
