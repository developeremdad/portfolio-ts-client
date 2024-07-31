import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fastForward from "../../../assets/icons/fast-forward.gif";
import link from "../../../assets/icons/link.png";
import topRight from "../../../assets/icons/top-right.png";

export interface TProject {
  _id: string;
  title: string;
  description: string;
  technologies: string[];
  clientLive: string;
  clientCode: string;
  serverCode: string;
  serverLive: string;
  coverUrl: string;
  imageUrls: string[];
  date: Date;
}
// const data = [
//   {
//     id: 0,
//     name: "LPG gas billing system",
//     description:
//       "The system generates monthly bills and buildings, flat, and meter-wise reports. Generate reports every month and provide unpaid and paid SMS based on status.",
//     features: [
//       "Super Admin and Manager can create and delete new buildings, along with managing flats creation and deletion within the specified buildings.",
//       "The system is capable of generating buildings/flats and month-wise reports, with manual SMS notifications for bill updates based on status.",
//     ],
//     company: "Mygasbd",
//     clientLive: "https://billing.mygasbd.com",
//     serverLive: "",
//     clientGithub: "",
//     serverGithub: "",
//     packages: ["React", "Redux", "Ant Design"],
//     photos: ["", ""],
//     thumbnail: "",
//   },
//   {
//     id: 1,
//     name: "Multi vendor E-commerce",
//     description:
//       "A multivendor e-commerce website. I built a production-level multivendor e-commerce website from scratch. It mainly deals with used products. The website acts as a connection between sellers and buyers on a commission basis. Buyers and sellers are buying and selling products through website authority.",
//     features: [
//       "A MERN-stack project included dashboard admin, seller, and user controls.",
//       " Admin manages all the products, users, and orders.",
//       "A seller can add a new product, chat with customers, and manage her products and orders.",
//       "Users can place orders by Bkash payment, manage them, and chat with sellers.",
//     ],
//     company: "Selltigo.com",
//     clientLive: "",
//     serverLive: "",
//     clientGithub: "",
//     serverGithub: "",
//     packages: [
//       "Node JS",
//       "Express JS",
//       "MongoDB",
//       "React JS",
//       "VPS hosting",
//       "Bkash payment",
//       "Multer",
//       "Nodemailer",
//       "React Router",
//       "React Bootstrap",
//       "React-Hook-Form",
//       "Firebase",
//     ],
//     photos: ["", ""],
//     thumbnail: "",
//   },
//   {
//     id: 2,
//     name: "Quick access resources",
//     description: "",
//     features: [
//       "Provides default resources for daily use based on faculty. Saves resources and e-books. a user can fully manage her resources. Have a forum for sharing problems and solutions.",
//       "Defaults to some resources based on the user's faculties. Users can add and delete resources.",
//       "Admin can manage all resources, users, forums, faculties, and tags.",
//     ],
//     company: "",
//     clientLive: "",
//     serverLive: "",
//     clientGithub: "",
//     serverGithub: "",
//     packages: [
//       "Node JS",
//       "Express JS",
//       "MongoDB",
//       "React JS",
//       "Multer",
//       "Imgbb",
//       "React Router",
//       "React Bootstrap",
//       "React-Hook-Form",
//       "Firebase",
//     ],
//     photos: ["", ""],
//     thumbnail: "",
//   },
//   {
//     id: 3,
//     name: "Mygasbd",
//     description: "",
//     company: "",
//     clientLive: "",
//     serverLive: "",
//     clientGithub: "",
//     serverGithub: "",
//     packages: ["React", "Redux", "Ant Design"],
//     photos: ["", ""],
//     thumbnail: "",
//   },
// ];

const Project = () => {
  const [projects, setProjects] = useState<TProject[]>([]);

  useEffect(() => {
    fetch(`http://localhost:5000/get-projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data?.data));
  }, []);

  return (
    <div>
      <div className="container mx-auto text-4xl font-bold text-center mb-6 mt-32">
        <span className="bg-gradient-to-r from-purple-500 to-blue-300 bg-clip-text text-transparent">
          My Works
        </span>
      </div>

      <div className="lg:w-10/12 container mx-auto p-5">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          {projects?.slice(0, 4)?.map((project, index) => (
            <div className="relative cursor-pointer group p-2 rounded overflow-hidden hover:shadow-lg hover:bg-slate-50 border grid xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
              <Link key={index} to={`/project-details/${project?._id}`}>
                <div className="xs:col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 p-0.5 h-[200px]">
                  <img
                    className="group-hover:border-2 border-green-500 rounded mx-auto w-full"
                    src={project?.coverUrl}
                    alt="Project Image"
                  />
                </div>
              </Link>
              <div className="xs:col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 xs:mt-3 md:mt-0">
                <div className="ml-3">
                  <div className="font-bold mb-1 group-hover:text-green-700 flex items-center">
                    <a
                      target="_blank"
                      href={project?.clientLive ? project?.clientLive : ""}
                    >
                      {project?.title}
                    </a>
                    <img
                      src={topRight}
                      className="h-2 ml-2 group-hover:mb-2"
                      alt="icon"
                    />
                  </div>
                  <Link key={index} to={`/project-details/${project?._id}`}>
                    <p className="text-gray-700 text-base line-clamp-3">
                      {project?.description}
                    </p>
                  </Link>
                  <Link key={index} to={`/project-details/${project?._id}`}>
                    <div className="py-2 flex flex-wrap">
                      {project?.technologies?.map((tec, index) => (
                        <span
                          key={index}
                          className="bg-green-200 rounded-full px-3 py-1 text-xs font-semibold text-green-700 hover:bg-green-300 hover:cursor-pointer mr-2 mb-2"
                        >
                          {tec}
                        </span>
                      ))}
                      {/* <span className="bg-green-200 rounded-full px-3 py-1 text-xs font-semibold text-green-700 hover:bg-green-300 hover:cursor-pointer mr-2 mb-2">
                      MERN (TS)
                    </span>
                    <span className="bg-green-200 rounded-full px-3 py-1 text-xs font-semibold text-green-700 hover:bg-green-300 hover:cursor-pointer mr-2 mb-2">
                      Redux
                    </span>
                    <span className="bg-green-200 rounded-full px-3 py-1 text-xs font-semibold text-green-700 hover:bg-green-300 hover:cursor-pointer mr-2 mb-2">
                      Ant Design
                    </span>
                    <span className="bg-green-200 rounded-full px-3 py-1 text-xs font-semibold text-green-700 hover:bg-green-300 hover:cursor-pointer mr-2 mb-2">
                      Zod
                    </span> */}
                    </div>
                  </Link>
                </div>
              </div>
              <a
                target="_blank"
                href={project?.clientLive ? project?.clientLive : ""}
              >
                <img
                  src={link}
                  className="w-7 group-hover:border-2 cursor-pointer rounded-full p-1 border-green-500 absolute right-1 top-1"
                  alt=""
                />
              </a>
            </div>
          ))}

          {/* <div className="relative cursor-pointer group p-2 rounded overflow-hidden hover:shadow-lg hover:bg-slate-50 border grid xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            <div className="xs:col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1  p-0.5">
              <img
                className="group-hover:border-2 border-green-500 rounded mx-auto w-full"
                src={assets.mygasHome}
                alt="Mountain"
              />
            </div>
            <div className="xs:col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 xs:mt-3 md:mt-0">
              <div className="ml-3">
                <div className="font-bold mb-1 group-hover:text-green-700 flex items-center">
                  <a target="_blank" href="https://billing.mygasbd.com">
                    LPG gas billing system
                  </a>
                  <img
                    src={topRight}
                    className="h-2 ml-2 group-hover:mb-2"
                    alt="icon"
                  />
                </div>
                <p className="text-gray-700 text-base">
                  The system generates monthly bills and buildings, flat, and
                  meter-wise reports. Generate reports every month and provide
                  unpaid and paid SMS based on status.
                </p>
                <div className="py-2 flex flex-wrap">
                  <span className="bg-green-200 rounded-full px-3 py-1 text-xs font-semibold text-green-700 hover:bg-green-300 hover:cursor-pointer mr-2 mb-2">
                    MERN (TS)
                  </span>
                  <span className="bg-green-200 rounded-full px-3 py-1 text-xs font-semibold text-green-700 hover:bg-green-300 hover:cursor-pointer mr-2 mb-2">
                    Redux
                  </span>
                  <span className="bg-green-200 rounded-full px-3 py-1 text-xs font-semibold text-green-700 hover:bg-green-300 hover:cursor-pointer mr-2 mb-2">
                    Ant Design
                  </span>
                  <span className="bg-green-200 rounded-full px-3 py-1 text-xs font-semibold text-green-700 hover:bg-green-300 hover:cursor-pointer mr-2 mb-2">
                    Zod
                  </span>
                </div>
              </div>
            </div>
            <a target="_blank" href="https://billing.mygasbd.com">
              <img
                src={link}
                className="w-7 group-hover:border-2 cursor-pointer rounded-full p-1 border-green-500 absolute right-1 top-1"
                alt=""
              />
            </a>
          </div>

          <div className="relative cursor-pointer group p-2 rounded overflow-hidden hover:shadow-lg hover:bg-slate-50 border grid xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            <div className="xs:col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1  p-0.5">
              <img
                className="group-hover:border-2 border-green-500 rounded mx-auto w-full"
                src={assets.selltigoHome}
                alt="Mountain"
              />
            </div>
            <div className="xs:col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 xs:mt-3 md:mt-0">
              <div className="ml-3">
                <div className="font-bold mb-1 group-hover:text-green-700 flex items-center">
                  <a href="https://selltigo.com">Multi vendor E-Commerce</a>
                  <img
                    src={topRight}
                    className="h-2 ml-2 group-hover:mb-2"
                    alt="icon"
                  />
                </div>
                <p className="text-gray-700 text-base">
                  A multivendor e-commerce website. I built a production-level
                  multivendor e-commerce website from scratch. It mainly deals
                  with used products. The website acts as a connection between
                  sellers and buyers on a commission basis. Buyers and sellers
                  are buying and selling products through website authority.
                </p>
                <div className="py-2 flex flex-wrap">
                  <span className="bg-green-200 rounded-full px-3 py-1 text-xs font-semibold text-green-700 hover:bg-green-300 hover:cursor-pointer mr-2 mb-2">
                    MERN
                  </span>
                  <span className="bg-green-200 rounded-full px-3 py-1 text-xs font-semibold text-green-700 hover:bg-green-300 hover:cursor-pointer mr-2 mb-2">
                    VPS
                  </span>
                  <span className="bg-green-200 rounded-full px-3 py-1 text-xs font-semibold text-green-700 hover:bg-green-300 hover:cursor-pointer mr-2 mb-2">
                    Mongoose
                  </span>
                  <span className="bg-green-200 rounded-full px-3 py-1 text-xs font-semibold text-green-700 hover:bg-green-300 hover:cursor-pointer mr-2 mb-2">
                    Bootstrap
                  </span>
                </div>
              </div>
            </div>
            <a target="_blank" href="https://selltigo.com">
              <img
                src={link}
                className="w-7 group-hover:border-2 cursor-pointer rounded-full p-1 border-green-500 absolute right-1 top-1"
                alt=""
              />
            </a>
          </div>

          <div className="relative cursor-pointer group p-2 rounded overflow-hidden hover:shadow-lg hover:bg-slate-50 border grid xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            <div className="xs:col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1  p-0.5">
              <img
                className="group-hover:border-2 border-green-500 rounded mx-auto w-full"
                src={assets.quickAccessHome}
                alt="Mountain"
              />
            </div>
            <div className="xs:col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 xs:mt-3 md:mt-0">
              <div className="ml-3">
                <div className="font-bold mb-1 group-hover:text-green-700 flex items-center">
                  <a
                    target="_blank"
                    href="https://easy-learning-platform.netlify.app"
                  >
                    Quick access resources
                  </a>
                  <img
                    src={topRight}
                    className="h-2 ml-2 group-hover:mb-2"
                    alt="icon"
                  />
                </div>
                <p className="text-gray-700 text-base">
                  Provides default resources for daily use based on faculty.
                  Saves resources and e-books. a user can fully manage her
                  resources. Have a forum for sharing problems and solutions.
                  Defaults to some resources based on the user's faculties.
                  Users can add and delete resources. Admin can manage all
                  resources, users, forums, faculties, and tags.
                </p>
                <div className="py-2 flex flex-wrap">
                  <span className="bg-green-200 rounded-full px-3 py-1 text-xs font-semibold text-green-700 hover:bg-green-300 hover:cursor-pointer mr-2 mb-2">
                    MERN
                  </span>
                  <span className="bg-green-200 rounded-full px-3 py-1 text-xs font-semibold text-green-700 hover:bg-green-300 hover:cursor-pointer mr-2 mb-2">
                    Multer
                  </span>
                  <span className="bg-green-200 rounded-full px-3 py-1 text-xs font-semibold text-green-700 hover:bg-green-300 hover:cursor-pointer mr-2 mb-2">
                    Firebase
                  </span>
                  <span className="bg-green-200 rounded-full px-3 py-1 text-xs font-semibold text-green-700 hover:bg-green-300 hover:cursor-pointer mr-2 mb-2">
                    Bootstrap
                  </span>
                </div>
              </div>
            </div>
            <Link to="https://easy-learning-platform.netlify.app">
              <img
                src={link}
                className="w-7 group-hover:border-2 cursor-pointer rounded-full p-1 border-green-500 absolute right-1 top-1"
                alt="icon"
              />
            </Link>
          </div>

          <div className="relative cursor-pointer group p-2 rounded overflow-hidden hover:shadow-lg hover:bg-slate-50 border grid xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            <div className="xs:col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1  p-0.5">
              <img
                className="group-hover:border-2 border-green-500 rounded mx-auto w-full"
                src={assets.bloodHome}
                alt="Mountain"
              />
            </div>
            <div className="xs:col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 xs:mt-3 md:mt-0">
              <div className="ml-3">
                <div className="font-bold mb-1 group-hover:text-green-700 flex items-center">
                  <a
                    target="_blank"
                    href="https://devemdad-blood-donation.vercel.app"
                  >
                    Blood Donation
                  </a>
                  <img
                    src={topRight}
                    className="h-2 ml-2 group-hover:mb-2"
                    alt="icon"
                  />
                </div>
                <p className="text-gray-700 text-justify">
                  The Blood Donation website is a user-centric platform designed
                  to facilitate blood donations by connecting donors with
                  recipients. It includes features for searching and filtering
                  donors, detailed donor profiles, user account management, and
                  administrative tools for overseeing site activity and user
                  accounts.
                </p>
                <div className="py-2 flex flex-wrap">
                  <span className="bg-green-200 rounded-full px-3 py-1 text-xs font-semibold text-green-700 hover:bg-green-300 hover:cursor-pointer mr-2 mb-2">
                    Next.Js (TS)
                  </span>
                  <span className="bg-green-200 rounded-full px-3 py-1 text-xs font-semibold text-green-700 hover:bg-green-300 hover:cursor-pointer mr-2 mb-2">
                    Redux
                  </span>
                  <span className="bg-green-200 rounded-full px-3 py-1 text-xs font-semibold text-green-700 hover:bg-green-300 hover:cursor-pointer mr-2 mb-2">
                    PostgreSQL
                  </span>
                  <span className="bg-green-200 rounded-full px-3 py-1 text-xs font-semibold text-green-700 hover:bg-green-300 hover:cursor-pointer mr-2 mb-2">
                    Tailwind
                  </span>
                  <span className="bg-green-200 rounded-full px-3 py-1 text-xs font-semibold text-green-700 hover:bg-green-300 hover:cursor-pointer mr-2 mb-2">
                    Node.js
                  </span>
                  <span className="bg-green-200 rounded-full px-3 py-1 text-xs font-semibold text-green-700 hover:bg-green-300 hover:cursor-pointer mr-2 mb-2">
                    Express.js
                  </span>
                  <span className="bg-green-200 rounded-full px-3 py-1 text-xs font-semibold text-green-700 hover:bg-green-300 hover:cursor-pointer mr-2 mb-2">
                    Zod
                  </span>
                </div>
              </div>
            </div>
            <a
              target="_blank"
              href="https://devemdad-blood-donation.vercel.app"
            >
              <img
                src={link}
                className="w-7 group-hover:border-2 cursor-pointer rounded-full p-1 border-green-500 absolute right-1 top-1"
                alt=""
              />
            </a>
          </div> */}
        </div>
        <Link to="/projects">
          <div className="mt-6 text-2xl font-bold flex items-center justify-center">
            <span className="text-purple-500 hover:text-purple-700 hover:cursor-pointer">
              Explore Works
            </span>
            <img src={fastForward} className="h-6 ml-2" alt="icon" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Project;
