import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaCode,
  FaDatabase,
  FaReact,
  FaPython,
  FaBrain,
  FaTools,
} from "react-icons/fa";

const SkillCategory = ({ category, isVisible = true }) => {
  const [isHovered, setIsHovered] = useState(null);

  const categoryIcons = {
    "Programming Languages": <FaCode className="text-2xl" />,
    "Machine Learning": <FaBrain className="text-2xl" />,
    Frontend: <FaReact className="text-2xl" />,
    Backend: <FaDatabase className="text-2xl" />,
    "Tools & Design": <FaTools className="text-2xl" />,
  };

  const levelColors = {
    expert: {
      dark: "#03dac6",
      light: "#00897b",
    },
    advanced: {
      dark: "#00bcd4",
      light: "#0097a7",
    },
    intermediate: {
      dark: "#4db6ac",
      light: "#26a69a",
    },
    beginner: {
      dark: "#80cbc4",
      light: "#4db6ac",
    },
  };

  const enhancedSkills = category.skills.map((skill) => {
    let level = "intermediate";
    if (["React.js", "HTML", "CSS", "Python", "JavaScript"].includes(skill)) {
      level = "expert";
    } else if (
      [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Git",
        "NLP",
        "Supervised Learning",
      ].includes(skill)
    ) {
      level = "advanced";
    } else if (["Figma", "Postman", "Unsupervised Learning"].includes(skill)) {
      level = "beginner";
    }

    return { name: skill, level };
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: isVisible ? 1 : 0.3,
        scale: isVisible ? 1 : 0.95,
        y: isVisible ? 0 : 10,
      }}
      transition={{ duration: 0.5 }}
      className={`bg-gradient-to-br from-lightbg-secondary to-lightbg-tertiary dark:from-secondary-dark dark:to-secondary-dark/70 backdrop-blur-sm border border-gray-300 dark:border-gray-700/30 rounded-xl shadow-md dark:shadow-lg p-6 h-full relative group overflow-hidden ${
        !isVisible ? "pointer-events-none" : ""
      }`}>
      <div className="absolute -z-10 inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute h-[2px] top-0 left-0 bg-gradient-to-r from-transparent via-accent-cyan-light dark:via-accent-cyan to-transparent w-full group-hover:animate-border-top"></div>
          <div className="absolute h-[2px] bottom-0 right-0 bg-gradient-to-r from-transparent via-accent-teal-light dark:via-accent-teal to-transparent w-full group-hover:animate-border-bottom"></div>
          <div className="absolute w-[2px] top-0 right-0 bg-gradient-to-b from-transparent via-accent-cyan-light dark:via-accent-cyan to-transparent h-full group-hover:animate-border-right"></div>
          <div className="absolute w-[2px] bottom-0 left-0 bg-gradient-to-b from-transparent via-accent-teal-light dark:via-accent-teal to-transparent h-full group-hover:animate-border-left"></div>
        </div>
      </div>

      <div className="absolute -top-10 -right-10 w-20 h-20 bg-accent-cyan-light dark:bg-accent-cyan rounded-full opacity-0 blur-xl group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-700"></div>

      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-accent-cyan-light/10 dark:bg-accent-cyan/10 rounded-lg text-accent-cyan-light dark:text-accent-cyan">
          {categoryIcons[category.title]}
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
          {category.title}
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {enhancedSkills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative"
            onMouseEnter={() => setIsHovered(skill.name)}
            onMouseLeave={() => setIsHovered(null)}
            whileHover={{ scale: 1.03 }}>
            <motion.div
              className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700/50 bg-white/60 dark:bg-black/20 backdrop-blur-sm relative overflow-hidden group"
              whileHover={{
                borderColor:
                  levelColors[skill.level][
                    document.documentElement.classList.contains("dark")
                      ? "dark"
                      : "light"
                  ],
              }}>
              <div
                className="absolute bottom-0 left-0 h-1"
                style={{
                  backgroundColor:
                    levelColors[skill.level][
                      document.documentElement.classList.contains("dark")
                        ? "dark"
                        : "light"
                    ],
                  width:
                    isHovered === skill.name
                      ? "100%"
                      : skill.level === "expert"
                      ? "90%"
                      : skill.level === "advanced"
                      ? "75%"
                      : skill.level === "intermediate"
                      ? "60%"
                      : "40%",
                  transition: "width 0.5s ease-out",
                }}></div>

              <p className="text-sm text-gray-700 dark:text-gray-300">
                {skill.name}
              </p>

              {isHovered === skill.name && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-900 text-gray-800 dark:text-white text-xs py-1 px-2 rounded shadow-md dark:shadow-none whitespace-nowrap z-30">
                  {skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const SkillRadar = ({ skills, activeCategory }) => {
  const levels = {
    expert: 0.95,
    advanced: 0.8,
    intermediate: 0.65,
    beginner: 0.45,
  };

  const activeSkills = activeCategory
    ? skills
        .find((cat) => cat.title === activeCategory)
        .skills.map((skill) => {
          let level = "intermediate";
          if (
            ["React.js", "HTML", "CSS", "Python", "JavaScript"].includes(skill)
          ) {
            level = "expert";
          } else if (
            [
              "Node.js",
              "Express.js",
              "MongoDB",
              "Git",
              "NLP",
              "Supervised Learning",
            ].includes(skill)
          ) {
            level = "advanced";
          } else if (
            ["Figma", "Postman", "Unsupervised Learning"].includes(skill)
          ) {
            level = "beginner";
          }

          return { name: skill, level, value: levels[level] };
        })
        .slice(0, 8)
    : [];

  return (
    <motion.div
      className="fixed-radar-container bg-white/70 dark:bg-secondary-dark/50 backdrop-blur-sm border border-gray-300 dark:border-gray-700/30 rounded-xl shadow-md dark:shadow-none flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: activeCategory ? 1 : 0 }}
      transition={{ duration: 0.5 }}>
      {!activeCategory ? (
        <div className="text-gray-600 dark:text-gray-400 flex flex-col items-center">
          <p>Select a category to see skill details</p>
          <motion.div
            className="mt-2 text-accent-cyan-light dark:text-accent-cyan text-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}>
            ↑
          </motion.div>
        </div>
      ) : (
        <>
          <div className="absolute inset-0 flex items-center justify-center">
            {[0.25, 0.5, 0.75, 1].map((radius, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border border-gray-300 dark:border-gray-700/30"
                style={{
                  width: `${radius * 80}%`,
                  height: `${radius * 80}%`,
                  backgroundColor:
                    i === 0
                      ? document.documentElement.classList.contains("dark")
                        ? "rgba(3, 218, 198, 0.05)"
                        : "rgba(0, 137, 123, 0.03)"
                      : i === 1
                      ? document.documentElement.classList.contains("dark")
                        ? "rgba(3, 218, 198, 0.03)"
                        : "rgba(0, 137, 123, 0.02)"
                      : i === 2
                      ? document.documentElement.classList.contains("dark")
                        ? "rgba(3, 218, 198, 0.02)"
                        : "rgba(0, 137, 123, 0.01)"
                      : document.documentElement.classList.contains("dark")
                      ? "rgba(3, 218, 198, 0.01)"
                      : "rgba(0, 137, 123, 0.005)",
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              />
            ))}
          </div>

          {activeSkills.map((skill, i) => {
            const angle = (i * Math.PI * 2) / activeSkills.length;
            const x = Math.cos(angle) * 35 * skill.value;
            const y = Math.sin(angle) * 35 * skill.value;

            return (
              <motion.div
                key={i}
                className="absolute flex flex-col items-center"
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{
                  opacity: 1,
                  x: `${x}%`,
                  y: `${y}%`,
                }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}>
                <motion.div
                  className="w-4 h-4 bg-accent-cyan-light dark:bg-accent-cyan rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(3, 218, 198, 0.7)",
                      "0 0 10px rgba(3, 218, 198, 0.7)",
                      "0 0 0px rgba(3, 218, 198, 0.7)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="mt-2 px-2 py-1 bg-white dark:bg-gray-900/80 text-sm text-gray-800 dark:text-white rounded-md whitespace-nowrap">
                  {skill.name}
                </div>
              </motion.div>
            );
          })}

          <motion.div
            className="w-6 h-6 bg-accent-teal-light dark:bg-accent-teal rounded-full z-10"
            animate={{
              boxShadow: [
                "0 0 0px rgba(0, 137, 123, 0.7)",
                "0 0 20px rgba(0, 137, 123, 0.7)",
                "0 0 0px rgba(0, 137, 123, 0.7)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </>
      )}
    </motion.div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C/C++", "Python", "Java", "JavaScript"],
    },
    {
      title: "Frontend",
      skills: ["React.js", "HTML", "CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Flask", "MongoDB"],
    },
    {
      title: "Machine Learning",
      skills: ["NLP", "Supervised Learning", "Unsupervised Learning"],
    },
    {
      title: "Tools & Design",
      skills: ["Git", "GitHub", "Postman", "Figma"],
    },
  ];

  return (
    <section id="skills" className="py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-lightbg-primary via-lightbg-secondary to-lightbg-tertiary dark:from-primary-dark dark:via-primary-dark dark:to-secondary-dark -z-10"></div>

      <div className="container">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan-light to-accent-teal-light dark:from-accent-cyan dark:to-accent-teal inline-block"
            animate={{
              textShadow: document.documentElement.classList.contains("dark")
                ? [
                    "0 0 10px rgba(3, 218, 198, 0.2)",
                    "0 0 20px rgba(3, 218, 198, 0.4)",
                    "0 0 10px rgba(3, 218, 198, 0.2)",
                  ]
                : [
                    "0 0 10px rgba(0, 137, 123, 0.1)",
                    "0 0 15px rgba(0, 137, 123, 0.2)",
                    "0 0 10px rgba(0, 137, 123, 0.1)",
                  ],
            }}
            transition={{ duration: 2, repeat: Infinity }}>
            Technical Skills
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan-light to-accent-teal-light dark:from-accent-cyan dark:to-accent-teal mx-auto rounded-full"></div>
          <p className="text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Click on any skill category to see detailed proficiency levels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          <div className="lg:col-span-3">
            <div className="flex flex-wrap justify-center gap-6">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  onClick={() =>
                    setActiveCategory(
                      activeCategory === category.title ? null : category.title
                    )
                  }
                  className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                  <SkillCategory
                    category={category}
                    isVisible={
                      !activeCategory || activeCategory === category.title
                    }
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="w-full max-w-xl mx-auto">
            <SkillRadar
              skills={skillCategories}
              activeCategory={activeCategory}
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: activeCategory ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-center">
              {activeCategory && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(null)}
                  className="px-4 py-2 bg-accent-cyan-light/10 dark:bg-accent-cyan/20 text-accent-cyan-light dark:text-accent-cyan border border-accent-cyan-light/30 dark:border-accent-cyan/30 rounded-md shadow-sm">
                  Clear Selection
                </motion.button>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
