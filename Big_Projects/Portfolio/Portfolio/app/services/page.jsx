'use client';

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Web Development',
    desc: 'I can build you a website from scratch or help you with your existing website.',
    href: '',
  },
  {
    num: '02',
    title: 'Ai Development',
    desc: 'I can help you with your Ai needs and projects using python and tensorflow.',
    href: '',
  },
  {
    num: '03',
    title: 'Python Development',
    desc: 'I can help you with your python needs and projects using python.',
    href: '',
  },
];

const Services = () => {
  return (
    <section className='min-h-[8-vh] flex flex-col justify-center py-12 lg:py-0'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
          }}
          className='grid grid-cols-1 gap-[60px] md:grid-cols-2'
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className='flex flex-col justify-center gap-6 group'
              >
                {/* tap  */}
                <div className='flex items-center justify-between w-full'>
                  <div className='text-5xl font-extrabold text-transparent transition-all duration-500 text-outline group-hover:text-outline-hover '>
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 '
                  >
                    {service.href}
                    <BsArrowDownRight className='text-3xl text-primary'/>
                  </Link>
                </div>
                {/* title  */}
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 '>{service.title}</h2>
                {/* description  */}
                <p className='text-white/60'>{service.desc}</p>
                {/* border  */}
                <div className='w-full border border-white/20'></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
