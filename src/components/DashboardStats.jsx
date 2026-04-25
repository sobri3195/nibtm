import { useEffect, useState } from 'react'

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

function DashboardStats({ stats }) {
  const progress = stats.totalTopics ? Math.round((stats.learnedTopics / stats.totalTopics) * 100) : 0
  const cards = [
    ['Saved Topics', stats.savedTopics, '↗', 'up'],
    ['Completed Topics', stats.learnedTopics, '↗', 'up'],
    ['Saved Datasets', stats.savedDatasets, '↗', 'up'],
    ['Saved Mentors', stats.savedMentors, '↘', 'down'],
  ]

  return (
    <section className="grid cols-4">
      {cards.map(([title, value, arrow, trend]) => (
        <article key={title} className="card stat-card">
          <div className="icon-pill" aria-hidden>📈</div>
          <h3>{title}</h3>
          <p className="stat-value"><Counter value={value} /></p>
          <p className={`trend ${trend}`}>{arrow} 12%</p>
        </article>
      ))}
      <article className="card col-span">
        <h3>Progress Belajar</h3>
        <div className="progress-bar"><div style={{ width: `${progress}%` }} /></div>
        <p className="body-text">{progress}% topik selesai dipelajari</p>
      </article>
    </section>
  )
}

export default DashboardStats
