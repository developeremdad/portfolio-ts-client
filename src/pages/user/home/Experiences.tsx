import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import EmptyData from "../../../component/EmptyData";
import Spinner from "../../../component/Spinner";

type TExperience = {
  period: string;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string;
  organization: string;
  skills: string[];
};

const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Experiences = ({ id }: { id: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [experiences, setExperiences] = useState<TExperience[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_SERVER_URL}/get-experiences`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        setExperiences(data?.data);
      });
  }, []);

  const formatDateByYearMonth = (date: Date | string) => {
    const newDate = new Date(date);
    return `${month[newDate.getMonth()]} ${newDate.getFullYear()}`;
  };

  // Animation variants for the heading
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for the experience items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div>
      <section className="py-12" id={id}>
        <motion.div
          className="container mx-auto text-4xl font-bold text-center mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
        >
          <span className="bg-gradient-to-r from-purple-500 to-blue-300 bg-clip-text text-transparent">
            Experiences
          </span>
        </motion.div>

        <div className="lg:w-10/12 container mx-auto p-5">
          {!isLoading ? (
            experiences?.map((experience, index) => (
              <motion.div
                key={index}
                className="border hover:shadow-lg hover:bg-slate-50 rounded-lg p-6 flex flex-col md:flex-row mb-4"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
              >
                <div className="md:w-1/4 mb-4 md:mb-0 text-gray-400">
                  <div>
                    {`${formatDateByYearMonth(
                      experience?.startDate
                    )} - ${formatDateByYearMonth(experience?.endDate)}`}
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                    {experience?.title}{" "}
                    <span className="text-gray-400">
                      · {experience?.organization}
                    </span>
                  </h3>
                  <p className="my-2">{experience?.description}</p>
                  <div className="text-gray-500 text-sm flex flex-wrap py-2">
                    {experience?.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="p-1 border rounded-sm mr-1 mb-1 capitalize"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <Spinner />
          )}

          {!experiences?.length && !isLoading && <EmptyData />}
        </div>
      </section>
    </div>
  );
};

export default Experiences;
