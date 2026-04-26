import { Star } from 'lucide-react'
import { mentors } from '../data/siteData'
import Badge from './ui/Badge'
import Button from './ui/Button'
import Card from './ui/Card'
import SectionHeader from './SectionHeader'

export default function Mentors() {
  return (
    <section id="mentors" className="bg-white py-16 dark:bg-slate-950 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-10 xl:px-16">
        <SectionHeader badge="Mentors" title="Learn with experienced biomedical researchers and practitioners." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {mentors.map((mentor) => (
            <Card key={mentor.name}>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 font-bold text-white">{mentor.initials}</div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">{mentor.name}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{mentor.field}</p>
                  </div>
                </div>
                <p className="flex items-center gap-1 text-sm"><Star size={15} className="fill-amber-400 text-amber-400" />{mentor.rating}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {mentor.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
              </div>
              <p className="mt-3 text-xs text-cyan-700 dark:text-cyan-300">{mentor.availability}</p>
              <Button className="mt-4 w-full">Book Session</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
