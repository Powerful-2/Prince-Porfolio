import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { featuredProjects } from "../data/portfolioData";
import "./Projects.css";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", "React", "JavaScript", "REST API", "HTML"];

  const filteredProjects =
    activeFilter === "All"
      ? featuredProjects
      : featuredProjects.filter((project) => project.tags.includes(activeFilter));

  return (
    <section id="work" className="projects-section container" aria-labelledby="projects-heading">
      <div className="projects-top">
        <div>
          <span className="section-eyebrow">Case Studies</span>
          <h2 id="projects-heading">Featured Work</h2>
        </div>
        <a href="#contact" className="btn-underline">Contact Me</a>
      </div>

      {/* Category Filter Pills */}
      <div className="project-filters" role="tablist" aria-label="Filter projects by technology">
        {categories.map((category) => (
          <button
            key={category}
            role="tab"
            aria-selected={activeFilter === category}
            className={`filter-pill ${activeFilter === category ? "active" : ""}`}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Case Study Cards */}
      <motion.div layout className="projects-grid">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.article
              layout
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
            >
              <div className="project-thumb-wrapper">
                <img
                  src={project.image}
                  alt={`Preview of ${project.title}`}
                  className="project-thumb"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-underline">
                    View Project
                  </a>
                  <a href={project.codeUrl} target="_blank" rel="noreferrer" className="btn-underline">
                    View Code
                  </a>
                </div>
              </div>

              <span className="project-subtitle">{project.subtitle}</span>
              <h3 className="project-title">{project.title}</h3>

              <ul className="project-tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              <div className="case-study-details">
                <p><strong>Problem:</strong> {project.challenge}</p>
                <p><strong>Solution:</strong> {project.solution}</p>
              </div>

              <div className="project-mobile-links">
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-underline">
                  View Project
                </a>
                <a href={project.codeUrl} target="_blank" rel="noreferrer" className="btn-underline">
                  View Code
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
