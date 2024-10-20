import Img1 from '../../assets/women/women.png';
import Img2 from '../../assets/women/women2.jpg';
import Img3 from '../../assets/women/women3.jpg';
import Img4 from '../../assets/women/women4.jpg';
import { FaStar } from 'react-icons/fa6';

const ProductsData = [
  {
    id: 1,
    title: 'Women Ethnic',
    img: Img1,
    rating: 4.0,
    color: 'White',
    aosDelay: 100,
  },
  {
    id: 2,
    title: 'Women western',
    img: Img2,
    rating: 4.5,
    color: 'Black',
    aosDelay: 200,
  },
  {
    id: 3,
    title: 'Goggles',
    img: Img3,
    rating: 3.5,
    color: 'Red',
    aosDelay: 300,
  },
  {
    id: 4,
    title: 'Printed T-shirt',
    img: Img4,
    rating: 4.0,
    color: 'Green',
    aosDelay: 400,
  },
  {
    id: 5,
    title: 'Fashion T-shirt',
    img: Img2,
    rating: 4.5,
    color: 'Blue',
    aosDelay: 500,
  },
];

const Products = () => {
  return (
    <div className='mb-12 mt-14'>
      <div className='container'>
        {/* Header Section  */}
        <div className='mb-10 text-center max-w-[600px] mx-auto'>
          <p data-aos='fade-up' className='text-sm text-primary'>
            Top Selling Products for you
          </p>
          <h1 data-aos='fade-up' className='text-3xl font-bold '>
            Products
          </h1>
          <p data-aos='fade-up' className='text-xs text-gray-400'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
            accusamus rerum ipsum dicta optio!
          </p>
        </div>
        {/* Body Section  */}
        <div>
          <div className='grid gap-5 grid-col-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center'>
            {/* Card Section  */}
            {ProductsData.map((product) => (
              <div
                className='space-y-3'
                data-aos='fade-up'
                data-aos-delay={product.aosDelay}
                data-aos-duration='700'
              >
                <img
                  src={product.img}
                  alt=''
                  className='h-[200px] w-[150px] object-cover rounded-md '
                />
                <div>
                  <h3 className='font-semibold'>{product.title}</h3>
                  <p className='text-sm text-gray-600 '>{product.color}</p>
                  <div className='flex items-center gap-1'>
                    <FaStar className='text-yellow-400' />
                    <span>{product.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Veiw all button  */}
          <div className='flex justify-center'>
            <button className='px-4 py-1 mt-10 text-center text-white rounded-md cursor-pointer bg-primary'>
              View All Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
