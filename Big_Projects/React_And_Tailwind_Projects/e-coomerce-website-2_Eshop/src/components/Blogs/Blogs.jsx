import React from 'react';
import Heading from '../shared/Heading';
import Img1 from '../../assets/blogs/blog-1.jpg';
import Img2 from '../../assets/blogs/blog-2.jpg';
import Img3 from '../../assets/blogs/blog-3.jpg';

const BlogData = [
  {
    title: 'How to choose perfect smartwatch',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    published: 'Jan 20, 2024 by Zohaib',
    image: Img1,
    aosDelay: 100,
  },
  {
    title: 'How to choose perfect gadget',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    published: 'Jan 20, 2024 by Anas ',
    image: Img2,
    aosDelay: 250,
  },
  {
    title: 'How to choose perfect VR headset',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    published: 'Jan 20, 2024 by Ahmed',
    image: Img3,
    aosDelay: 350,
  },
];

const Blogs = () => {
  return (
    <div className='my-12'>
      <div className='container'>
        {/* Header section  */}
        <Heading title='Recent News' subTitle='Explore Our Blogs' />
        {/* Blog section  */}
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 gap-y-8 sm:gap-4 md:gap-7'>
          {/* Blog Card  */}
          {BlogData.map((data, index) => (
            <div
              data-aos='fade-up'
              data-aos-delay={data.aosDelay}
              className='bg-white dark:bg-gray-900'
              key={index}
            >
              {/* image section  */}
              <div className='mb-2 overflow-hidden rounded-2xl'>
                <img
                  src={data.image}
                  alt=''
                  className='w-full h-[200px] object-cover rounded-2xl hover:scale-105 duration-500 '
                />
              </div>
              {/* content section  */}
              <div className='space-y-2'>
                <p className='text-xs text-gray-500'>{data.published}</p>
                <p className='font-bold line-clamp-1 '>{data.title}</p>
                <p className='text-sm text-gray-600 line-clamp-2 dark:text-gray-400'>
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
