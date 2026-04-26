import { useMemo, useState } from 'react'
import { topics } from '../data/siteData'
import { sectionClassName } from '../lib/utils'
import SectionHeader from './shared/SectionHeader'
import Card from './ui/Card'

const categories = ['All', 'AI', 'Clinical', 'Imaging', 'Foundation', 'Research', 'IoT']

export default function Topics() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const filtered = useMemo(() => topics.filter((t) => {
    const m1 = t.title.toLowerCase().includes(search.toLowerCase())
    const m2 = category === 'All' || t.category === category
    return m1 && m2
  }), [search, category])

  return (
    <section id="topics" className="w-full bg-slate-100 py-16 dark:bg-slate-900/50 lg:py-24">
      <SectionHeader eyebrow="Topics" title="Cari topik dengan filter yang lebih jelas dan readable." />
      <div className={sectionClassName()}>
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search topics..." className="mb-4 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900" />
        <div className="mb-6 flex flex-wrap gap-2">{categories.map((c) => <button key={c} onClick={() => setCategory(c)} className={`rounded-full px-3 py-1 text-sm ${category === c ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-800'}`}>{c}</button>)}</div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((topic) => (
            <Card key={topic.title}>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-xs dark:bg-slate-800">{topic.level}</span>
              <h3 className="mt-3 text-lg font-bold">{topic.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{topic.modules} modules • {topic.duration} • {topic.dataset ? 'Dataset available' : 'No dataset'}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
