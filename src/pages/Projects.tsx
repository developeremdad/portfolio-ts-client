import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import link from "../assets/icons/link.png";
import topRight from "../assets/icons/top-right.png";
import EmptyData from "../component/EmptyData";
import Footer from "../component/shared/Footer";
import Navbar from "../component/shared/Navbar";
import Spinner from "../component/Spinner";

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

const Projects = () => {
  const [projects, setProjects] = useState<TProject[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_SERVER_URL}/get-projects`)
      .then((res) => {
        if (!res.ok) {
          console.log(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProjects(data?.data);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <div className="container mx-auto text-4xl font-bold text-center mb-6 mt-8">
          <span className="bg-gradient-to-r from-purple-500 to-blue-300 bg-clip-text text-transparent">
            My Works
          </span>
        </div>

        <div className="lg:w-10/12 container mx-auto p-5 mb-20">
          {!isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
              {projects?.map((project, index) => (
                <div
                  key={project?._id}
                  className="relative cursor-pointer group p-2 rounded overflow-hidden hover:shadow-lg hover:bg-slate-50 border grid xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3"
                >
                  <Link to={`/project-details/${project?._id}`}>
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
                      <Link to={`/project-details/${project?._id}`}>
                        {/* <p className="text-gray-700 text-base line-clamp-3">
                          {project?.description}
                        </p> */}
                        <p
                          className="prose text-gray-700 text-base line-clamp-3 my-2"
                          dangerouslySetInnerHTML={{
                            __html: project?.description || "",
                          }}
                        ></p>
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
            </div>
          ) : (
            <Spinner />
          )}

          {!projects?.length && !isLoading && <EmptyData />}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
