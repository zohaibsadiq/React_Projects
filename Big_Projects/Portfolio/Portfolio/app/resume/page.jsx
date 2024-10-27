'use client';
import experienceIcon from '../../public/assets/resume/badge.svg';
import educationIcon from '../../public/assets/resume/cap.svg';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaFigma,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '../../components/ui/tabs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { ScrollArea } from '@radix-ui/react-scroll-area';
import { motion } from 'framer-motion';

const about = {
  title: 'About me',
  description:
    'I am a full stack developer with a passion for creating beautiful and functional web applications. I have experience with a variety of technologies including HTML, CSS, JavaScript, React, Node.js, and more. I am always looking to learn new things and improve my skills.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Zohaib Sadiq',
    },
    {
      fieldName: 'Phone',
      fieldValue: '+(92) 321 4292280',
    },
    {
      fieldName: 'Experience',
      fieldValue: '2 years',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Pakistan',
    },
    {
      fieldName: 'Email',
      fieldValue: 'zohaib2056804@gmail',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    },
    {
      fieldName: 'Language',
      fieldValue: 'English, Urdu',
    },
  ],
};

// experience date

const experience = {
  icon: { experienceIcon },

  title: 'My experience',
  description:
    'I have experience with a variety of technologies including HTML, CSS, JavaScript, React, Node.js, and more. I am always looking to learn new things and improve my skills.',
  items: [
    {
      company: 'Paranthesis',
      position: 'Frontend Developer',
      duration: 'Summer 2024',
    },
    {
      company: 'Paranthesis',
      position: 'Full Stack Developer',
      duration: 'Summer 2024',
    },
  ],
};

// education data

const education = {
  icon: { educationIcon },
  title: 'My education',
  description:
    'I have experience with a variety of technologies including HTML, CSS, JavaScript, React, Node.js, and more. I am always looking to learn new things and improve my skills.',
  items: [
    {
      degree: 'BS Computer Science',
      institute: 'LLU',
      duration: '2022-2026',
    },
    {
      degree: 'Frontend Development',
      institute: 'Udemy',
      duration: '2024',
    },
    {
      degree: 'Next.js',
      institute: 'PIAIC',
      duration: '2023',
    },
  ],
};

// skills data

const skills = {
  title: 'My Skills',
  description:
    'I have experience with a variety of technologies including HTML, CSS, JavaScript, React, Node.js, and more. I am always looking to learn new things and improve my skills.',
  skillsList: [
    {
      name: 'HTML',
      icon: <FaHtml5 />,
    },
    {
      name: 'CSS',
      icon: <FaCss3 />,
    },
    {
      name: 'JavaScript',
      icon: <FaJs />,
    },
    {
      name: 'React',
      icon: <FaReact />,
    },
    {
      name: 'figma',
      icon: <FaFigma />,
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs />,
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss />,
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs />,
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 lg:py-0 '
    >
      <div className='container mx-auto'>
        <Tabs
         defaultValue='about'
          className='flex flex-col lg:flex-row gap-[60px] '
        >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6 '>
            <TabsTrigger value='about'>About me</TabsTrigger>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
          </TabsList>

          {/* content  */}
          <div className='min-h-[70vh] w-full'>
            {/* About me  */}
            <TabsContent
              value='about'
              className='w-full text-center lg:text-left'
            >
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {about.description}
                </p>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px]'>
                  {about.info.map((info, index) => (
                    <li
                      key={index}
                      className='flex items-center justify-between gap-4 lg:justify-start'
                    >
                      <span className='text-white/60 '>{info.fieldName}</span>
                      <span className='text-xl'>{info.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* Experience  */}
            <TabsContent value='experience'>
              <div className='flex flex-col gap-[30px] text-center lg:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto lg:mx-0'>
                  {experience.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 md:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className='bg-[#232329] h-[184px] py-6 px-10 flex flex-col justify-center items-center md:items-start gap-1 '
                      >
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center md:text-left'>
                          {item.position}
                        </h3>
                        <div className='flex items-center justify-center gap-3'>
                          {/* dot  */}
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60'>{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education  */}
            <TabsContent value='education'>
              <div className='flex flex-col gap-[30px] text-center lg:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto lg:mx-0'>
                  {education.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 md:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className='bg-[#232329] h-[184px] py-6 px-10 flex flex-col justify-center items-center md:items-start gap-1 '
                      >
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center md:text-left'>
                          {item.degree}
                        </h3>
                        <div className='flex items-center justify-center gap-3'>
                          {/* dot  */}
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60'>{item.institute}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills  */}
            <TabsContent value='skills' className='w-full h-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'> {skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto lg:mx-0'>
                    {skills.description}
                  </p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-[30px] gap-4'>
                  {skills.skillsList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[150px] flex justify-center items-center rounded-xl bg-[#232329] group'>
                            <div className='text-6xl transition-all duration-300 group-hover:text-accent'>
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className='capitalize'>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
