import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import "./Navbar.css";

export default function Navbar() {
  return (
    <motion.nav
      className="navbar container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <a href="#" className="nav-logo" aria-label="Prince Chinonso Home">
        {personalInfo.brandName}
      </a>

      <div className="nav-socials">
        {/* GitHub */}
        <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>

        {/* Frontend Mentor */}
        <a href={personalInfo.socials.frontendmentor} target="_blank" rel="noreferrer" aria-label="Frontend Mentor">
          <svg width="20" height="18" viewBox="0 0 25 22" fill="currentColor">
            <path d="M13.084 2.303a1 1 0 0 0-1.016 1.725l9.18 5.403-9.18 5.402a1 1 0 0 0 1.016 1.725l10.646-6.265a1 1 0 0 0 0-1.725L13.084 2.303zM1.158 10.65a1 1 0 0 0-.316 1.378C3.195 15.792 7.367 18 12.1 18c4.734 0 8.906-2.208 11.259-5.972a1 1 0 1 0-1.694-1.062C19.67 14.158 16.122 16 12.1 16c-4.022 0-7.57-1.842-9.565-5.034a1 1 0 0 0-1.377-.316z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>

        {/* Twitter / X */}
        <a href={personalInfo.socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
          <svg width="20" height="17" viewBox="0 0 24 20" fill="currentColor">
            <path d="M23.643 2.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
          </svg>
        </a>
      </div>
    </motion.nav>
  );
}
