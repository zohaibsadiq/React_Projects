import Slider from 'react-slick';

const TestimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusamus rerum ipsum dicta optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusamus rerum ipsum dicta optio!',
    image: 'https://picsum.photos/101/101',
  },
  {
    id: 2,
    name: 'Imran Khan',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusamus rerum ipsum dicta optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusamus rerum ipsum dicta optio!',
    image: 'https://picsum.photos/102/102',
  },
  {
    id: 3,
    name: 'Elon Musk',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusamus rerum ipsum dicta optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusamus rerum ipsum dicta optio!',
    image: 'https://picsum.photos/103/103',
  },
  {
    id: 4,
    name: 'Bill Gates',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusamus rerum ipsum dicta optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusamus rerum ipsum dicta optio!',
    image: 'https://picsum.photos/104/104',
  },
  {
    id: 5,
    name: 'Mark Zuckerberg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusamus rerum ipsum dicta optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusamus rerum ipsum dicta optio!',
    image: 'https://picsum.photos/105/105',
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,

    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='py-10 mb-10'>
      <div className='container'>
        {/* Header Section  */}
        <div className='mb-10 text-center max-w-[600px] mx-auto'>
          <p data-aos='fade-up' className='text-sm text-primary'>
            What our customers are saying
          </p>
          <h1 data-aos='fade-up' className='text-3xl font-bold '>
            Testimonials
          </h1>
          <p data-aos='fade-up' className='text-xs text-gray-400'>
            Lorem ipsum dolor sit, am'et consectetur adipisicing elit. Saepe
            accusamus rerum ipsum dicta optio!
          </p>
        </div>
        {/* Testimonials cards  */}
        <div data-aos='zoom-in'>
          <Slider {...settings}>
            {TestimonialsData.map((data) => (
              <div className='my-6'>
                <div
                  className='relative flex flex-col gap-4 px-6 py-8 mx-4 shadow-lg rounded-xl dark:bg-gray-800 bg-primary/10'
                  key={data.id}
                >
                  <div className='mb-4'>
                    <img
                      src={data.image}
                      alt=''
                      className='w-20 h-20 rounded-full '
                    />
                  </div>
                  <div className='flex flex-col items-center gap-4'>
                    <div className='space-y-2'>
                      <p className='text-xs text-gray-400 '>{data.text}</p>
                      <h1 className='text-xl font-bold text-black/80 dark:text-white'>
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className='absolute top-0 right-0 font-serif text-black/20 text-9xl'>
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
