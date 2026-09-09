import { education, profile, prologuePanels, skillInventory } from '../data/profile'

export default function Prologue() {
  return (
    <section id="prologue" className="prologue chapter">
      <header className="chapter__header">
        <span className="chapter__num">02</span>
        <h2 className="chapter__title">PROLOGUE: FOOSHA VILLAGE &amp; FIRST PRINCIPLES</h2>
        <span className="chapter__jp">序章</span>
      </header>

      <div className="prologue__story">
        {prologuePanels.map((panel) => (
          <figure key={panel.src} className="prologue__panel">
            <img src={panel.src} alt={panel.alt} loading="lazy" />
            <figcaption className="sr-only">{panel.alt}</figcaption>
          </figure>
        ))}
      </div>

      <div className="prologue__content">
        <article className="panel">
          <h3 className="panel__title">Journal Entry</h3>
          <p className="prologue__journal">{profile.journalEntry}</p>
          <p className="prologue__summary">{profile.summary}</p>
        </article>

        <article className="panel">
          <h3 className="panel__title">Skills / Technical Inventory</h3>
          <ul className="skill-inventory">
            {skillInventory.map((skill) => (
              <li key={skill.name} className="skill-inventory__row">
                <span className="skill-inventory__name">{skill.name}</span>
                <div className="skill-inventory__bar">
                  <span style={{ width: `${skill.level}%` }} />
                </div>
                <span className="skill-inventory__level">{skill.level}%</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="panel panel--compact">
          <h3 className="panel__title">Education</h3>
          <p>
            <strong>{education.degree}</strong>
            <br />
            {education.school} · {education.period} · {education.grade}
          </p>
        </article>
      </div>
    </section>
  )
}
