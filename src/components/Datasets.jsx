import { useMemo, useState } from 'react'
import { datasetCategories, datasets } from '../data/siteData'
import Button from './ui/Button'
import Card from './ui/Card'
import Progress from './ui/Progress'
import SectionHeader from './SectionHeader'

export default function Datasets() {
  const [category, setCategory] = useState('All')
  const items = useMemo(() => datasets.filter((item) => category === 'All' || item.category === category), [category])

  return (
    <section id="datasets" className="bg-slate-50 py-16 dark:bg-slate-900 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-10 xl:px-16">
        <SectionHeader badge="Datasets" title="Research-grade datasets with clear health and format status." />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="mb-6 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-slate-900">
          {datasetCategories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <Card key={item.name}>
              <p className="text-xs text-cyan-700 dark:text-cyan-300">{item.category}</p>
              <h3 className="mt-2 font-bold text-slate-900 dark:text-white">{item.name}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.format} • {item.records} records</p>
              <Progress className="mt-3" value={item.health} />
              <p className="mt-1 text-xs text-slate-500">Data health: {item.health}%</p>
              <Button variant="secondary" className="mt-4 w-full">Open Dataset</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
