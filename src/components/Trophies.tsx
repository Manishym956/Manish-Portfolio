import { achievements } from '../data/profile'

export default function Trophies() {
  return (
    <section id="trophies" className="trophies chapter">
      <header className="chapter__header">
        <span className="chapter__num">07</span>
        <h2 className="chapter__title">TROPHIES: VICTORIES ON THE GRAND LINE</h2>
        <span className="chapter__jp">戦利品</span>
      </header>

      <div className="trophies__grid">
        {achievements.map((a) => (
          <article key={a.title} className="panel battle-card">
            <div className="battle-card__meta">
              <span className="battle-card__tag">{a.rank}</span>
            </div>
            <h3 className="battle-card__title">{a.title}</h3>
            <p className="battle-card__excerpt">{a.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
