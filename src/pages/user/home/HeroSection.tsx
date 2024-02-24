import myImg from "../../../assets/emdad-profile.jpeg";
import github from "../../../assets/icons/github.png";
import linkedIn from "../../../assets/icons/linkedin.png";
import twitter from "../../../assets/icons/twitter.png";
import whatsapp from "../../../assets/icons/whatsapp.png";

const HeroSection = () => {
  return (
    <div className="h-100 py-24">
      <div className="lg:w-5/6 container px-4 mx-auto">
        <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1  gap-4 md:place-items-center">
          <div className="lg:order-2">
            <img
              src={myImg}
              className="rounded-full mx-auto p-1 ring-2 ring-green-500 ring-offset-1 ring-offset-green-500"
              height={250}
              width={250}
              alt=""
            />
          </div>
          <div className="md:col-span-2  p-6">
            <h6 className="text-2xl">Hey !</h6>
            <h1 className="text-5xl font-bold">
              I'm{" "}
              <span className="hover:underline text-purple-500">
                Emdadullah
              </span>
            </h1>
            <h4 className="text-2xl font-semibold my-1">
              Full-Stack Web <span className="hover:underline">Developer</span>
            </h4>
            <div className="flex">
              <a
                href="http://"
                target="_blank"
                className="mx-2"
                rel="noopener noreferrer"
              >
                <img src={whatsapp} className="size-10" alt="" />
              </a>
              <a
                href="http://"
                target="_blank"
                className="mx-2"
                rel="noopener noreferrer"
              >
                <img src={twitter} className="size-10" alt="" />
              </a>
              <a
                href="http://"
                target="_blank"
                className="mx-2"
                rel="noopener noreferrer"
              >
                <img src={linkedIn} className="size-10" alt="" />
              </a>
              <a
                href="https://github.com/developeremdad"
                target="_blank"
                className="mx-2"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
