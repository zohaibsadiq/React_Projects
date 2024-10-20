import contactUsPic from "../../Assets/Component_Pics/contactUs-pic.png";
import Footer from "../landingPage/Footer";
import Navbar from "../landingPage/Navbar";
const contactUs = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="flex items-center justify-end sm:justify-between bg-[#FF6B35] flex-wrap p-6">
          <h1 className="ml-16 text-5xl font-semibold text-[#EEF4ED] mx-auto">
            Contact Us
          </h1>
          <img
            src={contactUsPic}
            alt="contactUs"
            className="h-56 sm:mt-0 mt-7"
          />
        </div>

        <div className="py-10 bg-[#EEF4ED] m-8 rounded-md">
          <h2 className="text-3xl font-bold text-center">Contact Us</h2>
          <p className="max-w-4xl mx-auto mt-3 text-lg text-center">
            If you have any query or complaint, please feel free to reach out to
            us by filling the form given below or email us at
            info@ServiceHub.com
          </p>
          <section className="relative body-font">
            <div className="container flex flex-wrap px-5 py-16 mx-auto sm:flex-nowrap">
              <div className="relative flex items-end justify-start p-10 overflow-hidden bg-[#EEF4ED] rounded-lg lg:w-2/3 md:w-1/2 ">
                <iframe
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  frameBorder={0}
                  title="map"
                  marginHeight={0}
                  marginWidth={0}
                  scrolling="no"
                  src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                  style={{ filter: "grayscale(1) contrast(1.2) opacity(0.8)" }}
                />
                <div className=" relative flex flex-wrap py-6 bg-[#EEF4ED] rounded shadow-md justify-start">
                  <div className="px-6 lg:w-1/2">
                    <h2 className="text-xs font-semibold tracking-widest text-black title-font">
                      ADDRESS
                    </h2>
                    <p className="mt-1 text-black text-wrap">
                      B-580 Glamour Height Apartments, Waris Road, Jubilee Town,
                      Lahore, Punjab 54000
                    </p>
                  </div>
                  <div className="px-6 mt-4 lg:w-1/2 lg:mt-0">
                    <h2 className="text-xs font-semibold tracking-widest text-black title-font">
                      EMAIL
                    </h2>
                    <a className="leading-relaxed text-[#FF6B35] text-wrap">
                      ServiceHub786@gmail.com
                    </a>
                    <h2 className="mt-4 text-xs font-semibold tracking-widest text-black title-font">
                      PHONE
                    </h2>
                    <p className="leading-relaxed text-black">123-456-7890</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full px-4 mt-8 bg-white rounded lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0">
                <h2 className="mb-1 text-lg font-medium text-center text-black title-font">
                  Let us know how we can help. We will get in touch as soon as
                  possible based on urgency of your request
                </h2>

                <div className="relative mb-4">
                  <label
                    htmlFor="name"
                    className="leading-7 text-black text-md"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-1 text-base leading-8 text-black transition-colors duration-200 ease-in-out bg-[#EEF4ED] border border-gray-300 rounded  focus:ring-[#FF6B35] focus:border-[#FF6B35] "
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-black text-md"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-1 text-base leading-8 text-black transition-colors duration-200 ease-in-out bg-[#EEF4ED] border border-gray-300 rounded focus:ring-[#FF6B35] focus:border-[#FF6B35] "
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="message"
                    className="leading-7 text-black text-md"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full h-32 px-3 py-1 text-base leading-6 text-black transition-colors duration-200 ease-in-out bg-[#EEF4ED] border border-gray-300 rounded focus:ring-[#FF6B35] focus:border-[#FF6B35] "
                    defaultValue={""}
                  />
                </div>
                <button className="px-6 py-2 text-lg text-[#EEF4ED] bg-[#FF6B35] border-0 rounded ">
                  Submit
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default contactUs;
