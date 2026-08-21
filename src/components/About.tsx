import React from "react";

const About: React.FC = () => {
  return (
<main className="about-page">
  <section
    id="about"
    className="about-wrap"
    data-section="about"
    data-bg="#f7edc8"
  >        {/* Left candid / night photo */}
        <div className="side-photo">
          <img
            src="https://placehold.co/300x320/2b2b2b/e8b4bc?text=Your+Candid+Photo"
            alt="Candid portrait"
          />
        </div>

        {/* Decorative star */}
        <div className="star" aria-hidden="true">
          ✦
        </div>

        {/* Heading */}
        <h1 className="heading">about me!</h1>

        {/* About text */}
        <div className="note">
          <p>Hey! I'm Tia :)</p>

          <p>
            welcome to the part of the website where i'm supposed to talk
            about myself. i'm a multidisciplinary creative who loves making
            things that feel playful and nostalgic. i like to think of myself
            as a jack of all trades (and a master of... some).
          </p>

          <p>
            i love illustrating, animating, designing, filming, video editing,
            and now even 3D design. i graduated this year with a degree in
            English and Media Studies, and i'm hoping to end up working in
            video games, film, and making memorable campaigns one day.
          </p>

          <p>
            the software i use includes (but isn't limited to) Procreate,
            Procreate Dreams, Photoshop, Illustrator, After Effects, DaVinci
            Resolve, and Blender.
          </p>

          <p>i'm here to make cool things with cool people, so hit me up.</p>

          <p>
            thanks for clicking around, and i hope you have fun exploring my
            site!
          </p>
        </div>

        
        {/* Filmstrip */}
        <div className="strip-wrap">
          <div className="strip">
            <img
              src="https://placehold.co/210x140/eee/999?text=1"
              alt="Filmstrip photo 1"
            />
            <img
              src="https://placehold.co/210x140/eee/999?text=2"
              alt="Filmstrip photo 2"
            />
            <img
              src="https://placehold.co/210x140/eee/999?text=3"
              alt="Filmstrip photo 3"
            />
            <img
              src="https://placehold.co/210x140/eee/999?text=4"
              alt="Filmstrip photo 4"
            />
            <img
              src="https://placehold.co/210x140/eee/999?text=5"
              alt="Filmstrip photo 5"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;