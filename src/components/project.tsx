import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              My Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              I have successfully developed a variety of web applications and websites, showcasing my skills in both frontend and backend technologies. My projects reflect a strong focus on user experience and clean, maintainable code.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Project Items */}
            {[...Array(6)].map((_, index) => (
              <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                  <Image
                    alt="Project Image"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src="/Hackhathon e-commerce deployment.png"
                    width={500}
                    height={300}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                      Project {index + 1}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      Sample Project
                    </h1>
                    <p className="leading-relaxed">
                      Description of project {index + 1}. It demonstrates the use of various technologies.
                    </p>
                    <Link href="https://hackhathon-ecommerce-website-eidb.vercel.app/" legacyBehavior>
                      <a className="leading-relaxed text-blue-400 mb-1 hover:underline">View Project</a>
                    </Link>
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

export default Project;
