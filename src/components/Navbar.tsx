import { navLinks, profile } from '../data/profile'

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="navbar">
      <div className="navbar__utility">
        <span>BENGALURU · GRAND LINE HQ</span>
        <div className="navbar__social">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="navbar__main">
        <button className="navbar__logo" onClick={() => scrollTo('hero')}>
          <span className="navbar__logo-text">MANISH Y M</span>
          <span className="navbar__logo-sub">DEVELOPER BOUNTY FILE</span>
        </button>

        <nav className="navbar__nav" aria-label="Primary">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => scrollTo(link.id)} className="navbar__link">
              {link.label}
            </button>
          ))}
        </nav>

        <div className="navbar__jolly" aria-hidden="true">
          ☠
        </div>
      </div>
    </header>
  )
}
