import { aboutCards } from '../data/siteData'
import Card from './ui/Card'
import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-16 dark:bg-slate-900 lg:py-24">
      <div className="max-w-[1440px] mx-auto grid gap-8 px-5 sm:px-6 lg:grid-cols-2 lg:px-10 xl:px-16">
        <div>
          <SectionHeader
            badge="About NIBM 7.0"
            title="From foundation to clinical translation in one connected learning system."
            description="Build scientific confidence first, operationalize AI workflows second, and deliver clinically meaningful impact third."
          />
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm dark:border-white/10 dark:bg-slate-900/70">
            <span>Foundation</span>
            <span>→</span>
            <span>AI Workflow</span>
            <span>→</span>
            <span>Clinical Translation</span>
          </div>
        </div>
        <div className="space-y-4">
          {aboutCards.map((card) => (
            <Card key={card.title}>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{card.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{card.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
