"use client"; // If using Next.js App Router

import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Oracle", logo: "/Oracle.png", percentage: 99 },
  { name: "HTML", logo: "/HTML.jpeg", percentage: 90 },
  { name: "CSS", logo: "/CSS.png", percentage: 85 },
  { name: "Tailwind CSS", logo: "/TAILWIND CSS.jpeg", percentage: 85 },
  { name: "Node.js", logo: "/NODEJS.jpeg", percentage: 90 },
  { name: "TypeScript", logo: "/TS.jpeg", percentage: 97 },
  { name: "React", logo: "/REACT.jpeg", percentage: 88 },
  { name: "Next.js", logo: "/NEXTJS.jpeg", percentage: 78 },
  { name: "Python", logo: "/PYTHON.jpeg", percentage: 95 },
];

const Skill = () => {
  return (
    <div id="skill" className="px-4 py-16 sm:py-24 bg-sky-300">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto text-center">
          <div className="flex flex-col w-full mb-12 items-center">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl font-bold text-blue-600 animate-blink"
            >
              My Skills
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="p-4">
                <div className="flex flex-col rounded-lg h-full p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out bg-white border border-gray-200">
                  <div className="flex items-center mb-3">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-8 h-8 mr-3 rounded-full"
                    />
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      {skill.name}
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <div className="relative h-2 w-full bg-gray-200 rounded-xl overflow-hidden">
                      <div
                        className="absolute bg-green-500 h-2 rounded-xl"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                    <p className="font-bold text-green-800 text-right mt-2">
                      {skill.percentage}%
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>
        {`
          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-blink {
            animation: blink 1.5s infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Skill;
