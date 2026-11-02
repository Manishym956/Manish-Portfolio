import { flagshipProjects } from '../data/profile'

function LineChart({ data, label }: { data: number[]; label: string }) {
  const max = Math.max(...data)
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * 100
      const y = 100 - (v / max) * 80
      return `${x},${y}`
    })
    .join(' ')

  return (
    <div className="project-chart">
      <p className="project-chart__label">{label}</p>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="project-chart__svg">
        <polyline points={points} fill="none" stroke="currentColor" strokeWidth="2" />
        {data.map((v, i) => {
          const x = (i / (data.length - 1)) * 100
          const y = 100 - (v / max) * 80
          return <circle key={i} cx={x} cy={y} r="2.5" fill="currentColor" />
        })}
      </svg>
    </div>
  )
}

function NodeFlow({ nodes }: { nodes: string[] }) {
  return (
    <div className="node-flow">
      <p className="project-chart__label">Node Connection</p>
      <div className="node-flow__diagram">
        {nodes.map((node, i) => (
          <div key={node} className="node-flow__item">
            <span className="node-flow__node">{node}</span>
            {i < nodes.length - 1 && <span className="node-flow__arrow">→</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Adventures() {
  return (
    <section id="adventures" className="adventures chapter">
      <header className="chapter__header">
        <span className="chapter__num">05</span>
        <h2 className="chapter__title">ADVENTURES: THE FLAGSHIP REPOSITORIES</h2>
        <span className="chapter__jp">冒険</span>
      </header>

      <div className="adventures__list">
        {flagshipProjects.map((project, index) => (
          <article key={project.codename} className="panel adventure-card">
            <div className="adventure-card__text">
              <p className="adventure-card__index">{String(index + 1).padStart(2, '0')}</p>
              <h3>
                {project.codename} <span>// {project.subtitle}</span>
              </h3>
              {project.status && <p className="adventure-card__status">⚠ {project.status}</p>}
              <div className="speech-bubble speech-bubble--small">
                <p>{project.description}</p>
              </div>
              <ul className="adventure-card__tech">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="adventure-card__actions">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-manga">
                  Check GitHub
                </a>
                {project.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-manga outline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            <div className="adventure-card__viz panel">
              {'chartData' in project && project.chartData && (
                <LineChart data={project.chartData} label={project.chartLabel ?? 'Metrics'} />
              )}
              {'nodes' in project && project.nodes && <NodeFlow nodes={project.nodes} />}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
