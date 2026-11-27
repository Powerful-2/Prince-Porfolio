import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import princePhoto from "../assets/Prince.jpg";
import "./Hero.css";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 120, damping: 18 });
  const mouseYSpring = useSpring(y, { stiffness: 120, damping: 18 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="editorial-hero container">
      {/* LEFT 55% */}
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
      >
        <span className="hero-eyebrow">{personalInfo.eyebrow}</span>

        <h1 className="hero-display-title">
          <span>UNDERSTAND.</span>
          <span>BUILD.</span>
          <span className="accent-word">IMPROVE.</span>
        </h1>

        <p className="hero-supporting-text">{personalInfo.supportingCopy}</p>

        <div className="hero-btn-group">
          <a href="#work" className="btn-editorial-primary">
            VIEW MY WORK <span aria-hidden="true">→</span>
          </a>
          <a href="#about" className="btn-editorial-secondary">
            ABOUT ME <span aria-hidden="true">↓</span>
          </a>
        </div>
      </motion.div>

      {/* RIGHT 45% */}
      <motion.div
        className="hero-right"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <div className="portrait-bg-type" aria-hidden="true">
          SYS // 01
        </div>

        <div className="editorial-portrait-frame">
          <div className="orange-light-streak" aria-hidden="true" />
          <div className="editorial-grid-lines" aria-hidden="true" />

          <img
            src={princePhoto}
            alt="Prince Chinonso — Engineering-minded Frontend Developer"
            className="editorial-portrait-img"
          />

          <div className="tech-spec-tag top-left">
            <span>LOC // LAGOS, NG</span>
          </div>
          <div className="tech-spec-tag bottom-right" style={{ transform: "translateZ(25px)" }}>
            <span className="spec-dot" /> {personalInfo.portraitBadge}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
