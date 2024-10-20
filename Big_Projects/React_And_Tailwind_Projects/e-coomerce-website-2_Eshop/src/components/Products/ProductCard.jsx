import React from 'react';
import Button from '../shared/Button';

const ProductCard = ({ data }) => {
  return (
    <section className='mb-10'>
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-4 place-items-center'>
        {/* Card section  */}
        {data.map((item) => (
          <div
            data-aos='fade-up'
            data-aos-delay={item.aosDelay}
            className='group'
            key={item.id}
          >
            <div className='relative'>
              <img
                src={item.img}
                alt=''
                className='h-[180px] w-[260px] object-cover rounded-md s'
              />
              {/* hover button  */}
              <div className='absolute items-center justify-center hidden w-full h-full text-center duration-200 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 group-hover:backdrop-blur-sm group-hover:flex '>
                <Button
                  text='Add to cart'
                  bgColor={'bg-primary'}
                  textColor={'text-white'}
                />
              </div>
            </div>
            <div className='leading-7 '>
              <h2 className='font-semibold'>{item.title}</h2>
              <h2 className='font-bold'>{item.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCard;
