import { useState } from "react";
import { Link } from "react-router-dom";
import image from "../../assets/emdad-profile.jpeg";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed top-0 w-full z-10">
      <div className="p-2 lg:w-2/3 mx-auto md:w-2/3 rounded mt-2 bg-opacity-20 backdrop-blur-5 shadow-md bg-gradient-to-l from-green-300 bg- to-purple-300">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">
              <img src={image} alt="Emdad" className="size-11 rounded-full" />
            </Link>
          </div>
          <div className="hidden sm:flex">
            <NavItem path="/" label="Home" count="01" />
            <NavItem path="#expertise" label="Expertise" count="01" />
            <NavItem path="#work" label="Work" count="01" />
            <NavItem path="#experience" label="Experience" count="01" />
            <NavItem path="#contact" label="Contact" count="02" />
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
          <NavItem path="/" label="Home" count="01" />
          <NavItem path="#expertise" label="Expertise" count="01" />
          <NavItem path="#work" label="Work" count="01" />
          <NavItem path="#experience" label="Experience" count="01" />
          <NavItem path="#contact" label="Contact" count="02" />
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
    <div className="font-bold text-gray-400 mx-3">
      <div className="text-right text-xs text-gray-500">
        <small>{count}</small>
      </div>
      <Link to={path}>{label}</Link>
    </div>
  );
};

// const PageContent = () => {
//   return <div className="pt-20"></div>;
// };

// export default () => (
//   <>
//     <Navbar />
//     <PageContent />
//   </>
// );

export default Navbar;