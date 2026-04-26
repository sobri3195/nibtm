import { useState } from 'react'
import { learningPaths, pathTabs } from '../data/siteData'
import Button from './ui/Button'
import Card from './ui/Card'
import Progress from './ui/Progress'
import SectionHeader from './SectionHeader'
import { cn } from '../lib/utils'

export default function LearningPaths() {
  const [activeTab, setActiveTab] = useState(pathTabs[0])

  return (
    <section id="paths" className="bg-slate-50 py-16 dark:bg-slate-900 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-10 xl:px-16">
        <SectionHeader badge="Learning Paths" title="Actionable tracks for every biomedical career stage." />
        <div className="mb-6 flex flex-wrap gap-2">
          {pathTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition',
                activeTab === tab
                  ? 'bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950'
                  : 'bg-white text-slate-600 dark:bg-slate-800 dark:text-slate-300',
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {learningPaths[activeTab].map((path) => (
            <Card key={path.title}>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{path.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{path.description}</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span>{path.modules} modules</span><span>•</span><span>{path.duration}</span><span>•</span><span>{path.difficulty}</span>
              </div>
              <Progress className="mt-4" value={path.progress} />
              <Button className="mt-4 w-full" variant="secondary">View Path</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
