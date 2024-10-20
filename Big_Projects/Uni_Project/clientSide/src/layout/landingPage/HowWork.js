import { CiFaceSmile } from "react-icons/ci";
import { IoMdMan } from "react-icons/io";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoCheckmarkDone } from "react-icons/io5";

import workPic from "../../Assets/Component_Pics/howWork.png";

const HowWork = () => {
  return (
    <section className="mt-5 text-gray-600 bg-opacity-50 body-font">
      <div className="container flex flex-wrap items-center px-5 py-10 mx-auto ">
        <h1 className="mx-auto text-3xl font-bold text-black mb-8 md:mb-0 shadow-lg p-2 bg-[#EEF4ED] rounded-md">
          How it Works?
        </h1>
        <div className="flex flex-col w-full lg:flex-row">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10">
            <div className="relative flex pb-6 ">
              <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none" />
              </div>
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-12 h-12 text-white bg-[#FF6B35] rounded-full">
                <MdOutlinePhoneInTalk />
              </div>
              <div className="flex-grow pl-4 mt-2">
                <span className="mb-1 mt-3 text-lg font-medium tracking-wider text-[#FF6B35] title-font p-2 shadow-lg rounded-md bg-[#EEF4ED]">
                  STEP 1
                </span>
                <p className="p-2 text-3xl font-bold leading-relaxed text-black sm:text-nowrap">
                  Book Service
                </p>
              </div>
            </div>
            <div className="relative flex pb-6">
              <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none" />
              </div>
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-12 h-12 text-white bg-[#FF6B35] rounded-full">
                <IoMdMan />
              </div>
              <div className="flex-grow pl-4 mt-2">
                <span className="mb-1 text-lg font-medium tracking-wider text-[#FF6B35] title-font p-2 shadow-lg rounded-md bg-[#EEF4ED]">
                  STEP 2
                </span>
                <p className="p-2 text-3xl font-bold leading-relaxed text-black sm:text-nowrap">
                  Handyman Arrives
                </p>
              </div>
            </div>
            <div className="relative flex pb-6">
              <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none" />
              </div>
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-12 h-12 text-white bg-[#FF6B35] rounded-full">
                <IoCheckmarkDone />
              </div>
              <div className="flex-grow pl-4 mt-2">
                <span className="mb-1 text-lg font-medium tracking-wider text-[#FF6B35] title-font p-2 shadow-lg rounded-md bg-[#EEF4ED]">
                  STEP 3
                </span>
                <p className="p-2 text-3xl font-bold leading-relaxed text-black sm:text-nowrap">
                  Job Done
                </p>
              </div>
            </div>

            <div className="relative flex">
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-12 h-12 text-white bg-[#FF6B35] rounded-full">
                <CiFaceSmile />
              </div>
              <div className="flex-grow pl-4 mt-2">
                <span className="mb-1 text-lg font-medium tracking-wider text-[#FF6B35] title-font p-2 shadow-lg rounded-md bg-[#EEF4ED]">
                  STEP 4
                </span>
                <p className="p-2 text-3xl font-bold leading-relaxed text-black sm:text-nowrap">
                  Satisfaction Guranteed
                </p>
              </div>
            </div>
          </div>
          <img
            className="object-contain h-96 sm:mt-12"
            src={workPic}
            alt="step"
          />
        </div>
      </div>
    </section>
  );
};

export default HowWork;
