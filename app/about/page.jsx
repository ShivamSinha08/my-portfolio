// app/about/page.js
export default function AboutPage() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <img 
            src="/background.jpg" 
            alt="Professional Workspace" 
            className="w-full md:w-1/2 rounded-lg shadow-xl mb-8 md:mb-0 transform hover:scale-105 transition-transform duration-500" 
          />
          <div className="text-gray-800 md:w-1/2">
            <p className="mb-6 text-lg">
              I am a Computer Science undergraduate at Galgotias University with a CGPA of 8.34. I have a strong foundation in programming languages and technologies:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2 text-blue-600 font-semibold">Programming Languages: <span className="text-gray-600">Java, Python, C/C++</span></li>
              <li className="mb-2 text-blue-600 font-semibold">Front-End: <span className="text-gray-600">JavaScript, React.js, Next.js</span></li>
              <li className="mb-2 text-blue-600 font-semibold">Back-End: <span className="text-gray-600">Node.js, Express.js</span></li>
              <li className="mb-2 text-blue-600 font-semibold">Database: <span className="text-gray-600">MongoDB</span></li>
            </ul>
            <p className="mb-6 text-lg">
              I have worked on several projects, including a Zoom Clone and a chat application called ChatUp. My technical skills are complemented by strong soft skills such as communication, leadership, teamwork, problem-solving, and adaptability.
            </p>
            <p className="text-lg">
              I am passionate about problem-solving and staying updated with emerging technologies. I am eager to apply my skills and knowledge to real-world challenges and contribute to the success of innovative projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
