import { memo } from 'react'

function DatasetCard({ dataset, isSaved, onSave }) {
  return (
    <article className="card dataset-card">
      <div className="meta-row">
        <h3>{dataset.name}</h3>
        <span className="badge">{dataset.category}</span>
      </div>
      <p className="body-text">{dataset.description}</p>
      <div className="meta-row">
        <span>Format: {dataset.format}</span>
        <span>Sampel: {dataset.samples}</span>
      </div>
      <div className="actions">
        <button className="btn-secondary" aria-label={`Preview ${dataset.name}`}>Preview</button>
        <button className="btn-primary" onClick={() => onSave(dataset.id)}>{isSaved ? 'Saved' : 'Download'}</button>
      </div>
    </article>
  )
}

export default memo(DatasetCard)
