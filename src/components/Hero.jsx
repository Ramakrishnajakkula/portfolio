import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Gradient Background - light mode aware */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-primary-dark dark:via-primary-dark dark:to-secondary-dark -z-10"></div>

      {/* Glowing Circles - light mode aware */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-accent-cyan/10 dark:bg-accent-cyan/20 rounded-full blur-[100px] -z-5"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent-teal/10 dark:bg-accent-teal/20 rounded-full blur-[120px] -z-5"></div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10">
          <div className="glitch-wrapper mb-2">
            <p
              className="text-accent-cyan/80 dark:text-accent-cyan mb-2 font-medium glitch"
              data-text="Hello, I'm">
              Hello, I'm
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-white">
            Rama Krishna{" "}
            <span className="text-accent-cyan/80 dark:text-accent-cyan">
              Jakkula
            </span>
          </h1>

          <div className="overflow-hidden w-full mb-6">
            <h2 className="text-xl sm:text-2xl md:text-2xl text-gray-600 dark:text-gray-300 typewriter-container">
              <span className="typewriter">
                Full-Stack Developer & Machine Learning Enthusiast
              </span>
            </h2>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg backdrop-blur-sm bg-white/40 dark:bg-black/20 p-4 rounded-lg border border-gray-200 dark:border-gray-700/30 shadow-sm">
            I specialize in building scalable web applications and AI-powered
            solutions. Passionate about creating seamless user experiences and
            solving real-world problems with technology.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="btn relative overflow-hidden group bg-gradient-to-r from-accent-cyan/90 to-accent-teal/90 dark:from-accent-cyan dark:to-accent-teal text-white py-2 px-6 rounded-md shadow-md hover:shadow-lg transition-shadow">
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-teal/90 to-accent-cyan/90 dark:from-accent-teal dark:to-accent-cyan transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="btn border border-accent-cyan/70 dark:border-accent-cyan text-accent-cyan/80 dark:text-accent-cyan hover:text-white relative overflow-hidden group py-2 px-6 rounded-md shadow-sm hover:shadow-md">
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/90 to-accent-teal/90 dark:from-accent-cyan dark:to-accent-teal transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </motion.a>
          </div>

          <div className="flex space-x-6">
            <motion.a
              whileHover={{ y: -5, scale: 1.1 }}
              href="https://github.com/Ramakrishnajakkula"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-accent-cyan/80 dark:hover:text-accent-cyan transition-colors p-2 bg-gray-50 dark:bg-secondary-dark/80 rounded-full text-gray-700 dark:text-white shadow-sm"
              aria-label="GitHub">
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ y: -5, scale: 1.1 }}
              href="https://www.linkedin.com/in/ramakrishna-jakkula-32a391253/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-accent-cyan/80 dark:hover:text-accent-cyan transition-colors p-2 bg-gray-50 dark:bg-secondary-dark/80 rounded-full text-gray-700 dark:text-white shadow-sm"
              aria-label="LinkedIn">
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ y: -5, scale: 1.1 }}
              href="https://leetcode.com/u/Ramakrishna_Jakkula/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-accent-cyan/80 dark:hover:text-accent-cyan transition-colors p-2 bg-gray-50 dark:bg-secondary-dark/80 rounded-full text-gray-700 dark:text-white shadow-sm"
              aria-label="LeetCode">
              <SiLeetcode />
            </motion.a>
            <motion.a
              whileHover={{ y: -5, scale: 1.1 }}
              href="mailto:ramanjaneyuluj14@gmail.com"
              className="text-2xl hover:text-accent-cyan/80 dark:hover:text-accent-cyan transition-colors p-2 bg-gray-50 dark:bg-secondary-dark/80 rounded-full text-gray-700 dark:text-white shadow-sm"
              aria-label="Email">
              <MdEmail />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex lg:justify-center lg:items-center">
          {/* People Network Visualization */}
          <div className="relative w-[400px] h-[400px] ai-brain-container">
            {/* Circular glow backdrop */}
            <div className="absolute inset-0 rounded-full bg-gradient-radial from-accent-cyan/5 via-accent-teal/10 to-transparent dark:from-accent-cyan/10 dark:via-accent-teal/5 dark:to-transparent"></div>

            {/* Subtle pattern background */}
            <div className="absolute inset-0 opacity-10 dark:opacity-20">
              <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg">
                <pattern
                  id="people-pattern"
                  x="0"
                  y="0"
                  width="50"
                  height="50"
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(45)">
                  <path
                    d="M25,10 A5,5 0 1,1 15,10 A5,5 0 1,1 25,10 M20,25 Q30,15 40,25"
                    stroke="currentColor"
                    fill="none"
                    className="text-accent-cyan/30"
                  />
                </pattern>
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  fill="url(#people-pattern)"
                />
              </svg>
            </div>

            {/* People Network Structure */}
            <div className="absolute inset-0">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full opacity-70 dark:opacity-90">
                <defs>
                  <linearGradient
                    id="connection-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%">
                    <stop offset="0%" stopColor="rgba(0, 188, 212, 0.5)" />
                    <stop offset="100%" stopColor="rgba(3, 218, 198, 0.5)" />
                  </linearGradient>
                </defs>

                {/* Person-to-person connections */}
                <path
                  fill="none"
                  stroke="url(#connection-gradient)"
                  strokeWidth="0.8"
                  className="network-path pulse-line"
                  d="M50,40 L100,100 L150,40"
                />
                <path
                  fill="none"
                  stroke="url(#connection-gradient)"
                  strokeWidth="0.8"
                  className="network-path pulse-line"
                  d="M50,160 L100,100 L150,160"
                />
                <path
                  fill="none"
                  stroke="url(#connection-gradient)"
                  strokeWidth="0.8"
                  className="network-path pulse-line"
                  d="M50,40 L50,160"
                />
                <path
                  fill="none"
                  stroke="url(#connection-gradient)"
                  strokeWidth="0.8"
                  className="network-path pulse-line"
                  d="M150,40 L150,160"
                />
                <path
                  fill="none"
                  stroke="url(#connection-gradient)"
                  strokeWidth="1.2"
                  className="network-path pulse-line"
                  d="M70,120 L130,80"
                />
                <path
                  fill="none"
                  stroke="url(#connection-gradient)"
                  strokeWidth="1.2"
                  className="network-path pulse-line"
                  d="M70,80 L130,120"
                />
              </svg>
            </div>

            {/* People Nodes */}
            <div className="people-nodes">
              {[
                { top: "20%", left: "25%", scale: 1.1 },
                { top: "20%", left: "75%", scale: 1.1 },
                { top: "40%", left: "30%", scale: 0.9 },
                { top: "40%", left: "70%", scale: 0.9 },
                { top: "60%", left: "30%", scale: 0.9 },
                { top: "60%", left: "70%", scale: 0.9 },
                { top: "80%", left: "25%", scale: 1.1 },
                { top: "80%", left: "75%", scale: 1.1 },
                { top: "35%", left: "50%", scale: 0.8 },
                { top: "65%", left: "50%", scale: 0.8 },
              ].map((position, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    top: position.top,
                    left: position.left,
                    transform: `translate(-50%, -50%) scale(${position.scale})`,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0.7, 1, 0.7],
                    y: [0, -3, 0],
                    scale: [
                      position.scale,
                      position.scale * 1.1,
                      position.scale,
                    ],
                  }}
                  transition={{
                    duration: 3 + (i % 2),
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-accent-cyan/80 dark:text-accent-cyan">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </motion.div>
              ))}
            </div>

            {/* Enhanced connection data packets */}
            <div className="neural-connections absolute inset-0">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {[
                  { x1: 25, y1: 20, x2: 50, y2: 50 },
                  { x1: 75, y1: 20, x2: 50, y2: 50 },
                  { x1: 25, y1: 80, x2: 50, y2: 50 },
                  { x1: 75, y1: 80, x2: 50, y2: 50 },
                  { x1: 25, y1: 20, x2: 25, y2: 80 },
                  { x1: 75, y1: 20, x2: 75, y2: 80 },
                  { x1: 30, y1: 40, x2: 70, y2: 40 },
                  { x1: 30, y1: 60, x2: 70, y2: 60 },
                ].map((line, i) => (
                  <g key={i}>
                    <circle
                      r="0.8"
                      fill="#00bcd4"
                      className="moving-dot"
                      style={{ animationDelay: `${i * 0.3}s` }}>
                      <animateMotion
                        dur={`${4 + (i % 3)}s`}
                        repeatCount="indefinite"
                        path={`M${line.x1},${line.y1} L${line.x2},${line.y2}`}
                      />
                    </circle>
                  </g>
                ))}
              </svg>
            </div>

            {/* Central Person - Main Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r from-accent-cyan/20 to-accent-teal/20 dark:from-accent-cyan/30 dark:to-accent-teal/30 border border-accent-cyan/30 dark:border-accent-cyan/50"
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(3, 218, 198, 0.4)",
                    "0 0 30px rgba(3, 218, 198, 0.7)",
                    "0 0 0 rgba(3, 218, 198, 0.4)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}>
                <motion.div
                  className="text-accent-cyan/90 dark:text-accent-cyan"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </motion.div>
              </motion.div>
            </div>

            {/* Connecting words/tags floating around */}
            {[
              { text: "Collaborate", top: "15%", left: "50%", delay: 0 },
              { text: "Connect", top: "85%", left: "50%", delay: 1.2 },
              { text: "Share", top: "50%", left: "15%", delay: 0.6 },
              { text: "Build", top: "50%", left: "85%", delay: 1.8 },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="absolute text-xs font-medium text-accent-cyan/60 dark:text-accent-cyan/80"
                style={{
                  top: item.top,
                  left: item.left,
                  transform: "translate(-50%, -50%)",
                }}
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: item.delay,
                }}>
                {item.text}
              </motion.div>
            ))}

            {/* Outer glow effect */}
            <motion.div
              className="absolute inset-0 border-2 rounded-full border-accent-cyan/0 dark:border-accent-cyan/0"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0, 0.2, 0],
                borderColor: [
                  "rgba(0,188,212,0)",
                  "rgba(0,188,212,0.3)",
                  "rgba(0,188,212,0)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
