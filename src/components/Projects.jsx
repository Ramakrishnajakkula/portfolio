import { motion } from "framer-motion";

const projects = [
  {
    title: "Learn2Earn",
    description:
      "An e-learning platform that incentivizes students with monetary rewards upon successful course completion and task fulfillment. It features a task-based assessment system and a secure reward distribution mechanism.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com",
    demo: "https://learn2earn-demo.com",
    image: "./images/download.jpg",
  },
  {
    title: "AI-Powered Chatbot System",
    description:
      "A chatbot system with secure user authentication, chat history storage, and AI-powered intent classification using NLP techniques. It includes a Trie-based search mechanism for efficient chat retrieval.",
    technologies: ["Python", "TensorFlow", "Flask", "MongoDB", "NLTK", "JWT"],
    github: "https://github.com",
    demo: "http://127.0.0.1:5000",
    image: "./images/chatbot.png",
  },
  {
    title: "Product Management System",
    description:
      "A full-stack product management system where admins can manage products, and users can view and rate them. It features a fast frontend built with React.js and Vite, and a secure backend with Node.js and MongoDB.",
    technologies: [
      "React.js",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    github: "https://github.com",
    demo: "https://ramakrishnajakkula.github.io/zyntic-frontend/",
    image: "./images/image.png",
  },
  {
    title: "Traveling Salesman Problem",
    description:
      "A visualization of the Traveling Salesman Problem (TSP) that demonstrates optimization algorithms to find the shortest possible route visiting a set of cities and returning to the origin city.",
    technologies: ["JavaScript", "HTML", "CSS", "Canvas API"],
    github: "https://github.com",
    demo: "https://tsp-sasibhushans-projects.vercel.app/",
    image: "./images/tsp.png",
  },
  {
    title: "CryptoWeather Nexus",
    description:
      "A platform that combines cryptocurrency market analysis with weather forecasting, providing users with insights into both domains in a single interface.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "API Integration",
    ],
    github: "https://github.com",
    demo: "https://crypto-weather-nexus-ruddy.vercel.app/",
    image: "./images/cryptoweather.png",
  },
  {
    title: "Statistical Process Control (SPC) - Techfluence",
    description:
      "Part of the Techfluence website, this module provides statistical process control tools for manufacturing quality analysis. Features interactive charts for real-time monitoring, trend analysis, and quality metrics visualization.",
    technologies: [
      "React.js",
      "JavaScript",
      "Chart.js",
      "CSS",
      "Statistical Analysis",
      "Techfluence Integration",
    ],
    github: "https://github.com/Ramakrishnajakkula/SPC",
    demo: "https://ramakrishnajakkula.github.io/SPC/",
    image: "./images/spc.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-secondary-dark">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan to-accent-teal">
            Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore some of my recent work, showcasing my skills in full-stack
            development and AI-powered solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gradient-to-br dark:from-secondary-dark dark:to-secondary-dark/70 rounded-lg shadow-lg overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}>
              {/* Project Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-black/20 text-gray-700 dark:text-gray-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-cyan hover:text-accent-teal transition-colors">
                    View Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30 rounded-md hover:bg-accent-cyan/30 hover:text-white transition-all">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
