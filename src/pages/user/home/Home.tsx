import Footer from "../../../component/shared/Footer";
import Contact from "./Contact";
import Education from "./Education";
import Experiences from "./Experiences";
import Expertise from "./Expertise";
import HeroSection from "./HeroSection";
import Projects from "./Projects";

const Home = () => {
  return (
    <div className="">
      {/* <Navbar /> */}
      <HeroSection />
      <Education />
      <Experiences />
      <Expertise />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
