import { motion } from 'framer-motion'
import { BookOpen, Database, Timer, Users } from 'lucide-react'
import { stats } from '../data/siteData'
import Card from './ui/Card'

const iconMap = { Users, BookOpen, Database, Timer }

export default function Stats() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-10 xl:px-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => {
            const Icon = iconMap[stat.icon]
            return (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }}>
                <Card className="group hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 p-3 text-white">
                    <Icon size={18} />
                  </div>
                  <p className="text-3xl font-extrabold text-slate-900 dark:text-white">{stat.value}</p>
                  <p className="text-slate-600 dark:text-slate-300">{stat.label}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
