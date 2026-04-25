import { useEffect, useState } from 'react'
import { BarChart, TrendUp } from './icons'

function Counter({ value }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let frame
    const duration = 700
    const start = performance.now()
    const animate = (t) => {
      const p = Math.min((t - start) / duration, 1)
      setCount(Math.round(value * p))
      if (p < 1) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [value])
  return <span>{count}</span>
}

function StatCard({ title, value, ring = 0 }) {
  return (
    <article className="card stat-card">
      <div className="stat-head">
        <h3>{title}</h3>
        <span className="trend up"><TrendUp /> 12%</span>
      </div>
      <p className="stat-value"><Counter value={value} /></p>
      <div className="ring" style={{ '--pct': `${ring}%` }}>
        <span>{ring}%</span>
      </div>
    </article>
  )
}

function DashboardStats({ stats }) {
  const progress = stats.totalTopics ? Math.round((stats.learnedTopics / stats.totalTopics) * 100) : 0
  const cards = [
    ['Saved Topics', stats.savedTopics, Math.min(stats.savedTopics * 10, 100)],
    ['Completed Topics', stats.learnedTopics, progress],
    ['Saved Datasets', stats.savedDatasets, Math.min(stats.savedDatasets * 9, 100)],
    ['Saved Mentors', stats.savedMentors, Math.min(stats.savedMentors * 20, 100)],
  ]

  return (
    <section className="grid cols-4">
      {cards.map(([title, value, ring]) => <StatCard key={title} title={title} value={value} ring={ring} />)}
      <article className="card col-span glow-bar-card">
        <div className="stat-head">
          <h3>Progress Belajar</h3>
          <span className="icon-pill"><BarChart /></span>
        </div>
        <div className="progress-bar glow"><div style={{ width: `${progress}%` }} /></div>
        <p className="body-text">{progress}% topik selesai dipelajari</p>
      </article>
    </section>
  )
}

export default DashboardStats
