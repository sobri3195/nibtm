import { heroTrustBadges } from '../data/siteData'
import HeroBiomedicalVisual from './visuals/HeroBiomedicalVisual'
import Badge from './ui/Badge'
import Button from './ui/Button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.28),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.35),transparent_45%)]" />
      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 xl:px-16">
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
        <HeroBiomedicalVisual />
      </div>
    </section>
  )
}
