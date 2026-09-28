import { skillGroups } from '../data/skills'
import Section from './Section'

function Skills() {
  return (
    <Section id="skills" title="Skills" hint="Core backend & full-stack toolkit">
      <div className="cards">
        {skillGroups.map((group) => (
          <div key={group.title} className="card">
            <h3>{group.title}</h3>
            <ul className="tags">
              {group.skills.map((skill) => (
                <li key={skill} className="tag">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Skills
