import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white -z-50">
      <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex flex-wrap p-5 flex-row justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center text-white">
            <Image src="/proimg.jpg" alt="portfolio" width={50} height={50} className="w-12 rounded-full shadow-lg" />
            <span className="ml-3 text-2xl font-bold tracking-wider">Portfolio</span>
          </Link>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>

          {/* Navigation Links */}
          <nav
            className={`md:flex md:items-center md:space-x-8 text-lg transition-all duration-300 ease-in-out absolute md:static bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 md:bg-transparent w-full md:w-auto left-0 ${
              isOpen ? "top-16 opacity-100" : "top-[-300px] opacity-0 md:opacity-100"
            } md:opacity-100 md:relative flex flex-col md:flex-row items-center gap-4 md:gap-0 py-4 md:py-0`}
          >
            <Link href="/" className="hover:text-gray-300 transition-colors duration-300">Home</Link>
            <Link href="/#about" className="hover:text-gray-300 transition-colors duration-300">About</Link>
            <Link href="/#skill" className="hover:text-gray-300 transition-colors duration-300">Skills</Link>
            <Link href="/#project" className="hover:text-gray-300 transition-colors duration-300">Projects</Link>
            <Link href="/#Contact" className="hover:text-gray-300 transition-colors duration-300">Contact</Link>
          </nav>

          {/* Download CV Button */}
          <a href="" download className="hidden md:block">
            <button className="inline-flex items-center bg-white text-indigo-500 border-2 border-white py-2 px-4 
            focus:outline-none hover:bg-indigo-500 hover:text-white transition-colors duration-300 rounded-full shadow-md">
              Download CV
              <FaDownload className="text-xl ml-2" />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
