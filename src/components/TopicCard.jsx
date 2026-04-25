import { memo } from 'react'

const levelClass = {
  Beginner: 'badge beginner',
  Intermediate: 'badge intermediate',
  Advanced: 'badge advanced',
}

function TopicCard({ topic, isSaved, isLearned, onSave, onLearn }) {
  return (
    <article className="topic-card card">
      <div className="thumb" aria-hidden>🧬</div>
      <h3>{topic.title}</h3>
      <p className="body-text">{topic.description}</p>
      <div className="meta-row">
        <span className={levelClass[topic.level] || 'badge'}>{topic.level}</span>
        <span className="badge">{topic.category}</span>
      </div>
      <div className="actions">
        <button className="btn-primary" onClick={() => onSave(topic.id)}>{isSaved ? 'Bookmarked' : 'Bookmark'}</button>
        <button className="btn-secondary" onClick={() => onLearn(topic.id)}>{isLearned ? 'Completed' : 'Mark Complete'}</button>
      </div>
    </article>
  )
}

export default memo(TopicCard)
