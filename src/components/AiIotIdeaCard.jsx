function AiIotIdeaCard({ idea, isSaved, onSave }) {
  return (
    <article className="card">
      <h3>{idea.name}</h3>
      <p>{idea.description}</p>
      <p><strong>Target:</strong> {idea.targetUsers}</p>
      <p><strong>Sensor IoT:</strong> {idea.sensors}</p>
      <p><strong>Peran AI:</strong> {idea.aiRole}</p>
      <div className="meta-row">
        <span>Kesulitan: {idea.difficulty}</span>
      </div>
      <button onClick={() => onSave(idea.id)}>{isSaved ? 'Saved' : 'Save Idea'}</button>
    </article>
  )
}

export default AiIotIdeaCard
