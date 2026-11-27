import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import "./Navbar.css";

export default function Navbar() {
  return (
    <motion.header
      className="editorial-nav-wrapper"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="editorial-nav container" aria-label="Primary Navigation">
        <a href="#" className="editorial-logo">
          {personalInfo.brandName}
        </a>

        <ul className="editorial-nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#journey">Journey</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href="#contact" className="nav-cta-btn">
          LET'S TALK <span aria-hidden="true">→</span>
        </a>
      </nav>
    </motion.header>
  );
}
