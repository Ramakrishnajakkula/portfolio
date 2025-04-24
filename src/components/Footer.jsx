import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-secondary-dark py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/Ramakrishnajakkula"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-accent-cyan/80 dark:hover:text-accent-cyan transition-colors"
            aria-label="GitHub">
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/ramakrishna-jakkula-32a391253/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-accent-cyan/80 dark:hover:text-accent-cyan transition-colors"
            aria-label="LinkedIn">
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://leetcode.com/u/Ramakrishna_Jakkula/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-accent-cyan/80 dark:hover:text-accent-cyan transition-colors"
            aria-label="LeetCode">
            <SiLeetcode className="text-2xl" />
          </a>
          <a
            href="mailto:ramanjaneyuluj14@gmail.com"
            className="text-gray-700 dark:text-gray-300 hover:text-accent-cyan/80 dark:hover:text-accent-cyan transition-colors"
            aria-label="Email">
            <MdEmail className="text-2xl" />
          </a>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Vijayawada, Andhra Pradesh | Phone: 9392408573
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Rama Krishna Jakkula. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
