import { memo } from 'react'
import { ArrowRight, Brain, Database, Dna, Microscope } from './icons'

const levelClass = {
  Beginner: 'badge beginner',
  Intermediate: 'badge intermediate',
  Advanced: 'badge advanced',
}

const iconByCategory = {
  Biology: Dna,
  Technology: Microscope,
  AI: Brain,
  Medicine: Microscope,
  Research: Database,
}

function TopicCard({ topic, isSaved, isLearned, onSave, onLearn }) {
  const Icon = iconByCategory[topic.category] || Dna

  return (
    <article className="topic-card card">
      <div className="thumb" aria-hidden><Icon /></div>
      <h3>{topic.title}</h3>
      <p className="body-text">{topic.description}</p>
      <div className="meta-row">
        <span className={levelClass[topic.level] || 'badge'}>{topic.level}</span>
        <span className="badge category">{topic.category}</span>
      </div>
      <div className="actions stacked">
        <button className="btn-primary full" onClick={() => onLearn(topic.id)}>{isLearned ? 'Completed' : 'Start Learning'} <ArrowRight /></button>
        <button className="btn-secondary full" onClick={() => onSave(topic.id)}>{isSaved ? 'Bookmarked' : 'Save Topic'}</button>
      </div>
    </article>
  )
}

export default memo(TopicCard)
