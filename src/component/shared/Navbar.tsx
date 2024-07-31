import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import image from "../../assets/emdad-profile.jpeg";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed top-0 w-full z-10">
      <div className="p-2 lg:w-4/6 container mx-auto px-4 rounded mt-2 bg-opacity-20 backdrop-blur-5 shadow-md bg-gradient-to-l from-blue-300 to-purple-300">
        <div className="flex justify-between items-center">
          <div>
            <ScrollLink to="hero" smooth={true} duration={500}>
              <img
                src={image}
                alt="Emdad"
                className="size-11 rounded-full cursor-pointer"
              />
            </ScrollLink>
          </div>
          <div className="hidden sm:flex">
            <NavItem path="hero" label="Home" count="00" />
            <NavItem path="experience" label="Experience" count="01" />
            <NavItem path="expertise" label="Expertise" count="02" />
            <NavItem path="project" label="Work" count="03" />
            <NavItem path="contact" label="Contact" count="04" />
            <NavItem path="blog" label="Blog" count="05" />
          </div>
          <div className="sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="text-white hover:text-gray-300 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="size-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? "" : "hidden"}`}>
          <NavItem path="hero" label="Home" count="00" />
          <NavItem path="experience" label="Experience" count="01" />
          <NavItem path="expertise" label="Expertise" count="02" />
          <NavItem path="project" label="Work" count="03" />
          <NavItem path="contact" label="Contact" count="04" />
          <NavItem path="blog" label="Blog" count="05" />
        </div>
      </div>
    </div>
  );
};

const NavItem = ({
  path,
  label,
  count,
}: {
  path: string;
  label: string;
  count: string;
}) => {
  return (
    <div className="font-bold hover:text-purple-600 mx-3 cursor-pointer">
      <div className="text-right text-xs text-purple-500">
        <small>{count}</small>
      </div>
      <ScrollLink to={path} smooth={true} duration={800}>
        {label}
      </ScrollLink>
    </div>
  );
};

const PageContent = () => {
  return <div className="pt-20"></div>;
};

export default () => (
  <>
    <Navbar />
    <PageContent />
  </>
);
