import { ArrowRight, Dna, PartyPopper, Sparkles } from './icons'

function Hero({ workflowPercent }) {
  const complete = workflowPercent >= 100

  return (
    <section className="hero w-full max-w-none" id="home">
      <div className="hero-grid-overlay" aria-hidden />
      <div className="hero-vignette" aria-hidden />
      <div className="hero-content glass-panel">
        <p className="chip"><Sparkles /> Future Biomedical Education Platform</p>
        <h1 className="heading-xl">
          <span>NIBM 7.0</span>
          <small>Bioinformatics & Biomedical Intelligence Learning Suite</small>
        </h1>
        <p className="hero-description">Dari fondasi biologi molekuler hingga AI + IoT untuk riset translasi klinis, semua terstruktur dalam satu platform pembelajaran premium yang modern dan imersif.</p>
        <div className="hero-actions">
          <a className="btn-primary" href="#paths">Start Learning <ArrowRight /></a>
          <a className="btn-secondary hero-outline" href="#topics">Explore Topics</a>
        </div>
      </div>

      <div className="hero-illustration" aria-hidden>
        <div className="dna-orbit"><Dna className="dna-icon" /></div>
        <div className="dna-orbit delay"><Dna className="dna-icon" /></div>
      </div>

      <div className="hero-progress-card glass-panel" aria-label="Overall learning progress">
        <div className="progress-label">
          <span>Journey Progress</span>
          <strong>{workflowPercent}%</strong>
        </div>
        <div className="progress-bar glow"><div style={{ width: `${workflowPercent}%` }} /></div>
        <div className="milestones" aria-hidden>{[25, 50, 75, 100].map((m) => <span key={m} className={workflowPercent >= m ? 'done' : ''} />)}</div>
        <div className="meta-row">
          {complete ? <span className="complete"><PartyPopper /> Level Complete!</span> : <span>Keep going to unlock your next level.</span>}
          <span>Next: Advanced Certification</span>
        </div>
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
