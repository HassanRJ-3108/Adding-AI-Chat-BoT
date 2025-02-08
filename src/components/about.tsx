import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div id='about'>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          {/* Image Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded-lg shadow-lg" 
              alt="/Hackhathon e-commerce deployment.png"
              src="/me.png" // Ensure this image is in the public folder
              width={500}
              height={500}
            />
          </div>
          
          {/* Text Section */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-white">
              About Me
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed text-lg text-gray-300">
              I am currently a college student, balancing my studies with part-time jobs to gain professional experience. 
              I am also enrolled in the Governor Sindh IT Program, where I recently completed the first quarter, focusing 
              on mastering TypeScript. Through this program, I gained valuable skills in HTML, CSS, TypeScript, and Node.js. 
              As I move into the second quarter, I am excited to dive deeper into learning Next.js, expanding my expertise 
              in modern web development. My passion for coding and continuous learning drives me to build efficient and 
              scalable web applications.
            </p>
            
            {/* CV Button */}
            <div className="flex justify-center">
              <Link href="/cv" passHref>
                <button className="inline-flex text-white bg-gradient-to-r from-blue-500 to-teal-500 border-0 py-3 px-8 focus:outline-none hover:from-teal-500 hover:to-blue-500 hover:shadow-lg transition ease-in-out duration-300 rounded-full text-lg">
                  View CV
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
