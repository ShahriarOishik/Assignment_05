import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Brand from './Brand.jsx'

const navLinks = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useRef(null)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    if (!isMenuOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    const handlePointerDown = (event) => {
      if (!navRef.current?.contains(event.target)) setIsMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [isMenuOpen])

  return (
    <header className="navbar">
      <nav className="container navbar-inner" aria-label="Main navigation" ref={navRef}>
        <button
          className="menu-trigger"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          ref={menuButtonRef}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <a className="desktop-brand" href="#home" aria-label="Dev Stack home">
          <Brand />
        </a>
        <a className="mobile-brand" href="#home" aria-label="Dev Stack home">
          <Brand compact />
        </a>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                className={link === 'Home' ? 'active' : ''}
                href={`#${link.toLowerCase()}`}
                aria-current={link === 'Home' ? 'page' : undefined}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="auth-actions">
          <button className="sign-in" type="button">Sign In</button>
          <button className="primary-pill" type="button">Sign Up</button>
        </div>

        <ul className="mobile-menu" id="mobile-navigation" hidden={!isMenuOpen}>
          {navLinks.map((link) => (
            <li key={link}>
              <a
                className={link === 'Home' ? 'active' : ''}
                href={`#${link.toLowerCase()}`}
                aria-current={link === 'Home' ? 'page' : undefined}
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
