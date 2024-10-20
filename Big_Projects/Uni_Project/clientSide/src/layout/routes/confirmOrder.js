import { IoMdCall } from "react-icons/io";
import logo from "../../Assets/logo.png";

import PlaceOrder from "../../components/placeOrder";
import Footer from "../landingPage/Footer";
import WhyChoose from "../landingPage/WhyChoose";

const confirmOrder = () => {
  return (
    <div className="">
      <section className=" bg-[#EEF4ED] border-gray-500">
        <navbar className="flex flex-wrap items-center justify-center mx-2 sm:justify-between sm:mx-16">
          <div className="">
            <a href="/" className="flex items-center rtl:space-x-reverse">
              <img src={logo} className="mb-3 h-11" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold text-[#FF6B35] whitespace-nowrap ">
                Services Hub
              </span>
            </a>
          </div>
          <div className="flex ml-8 xs:mr-0">
            <a href="#WhyChoose">
              <h2 className="p-2 text-[#FF6B35] text-xl font-semibold">
                Why Choose Us
              </h2>
            </a>
            <div>
              {/* Modal toggle */}
              <button
                data-modal-target="default-modal"
                data-modal-toggle="default-modal"
                className="block px-3 py-3 font-medium text-center text-white bg-[#FF6B35] rounded-full text-md  focus:ring-2 focus:outline-none focus:ring-[#FF6B35]"
                type="button"
              >
                <IoMdCall />
              </button>
              {/* Main modal */}
              <div
                id="default-modal"
                tabIndex={-1}
                aria-hidden="true"
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
              >
                <div className="relative w-full max-w-md max-h-full p-4">
                  {/* Modal content */}
                  <div className="relative bg-gray-300 rounded-lg shadow-lg">
                    {/* Modal header */}
                    <div className="flex items-center justify-between p-4 rounded md:p-5 ">
                      <h3 className="text-3xl font-semibold text-black">
                        Our Number : 03111111111
                      </h3>
                      <button
                        type="button"
                        className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto"
                        data-modal-hide="default-modal"
                      >
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </navbar>
      </section>

      <PlaceOrder />
      <WhyChoose />
      <Footer />
    </div>
  );
};

export default confirmOrder;
