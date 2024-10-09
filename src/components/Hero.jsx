import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient bg-300%">
              BitByteTech
            </span>
          </h1>
          <p className="py-6">
            BitByteTech simplifies the world of technology, offering
            easy-to-understand insights for curious minds eager to learn and
            innovate.
          </p>
          <div className="flex justify-center items-center gap-3">
            <Link
              to={"/blogs"}
              className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-secondary text-primary"
            >
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primary top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-primary transition duration-300 group-hover:text-white ease">
                Read Blogs
              </span>
            </Link>
            <Link
              to={"/bookmarks"}
              className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-secondary text-primary"
            >
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primary top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-primary transition duration-300 group-hover:text-white ease">
                Bookmarks
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
