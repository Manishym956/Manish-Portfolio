import { heroPanels, profile } from '../data/profile'

export default function Hero() {
  return (
    <section id="hero" className="hero chapter">
      <header className="chapter__header">
        <span className="chapter__num">01</span>
        <h2 className="chapter__title">THE WANTED POSTER</h2>
        <span className="chapter__jp">懸賞金</span>
      </header>

      <div className="hero__showcase">
        <div className="hero__panels hero__panels--left">
          {heroPanels.left.map((panel) => (
            <figure key={panel.src} className="hero__panel">
              <img src={panel.src} alt={panel.alt} loading="lazy" />
            </figure>
          ))}
        </div>

        <div className="hero__poster-block">
          <div className="wanted-frame">
            <img
              src={profile.wantedPoster}
              alt={`Wanted poster — ${profile.name}, bounty ${profile.bounty} Berries`}
              className="wanted-frame__img"
            />
          </div>
          <p className="hero__bounty-caption">DEAD OR ALIVE · ฿ {profile.bounty}</p>
          <blockquote className="hero__quote">
            <p>
              {profile.quote.lead} <strong>{profile.quote.name}</strong>.
            </p>
          </blockquote>
        </div>

        <div className="hero__panels hero__panels--right">
          {heroPanels.right.map((panel) => (
            <figure key={panel.src} className="hero__panel">
              <img src={panel.src} alt={panel.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>

      <div className="hero__actions">
        <a href="#final-spread" className="btn-manga">
          Get In Touch
        </a>
        <a href={profile.resume} download="ManishYM-Resume.pdf" className="btn-manga outline">
          Download CV
        </a>
      </div>
    </section>
  )
}
