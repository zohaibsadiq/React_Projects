import React, { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './App.css';
const ImageSlider = ({ url, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, seterror] = useState(null);
  const [loading, setLoading] = useState(false);
  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=1&limit=${limit}`);
      const data = await response.json();
      console.log(data);
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      seterror(error.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    if (url !== '') fetchImages(url);
  }, [url]);
  if (loading) return <div>Loading data ! please wait</div>;
  if (error !== null) return <div>Something went wrong ! {error}</div>;
  console.log(images);

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className='container'>
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className='arrow left-arrow'
      />
      {images && images.length
        ? images.map((imageItem,index) => {
            return (
              <div key={imageItem.id} className='slide'>
                <img
                  key={imageItem.id}
                  alt={imageItem.download_url}
                  src={imageItem.download_url}
                  className={
                    currentSlide === index
                      ? 'current-Image'
                      : 'hide-current-image'
                  }
                />
              </div>
            );
          })
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className='arrow right-arrow'
      />
      <span className='circle-indicators'>
        {images && images.length
          ? images.map((_, index) => {
              return (
                <>
                  <button
                    key={index}
                    className={
                      currentSlide === index
                        ? 'circle-indicator'
                        : 'circle-indicator hide-current-indicator'
                    }
                    onClick={() => setCurrentSlide(index)}
                  ></button>
                </>
              );
            })
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
