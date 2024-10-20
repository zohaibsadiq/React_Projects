import { motion } from 'framer-motion';
import { SlideUp, SlideLeft } from '../../animation/animation';

const Newsletter = () => {
  return (
    <section className='max-w-[500px] mx-auto space-y-5'>
      <motion.h1
        variants={SlideUp(0.2)}
        initial='initial'
        whileInView='animate'
        className='font-serif text-3xl font-bold text-center'
      >
        Subscribe to our Newsletter
      </motion.h1>
      <motion.p
        variants={SlideUp(0.4)}
        initial='initial'
        whileInView='animate'
        className='text-sm text-center text-gray-500 max-w-[300px] mx-auto'
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quis
        molestiae fugit minima odio quae. Nihil officiis esse,
      </motion.p>
      {/* Form here */}
      <motion.div
        variants={SlideUp(0.6)}
        initial='initial'
        whileInView='animate'
        className='flex justify-center  !mt-10 w-full '
      >
        <input
          type='text'
          placeholder='Enter your email'
          className='px-4 py-4 border border-gray-300 outline-none '
        />
        <button className='px-6 text-white uppercase bg-black'>
          Subscribe
        </button>
      </motion.div>
    </section>
  );
};

export default Newsletter;
