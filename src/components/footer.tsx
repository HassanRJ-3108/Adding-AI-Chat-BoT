import React from 'react';
import Image from 'next/image';

export const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600">
      <footer className="text-gray-200 body-font w-full">
        <div className="container px-5 py-8 mx-auto flex flex-col sm:flex-row items-center">
          <div className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <Image src="/img.jpg" alt="portfolio" width={50} height={50} className="w-12 h-12 rounded-full shadow-lg" />
            <span className="ml-3 text-2xl font-semibold">My Portfolio</span>
          </div>
          <p className="text-sm text-gray-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-400 sm:py-2 sm:mt-0 mt-4 text-center">
            © 2025 Syeda Gulzar Bano
          </p>
          <div className="flex sm:ml-auto sm:mt-0 mt-4 space-x-4">
            <a href="https://www.linkedin.com/in/gulzar-bano-syeda-b3b7b1230" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin.png" alt="LinkedIn" width={40} height={40} className="transition duration-300 ease-in-out transform hover:scale-110" />
            </a>
            <a href="https://github.com/Syedabanog-1" target="_blank" rel="noopener noreferrer">
              <Image src="/github.png" alt="GitHub" width={40} height={40} className="transition duration-300 ease-in-out transform hover:scale-110" />
            </a>
            <a href="https://web.facebook.com/people/Gulzar-Bano/pfbid0gcgEC1MH2Fd67NzH8Z7LVhrzFLzyciNVEugaXhUEPoJMDJCqEqWUpmnAcR8VuFhKl/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <Image src="/facebook.png" alt="Facebook" width={40} height={40} className="transition duration-300 ease-in-out transform hover:scale-110" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
