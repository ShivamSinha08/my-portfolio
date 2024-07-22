// app/about/page.jsx
import Image from 'next/image';

export default function AboutPage() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-100 to-gray-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          {/* Image */}
          <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto mb-6">
            <Image
              src="/profile-photo.jpg" // Replace with the path to your photo
              alt="Profile Photo"
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>
          {/* Text */}
          <div className="md:ml-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Hi, I'm Shivam Sinha</h3>
            <p className="text-lg text-gray-700 mb-4">
              A passionate Computer Science undergraduate with a knack for building innovative solutions.
            </p>
            <p className="text-lg text-gray-700">
              I have hands-on experience in various technologies including Java, Python, C/C++, JavaScript, React.js, Next.js, Node.js, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
