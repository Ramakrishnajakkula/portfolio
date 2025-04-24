import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      company: "Linux Socials",
      position: "Web Developer Intern",
      duration: "Jun 2024 - Aug 2024",
      responsibilities: [
        "Developed responsive frontend interfaces using React and Tailwind CSS",
        "Collaborated with backend team to integrate RESTful APIs",
        "Implemented user authentication and authorization features",
        "Optimized application performance and improved load times by 30%",
        "Participated in code reviews and team meetings",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card">
              <div className="flex flex-col sm:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">{exp.position}</h3>
                  <p className="text-accent-cyan">{exp.company}</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2 sm:mt-0">
                  {exp.duration}
                </p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
