import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

const Contact = ({ id }: { id: string }) => {
  const contactInfo = {
    email: "mdemdadullahahammed@gmail.com",
    phone: "01625360571",
    linkedin: "https://www.linkedin.com/in/mdemdadullah",
    github: "https://github.com/developeremdad",
  };
  return (
    <div id={id}>
      <section className="py-16 mt-20 bg-gray-900 text-gray-200">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Contact Me
          </h2>
        </div>
        <div className="lg:w-6/12 md:w-8/12 sm:w-10/12 mx-auto bg-white bg-opacity-10 p-8 rounded-xl shadow-xl backdrop-blur-lg">
          <div className="flex flex-col space-y-8">
            <div className="flex items-center space-x-4">
              <FaEnvelope size={28} className="text-green-400" />
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-2xl text-white hover:underline overflow-auto"
              >
                {contactInfo.email}
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone size={28} className="text-green-400" />
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-2xl text-white hover:underline"
              >
                {contactInfo.phone}
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaLinkedin size={28} className="text-green-400" />
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:underline"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaGithub size={28} className="text-green-400" />
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
