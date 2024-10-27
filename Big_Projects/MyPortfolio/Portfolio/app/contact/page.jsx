'use client';

import { Input } from '@/components/ui/input';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

import { motion } from 'framer-motion';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '+(92) 321 4292280',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'zohaib2056804@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Lahore, Pakistan',
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='py-6'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-[30px]'>
          {/* from  */}
          <div className='lg:w-[54%] order-2 lg:order-none'>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl '>
              <h3 className='text-4xl text-accent '>
                Let&apos;s work together
              </h3>
              <p className='text-white/60'>
                Fill out the form below and I will get back to you as soon as
                possible.
              </p>
              {/* Input  */}
              <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                <Input type='firstname' placeholder='Firstname' />
                <Input type='lastname' placeholder='Lastname' />
                <Input type='email' placeholder='Email' />
                <Input type='phone' placeholder='Phone number' />
              </div>
              {/* select  */}
              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select a Service' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value='est'>Web Development</SelectItem>
                    <SelectItem value='cst'>UI/UX</SelectItem>
                    <SelectItem value='mst'>Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textAera  */}
              <Textarea
                className='h-[200px] '
                placeholder='Type your message here.'
              />
              {/* button  */}
              <Button size='md' className='max-w-40'>
                Send message
              </Button>
            </form>
          </div>
          {/* contact info */}
          <div className='flex items-center flex-1 order-1 mb-8 lg:justify-end lg:order-none lg:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => (
                <li key={index} className='flex items-center gap-6'>
                  <div className='w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                    <div className='text-[28px]'>{item.icon}</div>
                  </div>
                  <div className='flex-1'>
                    <p className='text-white/60'>{item.title}</p>
                    <h3 className='text-xl'>{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
