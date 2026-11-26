import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import princePhoto from "../assets/Prince.jpg";
import "./Hero.css";


export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const rings = Array.from({ length: 5 }, (_, index) => index);

  return (
    <header className="hero-wrapper">
      {/* Decorative 3D Perspective Rings from Figma */}
      <div className="orbital-rings" aria-hidden="true">
        {rings.map((ring) => (
          <motion.div
            key={ring}
            className="ring"
            style={{ top: `${ring * 12}px` }}
            animate={{ rotateZ: ring % 2 === 0 ? 4 : -4 }}
            transition={{
              duration: 6 + ring,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="hero container">
        {/* 3D Interactive Profile Card */}
        <motion.div
          className="hero-image-stage"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="hero-gradient-box">
            <img
              src={princePhoto}
              alt={personalInfo.fullName}
              className="hero-portrait"
            />

            <div className="hero-3d-badge" style={{ transform: "translateZ(35px)" }}>
              ⚡ React & 3D UI
            </div>
          </div>
        </motion.div>

        {/* Hero Typography */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <h1>
            Nice to meet you! <br className="tablet-break" />
            I’m <span className="name-underline">{personalInfo.fullName}</span>.
          </h1>
          <p>{personalInfo.bio}</p>
          <a href="#contact" className="btn-underline">Contact Me</a>
        </motion.div>
      </div>
    </header>
  );
}
