import { BsStarFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { SlideLeft, SlideUp } from '../../animation/animation';

const TestimonialData = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'CEO',
    img: 'https://i.pravatar.cc/300?img=1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas lacinia. Nullam',
    delay: 0.2,
  },
  {
    id: 2,
    name: 'Alex',
    designation: 'CTO',
    img: 'https://i.pravatar.cc/300?img=2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas lacinia. Nullam',
    delay: 0.4,
  },
  {
    id: 3,
    name: 'George',
    designation: 'COO',
    img: 'https://i.pravatar.cc/300?img=3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas lacinia. Nullam',
    delay: 0.6,
  },
];
const Testimonial = () => {
  return (
    <section>
      <div className=' py-14'>
        {/* Header section  */}
        <div className='space-y-5 text-center max-w-[550px] mx-auto mb-8'>
          <motion.h1
            variants={SlideUp(0.2)}
            initial='initial'
            whileInView='animate'
            className='font-serif text-4xl font-bold '
          >
            Words from our customers
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            initial='initial'
            whileInView='animate'
            className='text-sm text-gray-500 max-w-[350px] mx-auto'
          >
            Bring your dream home to life with one-on-one design help & hand
            picked product
          </motion.p>
        </div>
        {/* Testimonial cards */}
        <div className='p-12 bg-black'>
          <div className='container grid grid-cols-1 gap-6 md:grid-cols-3'>
            {TestimonialData.map((item) => {
              return (
                <motion.div
                  variants={SlideLeft(item.delay)}
                  initial='initial'
                  whileInView='animate'
                  key={item.id}
                  className='border-[1px] border-gray-500 px-5 py-8 text-white group hover:bg-white hover:text-black duration-300'
                >
                  {/* Upper section  */}
                  <div className='flex flex-row items-center gap-5 '>
                    <img
                      src={item.img}
                      alt=''
                      className='w-[60px] rounded-full '
                    />
                    <div>
                      <p className='font-serif text-sm font-bold '>
                        {item.name}
                      </p>
                      <p className='text-xs text-gray-400 '>
                        {' '}
                        {item.designation}
                      </p>
                      <div className='flex gap-1 mt-2'>
                        {Array.from({ length: 5 }, (_, index) => (
                          <BsStarFill
                            key={index}
                            className='text-xs text-yellow-400'
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Bottom section */}
                  <div className='pt-5 mt-5 border-t-2 border-gray-500/40'>
                    <p className='text-sm text-gray-300 duration-300 group-hover:text-black'>
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
