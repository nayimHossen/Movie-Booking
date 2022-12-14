import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  // navbar sticky to when scroll start
  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 151
        ? setStickyClass("fixed top-0 left-0 z-50 bg-white shadow-lg")
        : setStickyClass("relative");
    }
  };
  // navbar sticky to when scroll end
  const [checkbox, setCheckbox] = useState(false);

  // active link
  let activeStyle = {
    color: "green",
  };

  return (
    <header>
      {/* navbar */}
      <nav className={`w-full bg-[#F7FAFD] ${stickyClass}`}>
        <div className="flex justify-between items-center py-5 container mx-auto relative px-5">
          {/* md and lg navigation start*/}
          <div>
            <Link to="/">
              <h2 className="text-4xl font-bold text-accent">MovieCo.</h2>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex justify-between items-center md:gap-4 lg:gap-16">
              <div>
                <ul className="flex md:gap-3 lg:gap-6">
                  <li className="font-bold">
                    <NavLink
                      to="/home"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="font-bold">
                    <NavLink to="/">About</NavLink>
                  </li>
                  <li className="font-bold">
                    <NavLink to="/">Blogs</NavLink>
                  </li>
                  <li className="font-bold">
                    <NavLink to="/">Contact</NavLink>
                  </li>

                  <li className="font-bold">
                    <NavLink to="/">Login</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* md and lg navigation end*/}

          {/* Mobile navigation bar start*/}
          <label className="btn bg-white hover:bg-white px-3 swap swap-rotate border-2 md:hidden">
            <input type="checkbox" onClick={() => setCheckbox(!checkbox)} />
            <svg
              className="swap-off"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            <svg
              className="swap-on"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>

          {checkbox && (
            <div className="absolute top-20 inset-x-4 z-10">
              <ul className="menu bg-base-100 shadow-lg rounded-box w-full p-2">
                <li className="font-bold">
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li className="font-bold">
                  <Link to="/">About Us</Link>
                </li>
                <li className="font-bold">
                  <Link to="/">Blogs</Link>
                </li>
                <li className="font-bold">
                  <Link to="/">Contact Us</Link>
                </li>
                <li className="font-bold">
                  <Link to="/">Login</Link>
                </li>
              </ul>
            </div>
          )}
          {/* Mobile navigation bar end*/}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
