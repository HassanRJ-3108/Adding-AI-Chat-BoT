import Hero from "@/components/hero";
import Project from "@/components/project";
import About from "@/components/about";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-blue-500">
      <Hero />
      <About />

      {/* Skills Button */}
      <div className="flex justify-center my-6">
        <Link href="/skills">
          <div className="flex items-center gap-2 bg-blue-400 text-blue-900 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition">
            <Image src="/EDUCATION.png" alt="Skills Logo" width={24} height={24} />
            <span>Skills</span>
          </div>
        </Link>
      </div>

      <Project />
      <Footer />
    </div>
  );
}

