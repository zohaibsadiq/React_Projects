import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import Button from '../shared/Button';

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div>
          <div className='fixed top-0 left-0 z-50 w-screen h-screen bg-black/50 backdrop-blur-sm'>
            <div className='fixed p-4 duration-200 -translate-x-1/2 -translate-y-1/2 bg-white shadow-md top-1/2 left-1/2 dark:bg-gray-900 dark:text-white w-[300px] rounded-xl '>
              {/* Header Section  */}
              <div className='flex items-center justify-between'>
                <h1>Order Now</h1>
                <IoCloseOutline
                  onClick={() => setOrderPopup(!orderPopup)}
                  className='text-2xl cursor-pointer'
                />
              </div>

              {/* Form Section   */}
              <div className='mt-4'>
                <input type='text' placeholder='Name' className='from-input' />
                <input
                  type='email'
                  placeholder='Email'
                  className='from-input'
                />
                <input
                  type='text'
                  placeholder='Address'
                  className='from-input'
                />
                <div className='flex justify-center'>
                  <Button
                    text='Order Now'
                    bgColor={'bg-primary'}
                    textColor={'text-white'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
