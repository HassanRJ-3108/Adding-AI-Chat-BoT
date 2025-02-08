import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-white -z-50 sticky-top-0">
      <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <Image src="/proimg.jpg" alt="portfolio" width={50} height={50} className="w-12 rounded-full shadow-lg" />
            <span className="ml-3 text-2xl font-bold tracking-wider">Portfolio</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg justify-center space-x-8">
            <Link href="/" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">Home</Link>
            <Link href="/#about" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">About</Link>
            <Link href="/#skill" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">Skills</Link>
            <Link href="/#project" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">Projects</Link>
            <Link href="/#Contact" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">Contact</Link>
          </nav>
          <a href="" download className="mt-4 md:mt-0">
            <button className="inline-flex items-center bg-white text-indigo-500 border-2 border-white py-2 px-4 
            focus:outline-none hover:bg-indigo-500 hover:text-white transition-colors duration-300 ease-in-out rounded-full shadow-md">
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
