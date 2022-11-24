import React from "react";
import dot from "../../assets/Oval.png";
function Navbar() {
  return (
    <>
      <nav class="px-2 px-5 py-2.5 bg-teal">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <div class="flex">
            <p className="text-white font-bold text-5xl ">aimic</p>
            <img src={dot} alt="" className="h-2 w-2 mt-3 ml-1" />
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6 bg-teal"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <li>
                <a
                  href="/"
                  class="block py-2 pl-1 md:pr-0 text-white bg-teal rounded"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="block py-2 pl-1 md:pr-0 text-white rounded   bg-teal"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="block py-2 pl-1 md:pr-0 text-white rounded bg-teal"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="block py-2 pl-1 md:pr-0 text-white rounded bg-teal"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="block py-2 pl-1 md:pr-0 text-white rounded  bg-teal"
                >
                  Case Study
                </a>
              </li>
              <li>
                <button className="bg-gradient-to-r from-[#328BCB] to-[#005490] rounded-lg px-2 py-2">
                  Contact US
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
