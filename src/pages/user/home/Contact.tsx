import emailjs from "emailjs-com";
import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const Contact = ({ id }: { id: string }) => {
  const contactInfo = {
    email: "mdemdadullahahammed@gmail.com",
    phone: "+8801625360571",
    linkedin: "https://www.linkedin.com/in/mdemdadullah",
    github: "https://github.com/developeremdad",
  };

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .send(
        "service_770wzfa",
        "template_101bpjh",
        formData,
        "jErp0M47IJSqs2fGb"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setFormData({
      user_name: "",
      user_email: "",
      message: "",
    });
  };

  return (
    <div id={id}>
      <div className="py-12 mt-20 bg-gray-50">
        <div className="container mx-auto text-4xl font-bold text-center mb-5">
          <span className="bg-gradient-to-r from-purple-500 to-blue-300 bg-clip-text text-transparent">
            Contact Me
          </span>
        </div>
        <div className="lg:w-10/12 container mx-auto p-5 px-4 lg:flex lg:justify-between">
          {/* Personal Info Column */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 pr-4">
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
            <p className="mb-5">
              Feel free to reach out to me via phone, LinkedIn, or GitHub. I’m
              always open to discussing new projects or opportunities.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaEnvelope size={20} className="text-green-400 mr-4" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:underline overflow-auto"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt size={20} className="text-green-400 mr-4" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:underline"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center">
                <FaLinkedin size={20} className="text-green-400 mr-4" />
                <a
                  href="https://www.linkedin.com/in/mdemdadullah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center">
                <FaGithub size={20} className="text-green-400 mr-4" />
                <a
                  href="https://github.com/developeremdad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>

          {/* Email Form Column */}
          <div className="lg:w-1/2">
            <h2 className="text-xl font-bold mb-4">Send Me a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                <label className="block mb-2 font-semibold" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name..."
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email..."
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Please enter your queries..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  // rows="5"
                  required
                ></textarea>
              </div>
              {isSent && (
                <p className="text-green-500">
                  Thank you for your message! I will get back to you soon.
                </p>
              )}
              <button
                type="submit"
                className="w-full p-2 bg-gray-100 text-black border border-gray-300 font-semibold rounded hover:bg-gray-500 hover:text-white animate-pulse hover:animate-none"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
