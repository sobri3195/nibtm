function Hero({ workflowPercent }) {
  return (
    <section className="hero card" id="home">
      <div className="hero-content">
        <p className="chip">Future Biomedical Education Platform</p>
        <h1 className="heading-xl">NIBM 7.0 Biomedical Learning Experience</h1>
        <p className="body-text">Dari fondasi biologi hingga AI + IoT untuk riset translasi klinis, dalam satu platform modern.</p>
        <div className="hero-actions">
          <a className="btn-primary" href="#paths">Start Learning</a>
          <a className="btn-secondary" href="#topics">Explore Topics</a>
        </div>
        <div className="progress-wrap" aria-label="Overall learning progress">
          <div className="progress-label">
            <span>Journey Progress</span>
            <strong>{workflowPercent}%</strong>
          </div>
          <div className="progress-bar"><div style={{ width: `${workflowPercent}%` }} /></div>
        </div>
      </div>
      <div className="hero-visual" aria-hidden>
        <div className="float orb orb-1" />
        <div className="float orb orb-2" />
        <svg viewBox="0 0 300 220" role="img" aria-label="Biomedical illustration">
          <circle cx="70" cy="110" r="45" fill="rgba(255,255,255,.25)" />
          <circle cx="160" cy="80" r="28" fill="rgba(255,255,255,.3)" />
          <circle cx="220" cy="140" r="50" fill="rgba(6,182,212,.35)" />
          <path d="M30 170 C 100 70, 190 210, 270 100" stroke="white" strokeWidth="5" fill="none" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
