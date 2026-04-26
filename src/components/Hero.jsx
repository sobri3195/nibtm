import Button from './ui/Button'
import { heroBadges } from '../data/siteData'
import GradientBadge from './shared/GradientBadge'
import { sectionClassName } from '../lib/utils'

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-indigo-700 via-blue-600 to-cyan-500 py-20 lg:min-h-[680px]" aria-labelledby="hero-title">
      <div className="pointer-events-none absolute inset-0 opacity-15 [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-cyan-300/40 blur-3xl" />
      <div className={`${sectionClassName()} relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16`}>
        <div>
          <h1 id="hero-title" className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">Premium Biomedical Learning Platform</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 lg:text-xl">Belajar bioinformatics, AI medis, dan translasi klinis dalam satu ekosistem yang modern, terstruktur, dan siap production.</p>
          <div className="mt-8 flex flex-wrap gap-3">{heroBadges.map((badge) => <GradientBadge key={badge}>{badge}</GradientBadge>)}</div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button className="bg-white text-indigo-700 hover:bg-slate-100">Start Learning</Button>
            <Button variant="secondary" className="border-white/40 bg-white/15 text-white hover:bg-white/25">Explore Topics</Button>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="rounded-3xl border border-white/25 bg-white/10 p-6 text-white backdrop-blur">
            <p className="text-sm font-semibold">Learning Progress</p>
            <div className="mt-3 h-3 rounded-full bg-white/25"><div className="h-3 w-2/3 rounded-full bg-cyan-300" /></div>
            <p className="mt-2 text-sm text-white/85">67% completed • 8 modules left</p>
          </div>
          <div className="rounded-3xl border border-white/25 bg-white/10 p-6 text-white backdrop-blur">
            <p className="text-sm">Track clinical translation milestones and evidence quality on every project.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
