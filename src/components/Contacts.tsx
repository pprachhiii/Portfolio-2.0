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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna porttitor rhoncus dolor.
        </p>

        <div className="contact-info">
          <div className="contact-info-item">
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

            hello@chloegalindo.com
          </div>

          <div className="contact-info-item">
            <svg
              className="icon-phone"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>

            (246) 234 - 4643
          </div>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name</label>

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

          <div className="form-group">
            <label htmlFor="email">Email</label>

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
                placeholder="contact@email.com"
              />
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone</label>

            <div className="input-wrap">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(245) 245 - 1345"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>

            <div className="input-wrap">
              <select id="subject" name="subject" defaultValue="">
                <option value="">Select</option>
                <option value="general">General inquiry</option>
                <option value="collaboration">Collaboration</option>
                <option value="freelance">Freelance project</option>
              </select>
            </div>
          </div>
        </div>

        <div
          className="form-group"
          style={{ marginBottom: 0 }}
        >
          <label htmlFor="message">Message</label>

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