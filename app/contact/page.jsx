// app/contact/page.js
export default function ContactPage() {
    return (
      <section className="py-20 bg-gradient-to-r from-gray-100 to-gray-300">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Contact Me</h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Feel free to reach out to me via email or connect with me on my social profiles.
          </p>
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Get in Touch</h3>
            <p className="text-lg text-gray-600 mb-4 text-center">
              Email: <a href="mailto:shivamuv2003@gmail.com" className="text-blue-600 hover:underline">shivamuv2003@gmail.com</a>
            </p>
            <div className="text-center mt-6">
              <a
                href="https://www.linkedin.com/in/shivam-sinha-7abb721a3/"
                className="text-blue-600 hover:underline text-lg mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/ShivamSinha08"
                className="text-blue-600 hover:underline text-lg mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  