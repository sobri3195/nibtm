import { ArrowRight, Sparkles } from './icons'

function Hero({ workflowPercent }) {
  return (
    <section className="hero" id="home">
      <div className="hero-grid-overlay" aria-hidden />
      <div className="hero-content glass-panel">
        <p className="chip"><Sparkles /> Future Biomedical Education Platform</p>
        <h1 className="heading-xl">
          <span>NIBM 7.0</span>
          <small>Biotech Futuristic Learning System</small>
        </h1>
        <p className="body-text">Dari fondasi biologi hingga AI + IoT untuk riset translasi klinis, dalam satu platform premium yang imersif.</p>
        <div className="hero-actions">
          <a className="btn-primary" href="#paths">Start Learning <ArrowRight /></a>
          <a className="btn-secondary" href="#topics">Explore Topics</a>
        </div>
      </div>

      <div className="hero-progress-card glass-panel" aria-label="Overall learning progress">
        <div className="progress-label">
          <span>Journey Progress</span>
          <strong>{workflowPercent}%</strong>
        </div>
        <div className="progress-bar glow"><div style={{ width: `${workflowPercent}%` }} /></div>
      </div>

      <div className="hero-blobs" aria-hidden>
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
      </div>
    </section>
  )
}

export default Hero
