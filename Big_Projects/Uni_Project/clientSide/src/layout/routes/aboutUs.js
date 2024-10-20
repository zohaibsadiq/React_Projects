import React from "react";
import aboutUsIcon1 from "../../Assets/Component_Pics/aboutUs/about-us-icon-1.png";
import aboutUsIcon2 from "../../Assets/Component_Pics/aboutUs/about-us-icon-2.png";
import aboutUsIcon3 from "../../Assets/Component_Pics/aboutUs/about-us-icon-3.png";
import aboutUsIcon4 from "../../Assets/Component_Pics/aboutUs/about-us-icon-4.png";
import aboutUsIcon5 from "../../Assets/Component_Pics/aboutUs/about-us-icon-5.png";
import aboutUsIcon6 from "../../Assets/Component_Pics/aboutUs/about-us-icon-6.png";
import aboutUSPic from "../../Assets/Component_Pics/aboutUs/aboutus-bg.png";
import Navbar from "../landingPage/Navbar";
import Footer from "../landingPage/Footer";

const AboutUs = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="">
        <img src={aboutUSPic} alt="cities" />
        <div className="p-8 sm:p-16 bg-[#EEF4ED]  m-8 rounded-md shadow-md ">
          <h1 className="text-3xl font-bold">About Us</h1>
          <p className="mt-3 text-black text-md">
            Services Hub was established in 2024 with a clear mission: to add
            value to people's lives by offering comprehensive solutions to
            various problems in a single convenient location. Since our
            inception, we've quickly earned our customers' trust through our
            commitment to diligence and reliability. Our post-service results,
            characterized by apparent and noticeable quality, demonstrate the
            high standards of our services. <br />
            We offer a wide range of services, including cleaning, pest control,
            plumbing, electrician work, AC installation and repair, geyser
            installation and repair, home salon services, and much more. With
            Services Hub, customers can find all the essential services they
            need in one place, backed by a dedicated team that prioritizes
            customer satisfaction and quality workmanship.
          </p>
        </div>
        <div className="text-center p-8 sm:p-10 bg-[#EEF4ED]  m-8 rounded-md shadow-md">
          <h2 className="mb-2 text-2xl font-semibold">Our Mission</h2>
          <p>
            Our mission is to add value in customer’s life by providing them all
            services under one platform with safety, security and price control.
            We also want to decrease unemployment ratio from Pakistan, so all
            our staff is hired on company’s payroll. We trained our in-house
            staff ethically and technically and trying our best to serve the
            society at the best.
          </p>
        </div>
        <div>
          <h2 className="py-3 text-3xl font-bold text-center">
            What Services Hub Does
          </h2>
          <p className="px-10 text-center ">
            At Services Hub, we take great pride in consistently delivering
            high-quality services and providing guarantees for the work we do.
            This commitment to excellence is made possible through our carefully
            crafted processes and our strict adherence to them. We ensure that
            all our practices meet the highest standards, giving our customers
            peace of mind and confidence in our services.
          </p>
          <section className="flex flex-wrap justify-center gap-3 px-5 py-8 md:gap-0">
            <div className="p-8 text-center border-2 md:w-1/3 xs:border-none">
              <img src={aboutUsIcon1} alt="icon1" className="h-32 mx-auto " />
              <p className="text-lg">
                Providing multiple solutions to your problems on a single
                platform
              </p>
            </div>
            <div className="p-8 text-center border-2 md:w-1/3 xs:border-none">
              <img src={aboutUsIcon2} alt="icon2" className="h-32 mx-auto" />
              <p className="text-lg">
                Background verified expert technicians well equipped with state
                of the art equipment and tools
              </p>
            </div>
            <div className="p-8 text-center border-2 md:w-1/3 xs:border-none">
              <img src={aboutUsIcon3} alt="icon3" className="h-32 mx-auto" />
              <p className="text-lg">
                {" "}
                Hassle Free Booking Procedureon just a click on your device
              </p>
            </div>
            <div className="p-8 text-center border-2 md:w-1/3 xs:border-none">
              <img src={aboutUsIcon4} alt="icon4" className="h-32 mx-auto" />
              <p className="text-lg">Budget friendly High-Quality Services</p>
            </div>
            <div className="p-8 text-center border-2 md:w-1/3 xs:border-none">
              <img src={aboutUsIcon5} alt="icon5" className="h-32 mx-auto" />
              <p className="text-lg">
                Monitors all projects from beginning to the end, providing
                valuable insight all the way
              </p>
            </div>
            <div className="p-8 text-center border-2 md:w-1/3 xs:border-none">
              <img src={aboutUsIcon6} alt="icon6" className="h-32 mx-auto" />
              <p className="text-lg">
                Let’s you track your projects every step of the way, ensuring
                you get the best service possible
              </p>
            </div>
          </section>
        </div>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default AboutUs;
