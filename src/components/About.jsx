import { motion } from "framer-motion";
import { aboutSection, twoWorlds } from "../data/portfolioData";
import "./About.css";

export default function About() {
  return (
    <>
      {/* SECTION 2A: WHO I AM + 3 PILLARS */}
      <section id="about" className="editorial-section container" aria-labelledby="about-heading">
        <div className="section-header-split">
          <div>
            <span className="editorial-eyebrow">{aboutSection.eyebrow}</span>
            <h2 id="about-heading" className="editorial-h2">{aboutSection.headline}</h2>
          </div>
          <p className="editorial-lead-story">{aboutSection.story}</p>
        </div>

        {/* 01 Understand · 02 Build · 03 Improve */}
        <div className="pillars-grid">
          {aboutSection.pillars.map((pillar, index) => (
            <motion.article
              key={pillar.num}
              className="pillar-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <span className="pillar-num">{pillar.num} —</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* SECTION 2B: TWO WORLDS. ONE MINDSET. */}
      <section id="journey" className="two-worlds-wrapper" aria-labelledby="worlds-heading">
        <div className="container">
          <div className="worlds-top">
            <span className="editorial-eyebrow">ENGINEERING × SOFTWARE</span>
            <h2 id="worlds-heading" className="editorial-h2">{twoWorlds.headline}</h2>
          </div>

          <div className="worlds-grid">
            {twoWorlds.worlds.map((world, idx) => (
              <motion.div
                key={world.title}
                className="world-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
              >
                <span className="world-sub">{world.subtitle}</span>
                <h3>{world.title}</h3>
                <p className="world-summary">{world.summary}</p>
                <ul className="world-traits">
                  {world.traits.map((trait) => (
                    <li key={trait}>{trait}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <p className="worlds-closing">“{twoWorlds.closing}”</p>

          {/* Grounded Proof Signals (No Fake Vanity Numbers) */}
          <div className="proof-strip">
            {twoWorlds.proofSignals.map((signal) => (
              <div key={signal.label} className="proof-item">
                <span className="proof-value">{signal.value}</span>
                <span className="proof-label">{signal.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
