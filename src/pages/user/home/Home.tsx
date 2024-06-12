import Footer from "../../../component/shared/Footer";
import Expertise from "./Expertise";
import HeroSection from "./HeroSection";
import Projects from "./Projects";

const Home = () => {
  return (
    <div className="">
      {/* <Navbar /> */}
      <HeroSection />
      <Expertise />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
