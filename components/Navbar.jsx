// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Shivam Sinha</h1>
        <div className="space-x-6">
          <Link href="/" className="hover:text-blue-300 transition duration-300 ease-in-out">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-300 transition duration-300 ease-in-out">
            About
          </Link>
          <Link href="/projects" className="hover:text-blue-300 transition duration-300 ease-in-out">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-blue-300 transition duration-300 ease-in-out">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
