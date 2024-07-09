type TExperience = {
  period: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
};

const experiencesData = [
  {
    period: "2021 — 2022",
    title: "Front-End Developer (Intern)",
    company: "Bangladesh Bridge Authority",
    description:
      "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
    skills: [
      "JavaScript",
      "TypeScript",
      "HTML & SCSS",
      "React",
      "Next.js",
      "React Native",
      "WordPress",
      "Contentful",
      "Node.js",
      "PHP",
    ],
  },
  {
    period: "2022 — 2024",
    title: "Full-Stack Developer",
    company: "Bangladesh Bridge Authority",
    description:
      "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
    skills: [
      "JavaScript",
      "TypeScript",
      "HTML & SCSS",
      "React",
      "Next.js",
      "React Native",
      "WordPress",
      "Contentful",
      "Node.js",
      "PHP",
    ],
  },
  {
    period: "2021 — 2022",
    title: "Front-End Developer (Intern)",
    company: "Bangladesh Bridge Authority",
    description:
      "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
    skills: [
      "JavaScript",
      "TypeScript",
      "HTML & SCSS",
      "React",
      "Next.js",
      "React Native",
      "WordPress",
      "Contentful",
      "Node.js",
      "PHP",
    ],
  },
];

const Experiences = () => {
  return (
    <div>
      <section className="py-12">
        <div className="container mx-auto text-4xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-purple-500 to-blue-300 bg-clip-text text-transparent">
            Experiences
          </span>
        </div>
        <div className="lg:w-10/12 container mx-auto p-5">
          {experiencesData?.map((experience: TExperience, index) => (
            <div
              key={index}
              className=" border hover:shadow-lg hover:bg-slate-50 rounded-lg  p-6 flex flex-col md:flex-row mb-4"
            >
              <div className="md:w-1/4 mb-4 md:mb-0 text-gray-400">
                <div>{experience?.period}</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                  {experience?.title}{" "}
                  <span className="text-gray-400">· {experience?.company}</span>
                </h3>
                <p className="mt-2">{experience?.description}</p>
                <div className="text-gray-500 text-sm flex flex-wrap py-2">
                  {experience?.skills.map((skill: string, index: number) => (
                    <span
                      key={index}
                      className="p-1 border rounded-sm mr-1 mb-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experiences;
