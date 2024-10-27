import { motion } from 'framer-motion';

const StairAnimation = {
  initial: { top: '0%' },
  animate: { top: '100%' },
  exit: { top: ['100%', '0%'] },
};

const reservedIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          initial='initial'
          animate='animate'
          exit='exit'
          variants={StairAnimation}
          transition={{
            duration: 0.4,
            delay: reservedIndex(index) * 0.1,
            ease: 'easeInOut',
          }}
          className='relative w-full h-full bg-white'
        />
      ))}
    </>
  );
};

export default Stairs;
