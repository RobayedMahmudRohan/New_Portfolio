const profile = {
  role: 'Full-Stack Developer',
  stack: ['React', 'TypeScript', 'Node.js', 'NestJS', 'PostgreSQL'],
  interests: ['Problem-solving', 'Blockchain', 'VANET', 'IoT devices'],
  email: 'robayedrohan19@gmail.com',
}

function Hero() {
  return (
    <section id="intro" className="hero" aria-labelledby="intro-heading">
      <div className="hero__card">
        <div>
          <img
            className="hero__photo"
            src="/images/rohan-profile.jpg"
            alt="Portrait of Robayed Mahmud Rohan"
            width="112"
            height="112"
          />
          <h1 id="intro-heading">
            Hello, I'm <span className="hero__name">Robayed Mahmud Rohan</span>{' '}
            <span aria-hidden="true">👋</span>
          </h1>
          <p className="hero__text">
            I enjoy building and maintaining RESTful APIs, working with
            databases, and writing clean, efficient code. I'm a quick learner
            with strong problem-solving and teamwork skills, and I'm always
            eager to explore new tools and technologies. My goal is to
            contribute value to a development team while growing my skills as a
            professional.
          </p>
          <div className="hero__actions">
            <a href="#projects" className="button button--primary">
              View Projects
            </a>
            <a
              href="/Robayed-Mahmud-Rohan-Resume.pdf"
              className="button"
              download
            >
              <span aria-hidden="true">⬇</span> Resume
            </a>
            <a href="#links" className="button">
              Connect
            </a>
          </div>
          <p className="hero__note">Open to full-time &amp; freelance</p>
        </div>
        <pre className="hero__code" aria-label="Profile snippet">
          <code>{JSON.stringify(profile, null, 2)}</code>
        </pre>
      </div>
    </section>
  )
}

export default Hero
