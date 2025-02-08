import React from 'react';
import { FaCheckSquare } from 'react-icons/fa';

const Skill = () => {
  return (
    <div id='skill'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              Skills
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              My Skills
            </h1>
          </div>

          <div className="flex flex-wrap -m-4">
            {/* HTML Skill */}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out bg-white">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white">
                    <FaCheckSquare />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">HTML</h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                    <div className="absolute bg-blue-600 h-1 rounded-xl" style={{ width: '95%' }}></div>
                  </div>
                  <p className="font-bold text-blue-600 text-right mt-2">95%</p>
                </div>
              </div>
            </div>

            {/* CSS Skill */}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out bg-white">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white">
                    <FaCheckSquare />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">CSS</h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                    <div className="absolute bg-blue-600 h-1 rounded-xl" style={{ width: '90%' }}></div>
                  </div>
                  <p className="font-bold text-blue-600 text-right mt-2">90%</p>
                </div>
              </div>
            </div>

            {/* TypeScript Skill */}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out bg-white">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white">
                    <FaCheckSquare />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">TypeScript</h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                    <div className="absolute bg-blue-600 h-1 rounded-xl" style={{ width: '80%' }}></div>
                  </div>
                  <p className="font-bold text-blue-600 text-right mt-2">80%</p>
                </div>
              </div>
            </div>

            {/* JavaScript Skill */}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out bg-white">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white">
                    <FaCheckSquare />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">JavaScript</h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                    <div className="absolute bg-blue-600 h-1 rounded-xl" style={{ width: '85%' }}></div>
                  </div>
                  <p className="font-bold text-blue-600 text-right mt-2">85%</p>
                </div>
              </div>
            </div>

            {/* Node.js Skill */}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out bg-white">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white">
                    <FaCheckSquare />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">Node.js</h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                    <div className="absolute bg-blue-600 h-1 rounded-xl" style={{ width: '75%' }}></div>
                  </div>
                  <p className="font-bold text-blue-600 text-right mt-2">75%</p>
                </div>
              </div>
            </div>

            {/* React.js Skill */}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out bg-white">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white">
                    <FaCheckSquare />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">React.js</h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                    <div className="absolute bg-blue-600 h-1 rounded-xl" style={{ width: '90%' }}></div>
                  </div>
                  <p className="font-bold text-blue-600 text-right mt-2">90%</p>
                </div>
              </div>
            </div>

            {/* Next.js Skill */}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out bg-white">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white">
                    <FaCheckSquare />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">Next.js</h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                    <div className="absolute bg-blue-600 h-1 rounded-xl" style={{ width: '85%' }}></div>
                  </div>
                  <p className="font-bold text-blue-600 text-right mt-2">85%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;