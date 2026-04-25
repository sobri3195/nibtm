import { memo } from 'react'
import { ArrowRight, Atom, Brain, Database, Dna, Heart, Microscope } from './icons'

const statusClass = {
  Completed: 'status completed',
  'In Progress': 'status progress',
  'Not Started': 'status idle',
}

const iconByCategory = {
  Biology: Dna,
  Technology: Microscope,
  AI: Brain,
  Medicine: Atom,
  Research: Database,
}

function TopicCard({ topic, isSaved, status, onSave, onLearn }) {
  const Icon = iconByCategory[topic.category] || Dna
  const cta = status === 'Completed' ? 'Review' : status === 'In Progress' ? 'Continue' : 'Start'

  return (
    <article
      className="topic-card card"
      tabIndex={0}
      role="button"
      aria-label={`${topic.title} - ${status}`}
      onKeyDown={(event) => {
        if (event.key === 'Enter') onLearn(topic.id)
      }}
    >
      <span className={statusClass[status]}>{status}</span>
      <button className={`save-icon ${isSaved ? 'saved' : ''}`} aria-label={isSaved ? 'Remove bookmark' : 'Bookmark topic'} onClick={() => onSave(topic.id)}>
        <Heart />
      </button>
      <div className="thumb topic-thumb" aria-hidden><Icon /></div>
      <h3>{topic.title}</h3>
      <p className="body-text">{topic.description}</p>
      <div className="tags compact">
        <span className="tag dot-tag"><span className="dot" />{topic.level}</span>
        <span className="tag accent dot-tag"><span className="dot" />{topic.category}</span>
      </div>
      <div className="card-overlay-action">
        <button className="btn-primary full" onClick={() => onLearn(topic.id)}>{cta} <ArrowRight /></button>
      </div>
    </article>
  )
}

export default memo(TopicCard)
