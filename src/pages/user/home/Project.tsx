import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fastForward from "../../../assets/icons/fast-forward.gif";
import link from "../../../assets/icons/link.png";
import topRight from "../../../assets/icons/top-right.png";
import EmptyData from "../../../component/EmptyData";
import Spinner from "../../../component/Spinner";

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

const Project = ({ id }: { id: string }) => {
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
  }, [id]);

  return (
    <div id={id}>
      <div className="container mx-auto text-4xl font-bold text-center mb-6 mt-32">
        <Link to="/projects">
          <span className="bg-gradient-to-r from-purple-500 to-blue-300 bg-clip-text text-transparent">
            My Works
          </span>
        </Link>
      </div>

      {!isLoading ? (
        <div className="lg:w-10/12 container mx-auto p-5">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
            {projects?.slice(0, 4)?.map((project) => (
              <div
                key={project?._id}
                className="relative cursor-pointer group p-2 rounded overflow-hidden hover:shadow-lg hover:bg-slate-50 border grid xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3"
              >
                <Link to={`/project-details/${project?._id}`}>
                  <div className="xs:col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 p-0.5 h-[200px]">
                    <img
                      className="group-hover:border-2 border-green-500 rounded mx-auto lg:h-auto h-[200px]"
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
                      <p className="text-gray-700 text-base line-clamp-3">
                        {project?.description}
                      </p>
                    </Link>
                    <Link to={`/project-details/${project?._id}`}>
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

          {!projects?.length && !isLoading && <EmptyData />}

          <Link to="/projects">
            <div className="mt-10 text-2xl font-bold flex items-center justify-center">
              <span className="text-purple-500 hover:text-purple-700 hover:cursor-pointer">
                Explore Works
              </span>
              <img src={fastForward} className="h-6 ml-2" alt="icon" />
            </div>
          </Link>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Project;
