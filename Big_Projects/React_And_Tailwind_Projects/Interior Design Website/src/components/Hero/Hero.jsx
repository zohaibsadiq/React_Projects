import HeroImg from '../../assets/hero.png';
import { motion } from 'framer-motion';
import { SlideUp } from '../../animation/animation';

const Hero = () => {
  return (
    <section>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 md:min-h-[600px] gap-10'>
          {/* Text section  */}
          <div className='flex flex-col justify-center px-10 pt-20 text-center gap-7 md:pr-8 md:text-left md:pt-0 lg:pr-14 '>
            <motion.h1
              variants={SlideUp(0.3)}
              initial='initial'
              animate='animate'
              className='font-serif text-4xl font-bold lg:w-10'
            >
              SKETCH LUXURY INTERIOR DESIGN
            </motion.h1>
            <motion.p
              variants={SlideUp(0.5)}
              initial='initial'
              animate='animate'
              className='text-sm md:text-base text-gray-500 lg:w-[19rem]'
            >
              Bring your dream to life with one-on-one design help & hand picked
              products tailored to your style, space and budget.
            </motion.p>
            <div className='space-x-4'>
              <motion.button
                variants={SlideUp(0.8)}
                initial='initial'
                animate='animate'
                className='text-white uppercase bg-black primary-btn shadow-[5px_5px_0px_0px_#6c6c6c]'
              >
                Get Started
              </motion.button>
              <motion.button
                variants={SlideUp(0.9)}
                initial='initial'
                animate='animate'
                className='uppercase primary-btn'
              >
                Contact
              </motion.button>
            </div>
          </div>
          {/* Image section  */}
          <div className='flex flex-col items-center justify-center'>
            <motion.img
            animate={{x:0,opacity:1}}
            initial={{x:100,opacity:0}}
            transition={{duration:0.5,delay:0.5}}
              src={HeroImg}
              alt=''
              className='md:w-[540px] object-cover md:scale- w-[80%]'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
