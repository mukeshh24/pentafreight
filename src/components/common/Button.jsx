import React from "react";

const Button = ({
  text = "Read More",
  hoverText = "Explore",
  className = "",
  onClick,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`group relative w-fit overflow-hidden rounded-md bg-[#f06c30] px-9 py-2 text-white transition-all cursor-pointer duration-300 hover:bg-gray-400 hover:text-black/90 font-semibold ${className}`}
      {...props}
    >
      <span className="relative block h-6 overflow-hidden">
        <span className="block transition-transform duration-300 group-hover:-translate-y-full">
          {text}
        </span>
        <span className="absolute left-0 top-full block w-full text-center transition-transform duration-300 group-hover:-translate-y-full">
          {hoverText}
        </span>
      </span>
    </button>
  );
};

export default Button;
