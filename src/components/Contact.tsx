const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:robayedrohan19@gmail.com',
    text: 'robayedrohan19@gmail.com',
    external: false,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/RobayedMahmudRohan',
    text: 'github.com/RobayedMahmudRohan',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/robayed-mahmud-rohan-5910202b9/',
    text: 'linkedin.com/in/robayed-mahmud-rohan-5910202b9',
    external: true,
  },
  {
    label: 'ORCID',
    href: 'https://orcid.org/0009-0008-5044-0940',
    text: 'orcid.org/0009-0008-5044-0940',
    external: true,
  },
]

function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Contact</h2>
      <p>Feel free to reach out through any of the channels below.</p>
      <ul className="contact__list">
        {contactLinks.map((link) => (
          <li key={link.label}>
            <span className="contact__label">{link.label}</span>
            <a
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Contact
