import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#425462] text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Penta Freight</span>. All Rights
          Reserved. Developed by{" "}
          <Link
            to="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f06c30] hover:underline"
          >
            Nipralo
          </Link>
        </p>
        <div className="flex items-center gap-6 text-sm">
          <Link
            to="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#425462] hover:text-[#f06c30] transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#425462] hover:text-[#f06c30] transition-colors"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
