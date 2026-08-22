"use client";

import type { FormEvent } from "react";

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="contact" id="contact-section">
      <div className="contact-left">
        <h2 className="contact-title">
          <span className="highlight">Contact</span> me
        </h2>

        <p className="contact-desc">
Got a project, idea, or challenge? Let’s talk — collab, <br/> tech help, or just vibing.
        </p>

        <div className="contact-info">
  {/* EMAIL */}
  <a
    href="mailto:hello@chloegalindo.com"
    className="contact-info-item"
  >
    <svg
      className="icon-mail"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>

    <span>hello@chloegalindo.com</span>
  </a>

  {/* GITHUB */}
  <a
    href="https://github.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-info-item"
  >
    <svg
      className="icon-github"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.2 0 6.5-1.6 6.5-7A5.4 5.4 0 0 0 19 4.8 5 5 0 0 0 18.9 1S17.7.6 15 2.5a13.4 13.4 0 0 0-7 0C5.3.6 4.1 1 4.1 1A5 5 0 0 0 4 4.8a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.3 7 6.5 7A4.8 4.8 0 0 0 8 18v4" />
      <path d="M9 18c-4.5 2-5-2-7-2" />
    </svg>

    <span>GitHub</span>
  </a>

  {/* LINKEDIN */}
  <a
    href="https://linkedin.com/in/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-info-item"
  >
    <svg
      className="icon-linkedin"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <path d="M8 11v6" />
      <path d="M8 8v.01" />
      <path d="M12 17v-6" />
      <path d="M16 17v-3a3 3 0 0 0-6 0" />
    </svg>

    <span>LinkedIn</span>
  </a>
</div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">

            <div className="input-wrap">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
              </svg>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
              />
            </div>
          </div>

          
        </div>

        <div className="form-row">

          <div className="form-group">

            <div className="input-wrap">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 6-10 7L2 6" />
              </svg>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
          </div>
        </div>

        <div
          className="form-group"
          style={{ marginBottom: 0 }}
        >

          <textarea
            id="message"
            name="message"
            placeholder="Please write your message..."
          />
        </div>

        <button className="send-btn" type="submit">
          Send message
        </button>
      </form>
    </section>
  );
}