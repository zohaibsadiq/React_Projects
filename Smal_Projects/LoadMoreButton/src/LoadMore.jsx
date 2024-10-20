import React, { useEffect, useState } from 'react';
import './App.css';
const LoadMore = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await res.json();
      console.log(data);
      if (data && data.products && data.products.length) {
        setProducts((prev) => [...prev, ...data.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);
  if (loading) {
    return <div>Loading...</div>;
  }

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className='container'>
      <div className='product-container'>
        {products && products.length
          ? products.map((item) => {
              return (
                <div className='product' key={item.id}>
                  <img src={item.thumbnail} alt={item.title} />
                    <div>
                        <h3>{item.title}</h3>
                        <p>Rs. {item.price}</p>

                </div>
                </div>
              );
            })
          : null}
      </div>
      <div>
        <button
          className='loadButton'
          onClick={handleClick}
          disabled={count == 3}
        >
          Load More Products
        </button>
        {count == 3 && <div> your Product reach to 80</div>}
      </div>
    </div>
  );
};

export default LoadMore;
