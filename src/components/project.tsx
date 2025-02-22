  import React from 'react';
  import Link from 'next/link';

const projects = [
  {
    title: "Marketplace E-Commerce",
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
    <div id="project" className="bg-gray-900 text-gray-400 py-16">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            My Projects
          </h1>
          <p className="max-w-2xl mx-auto leading-relaxed text-base">
            I have successfully developed a variety of web applications and websites, showcasing my skills in both frontend and backend technologies. My projects reflect a strong focus on user experience and clean, maintainable code.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="p-4">
              <div className={`p-6 border-4 border-gray-800 ${project.bgColor} rounded-lg`}>
                <h2 className="tracking-widest text-sm font-medium text-indigo-300 mb-1">
                  {project.title}
                </h2>
                <h1 className="text-lg font-semibold text-white mb-3">
                  {project.title}
                </h1>
                <p className="leading-relaxed mb-4">{project.description}</p>
                <Link href={project.url} legacyBehavior>
                  <a className="text-yellow-400 hover:text-yellow-300 underline" target="_blank">
                    View Project
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
