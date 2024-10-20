import {Link} from "react-router-dom";


const Footer = () => {
  return (
    <footer className=" text-gray-600 body-font bg-[#FF6B35]">
      <div className="container px-5 mx-auto py-14">
        <div className="flex flex-wrap order-first text-center md:text-left">
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <div className="flex justify-center md:justify-start">
              <Link to="/" className="flex items-center text-center rtl:space-x-reverse">
                <p className="text-center text-4xl font-semibold text-[#EEF4ED] whitespace-nowrap ">
                  Services Hub
                </p>
              </Link>
            </div>

            <div className="flex flex-wrap items-end justify-center xl:flex-nowrap md:flex-nowrap lg:flex-wrap md:justify-start">
              <p className="text-[#EEF4ED] text-lg mt-4">
                At Services Hub, the term 'Services' reflects our commitment to
                enhancing our customers' lives by offering a comprehensive range
                of essential services for everyday needs. Meanwhile, 'Hub'
                underscores our aim to reduce unemployment in Pakistan by hiring
                and training our in-house staff in various skills.
              </p>
            </div>
          </div>
          <div className="w-full px-4 mt-3 lg:w-1/5 md:w-1/2">
            <h2 className=" mt-3 md:mt-0 mb-3 text-2xl font-semibold tracking-widest text-[#EEF4ED] title-font">
              Main Menu
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <Link className="text-[#EEF4ED] hover:text-black text-xl" to="/">Home</Link>
              </li>
              <li>
                <Link className="text-[#EEF4ED] hover:text-black  text-xl" to="/aboutUS">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-[#EEF4ED] hover:text-black  text-xl" to="/contactUs">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="text-[#EEF4ED] hover:text-black  text-xl" to="/#Services">
                  Services
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 mt-3 lg:w-1/5 md:w-1/2">
            <h2 className="mb-3 text-2xl font-semibold tracking-widest text-[#EEF4ED] title-font">
              Available In
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <Link className="text-[#EEF4ED] hover:text-black  text-xl" to="/#HeroSection">
                  Lahore
                </Link>
              </li>
              <li>
                <Link className="text-[#EEF4ED] hover:text-black   text-xl" to="/#HeroSection">
                  Karachi
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 mt-3 lg:w-1/5 md:w-1/2">
            <h2 className="mb-3 text-2xl font-semibold tracking-widest text-[#EEF4ED] title-font">
              Services
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <Link className="text-xl text-[#EEF4ED] hover:text-black " to={""}>
                  Home Appliance Repair
                </Link>
              </li>
              <li>
                <Link className="text-xl text-[#EEF4ED] hover:text-black " to={""}>
                  Cleaning Services
                </Link>
              </li>
              <li>
                <Link className="text-xl text-[#EEF4ED] hover:text-black " to={""}>
                  Electrical Services
                </Link>
              </li>
              <li>
                <Link className="text-xl text-[#EEF4ED] hover:text-black " to={""}>
                  CCTV Services
                </Link>
              </li>
              <li>
                <Link className="text-xl text-[#EEF4ED] hover:text-black "to={""}>
                  Plumbing Services
                </Link >
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-[#FF6B35]">
       <hr/>
        <div className="container flex flex-col items-center px-5 py-6 mx-auto sm:flex-row">
       
          <p className="mt-4 text-md text-[#EEF4ED] sm:ml-6 sm:mt-0">
          Copyright © 2024 Services Hub. Services Hub logo and related marks are registered Trademarks of Services Hub.
          </p>
          <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
            <a className="text-[#EEF4ED] ">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 text-[#EEF4ED] ">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-3 text-[#EEF4ED] ">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-3 text-[#EEF4ED] ">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
