import { features } from '../data/siteData'
import { sectionClassName } from '../lib/utils'
import SectionHeader from './shared/SectionHeader'
import Card from './ui/Card'

export default function Features() {
  return (
    <section id="features" className="w-full bg-slate-100 py-16 dark:bg-slate-900/50 lg:py-24">
      <SectionHeader eyebrow="Core Features" title="Digital core features untuk pengalaman belajar premium." />
      <div className={`${sectionClassName()} grid gap-5 md:grid-cols-2 lg:grid-cols-3`}>
        {features.map((item, idx) => (
          <Card key={item.title} className="border-t-4 border-t-indigo-500 hover:-translate-y-1 hover:shadow-2xl">
            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-slate-800 dark:text-cyan-300">{item.badge}</span>
            <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
