import myImg from "../../../assets/emdad-profile.jpeg";
import github from "../../../assets/icons/github.png";
import linkedIn from "../../../assets/icons/linkedin.png";
import whatsapp from "../../../assets/icons/whatsapp.png";
import Navbar from "../../../component/shared/Navbar";

const HeroSection = () => {
  return (
    <div className="h-100">
      <Navbar />

      <div className="lg:w-10/12 container mx-auto mt-10">
        <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1 gap-4 md:place-items-center">
          <div className="lg:order-2 lg:justify-self-end">
            <img
              src={myImg}
              className="rounded-full mx-auto p-1 ring-2 ring-purple-500 ring-offset-1 ring-offset-purple-500"
              height={250}
              width={250}
              alt=""
            />
          </div>
          <div className="md:col-span-2  p-6">
            <h6 className="text-2xl">Hi !</h6>
            <div className="text-5xl font-bold">
              I'm{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-300 bg-clip-text text-transparent">
                Emdadullah
              </span>
            </div>
            <h4 className="text-2xl font-semibold mb-2">
              Full-Stack Web <span className="hover:underline">Developer</span>
            </h4>
            <div className="flex">
              <a
                href="http://"
                target="_blank"
                className="hover:ring-2 ring-purple-500 ring-offset-2 rounded-full"
                rel="noopener noreferrer"
              >
                <img src={whatsapp} className="size-10" alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/mdemdadullah"
                target="_blank"
                className="hover:ring-2 ring-purple-500 ring-offset-2 rounded-full mx-3"
                rel="noopener noreferrer"
              >
                <img src={linkedIn} className="size-10" alt="" />
              </a>
              <a
                href="https://github.com/developeremdad"
                target="_blank"
                className="hover:ring-2 ring-purple-500 ring-offset-2 rounded-full"
                rel="noopener noreferrer"
              >
                <img src={github} className="size-10" alt="" />
              </a>
            </div>

            <p className="my-3">
              Welcome to my profile! I am a tech enthusiast & a self-thought
              programmer who wants to start a career as a Web Developer.
            </p>
            <p>
              I Loves to learn & explore new things & passionate about
              programming. I am willing to accept challenges to improve myself
              better & develop my skills.
            </p>
            <div className="relative inline-flex group mt-4">
              <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-green-500 via-pink-500 to-green-500 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
              <a
                href="https://drive.google.com/file/d/1NVKH6o7pNBl9k8mkobZNLA0hmtKGrtQy/view"
                target="_blank"
                role="button"
                className="relative inline-flex items-center justify-center px-7 py-1 text-base font-semibold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 hover:bg-purple-600 rounded"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
