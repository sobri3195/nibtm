import { useState } from 'react'
import { datasets } from '../data/siteData'
import { sectionClassName } from '../lib/utils'
import SectionHeader from './shared/SectionHeader'
import Card from './ui/Card'
import Button from './ui/Button'

export default function Datasets() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', ...new Set(datasets.map((d) => d.category))]
  const filtered = datasets.filter((d) => filter === 'All' || d.category === filter)
  return (
    <section id="datasets" className="w-full py-16 lg:py-24">
      <SectionHeader eyebrow="Dataset & Big Data" title="Research-focused datasets untuk eksperimen dan validasi model." />
      <div className={sectionClassName()}>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="mb-6 rounded-xl border border-slate-300 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900">
          {categories.map((c) => <option key={c}>{c}</option>)}
        </select>
        <div className="grid gap-5 md:grid-cols-2">
          {filtered.map((item) => (
            <Card key={item.name}>
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.category} • {item.records} records • {item.format}</p>
              <div className="mt-4 h-2 rounded-full bg-slate-200 dark:bg-slate-700"><div className="h-2 w-3/4 rounded-full bg-cyan-500" /></div>
              <Button className="mt-5">Open Dataset</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
