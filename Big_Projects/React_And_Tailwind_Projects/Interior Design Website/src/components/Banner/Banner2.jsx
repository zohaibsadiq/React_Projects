import Banner1 from '../../assets/banner2.png';
import { motion } from 'framer-motion';
import { SlideUp } from '../../animation/animation';
const StatCard = ({ number, label }) => (
  <div className='space-y-2 max-w-[80px]'>
    <p className='font-serif text-3xl font-bold'>{number}</p>
    <p className='text-sm text-gray-500'>{label}</p>
  </div>
);

const Banner2 = () => {
  return (
    <section>
      <div className='container py-14'>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
          {/* Text section  */}
          <div className='flex flex-col justify-center space-y-5 text-center md:text-left md:max-w-lg'>
            <motion.h1
              variants={SlideUp(0.2)}
              initial='initial'
              whileInView='animate'
              className='font-serif text-4xl font-bold'
            >
              Simple way to make stylish living room
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial='initial'
              whileInView='animate'
              className='text-sm leading-7 text-gray-500 '
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              earum accusantium tempore nam adipisicing elit. Suscipit earum
              accusantium tempore nam aliquid
            </motion.p>
            <motion.div
              variants={SlideUp(0.6)}
              initial='initial'
              whileInView='animate'
              className='flex gap-3'
            >
              <StatCard number='15' label='Years of Experience' />
              <StatCard number='350' label='Happy Clients' />
              <StatCard number='34' label='Awards Gained' />
            </motion.div>
            <div>
              <motion.button
                variants={SlideUp(0.6)}
                initial='initial'
                whileInView='animate'
                className='text-white bg-black shadow-[5px_5px_0px_0px_#6c6c6c] primary-btn'
              >
                Contact US
              </motion.button>
            </div>
          </div>
          {/* Image section  */}
          <div className='flex flex-col items-center justify-center'>
            <motion.img
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={Banner1}
              alt='BannerImage'
              className='w-[95%] md:w-[540px] object-cover mx-auto'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
