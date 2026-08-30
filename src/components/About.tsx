import React from "react";

const About: React.FC = () => {
  return (
    <main className="about-page">
      <section id="about" className="about-wrap">

        {/* Left candid / night photo */}
        <div className="side-photo">
          <img
            src="/images/candid.png"
            alt="Candid portrait"
          />

          <div className="photo-note side-photo-note">
            <span>24 hrs. no sleep. just vibes + code 😭💻</span>
          </div>
        </div>

        {/* Decorative star */}
        <div className="star" aria-hidden="true">
          ✦
        </div>

        {/* Heading */}
        <h1 className="heading">about me!</h1>

        {/* About text */}
        <div className="note">
          <p>Hey! I'm Prachi :)</p>

          <p>
            welcome to the part of the website where i'm supposed to talk
            about myself. i'm a multidisciplinary creative who loves making
            things that feel playful and nostalgic. i like to think of myself
            as a jack of all trades [and a master of... none <span>:(</span> ].
          </p>

          <p>
            i love building things that are useful, thoughtful, and easy to use.
            most of my work lives somewhere between frontend and backend development -
            from creating responsive interfaces with React and Next.js to building APIs,
            working with databases, and making sure everything works smoothly behind
            the scenes.
          </p>

          <p>
            i graduated this year with a degree in computer applications, and i'm
            hoping to keep growing as a developer, building products that are enjoyable
            to use. my usual toolkit revolves around the MERN and PERN stacks. i also
            enjoy exploring new tools and technologies whenever a project gives me a
            reason to learn something new.
          </p>

          <p>
            thanks for clicking around, and i hope you have fun exploring my site!
          </p>
        </div>

        {/* Filmstrip */}
        <div className="strip-wrap">
          <div className="strip">

            {/* Hackathon video presentation */}
            <div className="strip-photo">
              <img
                src="/images/strip1.jpeg"
                alt="Preparing for a hackathon video presentation"
              />

              <div className="photo-note strip-note">
                <span>me rehearsing the hackathon pitch like it's the grammys 😭🎥</span>
              </div>
            </div>

            {/* Tech event */}
            <div className="strip-photo">
              <img
                src="/images/strip2.jpeg"
                alt="Attending a tech event"
              />

              <div className="photo-note strip-note">
                <span>just casually collecting tech events like they're pokemon :)</span>
              </div>
            </div>

            {/* Winning certificate */}
            <div className="strip-photo">
              <img
                src="/images/strip3.jpeg"
                alt="Winning certificate at a hackathon"
              />

              <div className="photo-note strip-note">
                <span>proof that the sleep deprivation was kinda worth it 🏆</span>
              </div>
            </div>

            {/* Pretty photo */}
            <div className="strip-photo">
              <img
                src="/images/strip4.jpeg"
                alt="Portrait"
              />

              <div className="photo-note strip-note">
                <span>no context. just me being pretty &lt;3</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default About;