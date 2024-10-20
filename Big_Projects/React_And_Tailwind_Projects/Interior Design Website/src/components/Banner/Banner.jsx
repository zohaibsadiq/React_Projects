import Banner1 from '../../assets/banner.png';
import { motion } from 'framer-motion';
import { SlideUp } from '../../animation/animation';

const Banner = () => {
  return (
    <section>
      <div className='container py-14'>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
          {/* Image section  */}
          <div className='flex flex-col items-center justify-center'>
            <motion.img
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={Banner1}
              alt='BannerImage'
              className='w-[95%] md:w-[540px] object-cover mx-auto'
            />
          </div>
          {/* Text section  */}
          <div className='flex flex-col justify-center space-y-5 text-center md:text-left md:max-w-lg'>
            <motion.h1
              variants={SlideUp(0.2)}
              initial='initial'
              whileInView='animate'
              className='font-serif text-4xl font-bold'
            >
              We Believe that a team makes any project better
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial='initial'
              whileInView='animate'
              className='text-sm leading-7 text-gray-500'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quod
              amet possimus cumque laborum dolores minima reprehenderit voluptas
            </motion.p>
            <div>
              <motion.button
                variants={SlideUp(0.6)}
                initial='initial'
                whileInView='animate'
                className=' primary-btn text-white bg-black shadow-[5px_5px_0px_0px_#6c6c6c]'
              >
                Discover Now
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
