import Button from './ui/Button'

export default function FinalCTA() {
  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-900 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-10 xl:px-16">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-indigo-600 to-cyan-500 p-10 text-white shadow-glow dark:border-white/10">
          <div className="absolute -right-12 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
          <h3 className="text-3xl font-black tracking-tight">Ready to advance your biomedical learning journey?</h3>
          <p className="mt-3 max-w-2xl text-white/85">Start your structured path with datasets, mentors, and hands-on biomedical AI workflows.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button className="bg-white text-slate-900 hover:bg-slate-100">Start Learning Now</Button>
            <Button variant="secondary" className="border border-white/40 bg-white/10 text-white hover:bg-white/20">Explore Curriculum</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
