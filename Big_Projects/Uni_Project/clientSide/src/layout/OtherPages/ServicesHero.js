import { useEffect, useRef } from "react";
import serviceHero1 from "../../Assets/ServiceHero1.jpg";
import serviceHero2 from "../../Assets/ServiceHero2.jpg";
import serviceHero3 from "../../Assets/ServiceHero3.jpg";

const ServicesHero = () => {
  const currentIndex = useRef(0);

  useEffect(() => {
    const carouselElement = document.getElementById('default-carousel');
    const items = carouselElement.querySelectorAll('[data-carousel-item]');
    const indicators = carouselElement.querySelectorAll('[data-carousel-slide-to]');

    const showSlide = (index) => {
      items.forEach((item, i) => {
        item.classList.toggle('hidden', i !== index);
      });

      indicators.forEach((indicator, i) => {
        indicator.setAttribute('aria-current', i === index ? 'true' : 'false');
        if (i === index) {
          indicator.classList.add('bg-white');
          indicator.classList.remove('bg-black');
        } else {
          indicator.classList.add('bg-black');
          indicator.classList.remove('bg-white');
        }
      });
    };

    const nextSlide = () => {
      currentIndex.current = (currentIndex.current + 1) % items.length;
      showSlide(currentIndex.current);
    };

    // Show the first slide initially
    showSlide(currentIndex.current);

    // Set interval to auto-slide every 3 seconds
    const intervalId = setInterval(nextSlide, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleIndicatorClick = (index) => {
    const carouselElement = document.getElementById('default-carousel');
    const items = carouselElement.querySelectorAll('[data-carousel-item]');
    const indicators = carouselElement.querySelectorAll('[data-carousel-slide-to]');

    const showSlide = (index) => {
      items.forEach((item, i) => {
        item.classList.toggle('hidden', i !== index);
      });

      indicators.forEach((indicator, i) => {
        indicator.setAttribute('aria-current', i === index ? 'true' : 'false');
        if (i === index) {
          indicator.classList.add('bg-white');
          indicator.classList.remove('bg-black');
        } else {
          indicator.classList.add('bg-black');
          indicator.classList.remove('bg-white');
        }
      });
    };

    currentIndex.current = index;
    showSlide(index);
  };

  return (
    <section className="mx-10 my-10 text-black body-font">
      <div className="container flex flex-col px-5 py-6 mx-auto item lg:flex-row">
        {/* Left Side */}
        <div className="flex flex-col items-center mx-auto text-center md:mt-24 lg:flex-grow lg:pr-24 md:pr-16 md:text-left md:mb-0">
          <h1 className="mb-4 text-3xl font-bold text-[#FF6B35] title-font sm:text-6xl lg:text-center">
            Home Maintenance Made Easy!!
          </h1>
          <p className="text-lg leading-relaxed text-center lg:max-w-md md:my-8">
            Your go-to platform for seamless connections between customers and skilled technicians. Experience quick, safe, and affordable service booking for all your home repair needs. Whether it's plumbing, electrical work, or HVAC maintenance.
          </p>
        </div>
        {/* Right Side */}
        <div className="w-5/6 mx-auto lg:max-w-xl">
          <div id="default-carousel" className="relative w-full" data-carousel="slide">
            {/* Carousel wrapper */}
            <div className="relative overflow-hidden h-56 sm:h-[28rem] md:mt-0 mt-4 object-top">
              {/* Carousel Item 1 */}
              <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                <img
                  src={serviceHero1}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 md:rounded-bl-[20rem] top-1/2 left-1/2"
                  alt="Service Hero 1"
                />
              </div>
              {/* Carousel Item 2 */}
              <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                <img
                  src={serviceHero2}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:rounded-bl-[20rem]"
                  alt="Service Hero 2"
                />
              </div>
              {/* Carousel Item 3 */}
              <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                <img
                  src={serviceHero3}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:rounded-bl-[20rem]"
                  alt="Service Hero 3"
                />
              </div>
            </div>
            {/* Slider Indicators */}
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2 rtl:space-x-reverse">
              <button
                type="button"
                className="w-3 h-3 bg-black rounded-full"
                aria-current="true"
                aria-label="Slide 1"
                data-carousel-slide-to={0}
                onClick={() => handleIndicatorClick(0)}
              />
              <button
                type="button"
                className="w-3 h-3 bg-black rounded-full"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to={1}
                onClick={() => handleIndicatorClick(1)}
              />
              <button
                type="button"
                className="w-3 h-3 bg-black rounded-full"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to={2}
                onClick={() => handleIndicatorClick(2)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
