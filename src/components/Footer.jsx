import Brand from './Brand.jsx'

const anchorMap = {
  Home: 'home',
  Technologies: 'technologies',
  Projects: 'projects',
  About: 'about',
  Contact: 'contact',
  Careers: 'contact',
  'Privacy Policy': 'privacy',
  'Terms of Service': 'terms',
}

const footerGroups = [
  { title: 'Product', links: ['Home', 'Technologies', 'Projects'] },
  { title: 'Company', links: ['About', 'Contact', 'Careers'] },
  { title: 'Legal', links: ['Privacy Policy', 'Terms of Service'] },
]

function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Brand />
          <p>Curated tools, technologies, and resources for developers building modern software.</p>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
        {footerGroups.map((group) => (
          <div className="footer-group" key={group.title}>
            <h3>{group.title}</h3>
            {group.links.map((link) => (
              <a href={`#${anchorMap[link] ?? 'home'}`} key={link}>
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="container footer-bottom" id="contact">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div>
          <a href="#privacy" id="privacy">
            Privacy
          </a>
          <a href="#terms" id="terms">
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
