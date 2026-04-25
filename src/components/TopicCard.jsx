function TopicCard({ topic, isSaved, isLearned, onSave, onLearn }) {
  return (
    <article className="card">
      <h3>{topic.title}</h3>
      <p>{topic.description}</p>
      <div className="meta-row">
        <span>Level: {topic.level}</span>
        <span>Kategori: {topic.category}</span>
      </div>
      <div className="actions">
        <button onClick={() => onSave(topic.id)}>{isSaved ? 'Saved' : 'Save Topic'}</button>
        <button className="outline" onClick={() => onLearn(topic.id)}>{isLearned ? 'Learned' : 'Mark as Learned'}</button>
      </div>
    </article>
  )
}

export default TopicCard
