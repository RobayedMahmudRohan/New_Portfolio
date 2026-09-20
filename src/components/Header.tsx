import { useEffect, useRef, useState } from 'react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  const closeMenu = () => setIsMenuOpen(false)

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

  return (
    <header className="site-header" ref={headerRef}>
      <div className="site-header__inner">
        <a href="#hero" className="logo" onClick={closeMenu}>
          Robayed Mahmud Rohan
        </a>
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
        <nav
          id="primary-navigation"
          className={`primary-nav ${isMenuOpen ? 'primary-nav--open' : ''}`}
          aria-label="Primary"
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
