import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-8 px-3 sm:px-8 py-2 sm:py-4 rounded-full bg-white/90 backdrop-blur-md shadow-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-[12px] sm:text-[14px] font-semibold uppercase transition-colors duration-300 ${
              isActive ? "text-[#f06c30]" : "text-black hover:text-[#f06c30]"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/pentakuhl"
          className={({ isActive }) =>
            `text-[12px] sm:text-[14px] font-semibold uppercase transition-colors duration-300 ${
              isActive ? "text-[#f06c30]" : "text-black hover:text-[#f06c30]"
            }`
          }
        >
          Pentakuhl
        </NavLink>
        <NavLink
          to="/industries"
          className={({ isActive }) =>
            `text-[12px] sm:text-[14px] font-semibold uppercase transition-colors duration-300 ${
              isActive ? "text-[#f06c30]" : "text-black hover:text-[#f06c30]"
            }`
          }
        >
          Industries
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
