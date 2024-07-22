// app/layout.js
import '../styles/globals.css';
import Navbar from '../components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto p-6">
          {children}
        </main>
        <footer className="bg-gray-800 p-6 text-center text-white mt-8">
          © {new Date().getFullYear()} Shivam Sinha. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
