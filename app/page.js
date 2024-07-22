// app/page.js
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 text-center py-12 relative">
      <div className="text-center px-6 md:px-12 max-w-4xl mx-auto">
        {/* Photo */}
        <div className="relative w-40 h-40 mx-auto mb-6">
          <Image
            src="/profile.jpg" // Replace with your photo path
            alt="Shivam Sinha"
            width={160}
            height={160}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Hi, I&apos;m <span className="text-blue-600">Shivam Sinha</span>
        </h1>
        {/* Description */}
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          A passionate Computer Science undergraduate with a knack for building innovative solutions and a strong background in modern web technologies.
        </p>
        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
          <Link href="/projects" className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
            View Projects
            <span className="block mt-1 text-blue-200">Explore my work</span>
          </Link>
          <Link href="/contact" className="bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105">
            Contact Me
            <span className="block mt-1 text-gray-400">Get in touch</span>
          </Link>
        </div>
      </div>
      {/* Background Image */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <Image
          src="/background.jpg" // Replace with your background image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>
    </section>
  );
}
