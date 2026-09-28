import { education } from '../data/education'
import Section from './Section'

function Education() {
  return (
    <Section id="education" title="Educational Qualification" hint="Formal background">
      <ul className="cards">
        {education.map((item) => (
          <li key={item.degree} className="card">
            <h3>{item.degree}</h3>
            <p className="card__meta">
              {item.institution} • {item.period}
            </p>
            <p>{item.result}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Education
