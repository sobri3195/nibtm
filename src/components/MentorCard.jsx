function MentorCard({ mentor, isSaved, onSave }) {
  return (
    <article className="card">
      <h3>{mentor.name}</h3>
      <p><strong>Bidang:</strong> {mentor.expertise}</p>
      <p><strong>Level Bimbingan:</strong> {mentor.guidanceLevel}</p>
      <p><strong>Topik:</strong> {mentor.topics}</p>
      <button onClick={() => onSave(mentor.id)}>{isSaved ? 'Saved' : 'Save Mentor'}</button>
    </article>
  )
}

export default MentorCard
