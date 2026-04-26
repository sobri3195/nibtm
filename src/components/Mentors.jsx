import { mentors } from '../data/siteData'
import { sectionClassName } from '../lib/utils'
import SectionHeader from './shared/SectionHeader'
import Card from './ui/Card'
import Button from './ui/Button'

export default function Mentors() {
  return (
    <section id="mentors" className="w-full bg-slate-100 py-16 dark:bg-slate-900/50 lg:py-24">
      <SectionHeader eyebrow="Tutors & Mentors" title="Mentor card lebih manusiawi dan actionable." />
      <div className={`${sectionClassName()} grid gap-5 md:grid-cols-2 lg:grid-cols-4`}>
        {mentors.map((item) => (
          <Card key={item.name}>
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 text-sm font-bold text-white">{item.initials}</div>
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">{item.expertise}</p>
            <p className="mt-2 text-xs">⭐ {item.rating} • {item.availability}</p>
            <Button className="mt-4 w-full">Book Session</Button>
          </Card>
        ))}
      </div>
    </section>
  )
}
