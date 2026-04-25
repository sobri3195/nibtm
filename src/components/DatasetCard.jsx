import { memo } from 'react'
import { CircleDot, Download, FileText } from './icons'

function DatasetCard({ dataset, isSaved, onSave }) {
  return (
    <article className="card dataset-card">
      <div className="meta-row">
        <h3>{dataset.name}</h3>
        <span className="badge category">{dataset.category}</span>
      </div>
      <p className="body-text">{dataset.description}</p>
      <div className="kv-row">
        <span><FileText /> {dataset.format}</span>
        <span><CircleDot /> {dataset.samples.toLocaleString()} samples</span>
      </div>
      <div className="tags">
        <span className="tag">{dataset.category}</span>
        <span className="tag accent">Big Data</span>
      </div>
      <div className="actions stacked">
        <button className="btn-primary full" onClick={() => onSave(dataset.id)}>{isSaved ? 'Saved Dataset' : 'Download Dataset'} <Download /></button>
      </div>
    </article>
  )
}

export default memo(DatasetCard)
