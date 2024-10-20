
import "../../style/style.css";
import HeroFoam from "../../components/HeroFoam";
const Hero = () => {
  return (
    <div className=" hero" loading="lazy" id="HeroSection">
      <section className="">
        <div className="container flex flex-col items-center px-5 py-2 mx-auto md:flex-row">
          <div className="flex flex-col items-center flex-1 mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
            <h1 className="mb-4 text-2xl xs:text-4xl font-bold sm:font-semibold text-[#FF6B35] title-font sm:text-5xl ">
              Skilled Professional At
              <br className="hidden lg:inline-block" />
              <h1 className="text-[#EEF4ED]">Your Doorstep.</h1>
            </h1>
            <p className="flex flex-wrap mb-8 text-xl text-[#EEF4ED]">
              Services Hub delivers a wide range of services prioritizing
              customer satisfaction and safety. We directly employ staff,
              guaranteeing quality and personalized solutions to meet your needs
              effectively.
            </p>
            <div className="flex justify-center">
              <foam className="flex flex-wrap items-center shadow-2xl">
                <select
                  id="small"
                  className="block w-32 h-10 p-2 mb-6 mr-2 text-sm text-[#EEF4ED] bg-gray-900 border bg-opacity-40  focus:ring-[#FF6B35] focus:border-[#FF6B35] rounded-lg"
                  
                >
                  <option selected >Karachi</option>
                  <option value="US">Lahore</option>
                </select>
                <div className="flex">
                  <input
                    type="text"
                    id="search"
                    className="flex-1 block w-64 h-10 p-2 mb-6 text-sm text-[#EEF4ED] bg-gray-900 bg-opacity-40  focus:ring-[#FF6B35] focus:border-[#FF6B35] rounded-lg placeholder-white  "
                    placeholder="Search"
                  />
                  <button
                    type="submit"
                    className="h-10 px-4 mb-6 ml-2 text-sm text-[#EEF4ED] bg-[#FF6B35] rounded-lg "
                    onclick="handleSearch()"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </button>
                </div>
              </foam>
            </div>
          </div>

          {/* Rigth side  */}
          <div className="flex-1 max-w-md p-3 ">
           <HeroFoam/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
