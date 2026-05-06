import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import OptimizedImage from './ui/OptimizedImage'
import Button from './ui/Button'
import Card from './ui/Card'
import Progress from './ui/Progress'
import SectionHeader from './SectionHeader'
import { cn } from '../lib/utils'

export default function LearningPaths({ data }) {
  const [activeTab, setActiveTab] = useState(data.pathTabs[0].key)

  useEffect(() => {
    setActiveTab((current) => data.pathTabs.some((tab) => tab.key === current) ? current : data.pathTabs[0].key)
  }, [data.pathTabs])

  return (
    <section id="paths" className="bg-slate-50 py-16 dark:bg-slate-900 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10 xl:px-16">
        <SectionHeader badge={data.sections.paths.badge} title={data.sections.paths.title} />
        <div className="mb-6 flex flex-wrap gap-2">
          {data.pathTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={cn('rounded-full px-4 py-2 text-sm font-medium transition', activeTab === tab.key ? 'bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950' : 'bg-white text-slate-600 dark:bg-slate-800 dark:text-slate-300')}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data.learningPaths[activeTab].map((path, idx) => (
            <motion.div key={path.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} whileHover={{ y: -4 }}>
              <Card>
                <OptimizedImage src={path.image} alt={`${path.title} path illustration`} className="h-28 w-full rounded-xl border border-slate-200/70 dark:border-white/10" />
                <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">{path.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{path.description}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span>{path.modules} {data.ui.modules}</span><span>•</span><span>{path.duration}</span><span>•</span><span>{path.difficulty}</span>
                </div>
                <Progress className="mt-4" value={path.progress} />
                <Button className="mt-4 w-full" variant="secondary">{data.ui.viewPath}</Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
