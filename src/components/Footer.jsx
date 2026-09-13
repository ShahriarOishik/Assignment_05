import Brand from './Brand.jsx'

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
            <a href="https://github.com">GitHub</a>
            <a href="https://twitter.com">Twitter</a>
            <a href="https://linkedin.com">LinkedIn</a>
          </div>
        </div>
        {footerGroups.map((group) => (
          <div className="footer-group" key={group.title}>
            <h3>{group.title}</h3>
            {group.links.map((link) => <a href="#home" key={link}>{link}</a>)}
          </div>
        ))}
      </div>
      <div className="container footer-bottom">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div><a href="#privacy">Privacy</a><a href="#terms">Terms</a></div>
      </div>
    </footer>
  )
}

export default Footer
