import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";

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

  const handleChange = (e: { target: { name: string; value: string } }) => {
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
      <motion.div
        className="py-12 mt-20 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto text-4xl font-bold text-center mb-5">
          <span className="bg-gradient-to-r from-purple-500 to-blue-300 bg-clip-text text-transparent">
            Contact Me
          </span>
        </div>
        <div className="lg:w-10/12 container mx-auto p-5 px-4 lg:flex lg:justify-between">
          {/* Personal Info Column */}
          <motion.div
            className="lg:w-1/2 mb-8 lg:mb-0 pr-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
            <p className="mb-5">
              Feel free to reach out to me via phone, LinkedIn, or GitHub. I’m
              always open to discussing new projects or opportunities.
            </p>
            <div className="space-y-2">
              {Object.entries(contactInfo).map(([key, value]) => (
                <motion.div
                  key={key}
                  className="flex items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {key === "email" && (
                    <FaEnvelope size={20} className="text-green-400 mr-2" />
                  )}
                  {key === "phone" && (
                    <FaPhoneAlt size={20} className="text-green-400 mr-2" />
                  )}
                  {key === "linkedin" && (
                    <FaLinkedin size={20} className="text-green-400 mr-2" />
                  )}
                  {key === "github" && (
                    <FaGithub size={20} className="text-green-400 mr-2" />
                  )}
                  {key === "facebook" && (
                    <FaFacebook size={20} className="text-green-400 mr-2" />
                  )}
                  <a
                    href={
                      key === "email"
                        ? `mailto:${value}`
                        : key === "phone"
                        ? `tel:${value}`
                        : value
                    }
                    target={
                      key === "linkedin" || key === "github"
                        ? "_blank"
                        : undefined
                    }
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-green-400"
                  >
                    {key === "email" && value}
                    {key === "phone" && value}
                    {key === "linkedin" && "LinkedIn Profile"}
                    {key === "github" && "GitHub Profile"}
                    {key === "facebook" && "Facebook"}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Email Form Column */}
          <motion.div
            className="lg:w-1/2"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
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
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
