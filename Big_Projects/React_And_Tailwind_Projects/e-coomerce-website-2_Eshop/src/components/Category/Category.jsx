import React from 'react';
import Image1 from '../../assets/category/earphone.png';
import Image2 from '../../assets/category/watch.png';
import Image3 from '../../assets/category/macbook.png';
import Button from '../shared/Button';

const Category = () => {
  return (
    <section className='py-8'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          {/* first col  */}
          <div className='relative py-10 pl-5 text-white bg-gradient-to-br from-black/90 to-black/70 rounded-3xl h-[320px] flex items-end'>
            <div>
              <div className='mb-4 '>
                <p className='mb-[2px] text-gray-400 '>Enjoy</p>
                <p className='text-2xl font-semibold mb-[2px] '>With</p>
                <p className='mb-2 text-4xl font-bold xl:text-5xl opacity-20'>
                  Earphone
                </p>
                <Button
                  text={'Browse'}
                  bgColor={'bg-primary'}
                  textColor={'text-white'}
                />
              </div>
            </div>
            <img src={Image1} alt='' className='w-[320px] absolute bottom-0' />
          </div>
          {/* second col  */}
          <div className='relative py-10 pl-5 text-white bg-gradient-to-br from-brandYellow to-brandYellow/90 rounded-3xl h-[320px] flex items-end'>
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
                  textColor={'text-brandYellow'}
                />
              </div>
            </div>
            <img
              src={Image2}
              alt=''
              className='w-[320px] absolute -right-4 lg:top-[40px]'
            />
          </div>
          {/* third col  */}
          <div className='sm:col-span-2 relative py-10 pl-5 text-white bg-gradient-to-br from-primary to-primary/90 rounded-3xl h-[320px] flex items-end'>
            <div>
              <div className='mb-4 '>
                <p className='mb-[2px] text-white '>Enjoy</p>
                <p className='text-2xl font-semibold mb-[2px] '>With</p>
                <p className='mb-2 text-4xl font-bold xl:text-5xl opacity-40'>
                  Laptop
                </p>
                <Button
                  text={'Browse'}
                  bgColor={'bg-white'}
                  textColor={'text-primary'}
                />
              </div>
            </div>
            <img
              src={Image3}
              alt=''
              className='w-[250px] absolute top-1/2 -translate-y-1/2 -right-0'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
