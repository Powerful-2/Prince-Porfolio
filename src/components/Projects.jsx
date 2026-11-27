import { motion } from "framer-motion";
import { featuredProjects } from "../data/portfolioData";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="work" className="editorial-section container" aria-labelledby="work-heading">
      <div className="work-header">
        <span className="editorial-eyebrow">SELECTED WORK</span>
        <h2 id="work-heading" className="editorial-h2">IDEAS → WORKING PRODUCTS.</h2>
      </div>

      <div className="case-studies-list">
        {featuredProjects.map((project, index) => (
          <motion.article
            key={project.id}
            className="case-study-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Left / Top Editorial Metadata */}
            <div className="case-study-content">
              <div className="case-study-meta">
                <span className="case-index">{project.id} —</span>
                <h3>{project.title}</h3>
              </div>

              <p className="case-subtitle">{project.subtitle}</p>
              <p className="case-description">{project.description}</p>

              {/* Stack */}
              <div className="case-block">
                <span className="case-label">Stack</span>
                <ul className="case-tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>

              {/* What I Solved */}
              <div className="case-block">
                <span className="case-label">What I solved</span>
                <ul className="case-solved-list">
                  {project.solved.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Action Links */}
              <div className="case-actions">
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="case-link primary">
                  LIVE PROJECT <span aria-hidden="true">→</span>
                </a>
                <a href={project.codeUrl} target="_blank" rel="noreferrer" className="case-link">
                  GITHUB <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* Right / Visual Preview */}
            <div className="case-study-visual">
              <img
                src={project.image}
                alt={`${project.title} interface preview`}
                loading="lazy"
              />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
