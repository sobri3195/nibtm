import { useState } from 'react'

const defaultIdea = {
  title: '',
  field: '',
  background: '',
  objective: '',
  collaboration: '',
  status: 'Draft',
}

function ResearchIdeaForm({ onSubmit, editingIdea, onCancelEdit }) {
  const [form, setForm] = useState(editingIdea || defaultIdea)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(form)
    setForm(defaultIdea)
  }

  return (
    <form className="card form-grid" onSubmit={handleSubmit}>
      <h3>{editingIdea ? 'Edit Ide Riset' : 'Tambah Ide Riset'}</h3>
      <input name="title" placeholder="Judul Riset" value={form.title} onChange={handleChange} required />
      <input name="field" placeholder="Bidang" value={form.field} onChange={handleChange} required />
      <textarea name="background" placeholder="Latar belakang singkat" value={form.background} onChange={handleChange} required />
      <textarea name="objective" placeholder="Tujuan" value={form.objective} onChange={handleChange} required />
      <input name="collaboration" placeholder="Potensi kolaborasi" value={form.collaboration} onChange={handleChange} required />
      <select name="status" value={form.status} onChange={handleChange}>
        <option>Draft</option>
        <option>Ongoing</option>
        <option>Completed</option>
      </select>
      <div className="actions">
        <button type="submit">{editingIdea ? 'Update Ide' : 'Simpan Ide'}</button>
        {editingIdea && <button type="button" className="outline" onClick={onCancelEdit}>Cancel</button>}
      </div>
    </form>
  )
}

export default ResearchIdeaForm
