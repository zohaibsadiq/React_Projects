import pic1 from "../../Assets/Component_Pics/testominal1.png";
import pic2 from "../../Assets/Component_Pics/testominal2.png";
import pic3 from "../../Assets/Component_Pics/testominal3.png";

const Testimoial = () => {
  return (
    <section className="text-gray-600 body-font ">
      <div className="container px-5 py-8 mx-auto">
        <h1 className="flex justify-center pt-5 mx-auto text-3xl font-bold text-black pb-7 ">Testimonial</h1>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 mb-6 lg:w-1/3 lg:mb-0">
            <div className="h-full text-center">
              <img
                src={pic1}
                alt="Testimonial1 of client"
                className="rounded-lg shadow-md shadow-black"
              />
            </div>
          </div>
          <div className="p-4 mb-6 lg:w-1/3 lg:mb-0">
            <div className="h-full text-center">
              <img
                src={pic2}
                alt="Testimonial of client"
                className="rounded-lg shadow-md shadow-black"
              />
            </div>
          </div>
          <div className="p-4 lg:w-1/3 lg:mb-0">
            <div className="h-full text-center">
              <img
                src={pic3}
                alt="Testimonial of client"
                className="rounded-lg shadow-md shadow-black"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimoial;
