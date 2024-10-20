import React from 'react';
import Slider from 'react-slick';
import Image1 from '../../assets/hero/headphone.png';
import Image2 from '../../assets/category/vr.png';
import Image3 from '../../assets/category/macbook.png';
import Button from '../shared/Button';

const HeroSlideData = [
  {
    id: 1,
    img: Image1,
    subtitle: 'Beats Solo',
    title: 'Wireless',
    title2: 'Headphone',
  },
  {
    id: 2,
    img: Image2,
    subtitle: 'Beats Solo',
    title: 'Wireless',
    title2: 'Virtual',
  },
  {
    id: 3,
    img: Image3,
    subtitle: 'Beats Solo',
    title: 'Branded',
    title2: 'Laptops',
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    // slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    css: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <section className='container'>
      <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center'>
        {/* Hero Section  */}
        <div className='container pb-8 sm:pb-0 '>
          <Slider {...settings}>
            {HeroSlideData.map((slide) => (
              <div key={slide.id}>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                  {/* text content section  */}
                  <div className='relative z-10 flex flex-col justify-center order-2 gap-4 pt-12 text-center sm:pl-3 sm:pt-0 sm:text-left sm:order-1'>
                    <h1
                      data-aos='zoom-out'
                      data-aos-duration='500'
                      // data-aos-delay='1200'
                      data-aos-once='ture'
                      className='text-2xl font-bold sm:text-6xl lg:text-2xl '
                    >
                      {slide.subtitle}
                    </h1>
                    <h1
                      data-aos='zoom-out'
                      data-aos-duration='500'
                      // data-aos-delay='1200'
                      data-aos-once='ture'
                      className='font-bold teext-5xl sm:text-6xl lg:text-7xl '
                    >
                      {slide.title}
                    </h1>
                    <h1
                      data-aos='zoom-out'
                      data-aos-duration='500'
                      // data-aos-delay='1200'
                      data-aos-once='ture'
                      className='text-5xl text-white uppercase dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold  relative'
                    >
                      {slide.title2}
                    </h1>
                    <div
                      data-aos='fade-up'
                      data-aos-duration='500'
                      data-aos-delay='300'
                      data-aos-offset='0'
                    >
                      <Button
                        text={'Shop By Category'}
                        bgColor={'bg-primary'}
                        textColor={'text-white'}
                        handler={handleOrderPopup}
                      />
                    </div>
                  </div>
                  {/* Image section  */}
                  <div className='order-1 sm:order-2'>
                    <div data-aos='zoom-in' data-aos-once='ture'>
                      <img
                        src={slide.img}
                        alt=''
                        className='w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:scale-110  object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40'
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Hero;
