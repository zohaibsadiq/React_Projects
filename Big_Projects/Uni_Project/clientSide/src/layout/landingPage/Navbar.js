import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-[#EEF4ED] border-gray-500 ">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-3 mx-auto">
          <div>
            <Link to="/" className="flex items-center rtl:space-x-reverse">
              <img src={logo} className="mb-3 h-11" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold text-[#FF6B35] whitespace-nowrap ">
                Services Hub
              </span>
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto lg:mr-32 md:mr-16"
            id="navbar-search"
          >
            <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <Link
                  to="/"
                  className="block px-2 py-2 text-xl text-black rounded md:p-0 hover:text-[#FF6B35] "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutUs"
                  className="block px-3 py-2 text-lg text-black rounded md:p-0 hover:text-[#FF6B35]"
                >
                  About US
                </Link>
              </li>
              <li>
                <Link
                  to="/contactUs"
                  className="block px-3 py-2 text-lg text-black rounded md:p-0 hover:text-[#FF6B35]"
                >
                  Contact US
                </Link>
              </li>
              <li>
                <a
                  href="/#Services"
                  className="block px-3 py-2 text-lg text-black rounded md:p-0 hover:text-[#FF6B35]"
                >
                  Services
                </a>
              </li>
              <div id="navbar-search" className="md:hidden">
                <button
                  type="button"
                  class="text-[#EEF4ED] bg-gradient-to-br from-[#FF6B35] via-[#FF6B35] to-black font-medium rounded-lg text-md  px-5 py-2.5 text-center me-2 mb-2 hover:"
                >
                  Work with us
                </button>
              </div>
            </ul>
          </div>
          <div id="navbar-search" className="hidden md:block">
            <button
              type="button"
              class="text-[#EEF4ED] bg-gradient-to-br from-[#FF6B35] via-[#FF6B35] to-black  font-medium rounded-lg text-md  px-5 py-2.5 text-center me-2 mb-2 hover:bg-white"
            >
              Work with us
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
