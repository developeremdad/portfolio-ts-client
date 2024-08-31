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
      <HeroSection id="hero" />
      <Education />
      <Experiences id="experience" />
      <Expertise id="expertise" />
      <Project id="project" />
      <Contact id="contact" />
      <Blogs id="blog" />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
};

export default Home;
