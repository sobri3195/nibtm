import { useMemo, useState } from 'react'
import { Activity, BrainCircuit, Dna, FlaskConical, HeartPulse, Leaf, Pill, RotateCcw, ScanHeart, Search, Stethoscope } from 'lucide-react'
import OptimizedImage from './ui/OptimizedImage'
import Badge from './ui/Badge'
import Card from './ui/Card'
import SectionHeader from './SectionHeader'
import { cn } from '../lib/utils'

const iconMap = { Dna, Stethoscope, ScanHeart, FlaskConical, Activity, BrainCircuit, HeartPulse, Leaf, Pill }

export default function Topics({ data }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return data.topics.filter((topic) => {
      const matchesCategory = category === 'All' || topic.categoryKey === category
      if (!matchesCategory) return false
      if (!normalizedQuery) return true

      return [topic.title, topic.category, topic.level, topic.duration].some((value) => String(value).toLowerCase().includes(normalizedQuery))
    })
  }, [data.topics, query, category])

  const totalModules = filtered.reduce((sum, topic) => sum + topic.modules, 0)
  const resetFilters = () => {
    setQuery('')
    setCategory('All')
  }

  return (
    <section id="topics" className="bg-white py-16 dark:bg-slate-950 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10 xl:px-16">
        <SectionHeader badge={data.sections.topics.badge} title={data.sections.topics.title} />
        <div className="mb-4 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 dark:border-white/10 dark:bg-slate-900">
          <Search size={18} className="text-slate-400" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={data.ui.searchTopic} className="w-full bg-transparent text-sm outline-none" />
          {(query || category !== 'All') && (
            <button type="button" onClick={resetFilters} className="rounded-lg p-1.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white" aria-label="Reset topic filters">
              <RotateCcw size={16} />
            </button>
          )}
        </div>
        <div className="mb-4 flex flex-wrap gap-2">
          {data.topicCategories.map((item) => (
            <button key={item.key} onClick={() => setCategory(item.key)} className={cn('rounded-full px-3 py-1.5 text-xs', category === item.key ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300')}>
              {item.label}
            </button>
          ))}
        </div>
        <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">{filtered.length} topics • {totalModules} {data.ui.modules}</p>

        {filtered.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((topic) => {
              const Icon = iconMap[topic.icon] || Dna
              return (
                <Card key={topic.title} className="hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <Badge>{topic.category}</Badge>
                    <Icon size={15} className="text-cyan-500" />
                  </div>
                  <OptimizedImage src={topic.image} alt={`${topic.title} topic illustration`} className="mt-3 h-20 w-full rounded-xl border border-slate-200/70 dark:border-white/10" />
                  <h3 className="mt-3 text-base font-bold text-slate-900 dark:text-white">{topic.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{topic.modules} {data.ui.modules} • {topic.duration} • {topic.level}</p>
                  <p className="mt-2 text-xs text-cyan-700 dark:text-cyan-300">{topic.dataset ? data.ui.datasetAvailable : data.ui.noDataset}</p>
                </Card>
              )
            })}
          </div>
        ) : (
          <Card className="py-12 text-center">
            <Search className="mx-auto text-cyan-500" size={34} />
            <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">No topics found</h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-600 dark:text-slate-300">Try another keyword or reset the category filter to explore the full biomedical curriculum.</p>
            <button type="button" onClick={resetFilters} className="mt-5 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400">Reset filters</button>
          </Card>
        )}
      </div>
    </section>
  )
}
