import Brand1 from '../../assets/brand/1.png';
import Brand2 from '../../assets/brand/2.png';
import Brand3 from '../../assets/brand/3.png';
import Brand4 from '../../assets/brand/4.png';
import Brand5 from '../../assets/brand/5.png';
import { motion } from 'framer-motion';
import { SlideLeft } from '../../animation/animation';

const brandData = [Brand1, Brand2, Brand3, Brand4, Brand5];

const Brand = () => {
  return (
    <section>
      <div className='container py-14'>
        <div className='flex flex-wrap items-center justify-center gap-6 lg:justify-between'>
          {brandData.map((brand, index) => (
            <div key={index}>
              <motion.img
                variants={SlideLeft(0.2 + index * 0.2)} // Adjust the delay based on index
                initial='initial'
                whileInView='animate'
                className='w-[200px]'
                src={brand}
                alt='brandLogo'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brand;
