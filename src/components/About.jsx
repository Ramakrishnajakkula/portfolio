import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const TabContent = ({ activeTab }) => {
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Personal content
  if (activeTab === "personal") {
    return (
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        className="bg-white dark:bg-gradient-to-br dark:from-secondary-dark dark:to-secondary-dark/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700/30 shadow-lg dark:shadow-xl rounded-xl p-6 relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent-cyan/20 dark:bg-accent-teal rounded-full opacity-20 blur-xl"></div>

        <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
          Who am I?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          I'm Rama Krishna Jakkula, a Computer Science Engineering student at
          Lovely Professional University (LPU) based in Vijayawada, Andhra
          Pradesh. I am passionate about full-stack development, machine
          learning, and solving real-world problems with technology.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          With expertise in frontend and backend technologies, I enjoy creating
          user-friendly interfaces and robust server-side applications. My
          experience includes working on AI-powered solutions, scalable web
          platforms, and collaborative projects.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-gray-50 dark:bg-black/20 p-4 rounded-lg border border-gray-200 dark:border-gray-700/30 shadow-sm">
            <h4 className="text-accent-cyan/80 dark:text-accent-cyan font-medium mb-2">
              Technologies
            </h4>
            <ul className="space-y-1 text-gray-600 dark:text-gray-300">
              <li>Programming: C/C++, Python, Java, JavaScript</li>
              <li>Frontend: React.js, HTML, CSS</li>
              <li>Backend: Node.js, Express.js, Flask, MongoDB</li>
              <li>Machine Learning: NLP, Supervised & Unsupervised Learning</li>
              <li>Tools: Git, GitHub, Postman, Figma</li>
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-black/20 p-4 rounded-lg border border-gray-200 dark:border-gray-700/30 shadow-sm">
            <h4 className="text-accent-teal/80 dark:text-accent-teal font-medium mb-2">
              Hobbies
            </h4>
            <ul className="space-y-1 text-gray-600 dark:text-gray-300">
              <li>Reading Tech Blogs</li>
              <li>Competitive Programming</li>
              <li>Open Source Contribution</li>
            </ul>
          </div>
        </div>
      </motion.div>
    );
  }

  // Education content
  if (activeTab === "education") {
    return (
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        className="relative overflow-hidden">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent-cyan/40 dark:bg-accent-cyan/30"></div>

        {[
          {
            degree: "B.Tech in Computer Science Engineering",
            institution: "Lovely Professional University (LPU)",
            period: "2021 - 2025",
            description:
              "Specializing in AI and machine learning with a focus on web technologies and cloud computing.",
            achievements: [
              "Dean's List",
              "Technical Club Lead",
              "Hackathon Winner",
            ],
          },
          {
            degree: "Higher Secondary Education",
            institution: "XYZ School",
            period: "2019 - 2021",
            description:
              "Completed with distinction in Mathematics, Physics, and Computer Science.",
            achievements: ["School Topper", "Science Exhibition Winner"],
          },
        ].map((education, index) => (
          <motion.div
            key={index}
            className="relative pl-12 mb-12 last:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}>
            <div className="absolute left-[29px] top-1.5 w-5 h-5 rounded-full bg-accent-cyan/80 dark:bg-accent-cyan border-4 border-white dark:border-secondary-dark shadow-sm"></div>
            <div className="bg-white dark:bg-gradient-to-br dark:from-secondary-dark dark:to-secondary-dark/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700/30 rounded-xl p-5 shadow-md dark:shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                {education.degree}
              </h3>
              <div className="flex justify-between items-center mb-2">
                <p className="text-accent-cyan/80 dark:text-accent-cyan">
                  {education.institution}
                </p>
                <span className="text-gray-500 dark:text-gray-400 text-sm px-3 py-1 bg-gray-50 dark:bg-black/20 rounded-full">
                  {education.period}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {education.description}
              </p>

              <h4 className="text-sm uppercase text-gray-500 dark:text-gray-400 tracking-wider mb-2">
                Achievements
              </h4>
              <div className="flex flex-wrap gap-2">
                {education.achievements.map((achievement, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-accent-cyan/10 dark:bg-accent-cyan/10 text-accent-cyan/80 dark:text-accent-cyan text-sm rounded-full border border-accent-cyan/20 dark:border-accent-cyan/20">
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  }

  // Goals content
  if (activeTab === "goals") {
    return (
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6">
        {[
          {
            title: "Short-term Goals",
            icon: "🎯",
            goals: [
              "Master React and Next.js for frontend development",
              "Enhance skills in Node.js and Express for backend solutions",
              "Contribute to 5 open-source projects by the end of this year",
            ],
            color:
              "from-accent-cyan/10 to-transparent dark:from-accent-cyan/20 dark:to-transparent",
          },
          {
            title: "Mid-term Goals",
            icon: "🚀",
            goals: [
              "Develop a full-stack SaaS product to solve a real-world problem",
              "Build a portfolio of machine learning projects",
              "Secure a position as a full-stack developer in a leading tech company",
            ],
            color:
              "from-accent-teal/10 to-transparent dark:from-accent-teal/20 dark:to-transparent",
          },
          {
            title: "Long-term Goals",
            icon: "🌠",
            goals: [
              "Become an expert in cloud-native application development",
              "Launch a tech startup focused on AI-driven solutions",
              "Mentor aspiring developers and contribute to tech education",
            ],
            color:
              "from-purple-200 to-transparent dark:from-purple-500/20 dark:to-transparent",
          },
        ].map((goalSet, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="bg-white dark:bg-gradient-to-br dark:from-secondary-dark dark:to-secondary-dark/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700/30 rounded-xl p-6 shadow-md dark:shadow-lg relative overflow-hidden">
            <div
              className={`absolute inset-0 bg-gradient-to-r ${goalSet.color} opacity-50`}></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{goalSet.icon}</span>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {goalSet.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {goalSet.goals.map((goal, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + i * 0.1, duration: 0.3 }}
                    whileHover={{ x: 5 }}>
                    <span className="text-accent-cyan/80 dark:text-accent-cyan mt-1">
                      ◆
                    </span>
                    {goal}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return null;
};

const About = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8],
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8],
    [0.8, 1, 1, 0.8]
  );

  const tabs = [
    { id: "personal", label: "About Me", icon: "👤" },
    { id: "education", label: "Education", icon: "🎓" },
    { id: "goals", label: "Goals", icon: "🚀" },
  ];

  return (
    <section
      id="about"
      className="py-20 min-h-screen flex items-center relative"
      ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-secondary-dark dark:to-primary-dark -z-10"></div>

      <motion.div className="container" style={{ opacity, scale }}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan/80 to-accent-teal/80 dark:from-accent-cyan dark:to-accent-teal inline-block"
            animate={{
              textShadow: [
                "0 0 10px rgba(0, 188, 212, 0.1)",
                "0 0 15px rgba(0, 188, 212, 0.2)",
                "0 0 10px rgba(0, 188, 212, 0.1)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}>
            Know Me Better
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan/80 to-accent-teal/80 dark:from-accent-cyan dark:to-accent-teal mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Discover my background, education, and aspirations.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="flex mb-10 justify-center">
            <div className="bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm p-1.5 rounded-full border border-gray-200 dark:border-gray-700/30 shadow-sm flex">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full text-sm md:text-base flex items-center gap-2 transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-accent-cyan/90 dark:bg-accent-cyan text-white dark:text-black font-medium shadow-sm"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  <span>{tab.icon}</span> {tab.label}
                </motion.button>
              ))}
            </div>
          </div>

          <TabContent activeTab={activeTab} />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
