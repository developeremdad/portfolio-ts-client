import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import backend from "../../../assets/icons/backend.png";
import frontend from "../../../assets/icons/front-end.png";
import setting from "../../../assets/icons/setting.png";
import EmptyData from "../../../component/EmptyData";
import Spinner from "../../../component/Spinner";

type TSkill = {
  category: string;
  skill: string;
};

const Expertise = ({ id }: { id: string }) => {
  const [skills, setSkills] = useState<TSkill[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_SERVER_URL}/get-skills`)
      .then((res) => {
        if (!res.ok) {
          console.log("HTTP error. status", res.status);
        }
        return res.json();
      })
      .then((data) => {
        setSkills(data?.data);
        setIsLoading(false);
      });
  }, []);

  const frontendData = skills?.filter(
    (skill) => skill?.category === "frontend"
  );

  const backendData = skills?.filter((skill) => skill?.category === "backend");
  const comfortableData = skills?.filter(
    (skill) => skill?.category === "comfortable"
  );

  const otherToolsData = skills?.filter(
    (skill) => skill?.category === "otherTools"
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="mt-20" id={id}>
      <motion.div
        className="container mx-auto text-4xl font-bold text-center mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <span className="bg-gradient-to-r from-purple-500 to-blue-300 bg-clip-text text-transparent">
          My Expertise
        </span>
      </motion.div>

      {!isLoading ? (
        <motion.div
          className="lg:w-10/12 container mx-auto p-5 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Backend part */}
          <motion.div
            className="border rounded-md hover:shadow-lg p-4 hover:bg-slate-50"
            variants={itemVariants}
          >
            <div className="flex items-center">
              <div className="self-start">
                <img src={backend} width={50} height={50} alt="" />
              </div>
              <div>
                <div className="text-2xl ml-3 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                  <span className="underline">Backend</span> (TS)
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div>
                <span className="text-sm font-bold text-gray-400">
                  &lt;h3&gt;
                </span>
              </div>
              <div className="border-l-2 pl-4 ml-4 text-gray-500">
                <div className="text-sm flex flex-wrap py-2">
                  {backendData?.map((skill, index) => (
                    <div
                      key={index}
                      className="p-1 border rounded-sm mr-1 mb-1 capitalize"
                    >
                      {skill?.skill}
                    </div>
                  ))}

                  {!backendData?.length && !isLoading && <EmptyData />}
                </div>
              </div>
            </div>
            <div>
              <span className="text-sm font-bold text-gray-400">
                &lt;/h3&gt;
              </span>
            </div>
          </motion.div>

          {/* Frontend part */}
          <motion.div
            className="border rounded-md hover:shadow-lg p-4 hover:bg-slate-50"
            variants={itemVariants}
          >
            <div className="flex items-center">
              <div className="self-start">
                <img src={frontend} width={50} height={50} alt="" />
              </div>
              <div>
                <div className="text-2xl ml-3 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                  <span className="underline">Frontend</span> (TS)
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div>
                <span className="text-sm font-bold text-gray-400">
                  &lt;h3&gt;
                </span>
              </div>
              <div className="border-l-2 pl-4 ml-4 text-gray-500">
                <div className="text-sm flex flex-wrap py-2">
                  {frontendData?.map((skill, index) => (
                    <div
                      key={index}
                      className="p-1 border rounded-sm mr-1 mb-1 capitalize"
                    >
                      {skill?.skill}
                    </div>
                  ))}

                  {!frontendData?.length && !isLoading && <EmptyData />}
                </div>
              </div>
            </div>
            <div>
              <span className="text-sm font-bold text-gray-400">
                &lt;/h3&gt;
              </span>
            </div>
          </motion.div>

          {/* Others and tools */}
          <motion.div
            className="border rounded-md hover:shadow-lg p-4 hover:bg-slate-50"
            variants={itemVariants}
          >
            <div className="flex items-center">
              <div className="self-start">
                <img src={setting} width={50} height={50} alt="" />
              </div>
              <div>
                <div className="text-2xl ml-3 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                  <span className="underline">Other</span> Tools
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div>
                <span className="text-sm font-bold text-gray-400">
                  &lt;h3&gt;
                </span>
              </div>
              <div className="border-l-2 pl-4 ml-4 text-gray-500">
                <div className="text-sm flex flex-wrap py-2">
                  {otherToolsData?.map((skill, index) => (
                    <div
                      key={index}
                      className="p-1 border rounded-sm mr-1 mb-1 capitalize"
                    >
                      {skill?.skill}
                    </div>
                  ))}
                  {!otherToolsData?.length && !isLoading && <EmptyData />}
                </div>
              </div>
            </div>
            <div>
              <span className="text-sm font-bold text-gray-400">
                &lt;/h3&gt;
              </span>
            </div>
          </motion.div>

          {/* Comfortable */}
          <motion.div
            className="border rounded-md hover:shadow-lg p-4 hover:bg-slate-50"
            variants={itemVariants}
          >
            <div className="flex items-center">
              <div className="self-start">
                <img src={setting} width={50} height={50} alt="" />
              </div>
              <div>
                <div className="text-2xl ml-3 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                  Comfortable
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div>
                <span className="text-sm font-bold text-gray-400">
                  &lt;h3&gt;
                </span>
              </div>
              <div className="border-l-2 pl-4 ml-4 text-gray-500">
                <div className="text-sm flex flex-wrap py-2">
                  {comfortableData?.map((skill, index) => (
                    <div
                      key={index}
                      className="p-1 border rounded-sm mr-1 mb-1 capitalize"
                    >
                      {skill?.skill}
                    </div>
                  ))}

                  {!comfortableData?.length && !isLoading && <EmptyData />}
                </div>
              </div>
            </div>
            <div>
              <span className="text-sm font-bold text-gray-400">
                &lt;/h3&gt;
              </span>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Expertise;
