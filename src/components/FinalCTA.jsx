import Button from './ui/Button'
import { sectionClassName } from '../lib/utils'

export default function FinalCTA() {
  return (
    <section className="w-full py-16 lg:py-24">
      <div className={sectionClassName()}>
        <div className="rounded-3xl bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-500 p-8 text-white lg:p-12">
          <h2 className="text-3xl font-black lg:text-5xl">Ready to advance your biomedical learning journey?</h2>
          <p className="mt-3 text-white/90">Mulai dari fundamental hingga translasi klinis dengan learning experience kelas premium.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button className="bg-white text-indigo-700 hover:bg-slate-100">Start Learning Now</Button>
            <Button variant="secondary" className="border-white/40 bg-white/20 text-white hover:bg-white/30">Explore Curriculum</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
