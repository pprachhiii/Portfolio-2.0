"use client";

import React, { useState } from "react";
import Confetti from "react-confetti";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";


import {
  Mail,
  Heart,
  Globe,
} from "lucide-react";

export default function Contact() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formspree.io/f/movepkgr",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();

      setShowThankYou(true);

      setTimeout(() => {
        setShowThankYou(false);
      }, 5000);
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact-section">

      {/* ==============================
          CONFETTI + THANK YOU
      ============================== */}

      {showThankYou && (
        <>
          <Confetti
            width={
              typeof window !== "undefined"
                ? window.innerWidth
                : 1200
            }
            height={
              typeof window !== "undefined"
                ? window.innerHeight
                : 800
            }
            recycle={false}
            numberOfPieces={450}
            gravity={0.25}
          />

          <div className="contact-thank-you">
            <div className="thank-you-card">

              <div className="thank-you-sparkle">
                ✦
              </div>

              <h2>
                Thank You! 🌸
              </h2>

              <p>
                Your message has been received.
                <br />
                I appreciate you reaching out and
                <br />
                will get back to you soon!
              </p>

              <div className="thank-you-heart">
                <Heart size={20} fill="currentColor" />
              </div>

            </div>
          </div>
        </>
      )}

      {/* ==============================
          LEFT SIDE
      ============================== */}

      <div className="contact-left">

        <h2 className="contact-title">
          <span className="highlight">
            Contact
          </span>
          me
        </h2>

        <p className="contact-desc">
          Got a project, idea, or challenge?
          Let’s talk - collab,
          <br />
          tech help, or just vibing.
        </p>

        {/* CONTACT LINKS CARD */}
        <div className="contact-info">

  {/* EMAIL HEADING */}
  <h3>
    <Mail className="icon-mail" />
    Get in Touch
  </h3>


{/* EMAIL */}
<a
  href="mailto:prachiiyadav2409@gmail.com"
  className="contact-info-item"
>
  <div className="email-text">

    <div>
      <strong>Email:</strong>
      <span>prachiiyadav2409@gmail.com</span>
    </div>

    <div>
      <strong>Response Time:</strong>
      <span>Usually within 24 hours</span>
    </div>

  </div>
</a>


</div>



<div className="contact-info">

  {/* FIND ME ONLINE HEADING */}
  <h3>
    <Globe className="icon-globe" />
    Find me Online
  </h3>

  {/* GITHUB */}
  <a
    href="https://github.com/pprachhiii"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-info-item"
  >
    <FaGithub className="icon-github" />

    <div className="contact-text">
      <strong>GitHub:</strong>
      <span>My code vault</span>
    </div>
  </a>

  {/* LINKEDIN */}
  <a
    href="https://www.linkedin.com/in/prachi-yadav-dev"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-info-item"
  >
    <FaLinkedinIn className="icon-linkedin" />

    <div className="contact-text">
      <strong>LinkedIn:</strong>
      <span>Professional Zone</span>
    </div>
  </a>

</div>


      </div>


      {/* ==============================
          RIGHT SIDE FORM
      ============================== */}

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <div className="form-heading">
          Send me a message
        </div>

        {/* NAME */}

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
                <circle
                  cx="12"
                  cy="8"
                  r="4"
                />

                <path
                  d="M4 21c0-4 4-6 8-6s8 2 8 6"
                />
              </svg>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
              />

            </div>

          </div>

        </div>


        {/* EMAIL */}

        <div className="form-row">

          <div className="form-group">

            <div className="input-wrap">

              <Mail />

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                required
              />

            </div>

          </div>

        </div>


        {/* MESSAGE */}

        <div
          className="form-group message-group"
        >

          <textarea
            id="message"
            name="message"
            placeholder="Please write your message..."
            required
          />

        </div>


        {/* SEND */}

        <button
          className="send-btn"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "Sending..."
            : "Send message"}
        </button>

      </form>

    </section>
  );
}
