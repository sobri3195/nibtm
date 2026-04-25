function DatasetCard({ dataset, isSaved, onSave }) {
  return (
    <article className="card">
      <h3>{dataset.name}</h3>
      <p>{dataset.description}</p>
      <div className="meta-row">
        <span>Format: {dataset.format}</span>
        <span>Sampel: {dataset.samples}</span>
      </div>
      <span className="badge">{dataset.category}</span>
      <div className="actions">
        <button className="outline">View Details</button>
        <button onClick={() => onSave(dataset.id)}>{isSaved ? 'Saved' : 'Save Dataset'}</button>
      </div>
    </article>
  )
}

export default DatasetCard
