import { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) nextErrors.message = "Please include a brief message.";
    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <footer id="contact" className="onyx-footer">
      <div className="onyx-contact-grid container">
        <div className="onyx-left">
          <span className="editorial-eyebrow">CONTACT</span>
          <h2>Have a problem worth solving?</h2>
          <p>
            Whether you're hiring for a frontend engineering role or building a practical digital product,
            send a message and I'll respond promptly.
          </p>
        </div>

        <form className="onyx-form" onSubmit={handleSubmit} noValidate>
          <div className={`onyx-field ${errors.name ? "error" : ""}`}>
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="onyx-error" role="alert">{errors.name}</span>}
          </div>

          <div className={`onyx-field ${errors.email ? "error" : ""}`}>
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="onyx-error" role="alert">{errors.email}</span>}
          </div>

          <div className={`onyx-field ${errors.message ? "error" : ""}`}>
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows="4"
              placeholder="Tell me about the role, project, or problem..."
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <span className="onyx-error" role="alert">{errors.message}</span>}
          </div>

          {submitted && (
            <p className="onyx-success" role="status">
              ✓ Message received. Thank you for reaching out!
            </p>
          )}

          <button type="submit" className="onyx-submit-btn">
            LET'S TALK <span aria-hidden="true">→</span>
          </button>
        </form>
      </div>

      <div className="onyx-bottom container">
        <span className="onyx-brand">{personalInfo.brandName}</span>
        <div className="onyx-socials">
          <a href={personalInfo.socials.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={personalInfo.socials.twitter} target="_blank" rel="noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
