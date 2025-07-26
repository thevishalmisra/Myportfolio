import { useState } from "react";
import { motion } from "motion/react";
const resumeLink = "https://drive.google.com/file/d/1wKHzyriKKz7xD_QqKjRb0jOSagA1JHkP/view?usp=drive_link";

function Navigation() {
  return (
    <ul className="nav-ul flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
      <li className="nav-li">
        <a className="nav-link text-neutral-400 hover:text-white transition-colors text-lg sm:text-base" href="#home">Home</a>
      </li>
      <li className="nav-li">
        <a className="nav-link text-neutral-400 hover:text-white transition-colors text-lg sm:text-base" href="#about">About</a>
      </li>
      <li className="nav-li">
        <a className="nav-link text-neutral-400 hover:text-white transition-colors text-lg sm:text-base" href="#work">Work</a>
      </li>
      <li className="nav-li">
        <a className="nav-link text-neutral-400 hover:text-white transition-colors text-lg sm:text-base" href="#contact">Contact</a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-50 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo with resume link */}
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            VISHAL
          </a>

          {/* Toggle menu button for mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex sm:hidden text-neutral-400 hover:text-white"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>

          {/* Desktop navigation */}
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <motion.div
          className="block sm:hidden text-center bg-primary/95 backdrop-blur-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <nav className="py-6">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;