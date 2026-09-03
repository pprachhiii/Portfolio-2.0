
import React, { useState } from "react";
import Confetti from "react-confetti";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";

export default function ContactUs() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSending(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
        "https://formspree.io/f/movepkgr",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong while sending.");
      }

      setShowThankYou(true);

      form.reset();

      setTimeout(() => {
        setShowThankYou(false);
      }, 5000);
    } catch  {
      setError(
        "Something went wrong. Please try again or email me directly."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="contact-page">

      {showThankYou && (
        <>
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={500}
          />

          <div className="thank-you-overlay">
            <div className="thank-you-content">

              <div className="thank-you-flower">
                🌸
              </div>

              <h2>
                Thank You!
              </h2>

              <p>
                Your message has been received.
                <br />
                I appreciate you reaching out and
                <br />
                I'll get back to you soon!
              </p>

            </div>
          </div>
        </>
      )}


      <section id="contact-section">


        <div className="contact-heading">

          <h1>
            Got a project, idea, or challenge?
          </h1>

          <p>
            Let’s talk - collab, tech help, or just vibing.
          </p>

        </div>


        <div className="contact-wrapper">

          <div className="contact-card">

            <h2>
              Contact Me
            </h2>

            <div className="contact-info">

              {/* EMAIL */}
              <a
                href="mailto:prachiiyadav2409@gmail.com"
                className="info-row"
              >
                <span className="info-icon">
                  <FaEnvelope />
                </span>

                <span className="info-text">
                  prachiiyadav2409@gmail.com
                </span>
              </a>


              {/* GITHUB */}
              <a
                href="https://github.com/pprachhiii"
                target="_blank"
                rel="noopener noreferrer"
                className="info-row"
              >
                <span className="info-icon">
                  <FaGithub />
                </span>

                <span className="info-text">
                  GitHub
                </span>
              </a>


              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/prachi-yadav-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="info-row"
              >
                <span className="info-icon">
                  <FaLinkedin />
                </span>

                <span className="info-text">
                  LinkedIn
                </span>
              </a>


              {/* TWITTER / X */}
              <a
                href="https://x.com/pprachh11"
                target="_blank"
                rel="noopener noreferrer"
                className="info-row"
              >
                <span className="info-icon">
                  <FaTwitter />
                </span>

                <span className="info-text">
                  Twitter / X
                </span>
              </a>


              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/prachiichii"
                target="_blank"
                rel="noopener noreferrer"
                className="info-row"
              >
                <span className="info-icon">
                  <FaInstagram />
                </span>

                <span className="info-text">
                  Instagram
                </span>
              </a>


              {/* RESUME */}
              <a
                href="https://drive.google.com/file/d/1uY5QRYcIWPSgYVtNwyEO9PJE5BK1svGZ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="info-row"
              >
                <span className="info-icon">
                  <FaFileAlt />
                </span>

                <span className="info-text">
                  View Resume
                </span>
              </a>

            </div>
          </div>


          <div className="form-area">

            <h1>
              Send me a Message
            </h1>

            <form
              className="contact-form"
              onSubmit={handleFormSubmit}
            >

              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Your Name"
                required
              />


              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Your Email"
                required
              />


              <textarea
                name="message"
                className="form-textarea"
                placeholder="Please type your message here...."
                required
              />


              {error && (
                <p className="form-error">
                  {error}
                </p>
              )}


              <button
                type="submit"
                className="send-btn"
                disabled={isSending}
              >
                {isSending ? "SENDING..." : "SEND"}
              </button>

            </form>

          </div>

        </div>

      </section>
    </main>
  );
}
