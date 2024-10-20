import React from 'react';
import Banner from './Banner';
import headphone from '../../assets/hero/headphone.png';
import smartwatch2 from '../../assets/category/smartwatch2-removebg-preview.png';
import Products from '../Products/Products';

const BannerData = {
  discount: '50% OFF',
  title: 'Fine Smile',
  date: '10 Jan to 20 Jan',
  image: headphone,
  title2: 'Air Solo Bass',
  title3: 'Winter Sale',
  title4:
    'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  bgColor: '#f42c37',
};
const BannerData2 = {
  discount: '30% OFF',
  title: 'Happy Hours',
  date: '14 Aug to 28 Aug',
  image: smartwatch2,
  title2: 'Smart Solo',
  title3: 'Winter Sale',
  title4:
    'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  bgColor: '#2dcc6f',
};

const BannerParent = () => {
  return (
    <>
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
    </>
  );
};

export default BannerParent;
