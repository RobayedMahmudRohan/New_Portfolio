import { skills } from '../data/skills'

function Skills() {
  return (
    <section id="skills" className="skills" aria-labelledby="skills-heading">
      <h2 id="skills-heading">Skills</h2>
      <ul className="skills__list">
        {skills.map((skill) => (
          <li key={skill} className="skills__item">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
