import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", href: "home" },
    { title: "About", href: "about" },
    { title: "Skills", href: "skills" },
    { title: "Projects", href: "projects" },
    { title: "Contact", href: "contact" },
    {
      title: "Startup",
      href: "https://ramakrishnajakkula.github.io/milk/",
      isExternal: true,
    },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-primary-dark/90 shadow-lg backdrop-blur-sm"
          : "bg-transparent"
      }`}>
      <div className="container flex flex-wrap items-center justify-between py-4">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-xl font-bold cursor-pointer">
          RK<span className="text-accent-cyan">.</span>
        </Link>

        <div className="flex items-center md:hidden">
          <button onClick={toggleTheme} className="mr-4 p-2">
            {isDarkMode ? <FaSun className="text-accent-cyan" /> : <FaMoon />}
          </button>
          <button
            className="focus:outline-none"
            onClick={() => setNavbarOpen(!navbarOpen)}>
            <div className="space-y-2">
              <span
                className={`block w-8 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${
                  navbarOpen ? "rotate-45 translate-y-2.5" : ""
                }`}></span>
              <span
                className={`block w-8 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${
                  navbarOpen ? "opacity-0" : "opacity-100"
                }`}></span>
              <span
                className={`block w-8 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${
                  navbarOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}></span>
            </div>
          </button>
        </div>

        <div
          className={`w-full md:w-auto md:flex transition-all duration-300 ease-in-out ${
            navbarOpen ? "block mt-4" : "hidden"
          } md:block`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
            {navLinks.map((link) => (
              <motion.li key={link.title} whileHover={{ y: -2 }}>
                {link.isExternal ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-accent-cyan dark:hover:text-accent-cyan transition-colors">
                    {link.title}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    smooth={true}
                    duration={500}
                    className="text-gray-600 dark:text-gray-300 hover:text-accent-cyan dark:hover:text-accent-cyan transition-colors">
                    {link.title}
                  </Link>
                )}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex items-center">
          <button onClick={toggleTheme} className="p-2">
            {isDarkMode ? <FaSun className="text-accent-cyan" /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
