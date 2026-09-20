function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Introduction">
      <div className="hero__avatar" aria-hidden="true">
        RR
      </div>
      <h1>Robayed Mahmud Rohan</h1>
      <p className="hero__role">Junior Front-End / Full-Stack Developer</p>
      <p className="hero__tagline">
        Building clean, functional web applications with React, TypeScript,
        and modern tools.
      </p>
      <div className="hero__actions">
        <a href="#projects" className="button button--primary">
          View Projects
        </a>
        <a href="#contact" className="button button--secondary">
          Contact Me
        </a>
      </div>
    </section>
  )
}

export default Hero
