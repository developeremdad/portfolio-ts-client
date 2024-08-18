import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import image from "../../assets/emdad-profile.jpeg";
import { NavItem } from "../NavItem";

const NavbarContent = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavItemClick = (path: string) => {
    if (window.location.pathname !== "/") {
      navigate("/");
    }
    // Scroll to the section after navigating to the homepage
    setTimeout(() => {
      document.getElementById(path)?.scrollIntoView({ behavior: "smooth" });
    }, 100); // Delay to ensure the navigation is complete
  };

  return (
    <div className="fixed top-0 w-full z-10">
      <div className="p-2 lg:w-4/6 container mx-auto px-4 rounded mt-2 bg-opacity-20 backdrop-blur-5 shadow-md bg-gradient-to-l from-blue-300 to-purple-300">
        <div className="flex justify-between items-center">
          <div>
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              onClick={() => handleNavItemClick("hero")}
            >
              <img
                src={image}
                alt="Emdad"
                className="size-11 rounded-full cursor-pointer"
              />
            </ScrollLink>
          </div>
          <div className="hidden sm:flex">
            <NavItem
              path="hero"
              label="Home"
              count="00"
              onClick={handleNavItemClick}
            />
            <NavItem
              path="experience"
              label="Experience"
              count="01"
              onClick={handleNavItemClick}
            />
            <NavItem
              path="expertise"
              label="Expertise"
              count="02"
              onClick={handleNavItemClick}
            />
            <NavItem
              path="project"
              label="Work"
              count="03"
              onClick={handleNavItemClick}
            />
            <NavItem
              path="contact"
              label="Contact"
              count="04"
              onClick={handleNavItemClick}
            />
            <NavItem
              path="blog"
              label="Blog"
              count="05"
              onClick={handleNavItemClick}
            />
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
          <NavItem
            path="hero"
            label="Home"
            count="00"
            onClick={handleNavItemClick}
          />
          <NavItem
            path="experience"
            label="Experience"
            count="01"
            onClick={handleNavItemClick}
          />
          <NavItem
            path="expertise"
            label="Expertise"
            count="02"
            onClick={handleNavItemClick}
          />
          <NavItem
            path="project"
            label="Work"
            count="03"
            onClick={handleNavItemClick}
          />
          <NavItem
            path="contact"
            label="Contact"
            count="04"
            onClick={handleNavItemClick}
          />
          <NavItem
            path="blog"
            label="Blog"
            count="05"
            onClick={handleNavItemClick}
          />
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <>
      <NavbarContent />
      <div className="pt-20"></div>
    </>
  );
};

export default Navbar;
