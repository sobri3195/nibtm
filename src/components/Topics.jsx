import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { topicCategories, topics } from '../data/siteData'
import Badge from './ui/Badge'
import Card from './ui/Card'
import SectionHeader from './SectionHeader'
import { cn } from '../lib/utils'

export default function Topics() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = useMemo(
    () => topics.filter((t) => (category === 'All' || t.category === category) && t.title.toLowerCase().includes(query.toLowerCase())),
    [query, category],
  )

  return (
    <section id="topics" className="bg-white py-16 dark:bg-slate-950 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-10 xl:px-16">
        <SectionHeader badge="Topics" title="Explore modules by domain, level, and data availability." />
        <div className="mb-4 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 dark:border-white/10 dark:bg-slate-900">
          <Search size={18} className="text-slate-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search topic..."
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>
        <div className="mb-6 flex flex-wrap gap-2">
          {topicCategories.map((item) => (
            <button key={item} onClick={() => setCategory(item)} className={cn('rounded-full px-3 py-1.5 text-xs', category === item ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300')}>
              {item}
            </button>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((topic) => (
            <Card key={topic.title}>
              <Badge>{topic.category}</Badge>
              <h3 className="mt-3 text-base font-bold text-slate-900 dark:text-white">{topic.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{topic.modules} modules • {topic.duration} • {topic.level}</p>
              <p className="mt-2 text-xs text-cyan-700 dark:text-cyan-300">{topic.dataset ? 'Dataset Available' : 'No Dataset'}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
