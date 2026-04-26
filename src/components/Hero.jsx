import { motion } from 'framer-motion'
import { BrainCircuit, Database, Sparkles, Workflow } from 'lucide-react'
import { heroTrustBadges } from '../data/siteData'
import Badge from './ui/Badge'
import Button from './ui/Button'
import Card from './ui/Card'

const floatingCards = [
  { title: 'Learning Progress', value: '78% mastery', icon: BrainCircuit },
  { title: 'AI Recommendation', value: 'Next: Clinical NLP', icon: Sparkles },
  { title: 'Dataset Ready', value: '24 validated sets', icon: Database },
  { title: 'Clinical Workflow', value: 'Model → Validation', icon: Workflow },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.25),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.35),transparent_45%)]" />
      <div className="relative max-w-[1440px] mx-auto grid grid-cols-1 items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 xl:px-16">
        <div>
          <Badge className="mb-5 border-cyan-300/30 bg-cyan-300/10 text-cyan-100">Biomedical Learning Platform</Badge>
          <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">Advance biomedical skills with structured AI-ready learning.</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 lg:text-lg">
            NIBM 7.0 unifies bioinformatics, translational AI, research datasets, and expert mentoring into one premium learning workflow.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button>Start Learning</Button>
            <Button variant="secondary">Explore Topics</Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {heroTrustBadges.map((badge) => (
              <Badge key={badge} className="border-white/20 bg-white/10 text-white">{badge}</Badge>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative">
          <Card className="border-white/10 bg-white/10 p-7 text-white shadow-glow">
            <p className="text-sm text-cyan-100">Biomedical Dashboard</p>
            <h3 className="mt-2 text-2xl font-bold">Learning Intelligence Panel</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {floatingCards.map((item, idx) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="rounded-xl border border-white/15 bg-slate-900/60 p-4"
                  >
                    <Icon size={18} className="text-cyan-200" />
                    <p className="mt-2 text-sm text-white/70">{item.title}</p>
                    <p className="text-sm font-semibold">{item.value}</p>
                  </motion.div>
                )
              })}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
