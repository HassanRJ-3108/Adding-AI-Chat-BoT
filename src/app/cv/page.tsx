

  "use client";

import Image from "next/image";

const CV = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Sidebar for Contact Information */}
            <div className="flex flex-col justify-center items-center bg-blue-500 text-black p-4 rounded-lg md:rounded-none md:rounded-l-lg">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p><strong>Phone:</strong> +92 3363893198</p>
          <p><strong>Email:</strong> syedagulzarbano@gmail.com</p>
          <p><strong>Address:</strong></p>
          <p>H-39/4, Malir Extension Colony, Karachi-75080.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:col-span-2 space-y-6 p-4">
        <div className="text-center">
          <Image 
            src="/img.jpg" 
            alt="Profile" 
            width={128} 
            height={128} 
            className="w-32 h-32 mx-auto rounded-full shadow-md bg-gray-300"
          />
          <h1 className="text-3xl font-bold text-gray-800 mt-4">Syeda Gulzar Bano</h1>
        </div>

        <div className="border-t-2 border-blue-500 pt-4">
          <h2 className="text-2xl font-semibold text-gray-700">Education</h2>
          <p className="text-lg text-gray-600">
            Graduate in Computer Science <br />
            (From: Florida Green University, Karachi Campus) <br />
            Intermediate (From: Malir Cantt College) <br />
            Matric (From: Akhter Govt. Boys and Girls School, Malir Khokarapar)
          </p>
        </div>

        <div className="border-t-2 border-blue-500 pt-4">
          <h2 className="text-2xl font-semibold text-gray-700">Skills</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mt-2">
            <li>Database</li>
            <li>HTML & CSS</li>
            <li>TypeScript</li>
            <li>Next.js</li>
            <li>React</li>
            <li>Python</li>
          </ul>
        </div>

        <div className="border-t-2 border-blue-500 pt-4">
          <h2 className="text-2xl font-semibold text-gray-700">Work Experience</h2>
          <p className="text-gray-600"><strong>Oracle Developer (Fr: State Bank Of Pakistan)</strong></p>
          <p className="text-gray-600">(3 Months Internship as Oracle Developer)</p>
        </div>

        <div className="border-t-2 border-blue-500 pt-4">
          <h2 className="text-2xl font-semibold text-gray-700">Current Course</h2>
          <p className="text-lg text-gray-600">
            AI, WEB3.0, And Metaverse <br />
            (From: GIAIC)
          </p>
        </div>

        <div className="border-t-2 border-blue-500 pt-4">
          <h2 className="text-2xl font-semibold text-gray-700">Personal Information</h2>
          <p className="text-gray-600"><strong>Name:</strong> Syeda Gulzar Bano</p>
          <p className="text-gray-600"><strong>Father&apos;s Name:</strong> Syed Kazim Raza Shah</p>
          <p className="text-gray-600"><strong>Religion:</strong> Islam</p>
          <p className="text-gray-600"><strong>Marital Status:</strong> Single</p>
          <p className="text-gray-600"><strong>NIC:</strong> 42201-0545280-0</p>
        </div>
      </div>
    </div>
  );
};

export default CV; 
