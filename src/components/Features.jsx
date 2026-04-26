import { BriefcaseBusiness, ChartNoAxesCombined, FlaskConical, HeartPulse, MessageCircleHeart, Sparkles } from 'lucide-react'
import { features } from '../data/siteData'
import Badge from './ui/Badge'
import Card from './ui/Card'
import SectionHeader from './SectionHeader'

const iconMap = { Sparkles, FlaskConical, HeartPulse, BriefcaseBusiness, MessageCircleHeart, ChartNoAxesCombined }

export default function Features() {
  return (
    <section id="features" className="bg-white py-16 dark:bg-slate-950 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-10 xl:px-16">
        <SectionHeader badge="Platform Features" title="Premium learning experience for biomedical professionals." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon]
            return (
              <Card key={feature.title} className={feature.featured ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-indigo-50 to-cyan-50 dark:from-indigo-950/40 dark:to-cyan-950/20' : ''}>
                <div className="mb-4 h-1 w-14 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
                <Icon size={20} className="text-indigo-600 dark:text-cyan-300" />
                <Badge className="mt-3">{feature.label}</Badge>
                <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
