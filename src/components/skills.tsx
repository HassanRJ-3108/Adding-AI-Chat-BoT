import React from 'react';
import { FaCheckSquare } from 'react-icons/fa';

const skills = [
  { name: 'HTML', percentage: 90 },
  { name: 'CSS', percentage: 85 },
  { name: 'Tailwind CSS', percentage: 80 },
  { name: 'TypeScript', percentage: 75 },
  { name: 'Next.js', percentage: 70 },
  { name: 'React', percentage: 80 },
];

const Skill = () => {
  return (
    <div id='skill' className="px-4 py-16 sm:py-24">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              Skills
            </h2>
            <h1 className="text-2xl sm:text-3xl font-medium title-font text-gray-900">
              My Skills
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="p-4">
                <div className="flex flex-col rounded-lg h-full p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out bg-white border border-gray-200">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white">
                      <FaCheckSquare />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">{skill.name}</h2>
                  </div>
                  <div className="flex-grow">
                    <div className="relative h-2 w-full bg-gray-200 rounded-xl overflow-hidden">
                      <div className="absolute bg-green-500 h-2 rounded-xl" style={{ width: `${skill.percentage}%` }}></div>
                    </div>
                    <p className="font-bold text-green-800 text-right mt-2">{skill.percentage}%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
