'use client';

import CountUp from 'react-countup'; // npm i react-countup for installation

const stats = [
  {
    num: 2,
    text: 'Years of Experience',
  },
  {
    num: 50,
    text: 'Projects Completed',
  },
  {
    num: 3,
    text: 'Technologies Mastered',
  },
  {
    num: 200,
    text: 'Code Commits',
  },
];

const Stats = () => {
  return (
    <section className='pt-4 pb-12 lg:pt-0 lg:pb-0'>
      <div className='container mx-auto'>
        <div className='gap-6 flex flex-wrap max-w-[80vw] mx-auto xl:max-w-none'>
          {stats.map((item, index) => {
            return (
              <div className='flex items-center justify-center flex-1 gap-4 lg:justify-start' key={index}>
                <CountUp
                  end={item.num}
                  duration={2}
                  delay={2}
                  className='text-4xl font-extrabold lg:text-6xl'
                />
                <p
                  className={`${
                    item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
