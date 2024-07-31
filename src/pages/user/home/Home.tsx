import Footer from "../../../component/shared/Footer";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Education from "./Education";
import Experiences from "./Experiences";
import Expertise from "./Expertise";
import HeroSection from "./HeroSection";
import Project from "./Project";

const Home = () => {
  return (
    <div className="">
      {/* <Navbar /> */}
      <HeroSection />
      <Education />
      <Experiences />
      <Expertise />
      <Project />
      <Contact />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
