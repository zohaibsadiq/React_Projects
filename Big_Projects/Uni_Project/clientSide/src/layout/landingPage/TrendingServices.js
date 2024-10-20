import Card from "../../components/Card";
import Ac from "../../Assets/Component_Pics/Trending/Ac.png";
import Wiring from "../../Assets/Component_Pics/Trending/Wiring.png";
import acService from "../../Assets/Component_Pics/Trending/acService.png";
import lock from "../../Assets/Component_Pics/Trending/lock.png";
import machine from "../../Assets/Component_Pics/Trending/machine.png";
import shower from "../../Assets/Component_Pics/Trending/shower.png";
import ups from "../../Assets/Component_Pics/Trending/ups.jpg";

const TrendingServices = () => {
  return (
    <section className="flex flex-col flex-wrap gap-4 mx-0 sm:mx-10 md:flex-row rounded-md bg-[#f2f5f2] p-10">
      <div className="flex-1 mb-3 md:mb-0">
        <div className="max-w-md mx-auto ">
          <h3 className="text-[#FF6B35] text-3xl mb-1">Trending Services</h3>
          <h1 className="mb-3 text-4xl font-bold">
            Hot-sellers are up for grabs!
          </h1>
          <p className="text-lg font-semibold">
            The high rate of repeat customers and the abundance of positive
            reviews are clear indicators of the deep satisfaction our customers
            feel towards Our Services. These metrics underscore the strong
            affinity and loyalty they have developed for our offerings. They
            serve as compelling evidence of the exceptional quality,
            reliability, and value that we consistently deliver{" "}
          </p>
        </div>
      </div>

      {/* ********************************** Right Side ********************************** */}

      <div
        id="default-carousel"
        className="relative flex-1 w-full "
        data-carousel="slide"
      >
        {/* Carousel wrapper */}
        <div className="relative overflow-hidden rounded-lg h-[26rem] ">
          {/* Item 1 */}
          <div className="duration-700 ease-in-out " data-carousel-item="">
            <div className="flex justify-center gap-5">
              <Card
                name="Ac General Service"
                image={acService}
                rate="4.1"
                price="1700"
              />
              <Card
                name="Room Door lock Installation"
                image={lock}
                rate="4.9"
                price="800"
              />
            </div>
          </div>
          {/* Item 2 */}
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item=""
          >
            <div className="flex justify-center gap-5">
              <Card
                name="Washing Machine Repairing"
                image={machine}
                rate="4.4"
                price="1500"
              />
              <Card
                name="Ups Installation  "
                image={ups}
                rate="4.3"
                price="1000"
              />
            </div>
          </div>
          {/* Item 3 */}
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item=""
          >
            <div className="flex justify-center gap-5">
              <Card
                name="Electrical Wiring"
                image={Wiring}
                rate="4.5"
                price="500"
              />
              <Card
                name="Muslim Shower Replacement"
                image={shower}
                rate="4.8"
                price="500"
              />
            </div>
          </div>
          {/* Item 4 */}
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item=""
          >
            <div className="flex justify-center gap-5">
              <Card
                name="Washing Machine Repairing"
                image={machine}
                rate="4.4"
                price="1500"
              />
              <Card
                name="Door Lock Installation"
                image={lock}
                rate="4.9"
                price="800"
              />
            </div>
          </div>
          {/* Item 5 */}
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item=""
          >
            <div className="flex justify-center gap-5">
              <Card name="Ac Installation" image={Ac} rate="4.7" price="2000" />
              <Card
                name="Muslim Shower Replacement"
                image={shower}
                rate="4.8"
                price="500"
              />
            </div>
          </div>
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 bg-[#FF6B35] rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to={0}
          />
          <button
            type="button"
            className="w-3 h-3 bg-[#FF6B35] rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to={1}
          />
          <button
            type="button"
            className="w-3 h-3 bg-[#FF6B35] rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to={2}
          />
          <button
            type="button"
            className="w-3 h-3 bg-[#FF6B35] rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to={3}
          />
          <button
            type="button"
            className="w-3 h-3 bg-[#FF6B35] rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to={4}
          />
        </div>
        {/* Slider controls */}
      </div>
    </section>
  );
};

export default TrendingServices;
