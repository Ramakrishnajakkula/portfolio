import { useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: "success",
        text: "Message sent successfully! I will get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background gradient - light mode aware */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-primary-dark dark:via-primary-dark dark:to-secondary-dark -z-10"></div>

      <div className="container relative">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title text-4xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan/90 to-accent-teal/90 dark:from-accent-cyan dark:to-accent-teal inline-block">
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}>
            <p className="text-gray-600 dark:text-gray-300 mb-8 backdrop-blur-sm bg-white/50 dark:bg-black/20 p-6 rounded-lg border border-gray-200 dark:border-gray-700/30 shadow-sm">
              I'm always open to discussing new projects, opportunities, or
              partnerships. Feel free to reach out to me using the form or
              direct contact information.
            </p>

            <div className="space-y-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center p-4 backdrop-blur-sm bg-white/60 dark:bg-black/30 rounded-lg border border-gray-200 dark:border-gray-700/30 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-br from-accent-cyan/80 to-accent-cyan dark:bg-accent-cyan p-3 rounded-full mr-4 shadow-md">
                  <FaEnvelope className="text-white dark:text-black text-xl" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">
                    Email
                  </h3>
                  <a
                    href="mailto:ramakrishna@example.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-accent-cyan/80 dark:hover:text-accent-cyan transition-colors">
                    ramakrishna@example.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center p-4 backdrop-blur-sm bg-white/60 dark:bg-black/30 rounded-lg border border-gray-200 dark:border-gray-700/30 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-br from-accent-teal/80 to-accent-teal dark:bg-accent-teal p-3 rounded-full mr-4 shadow-md">
                  <FaPhone className="text-white dark:text-black text-xl" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">
                    Phone
                  </h3>
                  <a
                    href="tel:+919876543210"
                    className="text-gray-600 dark:text-gray-300 hover:text-accent-teal/80 dark:hover:text-accent-teal transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gradient-to-br dark:from-secondary-dark dark:to-secondary-dark/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700/30 shadow-lg dark:shadow-xl rounded-xl relative overflow-hidden p-6">
            {/* Glowing corner effect */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent-cyan/30 dark:bg-accent-cyan rounded-full opacity-20 blur-xl"></div>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 font-medium text-gray-700 dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-gray-50 dark:bg-black/30 border border-gray-300 dark:border-gray-700/50 text-gray-800 dark:text-white focus:border-accent-cyan/70 dark:focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/20 transition-all"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 font-medium text-gray-700 dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-gray-50 dark:bg-black/30 border border-gray-300 dark:border-gray-700/50 text-gray-800 dark:text-white focus:border-accent-cyan/70 dark:focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/20 transition-all"
                  required
                />
              </div>

              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block mb-2 font-medium text-gray-700 dark:text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 rounded-md bg-gray-50 dark:bg-black/30 border border-gray-300 dark:border-gray-700/50 text-gray-800 dark:text-white focus:border-accent-cyan/70 dark:focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/20 transition-all resize-none"
                  required></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center bg-gradient-to-r from-accent-cyan/90 to-accent-teal/90 dark:from-accent-cyan dark:to-accent-teal text-white py-3 rounded-md shadow-md hover:shadow-lg transition-all">
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </motion.button>

              {submitMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-6 p-4 rounded-md ${
                    submitMessage.type === "success"
                      ? "bg-green-50 text-green-700 border border-green-200 dark:bg-green-500/20 dark:text-green-300 dark:border-green-500/30"
                      : "bg-red-50 text-red-700 border border-red-200 dark:bg-red-500/20 dark:text-red-300 dark:border-red-500/30"
                  }`}>
                  {submitMessage.text}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
