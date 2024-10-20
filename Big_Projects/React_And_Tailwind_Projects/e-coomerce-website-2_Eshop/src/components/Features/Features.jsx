import React from 'react';
import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from 'react-icons/fa';

const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide className='text-4xl md:text-5xl text-primary' />,
    title: 'Free Shipping',
    desc: 'Free shipping on all orders',
  },
  {
    id: 2,
    icon: <FaHeadphonesAlt className='text-4xl md:text-5xl text-primary' />,
    title: 'Online 24/7 Support',
    desc: '24/7 support for all customers',
  },
  {
    id: 3,
    icon: <FaWallet className='text-4xl md:text-5xl text-primary' />,
    title: 'Secure Payment',
    desc: 'Secure payment for all customers',
  },
  {
    id: 4,
    icon: <FaCheckCircle className='text-4xl md:text-5xl text-primary' />,
    title: 'Safe Money',
    desc: '30 days money back guarantee',
  },
];

const Features = () => {
  return (
    <section>
      <div className='container my-14 md:my-20 '>
        <div className='grid grid-cols-2 gap-4 lg:grid-cols-4 gap-y-8'>
          {ServiceData.map((item) => (
            <div
              key={item.id}
              className='flex flex-col items-start gap-4 sm:flex-row'
            >
              {item.icon}
              <div>
                <h1 className='font-bold lg:text-xl '>{item.title}</h1>
                <h1 className='text-sm text-gray-400'> {item.desc}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
