import Img1 from '../../assets/shirt/shirt.png';
import Img2 from '../../assets/shirt/shirt2.png';
import Img3 from '../../assets/shirt/shirt3.png';
import { FaStar } from 'react-icons/fa6';

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: 'Causal Wear',
    description:
      'loreum ipsum dolor sit amet, consectetur adipisicing elit. Saepe accusamus rerum ipsum dicta optio! adipisicing elit. Saepe accusamus rerum ipsum dicta optio!',
  },
  {
    id: 2,
    img: Img2,
    title: 'Printed Shirt',
    description:
      'loreum ipsum dolor sit amet, consectetur adipisicing elit. Saepe accusamus rerum ipsum dicta optio! adipisicing elit. Saepe accusamus rerum ipsum dicta optio!',
  },
  {
    id: 3,
    img: Img3,
    title: 'Women shirt',
    description:
      'loreum ipsum dolor sit amet, consectetur adipisicing elit. Saepe accusamus rerum ipsum dicta optio! adipisicing elit. Saepe accusamus rerum ipsum dicta optio!',
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className='container'>
        {/* Header Section  */}
        <div className='mb-24 text-left '>
          <p data-aos='fade-up' className='text-sm text-primary'>
            Top Rated Products for you
          </p>
          <h1 data-aos='fade-up' className='text-3xl font-bold '>
            Best Products
          </h1>
          <p data-aos='fade-up' className='text-xs text-gray-400'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
            accusamus rerum ipsum dicta optio!
          </p>
        </div>
        {/* Body Section  */}
        <div className='grid gap-10 grid-col-1 sm:grid-cols-2 md:grid-cols-3 place-items-center'>
          {ProductsData.map((product) => (
            <div
              data-aos='zoom-in'
              className='relative shadow-xl rounded-2xl dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white duration-300 group max-w-[300px]'
              key={product.id}
            >
              {/* Image Section  */}
              <div className='h-[100px]'>
                <img
                  src={product.img}
                  alt=''
                  className='max-w-[140px] block mx-auto transfrom -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'
                />
              </div>
              {/* details Section  */}
              <div className='p-4 text-center '>
                {/* star rating */}
                <div className='flex justify-center w-full gap-1 item-center'>
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                </div>
                <h1 className='text-xl font-bold'>{product.title}</h1>
                <p className='text-sm text-gray-500 duration-300 group-hover:text-white line-clamp-2'>
                  {product.description}
                </p>
                <button
                  className='px-4 py-1 mt-4 text-white duration-300 rounded-full bg-primary hover:scale-105 group-hover:bg-white group-hover:text-primary'
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
