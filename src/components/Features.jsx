import { motion } from 'framer-motion'
import { BriefcaseBusiness, ChartNoAxesCombined, FlaskConical, HeartPulse, MessageCircleHeart, Sparkles } from 'lucide-react'
import { features } from '../data/siteData'
import OptimizedImage from './ui/OptimizedImage'
import Badge from './ui/Badge'
import Card from './ui/Card'
import SectionHeader from './SectionHeader'
import MoleculePattern from './visuals/MoleculePattern'

const iconMap = { Sparkles, FlaskConical, HeartPulse, BriefcaseBusiness, MessageCircleHeart, ChartNoAxesCombined }

export default function Features() {
  return (
    <section id="features" className="bg-white py-16 dark:bg-slate-950 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10 xl:px-16">
        <SectionHeader badge="Platform Features" title="Premium learning experience for biomedical professionals." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => {
            const Icon = iconMap[feature.icon]
            return (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} whileHover={{ y: -4 }}>
                <Card className={`relative overflow-hidden border-t-2 border-t-cyan-400/80 ${feature.featured ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-indigo-50 to-cyan-50 dark:from-indigo-950/40 dark:to-cyan-950/20' : ''}`}>
                  <MoleculePattern className="absolute -right-8 -top-4 h-20 w-32 text-cyan-300/30" />
                  <Icon size={20} className="relative z-10 text-indigo-600 dark:text-cyan-300" />
                  <Badge className="mt-3">{feature.label}</Badge>
                  <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">{feature.title}</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-300">{feature.description}</p>
                  <OptimizedImage src={feature.image} alt={`${feature.title} visual`} className="mt-4 h-20 w-full rounded-xl border border-slate-200/70 dark:border-white/10" />
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
