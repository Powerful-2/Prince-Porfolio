import { motion } from "framer-motion";
import { aboutContent } from "../data/portfolioData";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section container" aria-labelledby="about-heading">
      <motion.div
        className="about-grid"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="about-story">
          <span className="section-eyebrow">Engineering × Frontend</span>
          <h2 id="about-heading">{aboutContent.heading}</h2>
          <p className="about-lead">{aboutContent.lead}</p>
          {aboutContent.paragraphs.map((text, index) => (
            <p key={index} className="about-body">{text}</p>
          ))}
        </div>

        <div className="about-cards">
          {aboutContent.highlights.map((item, idx) => (
            <div key={idx} className="about-highlight-card">
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
