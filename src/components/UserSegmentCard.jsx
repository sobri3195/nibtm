import { BookOpen, Briefcase, GraduationCap, Microscope } from './icons'

const iconByTitle = {
  'For Beginner': GraduationCap,
  'For Students': BookOpen,
  'For Professional': Briefcase,
  'For Researcher': Microscope,
}

function UserSegmentCard({ title, desc }) {
  const Icon = iconByTitle[title] || GraduationCap

  return (
    <article className={`card user-segment-card ${title.toLowerCase().replaceAll(' ', '-')}`}>
      <div className="icon-pill"><Icon /></div>
      <h3>{title}</h3>
      <p className="body-text">{desc}</p>
    </article>
  )
}

export default UserSegmentCard
