"use client";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="text-gray-400 bg-gradient-to-r from-gray-900 to-gray-800 body-font">
      <div className="container mx-auto flex px-5 py-16 md:py-24 flex-col-reverse md:flex-row items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-6 font-bold text-white">
            Hi, I&apos;m <br />
            <span className="text-blue-500">Syeda Gulzar Bano</span>
          </h1>
          <br className="hidden lg:inline-block" />
          <span className="block mt-2 text-3xl font-extrabold text-blue-600">
            <Typewriter
              options={{
                strings: [
                  "Oracle Developer",
                  "Web Developer",
                  "Graphic Designer",
                  "Creative Thinker"
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </span>
          <p className="mb-8 leading-relaxed text-lg text-gray-300">
            I&apos;m a skilled frontend developer with a passion for creating visually appealing and user-friendly websites. With a strong background in graphic design, I build digital experiences that are both creative and functional.
          </p>
          <div className="flex justify-center">
            <Link href="/contact">
              <button className="inline-flex text-white bg-blue-600 border-0 py-3 px-8 focus:outline-none hover:bg-blue-700 rounded-lg text-lg transition duration-300 ease-in-out">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 sm:w-3/4 w-5/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded-lg shadow-lg"
            alt="Profile Image"
            src="/img.jpg"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
