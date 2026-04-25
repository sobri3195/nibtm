import { memo } from 'react'
import { Github, Linkedin, Star } from './icons'

function avatarHue(name = 'Mentor') {
  const score = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return score % 360
}

function getInitials(name = 'Mentor') {
  return name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
}

function MentorCard({ mentor, isSaved, onSave }) {
  return (
    <article className="card mentor-card">
      <div className="avatar" style={{ background: `linear-gradient(120deg, hsl(${avatarHue(mentor.name)} 80% 52%), hsl(${(avatarHue(mentor.name) + 40) % 360} 80% 65%))` }} aria-hidden>
        {getInitials(mentor.name)}
      </div>
      <h3>{mentor.name}</h3>
      <p className="body-text"><strong>Expertise:</strong> {mentor.expertise}</p>
      <p className="body-text"><strong>Topik:</strong> {mentor.topics}</p>
      <p className="rating" aria-label="rating"><Star /> <strong>4.8</strong> (120 reviews)</p>
      <div className="socials">
        <a href="#" aria-label="LinkedIn profile"><Linkedin /></a>
        <a href="#" aria-label="GitHub profile"><Github /></a>
      </div>
      <button className="btn-primary full" onClick={() => onSave(mentor.id)}>{isSaved ? 'Mentor Saved' : 'Book Session'}</button>
    </article>
  )
}

export default memo(MentorCard)
