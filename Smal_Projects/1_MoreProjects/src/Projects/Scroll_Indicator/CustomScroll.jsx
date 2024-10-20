import React, { useEffect, useState } from 'react';
import './Scroll.css';
const CustomScroll = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const [scrollPercentage, setscrollPercentage] = useState(0);
  const fetchData = async () => {
    try {
      setloading(true);
      const response = await fetch('https://dummyjson.com/products?limit=100');
      const data = await response.json();
      console.log(data);
      {
        data.products && (setdata(data.products), setloading(false));
      }
    } catch (err) {
      seterror(err.message);
      setloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percentage = (scrolled / scrollable) * 100;
      setscrollPercentage(percentage);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        const scrollable =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const percentage = (scrolled / scrollable) * 100;
        setscrollPercentage(percentage);
      });
    };
  }, []);

  console.log(scrollPercentage);
  console.log(document.documentElement.scrollHeight );
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <div className='top-container'>
        <h1>Custom Scroll Indicator</h1>
        <div className='scroll-progress'>
          <div
            className='current-progress'
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className='data-container'>

          {data.map((item, index) => (
            <div key={index} className='card'>
              <img src={item.thumbnail} alt={item.name} />
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
    </div>
  );
};

export default CustomScroll;
