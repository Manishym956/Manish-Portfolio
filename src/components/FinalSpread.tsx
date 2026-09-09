import { experience, profile } from '../data/profile'

export default function FinalSpread() {
  return (
    <section id="final-spread" className="final-spread chapter">
      <header className="chapter__header">
        <span className="chapter__num">07</span>
        <h2 className="chapter__title">FINAL SPREAD: RECRUIT MANISH TO YOUR ARMADA</h2>
        <span className="chapter__jp">最終章</span>
      </header>

      <div className="final-spread__grid">
        <div className="final-spread__recruit panel">
          <h3>Submit to Crew</h3>
          <form
            className="recruit-form"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <label>
              Name
              <input type="text" name="name" placeholder="Captain's name" />
            </label>
            <label>
              Message
              <textarea name="message" rows={4} placeholder="Describe your mission..." />
            </label>
            <button type="submit" className="btn-manga">
              Submit to Armada
            </button>
          </form>
        </div>

        <div className="final-spread__shipping">
          <article className="panel shipping-box">
            <h3>Shipping Info</h3>
            <ul className="shipping-list">
              <li>
                <span>GitHub</span>
                <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
                  @Manishym956
                </a>
              </li>
              <li>
                <span>LinkedIn</span>
                <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
                  manish-y-m
                </a>
              </li>
              <li>
                <span>LeetCode</span>
                <a href={profile.links.leetcode} target="_blank" rel="noopener noreferrer">
                  Manishym956
                </a>
              </li>
            </ul>

            <div className="shipping-experience">
              <p className="panel__title">Recent Crews</p>
              {experience.map((job) => (
                <p key={job.company}>
                  <strong>{job.role}</strong> — {job.company} ({job.period})
                </p>
              ))}
            </div>
          </article>

          <div className="final-spread__dramatic halftone-dark">
            <p className="final-spread__onepiece">THE ONE PIECE</p>
            <p className="final-spread__real">IS REAL!</p>
          </div>
        </div>
      </div>
    </section>
  )
}
