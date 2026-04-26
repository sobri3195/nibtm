import { aboutHighlights } from '../data/siteData'
import { sectionClassName } from '../lib/utils'
import SectionHeader from './shared/SectionHeader'
import Card from './ui/Card'

export default function About() {
  return (
    <section id="about" className="w-full py-16 lg:py-24">
      <SectionHeader eyebrow="About" title="NIBM 7.0 dirancang untuk pembelajaran biomedical yang terstruktur dan berdampak." />
      <div className={`${sectionClassName()} grid gap-6 lg:grid-cols-2`}>
        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">Platform ini menggabungkan pendidikan, praktik riset, dan mentoring dalam satu alur pembelajaran modern. Fokus utamanya adalah kesiapan nyata untuk studi, industri, dan translasi klinis.</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {aboutHighlights.map((item) => (
            <Card key={item.title}><h3 className="text-lg font-bold">{item.title}</h3><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.description}</p></Card>
          ))}
        </div>
      </div>
    </section>
  )
}
