import Banner from '../../assets/website/orange-pattern.jpg';

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100%',
  width: '100%',
};

const Subscribe = () => {
  return (
    <div
      className='mb-20 text-white bg-gray-100 dark:bg-gray-800'
      data-aos='zoom-in'
      style={BannerImg}
    >
      <div className='container py-10 backdrop-blur-sm'>
        <div className='max-w-xl mx-auto space-y-6'>
          <h1 className='text-2xl font-semibold !text-center sm:text-left sm:text-4xl '>
            Get Notified About New Products
          </h1>
          <input
            data-aos='fade-up'
            type='text'
            placeholder='Enter your Email'
            className='w-full p-3'
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
