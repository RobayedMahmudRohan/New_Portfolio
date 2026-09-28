import Section from './Section'

const links = [
  {
    label: 'GitHub',
    href: 'https://github.com/RobayedMahmudRohan',
    text: 'RobayedMahmudRohan',
    icon: 'M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.09 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05.8-.23 1.65-.35 2.5-.35s1.7.12 2.5.35c1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.02 1.64 1.02 2.76 0 3.96-2.34 4.83-4.57 5.09.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/robayed-mahmud-rohan-5910202b9/',
    text: 'Robayed Mahmud Rohan',
    icon: 'M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.8-2.2 3.7-2.2 4 0 4.7 2.6 4.7 6V24h-4v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V24h-4V8z',
  },
  {
    label: 'Email',
    href: 'mailto:robayedrohan19@gmail.com',
    text: 'robayedrohan19@gmail.com',
    icon: 'M12 13.5 2 6.75V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.75L12 13.5zM12 11 22 4H2l10 7z',
  },
  {
    label: 'ORCID',
    href: 'https://orcid.org/0009-0008-5044-0940',
    text: '0009-0008-5044-0940',
    icon: 'M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zM7.37 17.5H5.93V7.46h1.44V17.5zM6.65 6.47a.95.95 0 1 1 0-1.9.95.95 0 0 1 0 1.9zM10.2 7.46h3.9c3.7 0 5.33 2.65 5.33 5.02 0 2.58-2.01 5.02-5.31 5.02H10.2V7.46zm1.44 1.3v7.44h2.3c3.26 0 4.01-2.48 4.01-3.72 0-2.02-1.29-3.72-4.1-3.72h-2.2z',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/robayed.mahmud/',
    text: 'Robayed Mahmud',
    icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
]

function Links() {
  return (
    <Section id="links" title="Links" hint="Find me online">
      <ul className="socials">
        {links.map((link) => {
          const external = link.href.startsWith('http')
          return (
            <li key={link.label}>
              <a
                href={link.href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={link.icon} />
                </svg>
                <span className="visually-hidden">{link.label}: </span>
                {link.text}
              </a>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}

export default Links
