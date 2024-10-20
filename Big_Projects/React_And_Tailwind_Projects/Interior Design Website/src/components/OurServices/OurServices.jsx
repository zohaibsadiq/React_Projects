import { FaVectorSquare } from 'react-icons/fa';
import { FaPenToSquare } from 'react-icons/fa6';
import { BiSolidDollarCircle } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { SlideUp } from '../../animation/animation';

const ServiceCard = [
  {
    id: 1,
    title: 'Luxury Facilities',
    description:
      'Lorem ipsum dolor sit amet, consectetur . adipisicing elit . adipisicing fuga. adipisicing elit.',
    icons: <FaVectorSquare />,
    link: '#',
    delay: 0.2,
  },
  {
    id: 2,
    title: 'Quality Products',
    description:
      'Lorem ipsum dolor sit amet, consectetur . adipisicing elit. adipisicing elit. adipisicing elit.',
    icons: <FaPenToSquare />,
    link: '#',
    delay: 0.4,
  },
  {
    id: 3,
    title: 'Affordable Prices',
    description:
      'Lorem ipsum dolor sit amet, consectetur . adipisicing elit. quae, quia. adipisicing elit.',
    icons: <BiSolidDollarCircle />,
    link: '#',
    delay: 0.6,
  },
];

const OurServices = () => {
  return (
    <section>
      <div className='container py-20'>
        {/* Heading section  */}
        <div className='space-y-2 text-center max-w-[350px] mx-auto mb-8'>
          <motion.h1
            variants={SlideUp(0.2)}
            initial='initial'
            whileInView='animate'
            className='font-serif text-3xl font-bold '
          >
            What we Provide
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            initial='initial'
            whileInView='animate'
            className='text-sm text-gray-500'
          >
            Bring your dream home to life with ono-on-one design help & hand
            picked products
          </motion.p>
        </div>
        {/* Card section  */}
        <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
          {ServiceCard.map((service) => {
            return (
              <motion.div
                variants={SlideUp(service.delay)}
                initial='initial'
                whileInView='animate'
                key={service.id}
                className='space-y-4 border-black/30 px-6 py-10 border-[1px] hover:bg-black hover:text-white hover:shadow-[7px_7px_0px_0px_#6c6c6c] duration-300'
              >
                <span className='inline-block p-3 text-xl border-[1px] border-black rounded-full '>
                  {service.icons}
                </span>
                <p className='font-serif text-2xl font-bold'>{service.title}</p>
                <p className='text-xs text-gray-400 '>{service.description}</p>
                <a
                  className='inline-block border-b border-black'
                  href={service.link}
                >
                  Learn More
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
