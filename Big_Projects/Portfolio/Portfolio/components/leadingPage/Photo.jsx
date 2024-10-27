'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import photo from '../../public/assets/2.png';

const Photo = () => {
  return (
    <div className='relative w-full h-full'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
        }}
      >
        {/* Image  */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' },
          }}
          className='absolute w-[298px] h-[298px] lg:w-[498px] lg:h-[498px] mix-blend-light '
        >
          <Image
            src={photo}
            priority
            quality={100}
            alt=''
            className='object-contain'
            fill
          />
        </motion.div>
        {/* Circle  */}
        <motion.svg
          className='w-[300px] lg:w-[506px] h-[300px] lg:h-[506px] '
          fill='transparent'
          viewBox={'0 0 506 506'}
          xmlns='http://www.w3.org/2000/svg'
        >
          <motion.circle
            cx={'253'}
            cy={'253'}
            r={'250'}
            stroke={'#00ff99'}
            strokeWidth={'4'}
            strokeLinecap={'round'}
            strokeLinejoin='round'
            initial={{ strokeDasharray: '24 10 0 0' }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
