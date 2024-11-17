'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';

import Image1 from '../../public/assets/work/thumb1.png';
import Image2 from '@/public/assets/work/thumb2.png';
import Image3 from '@/public/assets/work/thumb3.png';
import Image4 from '@/public/assets/work/thumb4.png';
import Image5 from '@/public/assets/work/thumb5.png';
import WorkSliderBtn from '../../components/ui/WorkSliderBtn';

const projects = [
  {
    num: '01',
    category: 'Frontend',
    title: 'Project 1',
    description:
      'An interactive project built using React, Framer Motion, and Tailwind CSS. It features fluid animations, dynamic content transitions, and a visually stunning design to highlight creative portfolios, projects, and media presentations.',
    stack: [
      {
        name: 'Html 5',
      },
      {
        name: 'Tailwind Css',
      },
      {
        name: 'React Js',
      },
    ],
    image: Image1,
    live: 'https://ecommercewebsite2.vercel.app',
    github:
      'https://github.com/zohaibsadiq/React_Projects/tree/master/Big_Projects/React_And_Tailwind_Projects/e-coomerce-website-2_Eshop',
  },
  {
    num: '02',
    category: 'Frontend',
    title: 'Project 2',
    description:
      'A modern e-commerce website built with React and Tailwind CSS. Named "Shopsy," it offers a seamless shopping experience with a responsive design, product filtering, and a streamlined checkout process to enhance user satisfaction and convenience.',
    stack: [
      {
        name: 'Html 5',
      },
      {
        name: 'Tailwind Css',
      },
      {
        name: 'React Js',
      },
    ],
    image: Image2,
    live: 'https://ecommerece-website.vercel.app',
    github:
      'https://github.com/zohaibsadiq/React_Projects/tree/master/Big_Projects/React_And_Tailwind_Projects/ecommerece_website_Shopsy',
  },
  {
    num: '03',
    category: 'Frontend',
    title: 'Project 3',
    description:
      'An e-commerce website built using Next.js and Tailwind CSS. Named "Shop," it offers a modern and responsive interface, seamless navigation, product filtering, and a streamlined checkout process to enhance the user shopping experience.',
    stack: [
      {
        name: 'Html 5',
      },
      {
        name: 'Tailwind Css',
      },
      {
        name: 'Next Js',
      },
    ],
    image: Image3,
    live: 'https://e-commerce-ui-seven.vercel.app',
    github: 'https://github.com/zohaibsadiq/e-commerce-UI',
  },
  {
    num: '04',
    category: 'Frontend',
    title: 'Project 4',
    description:
      'A responsive platform built with React.js, Material-UI, and the TMDB API. It connects users to a vast library of movies and TV shows with a modern interface, featuring a dynamic search bar, categorized lists, and detailed media pages for an engaging user experience.',
    stack: [
      {
        name: 'Html 5',
      },
      {
        name: 'Material Ui',
      },
      {
        name: 'React Js',
      },
    ],
    image: Image4,
    live: 'https://filmpiremovieapp.vercel.app',
    github:
      'https://github.com/zohaibsadiq/React_Projects/tree/master/Big_Projects/Filmpire%20-%20AI%20Powered%20Movie%20App',
  },
  {
    num: '05',
    category: 'Full Stack',
    title: 'Project 5',
    description:
      'Services Hub is a responsive platform built with React.js, Tailwind CSS, and Node.js, connecting users to skilled professionals for services like repairs, cleaning, and installations.',
    stack: [
      {
        name: 'Html 5',
      },
      {
        name: 'Tailwind Css',
      },
      {
        name: 'React Js',
      },
      {
        name: 'node Js',
      },
    ],
    image: Image5,
    live: 'https://services-web-five.vercel.app',
    github: 'https://github.com/zohaibsadiq/React_Projects/tree/master/Big_Projects/Uni_Project',
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get the current slide index
    const currentSlide = swiper.activeIndex;
    // set the project based on the current slide
    setProject(projects[currentSlide]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='min-h-[80vh] flex flex-col justify-center py-12 lg:px-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-[30px]'>
          <div className='w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              {/* outline number  */}
              <div className='font-extrabold leading-none text-transparent text-8xl text-outline'>{project.num}</div>
              {/* project category  */}
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-300 capitalize '>
                {project.category} project
              </h2>
              {/* project description  */}
              <p className=' text-white/60'>{project.description}</p>
              {/* stack */}
              <ul className='flex gap-4'>
                {project.stack.map((item, index) => (
                  <li key={index} className='text-xl text-accent '>
                    {item.name}
                    {/* remove the last comma  */}
                    {index !== project.stack.length - 1 && ','}
                  </li>
                ))}
              </ul>
              {/* border  */}
              <div className='border border-white/20'></div>
              {/* buttons  */}
              <div className='flex items-center gap-4'>
                {/* live project button */}
                <Link href={project.live} target='_blank'>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-3xl text-white group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github button  */}
                <Link href={project.github} target='_blank'>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-3xl text-white group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='lg:h-[520-px] mb-12'
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className='w-full'>
                  <div className='h-[350px] relative group justify-center items-center bg-pink-50/20'>
                    {/* overlay  */}
                    <div className='absolute top-0 bottom-0 z-10 w-full h-full bg-black/5'></div>
                    {/* Image  */}
                    <div className='relative w-full h-full'>
                      <Image src={project.image} alt='Project image' fill objectFit='object-cover' />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider button  */}
              <WorkSliderBtn
                containerStyle='flex gap-2 md:justify-end items-center mt-8 md:relative absolute bottom-[50%] left-0 right-0 mx-auto z-20 justify-between items-center'
                btnStyle='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center rounded-full transition-all duration-300'
                iconsStyles='text-2xl'
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
