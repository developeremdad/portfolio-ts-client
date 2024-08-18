import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../component/shared/Footer";
import Navbar from "../component/shared/Navbar";

interface TProject {
  _id: string;
  title: string;
  description: string;
  technologies: string[] | null;
  clientLive: string;
  clientCode: string;
  serverCode: string;
  serverLive: string;
  imageUrls: string[];
  coverUrl: string;
  date: string;
}
const ProjectDetails = () => {
  const { id } = useParams();
  //   const project: TProject = {
  //     _id: "66a8f3f1a62b15486e5669b8",
  //     title: "Mygasbd",
  //     description: "lorem",
  //     technologies: ["react", "redux", "express"],
  //     clientLive: "https://billing.mygasbd.com",
  //     clientCode: "nothing",
  //     serverCode: "hello",
  //     serverLive: "i am",
  //     imageUrls: [
  //       "https://res.cloudinary.com/dwijckjzi/image/upload/v1722348529/portfolio/1722348365563-483770031-selltigoHome_s95vbz.png",
  //       "https://res.cloudinary.com/dwijckjzi/image/upload/v1722348380/portfolio/1722348365663-712741328-mygas-home_i5ga9z.png",
  //     ],
  //     coverUrl:
  //       "https://res.cloudinary.com/dwijckjzi/image/upload/v1722348266/portfolio/uf1gsa6xkrncq9tapcso.png",
  //     date: "2024-07-30T14:08:49.716Z",
  //   };

  const [project, setProject] = useState<TProject>();
  const [selectedImage, setSelectedImage] = useState<string>(
    project?.coverUrl || ""
  );

  useEffect(() => {
    fetch(`http://localhost:5000/get-projects/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProject(data?.data);
        setSelectedImage(data?.data?.coverUrl);
      });
  }, [id]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-2 my-2 min-h-screen">
        <div className="flex flex-wrap bg-white shadow-lg border p-5 rounded-md overflow-hidden">
          <div className="w-full md:w-1/2">
            <img
              src={selectedImage}
              alt={project?.title}
              className="w-full h-auto object-cover object-center border border-green-300 rounded"
            />
            <div className="flex mt-4 space-x-2 justify-center">
              {project?.imageUrls &&
                [project?.coverUrl, ...project.imageUrls]?.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-24 h-24 object-cover cursor-pointer rounded ${
                      selectedImage === url
                        ? "border-2 border-green-500 rounded"
                        : ""
                    }`}
                    onClick={() => setSelectedImage(url)}
                  />
                ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 px-6 py-1">
            <h2 className="text-2xl font-bold mb-3 capitalize">
              {project?.title}
            </h2>

            <div className="flex flex-wrap mb-4">
              <a
                href={project?.clientLive}
                target="_blank"
                className="bg-green-200 rounded-full px-3 py-1 text-xs font-semibold hover:underline text-green-700 hover:bg-green-300 hover:cursor-pointer mr-2 mb-2"
              >
                Client Live
              </a>
              {project?.clientCode && (
                <a
                  href={project.clientCode}
                  target="_blank"
                  className="bg-green-200 rounded-full px-3 py-1 text-xs font-semibold hover:underline text-green-700 hover:bg-green-300 hover:cursor-pointer mr-2 mb-2"
                >
                  Client Code
                </a>
              )}
              {project?.serverCode && (
                <a
                  href={project?.serverCode}
                  target="_blank"
                  className="bg-green-200 rounded-full px-3 py-1 text-xs font-semibold hover:underline text-gray-700 hover:bg-green-300 hover:cursor-pointer mr-2 mb-2"
                >
                  Server Code
                </a>
              )}
              {project?.serverLive && (
                <a
                  href={project.serverLive}
                  target="_blank"
                  className="bg-green-200 rounded-full px-3 py-1 text-xs font-semibold hover:underline text-gray-700 hover:bg-green-300 hover:cursor-pointer mr-2 mb-2"
                >
                  Server Live
                </a>
              )}
            </div>
            {project?.technologies && (
              <div className="mb-4">
                <p className="text-gray-700 font-semibold mb-2">
                  Technologies Used
                </p>
                <div className="text-sm flex flex-wrap py-2">
                  {project?.technologies.map((tech, index) => (
                    <span
                      className="p-1 border rounded-sm mr-1 mb-1 capitalize"
                      key={index}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <p className="text-gray-700 mb-4">
              <b>Description</b>
              <br />
              {project?.description}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
