import { stats } from '../data/siteData'
import Card from './ui/Card'
import { sectionClassName } from '../lib/utils'

export default function Stats() {
  return (
    <section className="w-full bg-slate-50 py-16 dark:bg-slate-950">
      <div className={`${sectionClassName()} grid grid-cols-2 gap-4 lg:grid-cols-4`}>
        {stats.map((item) => (
          <Card key={item.label} className="hover:-translate-y-1 hover:shadow-xl">
            <p className="text-3xl font-black text-slate-900 dark:text-white">{item.value}</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.label}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
