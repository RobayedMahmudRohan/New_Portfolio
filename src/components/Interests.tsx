import Section from './Section'

const interestGroups = [
  {
    title: 'Technical Interests',
    icon: '💻',
    items: [
      { icon: '🧩', label: 'Problem-solving' },
      { icon: '⛓️', label: 'Blockchain' },
      { icon: '🌊', label: 'Streaming Data' },
      { icon: '🛠️', label: 'Developer Tooling' },
      { icon: '👨‍🏫', label: 'Teaching & Mentoring' },
      { icon: '🤖', label: 'IoT Devices' },
      { icon: '⚡', label: 'Circuit Simulations' },
    ],
  },
  {
    title: 'Personal Interests',
    icon: '🎯',
    items: [
      { icon: '⚽', label: 'Football' },
      { icon: '♟️', label: 'Chess' },
      { icon: '📚', label: 'Reading' },
    ],
  },
]

function Interests() {
  return (
    <Section id="interests" title="Interests" hint="What keeps me curious">
      <div className="cards">
        {interestGroups.map((group) => (
          <div key={group.title} className="card">
            <h3>
              <span aria-hidden="true">{group.icon}</span> {group.title}
            </h3>
            <ul className="interest-list">
              {group.items.map((item) => (
                <li key={item.label} className="interest-item">
                  <span className="interest-item__icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Interests
