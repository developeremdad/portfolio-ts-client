import Footer from "../../../component/shared/Footer";
import Education from "./Education";
import Expertise from "./Expertise";
import HeroSection from "./HeroSection";
import Projects from "./Projects";

const Home = () => {
  return (
    <div className="">
      {/* <Navbar /> */}
      <HeroSection />
      <Education />
      <Expertise />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
