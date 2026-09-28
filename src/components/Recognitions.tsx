import Section from './Section'

function Recognitions() {
  return (
    <Section
      id="recognitions"
      title="Recognitions"
      hint="Awards, projects, and publications reflecting my work"
      className="recognitions"
    >
      <ul className="recognition-list">
        <li>
          <strong>4+ Awards</strong> including <em>Dean's Listed Award</em>
        </li>
        <li>
          <strong>8 Projects Completed</strong> showcasing backend development,
          APIs, and databases
        </li>
        <li>
          <strong>3 Publications</strong> on <em>Blockchain</em>,{' '}
          <em>IoMT Devices</em>, and <em>Sports Biomechanics</em>
        </li>
      </ul>
    </Section>
  )
}

export default Recognitions
