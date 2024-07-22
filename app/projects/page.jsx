// app/projects/page.js
export default function ProjectsPage() {
    return (
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-3xl font-semibold text-blue-700 mb-4">Zoom Clone</h3>
              <p className="text-gray-700 mb-4">
                <strong className="text-blue-600">Tech Stack:</strong> Next.js, TypeScript, Clerk, getstream, shadon, Tailwind CSS
              </p>
              <p className="text-gray-700 mb-4">
                A full stack video conferencing app with features such as new meetings, meeting controls, past meeting list, recorded meetings, and a personal room.
              </p>
              <a href="https://zoom-clone-mu-blue.vercel.app/" className="text-blue-600 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">View Live</a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-3xl font-semibold text-blue-700 mb-4">ChatUp</h3>
              <p className="text-gray-700 mb-4">
                <strong className="text-blue-600">Tech Stack:</strong> Node.js, React.js, Express.js, MongoDB, Socket.IO, SASS, Redux, JavaScript
              </p>
              <p className="text-gray-700 mb-4">
                A full-featured chat application with real-time messaging and file sharing. Frontend built using React and Vite for a responsive interface, and backend with Node.js and Express.js.
              </p>
              <a href="#" className="text-gray-500 hover:text-gray-700 font-semibold">Coming Soon</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  