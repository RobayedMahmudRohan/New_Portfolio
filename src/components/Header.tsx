import { useEffect, useRef, useState } from 'react'

type Theme = 'light' | 'dark'

const navLinks = [
  { id: 'intro', label: 'Intro' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'publications', label: 'Publications' },
  { id: 'recognitions', label: 'Recognitions' },
  { id: 'skills', label: 'Skills' },
  { id: 'interests', label: 'Interests' },
  { id: 'links', label: 'Links' },
]

function getInitialTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState(navLinks[0].id)
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const headerRef = useRef<HTMLElement>(null)

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Storage can be unavailable (private mode); the theme still applies.
    }
  }, [theme])

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => section !== null)

    // A thin band across the upper middle of the viewport decides which
    // section counts as "current".
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      { rootMargin: '-35% 0px -60% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu()
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) closeMenu()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <header className="site-header" ref={headerRef}>
      <div className="site-header__inner">
        <a href="#intro" className="logo" onClick={closeMenu}>
          <img
            src="/images/rmr-logo.png"
            alt="Robayed Mahmud Rohan, back to top"
            width="36"
            height="36"
          />
        </a>
        <nav
          id="primary-navigation"
          className={`primary-nav ${isMenuOpen ? 'primary-nav--open' : ''}`}
          aria-label="Primary"
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={activeId === link.id ? 'is-active' : undefined}
                  aria-current={activeId === link.id ? 'true' : undefined}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="site-header__actions">
          <button
            type="button"
            className="button button--small"
            aria-label={`Switch to ${nextTheme} theme`}
            onClick={() => setTheme(nextTheme)}
          >
            <span aria-hidden="true">🌓</span> Theme
          </button>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="visually-hidden">
              {isMenuOpen ? 'Close menu' : 'Open menu'}
            </span>
            <span className="nav-toggle__bar" aria-hidden="true"></span>
            <span className="nav-toggle__bar" aria-hidden="true"></span>
            <span className="nav-toggle__bar" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
