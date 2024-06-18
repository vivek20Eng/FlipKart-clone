import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const navItems = [
  { name: "Top Offers", href: "#" },
  { name: "Mobile & Tablets", href: "#" },
  { name: "TV", href: "#" },
  { name: "T-shirts", href: "#" },
];

const categoryImages = [
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1494319826231-6f28fd8776f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
];

export default function CarouselHead() {
  return (
    <>
      <header className="relative">
        <nav className="bg-white shadow">
          <div className="container mx-auto px-6 py-3">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold text-gray-700">
                  {/* <a href="#" className="text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl">Brand</a> */}
                  {/* seach */}
                  <div className="border-2 border-[--primary-font-color] col-span-3 relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-none">
                    <div className="grid place-items-center h-full w-12 text-[--primary-font-color] bg-none ">
                      <SearchIcon />
                    </div>

                    <input
                      className=" h-full w-full text-sm text-[--primary-text-color] mr-2 focus-within:outline-none"
                      type="search"
                      id="search"
                      placeholder="Search something.."
                    />
                  </div>
                </div>

                {/* Mobile menu button */}
                {/* <div className="flex md:hidden">
                  <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                      <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                    </svg>
                  </button>
                </div> */}
              </div>

              {/* Mobile Menu open: "block", Menu closed: "hidden" */}
              <div className=" -mx-4 md:flex md:items-center">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>
{/* carousel banner */}
        <div
          className="w-full bg-cover bg-center"
          style={{
            height: "26rem",
            backgroundImage: `url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)`,
          }}
        >
          <div className="relative flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <div className="text-center">
              <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">
                Test <span className="underline text-blue-400">Saas</span>
              </h1>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-48 container mx-auto px-6 py-3 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 overflow-hidden">
            {categoryImages.map((image, index) => (
              <div
                key={index}
                className="w-full h-64 bg-cover bg-center rounded-lg shadow-xl cursor-pointer"
                style={{ backgroundImage: `url(${image})`}}
              ></div>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
