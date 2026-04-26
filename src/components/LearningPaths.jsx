import { useState } from 'react'
import { learningPaths } from '../data/siteData'
import { sectionClassName } from '../lib/utils'
import SectionHeader from './shared/SectionHeader'
import Card from './ui/Card'
import Button from './ui/Button'

const tabs = ['Beginner', 'Intermediate', 'Advanced', 'Certification']

export default function LearningPaths() {
  const [active, setActive] = useState('Beginner')
  const filtered = learningPaths.filter((p) => p.level === active)
  return (
    <section id="paths" className="w-full py-16 lg:py-24">
      <SectionHeader eyebrow="Learning Paths" title="Path yang lebih besar, jelas, dan actionable." />
      <div className={sectionClassName()}>
        <div className="mb-6 flex flex-wrap gap-2">{tabs.map((tab) => <button key={tab} onClick={() => setActive(tab)} className={`rounded-full px-4 py-2 text-sm ${active === tab ? 'bg-indigo-600 text-white' : 'bg-slate-200 dark:bg-slate-800'}`}>{tab}</button>)}</div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <Card key={item.id}>
              <p className="text-xs font-semibold uppercase text-indigo-600">{item.level}</p>
              <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.modules} modules • {item.duration}</p>
              <div className="mt-4 h-2 rounded-full bg-slate-200 dark:bg-slate-700"><div className="h-2 rounded-full bg-indigo-600" style={{ width: `${item.progress}%` }} /></div>
              <Button className="mt-5 w-full">View Path</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
