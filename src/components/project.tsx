import React from 'react';
import Link from 'next/link';

const projects = [

  {
    title: "Marketplace E-Commerce Website",
    description: "Marketplace E-commerce Fully Functional And Responsive Website",
    url: "https://hackhathon-ecommerce-website-eidb.vercel.app/",
    bgColor: "bg-purple-900",
  },
  {
    title: "Dashboard Ecommerce",
    description: "A complete e-commerce dashboard for managing products and orders.",
    url: "https://dashboard-ecommerce-ws.vercel.app/",
    bgColor: "bg-blue-900",
  },
  {
    title: "Clerk Authentication",
    description: "A project demonstrating authentication using Clerk.",
    url: "https://clerk-authentication-five.vercel.app/",
    bgColor: "bg-green-900",
  },
  
  {
    title: "Todo List Next.js",
    description: "A simple and efficient Todo List built with Next.js.",
    url: "https://todo-list-nextjs-project-three.vercel.app/",
    bgColor: "bg-red-900",
  },
  {
    title: "Book-API",
    description: "BOOK API PROJECT",
    url: "https://my-nextjs-book-api-with-ei5vzyxyg-syeda-gulzar-bano-s-projects.vercel.app/",
    bgColor: "bg-yellow-900",
  },
  {
    title: "Stripe Embedded Integration",
    description: "A project integrating Stripe for seamless payments.",
    url: "https://stripe-embeded-nextjs.vercel.app/",
    bgColor: "bg-indigo-900",
  },
];

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
            {projects.map((project, index) => (
              <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
                <div className={`px-8 py-10 relative z-10 w-full border-4 border-gray-800 ${project.bgColor} opacity-100` }>
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                    {project.title}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">
                    {project.description}
                  </p>
                  <Link href={project.url} legacyBehavior>
                    <a className="leading-relaxed text-yellow-500 mb-1 hover:underline" target="_blank">View Project</a>
                  </Link>
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
