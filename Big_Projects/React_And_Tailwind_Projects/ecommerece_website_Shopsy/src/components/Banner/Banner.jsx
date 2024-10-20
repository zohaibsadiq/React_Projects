import React from 'react';
import BannerImg from '../../assets/women/women2.jpg';
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';
const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
      <div className='container'>
        <div className='grid items-center grid-cols-1 gap-6 sm:grid-cols-2'>
          {/* Image section  */}
          <div data-aos='zoom-in'>
            <img
              src={BannerImg}
              alt=''
              className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-contain'
            />
          </div>
          {/* Text details section  */}
          <div className='flex flex-col justify-center gap-3 sm:pt-0'>
            <h1 data-aos='fade-up' className='text-3xl font-bold sm:text-4xl'>
              Winter Sale upto 50% off
            </h1>
            <p
              data-aos='fade-up'
              className='text-sm leading-5 tracking-wide text-gray-500'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              voluptates, voluptatem, quae, voluptatum quidem quas dolorum
              voluptas dicta tempora quibusdam.
            </p>
            <div className='flex flex-col gap-4'>
              <div data-aos='fade-up' className='flex items-center gap-4'>
                <GrSecure className='w-12 h-12 p-4 text-4xl rounded-full shadow-sm bg-amber-100 dark:bg-amber-400' />
                <p>Quality Products</p>
              </div>
              <div data-aos='fade-up' className='flex items-center gap-4'>
                <IoFastFood className='w-12 h-12 p-4 text-4xl bg-red-100 rounded-full shadow-sm dark:bg-red-400' />
                <p>Fast Delivery</p>
              </div>
              <div data-aos='fade-up' className='flex items-center gap-4'>
                <GiFoodTruck className='w-12 h-12 p-4 text-4xl bg-orange-300 rounded-full shadow-sm dark:bg-orange-400' />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
