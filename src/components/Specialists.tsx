import { specialists } from '../data/profile'

export default function Specialists() {
  return (
    <section id="navigators" className="specialists chapter">
      <header className="chapter__header">
        <span className="chapter__num">03</span>
        <h2 className="chapter__title">THE SPECIALISTS ON BOARD (TECH STACK)</h2>
        <span className="chapter__jp">船員</span>
      </header>

      <div className="specialists__grid">
        {specialists.map((spec) => (
          <article key={spec.role} className="panel specialist-card">
            <p className="specialist-card__jp">{spec.roleJp}</p>
            <h3 className="specialist-card__role">{spec.role}</h3>
            <p className="specialist-card__desc">{spec.description}</p>
            <div className="specialist-card__tools">
              {spec.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
