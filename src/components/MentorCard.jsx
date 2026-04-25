import { memo } from 'react'

function MentorCard({ mentor, isSaved, onSave }) {
  return (
    <article className="card mentor-card">
      <div className="avatar" aria-hidden>{mentor.name?.[0] || 'M'}</div>
      <h3>{mentor.name}</h3>
      <p className="body-text"><strong>Expertise:</strong> {mentor.expertise}</p>
      <p className="body-text"><strong>Topik:</strong> {mentor.topics}</p>
      <p className="rating" aria-label="rating">⭐ 4.8 (120 review)</p>
      <div className="socials">
        <a href="#" aria-label="LinkedIn profile">in</a>
        <a href="#" aria-label="GitHub profile">gh</a>
        <a href="#" aria-label="Website profile">web</a>
      </div>
      <div className="actions">
        <button className="btn-primary" onClick={() => onSave(mentor.id)}>{isSaved ? 'Saved' : 'Book Session'}</button>
      </div>
    </article>
  )
}

export default memo(MentorCard)
