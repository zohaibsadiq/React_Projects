import React from 'react';
import Image1 from '../../assets/category/gaming.png';
import Image2 from '../../assets/category/vr.png';
import Image3 from '../../assets/category/speaker.png';
import Button from '../shared/Button';

const Category2 = () => {
  return (
    <section className='py-8'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          {/* first col  */}
          <div className='sm:col-span-2 relative py-10 pl-5 text-white bg-gradient-to-br from-gray-400 to-gray-100/90 rounded-3xl h-[320px] flex items-end'>
            <div>
              <div className='mb-4 '>
                <p className='mb-[2px] text-white '>Enjoy</p>
                <p className='text-2xl font-semibold mb-[2px] '>With</p>
                <p className='mb-2 text-4xl font-bold xl:text-5xl opacity-40'>
                  Laptop
                </p>
                <Button
                  text={'Browse'}
                  bgColor={'bg-primary'}
                  textColor={'text-white'}
                />
              </div>
            </div>
            <img
              src={Image1}
              alt=''
              className='w-[250px] absolute top-1/2 -translate-y-1/2 -right-0'
            />
          </div>
          {/* second col  */}
          <div className='relative py-10 pl-5 text-white bg-gradient-to-br from-brandGreen/90 to-brandGreen/90 rounded-3xl h-[320px] flex items-start'>
            <div>
              <div className='mb-4 '>
                <p className='mb-[2px] text-white '>Enjoy</p>
                <p className='text-2xl font-semibold mb-[2px] '>With</p>
                <p className='mb-2 text-4xl font-bold xl:text-5xl opacity-20'>
                  Earphone
                </p>
                <Button
                  text={'Browse'}
                  bgColor={'bg-white'}
                  textColor={'text-brandGreen'}
                />
              </div>
            </div>
            <img src={Image2} alt='' className='w-[320px] absolute bottom-0' />
          </div>
          {/* third col  */}
          <div className='relative py-10 pl-5 text-white bg-gradient-to-br from-brandBlue to-brandBlue/90 rounded-3xl h-[320px] flex items-start'>
            <div>
              <div className='mb-4 '>
                <p className='mb-[2px] text-white '>Enjoy</p>
                <p className='text-2xl font-semibold mb-[2px] '>With</p>
                <p className='mb-2 text-4xl font-bold xl:text-5xl opacity-40'>
                  Gadget
                </p>
                <Button
                  text={'Browse'}
                  bgColor={'bg-white'}
                  textColor={'text-brandBlue'}
                />
              </div>
            </div>
            <img
              src={Image3}
              alt=''
              className='w-[200px] absolute right-0 bottom-0'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category2;
