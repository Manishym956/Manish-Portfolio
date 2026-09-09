import { profile } from '../data/profile'

export default function RepoSpread() {
  return (
    <section id="repositories" className="repo-spread chapter">
      <header className="chapter__header">
        <span className="chapter__num">04</span>
        <h2 className="chapter__title">THE REPOSITORIES</h2>
        <span className="chapter__jp">宝</span>
      </header>

      <div className="repo-spread__canvas halftone-dark">
        <div className="repo-spread__panel repo-spread__panel--left">
          <p className="repo-spread__shout">I STILL HAVE MY</p>
          <p className="repo-spread__shout repo-spread__shout--big">CODE REPOSITORIES!</p>
        </div>

        <div className="repo-spread__panel repo-spread__panel--center">
          <div className="repo-spread__stat">
            <span className="repo-spread__stat-num">{profile.stats.repos}</span>
            <span className="repo-spread__stat-label">PUBLIC REPOS</span>
          </div>
        </div>

        <div className="repo-spread__panel repo-spread__panel--right">
          <p className="repo-spread__quote">THE ONE PIECE...</p>
          <p className="repo-spread__quote repo-spread__quote--accent">IS REAL!!</p>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-manga repo-spread__btn"
          >
            View GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
