import { Menu } from 'lucide-react'
import Brand from './Brand.jsx'

const navLinks = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

function Navbar() {
  return (
    <header className="navbar">
      <nav className="container navbar-inner" aria-label="Main navigation">
        <button className="menu-trigger" type="button" aria-label="Open navigation menu">
          <Menu size={22} />
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
              <a className={link === 'Home' ? 'active' : ''} href={`#${link.toLowerCase()}`}>
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="auth-actions">
          <button className="sign-in" type="button">Sign In</button>
          <button className="primary-pill" type="button">Sign Up</button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
