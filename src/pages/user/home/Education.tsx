import { motion } from "framer-motion";

const Education = () => {
  // Animation variants for the section heading
  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for the education items
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <section id="education" className="py-12 mt-10">
        <motion.div
          className="container mx-auto text-4xl font-bold text-center mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
        >
          <span className="bg-gradient-to-r from-purple-500 to-blue-300 bg-clip-text text-transparent">
            Education
          </span>
        </motion.div>

        <motion.div
          className="lg:w-10/12 container mx-auto p-5 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* <!-- Education Item 1 --> */}
          <motion.div
            className="border rounded-md hover:shadow-lg p-4 hover:bg-slate-50"
            variants={itemVariants}
          >
            <div className="flex items-center">
              <div>
                <div className="text-2xl bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                  B.Sc(Hons) in Computer Science And Engineering(CSE)
                </div>
                <div className="text-gray-600 mt-2">
                  National University Bangladesh
                </div>
                <div className="text-gray-600 my-1">2018 - 2022</div>
                <div className="text-gray-600">
                  3.30 <small className="text-[10px]">CGPA</small>
                </div>
              </div>
            </div>
          </motion.div>

          {/* <!-- Education Item 2 --> */}
          <motion.div
            className="border rounded-md hover:shadow-lg p-4 hover:bg-slate-50"
            variants={itemVariants}
          >
            <div className="flex items-center">
              <div>
                <div className="text-2xl bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                  Complete Web Development Course With Jhankar Mahbub
                </div>
                <div className="text-gray-600 mt-2">Programming Hero</div>
                <div className="text-gray-600 my-1">2021 - 2022</div>
                <div className="text-gray-600">
                  100% <small className="text-[10px]">Marks</small>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="border rounded-md hover:shadow-lg p-4 hover:bg-slate-50"
            variants={itemVariants}
          >
            <div className="flex items-center">
              <div>
                <div className="text-2xl bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                  HSC In Science Group
                </div>
                <div className="text-gray-600 mt-2">Dhaka City College</div>
                <div className="text-gray-600 my-1">2017</div>
                <div className="text-gray-600">
                  4.25 <small className="text-[10px]">GPA</small>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="border rounded-md hover:shadow-lg p-4 hover:bg-slate-50"
            variants={itemVariants}
          >
            <div className="flex items-center">
              <div>
                <div className="text-2xl bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                  Dakhil In Science Group
                </div>
                <div className="text-gray-600 mt-2">
                  Akbar Al Ulum Alim Madrasha
                </div>
                <div className="text-gray-600 my-1">2015</div>
                <div className="text-gray-600">
                  5.00 (Golden) <small className="text-[10px]">GPA</small>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Education;
