import { useMemo, useState } from 'react'
import { ArrowUpDown, Database, Search } from 'lucide-react'
import OptimizedImage from './ui/OptimizedImage'
import Button from './ui/Button'
import Card from './ui/Card'
import Progress from './ui/Progress'
import SectionHeader from './SectionHeader'
import DatasetMiniChart from './visuals/DatasetMiniChart'
import { cn } from '../lib/utils'

const datasetCopy = {
  search: 'Search datasets...',
  sort: 'Sort datasets',
  highestHealth: 'Highest health',
  mostRecords: 'Most records',
  category: 'Category',
  visible: 'visible datasets',
  emptyTitle: 'No datasets match your filters',
  emptyDescription: 'Reset filters or try a broader biomedical data keyword.',
  reset: 'Reset filters',
}

const parseRecordCount = (records = '') => {
  const match = String(records).match(/[\d.]+/)
  const value = match ? Number(match[0]) : 0
  if (String(records).toUpperCase().includes('M')) return value * 1_000_000
  if (String(records).toUpperCase().includes('K')) return value * 1_000
  return value
}

export default function Datasets({ data, onOpenDataset }) {
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')
  const [sortBy, setSortBy] = useState('health')

  const items = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return data.datasets
      .filter((item) => category === 'All' || item.categoryKey === category)
      .filter((item) => {
        if (!normalizedQuery) return true
        return [item.name, item.category, item.format, item.records].some((value) => String(value).toLowerCase().includes(normalizedQuery))
      })
      .sort((a, b) => sortBy === 'records' ? parseRecordCount(b.records) - parseRecordCount(a.records) : b.health - a.health)
  }, [data.datasets, query, category, sortBy])

  const resetFilters = () => {
    setCategory('All')
    setQuery('')
    setSortBy('health')
  }

  return (
    <section id="datasets" className="bg-slate-50 py-16 dark:bg-slate-900 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10 xl:px-16">
        <SectionHeader badge={data.sections.datasets.badge} title={data.sections.datasets.title} />

        <div className="mb-6 grid gap-3 rounded-3xl border border-slate-200 bg-white/80 p-3 shadow-soft dark:border-white/10 dark:bg-slate-950/40 lg:grid-cols-[1fr_auto_auto]">
          <label className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-slate-900">
            <Search size={18} className="text-slate-400" />
            <span className="sr-only">{datasetCopy.search}</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={datasetCopy.search} className="w-full bg-transparent outline-none" />
          </label>

          <label className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-slate-900">
            <Database size={18} className="text-cyan-500" />
            <span className="sr-only">{datasetCopy.category}</span>
            <select value={category} onChange={(event) => setCategory(event.target.value)} className="min-w-40 bg-transparent font-medium outline-none">
              {data.datasetCategories.map((item) => <option key={item.key} value={item.key}>{item.label}</option>)}
            </select>
          </label>

          <label className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-slate-900">
            <ArrowUpDown size={18} className="text-indigo-500" />
            <span className="sr-only">{datasetCopy.sort}</span>
            <select value={sortBy} onChange={(event) => setSortBy(event.target.value)} className="min-w-40 bg-transparent font-medium outline-none">
              <option value="health">{datasetCopy.highestHealth}</option>
              <option value="records">{datasetCopy.mostRecords}</option>
            </select>
          </label>
        </div>

        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {data.datasetCategories.map((item) => (
              <button key={item.key} onClick={() => setCategory(item.key)} className={cn('rounded-full px-3 py-1.5 text-xs font-semibold transition', category === item.key ? 'bg-cyan-500 text-slate-950' : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:ring-white/10')}>
                {item.label}
              </button>
            ))}
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">{items.length} {datasetCopy.visible}</p>
        </div>

        {items.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {items.map((item) => (
              <Card key={item.name} className="hover:-translate-y-1 hover:shadow-xl">
                <p className="text-xs font-semibold text-cyan-700 dark:text-cyan-300">{item.category}</p>
                <h3 className="mt-2 font-bold text-slate-900 dark:text-white">{item.name}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.format} • {item.records} {data.ui.records}</p>
                <OptimizedImage src={item.image} alt={`${item.name} dataset visual`} className="mt-3 h-20 w-full rounded-xl border border-slate-200/70 dark:border-white/10" />
                <DatasetMiniChart values={item.trend} line={item.trend} />
                <Progress className="mt-3" value={item.health} />
                <p className="mt-1 text-xs text-slate-500">{data.ui.dataHealth}: {item.health}%</p>
                <Button variant="secondary" className="mt-4 w-full" onClick={() => onOpenDataset?.(item)}>{data.ui.openDataset}</Button>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="py-12 text-center">
            <Database className="mx-auto text-cyan-500" size={34} />
            <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">{datasetCopy.emptyTitle}</h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-600 dark:text-slate-300">{datasetCopy.emptyDescription}</p>
            <Button className="mt-5" onClick={resetFilters}>{datasetCopy.reset}</Button>
          </Card>
        )}
      </div>
    </section>
  )
}
