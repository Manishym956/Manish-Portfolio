import { navLinks } from '../data/profile'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__continued panel">
        <p className="site-footer__to-be">TO BE CONTINUED...</p>
        <p className="site-footer__next">NEXT ARC →</p>
      </div>

      <div className="site-footer__links">
        {navLinks.map((link) => (
          <a key={link.id} href={`#${link.id === 'prologue' ? 'prologue' : link.id}`}>
            {link.label}
          </a>
        ))}
      </div>

      <p className="site-footer__copy">© {new Date().getFullYear()} Manish Y M · All panels reserved</p>
    </footer>
  )
}
