import clock from "../../Assets/Component_Pics/Choose/clock.png";
import shakehand from "../../Assets/Component_Pics/Choose/hand.png";
import secure from "../../Assets/Component_Pics/Choose/secure.png";
import wallet from "../../Assets/Component_Pics/Choose/wallet.png";
const WhyChoose = () => {
  return (
    <section className=" text gray-600 body-font bg-[#EEF4ED] bg-opacity-80  " id="WhyChoose" >
      <div className="container px-5 py-5 mx-auto">
        <div className="flex flex-col w-full mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-black sm:text-4xl title-font">
          Why Choose Us?
          </h1>
          <p className="mx-auto text-lg leading-relaxed text-black lg:w-2/3 ">
         Service Hub is the most trusted leading service provider in Pakistan. We have hired all the in-house staff so our customers can rely on us for any services. All our workers are background-verified and veterans in their field. We only use hi-tech machinery and tools to resolve all your issues effectively and in a matter of time and at your convenience
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="w-full p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 text-black border-2 border-[#FF6B35] rounded-lg">
              <img src={shakehand} alt="pic" className="mx-auto h-28" />
              <h2 className="text-xl font-medium text-gray-900 title-font">
                Promises Doorstep Services, saves travelling costs
              </h2>
            </div>
          </div>
          <div className="w-full p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 border-2 border-[#FF6B35] rounded-lg text-black" >
              <img src={clock} alt="pic" className="mx-auto h-28" />
              <h2 className="text-xl font-medium text-gray-900 title-font">
                Saves Your Time through an easy and efficient booking process
              </h2>
            </div>
          </div>
          <div className="w-full p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 border-2 border-[#FF6B35] rounded-lg text-black">
              <img src={wallet} alt="pic" className="mx-auto h-28" />
              <h2 className="text-xl font-medium text-gray-900 title-font">
                Companies achieve cost-effectiveness by optimizing resource
                utilization{" "}
              </h2>
            </div>
          </div>
          <div className="w-full p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 border-2 border-[#FF6B35] rounded-lg text-black">
              <img src={secure} alt="pic" className="mx-auto h-28" />
              <h2 className="text-xl font-medium text-gray-900 title-font">
                A comprehensive plan helps guarantee secure transactions .
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
