import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div id='about'>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded-lg shadow-lg"
              alt="Profile Image"
              src="/proimg.jpg"
              width={400}
              height={400}
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 flex flex-col md:items-start items-center text-center md:text-left px-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              About Me
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I am enrolled in the GIAIC where I recently completed the second quarter (Q2), now focusing on AI.
               Through this program, I gained valuable skills in HTML, CSS, TypeScript, Node.js, Next.js, python
               and React. As I move into the third quarter, I am excited to dive deeper into advanced development 
               and expand my expertise in modern web development.
            </p>

            {/* View CV Button */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                href="/cv" 
                className="text-white bg-gradient-to-r from-blue-500 to-teal-500 py-3 px-6 rounded-full text-lg font-semibold text-center w-full sm:w-auto transition-all duration-300 hover:from-teal-500 hover:to-blue-500 hover:shadow-lg"
              >
                View CV
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
