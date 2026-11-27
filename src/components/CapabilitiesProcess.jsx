import { motion } from "framer-motion";
import { whatIBuild, processSteps } from "../data/portfolioData";
import "./CapabilitiesProcess.css";

export default function CapabilitiesProcess() {
  return (
    <>
      {/* WHAT I BUILD (4 Capabilities) */}
      <section id="skills" className="editorial-section container" aria-labelledby="build-heading">
        <span className="editorial-eyebrow">CAPABILITIES</span>
        <h2 id="build-heading" className="editorial-h2">WHAT I BUILD</h2>

        <div className="capabilities-grid">
          {whatIBuild.map((item, idx) => (
            <motion.div
              key={item.num}
              className="capability-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <span className="cap-index">{item.num} —</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW I THINK (Engineering Sequence) */}
      <section className="editorial-section container" aria-labelledby="process-heading">
        <div className="process-header">
          <span className="editorial-eyebrow">METHODOLOGY</span>
          <h2 id="process-heading" className="editorial-h2">HOW I THINK</h2>
        </div>

        <div className="process-list">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.num}
              className="process-row"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
            >
              <span className="process-num">
                {step.num} {idx < processSteps.length - 1 ? "↓" : ""}
              </span>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-detail">{step.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
