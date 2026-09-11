import { battles } from '../data/profile'

export default function Battles() {
  return (
    <section id="battles" className="battles chapter">
      <header className="chapter__header">
        <span className="chapter__num">06</span>
        <h2 className="chapter__title">BATTLES &amp; SHIPWRECK LESSONS (POST-MORTEMS)</h2>
        <span className="chapter__jp">戦闘記録</span>
      </header>

      <div className="battles__grid">
        {battles.map((battle) => (
          <article key={battle.title} className="panel battle-card">
            <div className="battle-card__meta">
              <span className="battle-card__tag">{battle.tag}</span>
              <span className="battle-card__date">{battle.date}</span>
            </div>
            <h3 className="battle-card__title">{battle.title}</h3>
            <p className="battle-card__excerpt">{battle.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
