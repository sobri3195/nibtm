import { motion } from 'framer-motion'
import { CheckCircle2, Clock3, PlayCircle, Sparkles } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import OptimizedImage from './ui/OptimizedImage'
import Badge from './ui/Badge'
import Button from './ui/Button'
import Card from './ui/Card'
import Progress from './ui/Progress'
import SectionHeader from './SectionHeader'
import { cn } from '../lib/utils'
import {
  buildLearningPathId,
  getLearningPathState,
  getStartedPathCount,
  readLearningProgress,
  startLearningPath,
  writeLearningProgress,
} from '../utils/learningProgress'

const learningCopy = {
  summaryTitle: 'Learning is active',
  summaryDescription: 'Your selected path is saved locally, progress is initialized, and the next recommended module is ready to explore.',
  started: 'Started',
  notStarted: 'Not started',
  continuePath: 'Continue Path',
  nextModule: 'Next module unlocked',
  activePaths: 'active paths',
  openTopics: 'Open recommended topics',
}

export default function LearningPaths({ data, startLearningSignal = 0 }) {
  const [activeTab, setActiveTab] = useState(data.pathTabs[0].key)
  const [progress, setProgress] = useState(() => readLearningProgress())
  const activePaths = data.learningPaths[activeTab] || []

  const startPath = (path, tabKey = activeTab) => {
    const pathId = buildLearningPathId(tabKey, path.title)
    const nextProgress = startLearningPath({ pathId, modules: path.modules }, progress)
    setProgress(nextProgress)
    writeLearningProgress(nextProgress)
  }

  useEffect(() => {
    setActiveTab((current) => data.pathTabs.some((tab) => tab.key === current) ? current : data.pathTabs[0].key)
  }, [data.pathTabs])

  useEffect(() => {
    if (!startLearningSignal) return
    const firstTab = data.pathTabs[0]?.key
    const firstPath = data.learningPaths[firstTab]?.[0]
    if (!firstPath) return

    setActiveTab(firstTab)
    const pathId = buildLearningPathId(firstTab, firstPath.title)
    setProgress((current) => {
      const nextProgress = startLearningPath({ pathId, modules: firstPath.modules }, current)
      writeLearningProgress(nextProgress)
      return nextProgress
    })
  }, [data.learningPaths, data.pathTabs, startLearningSignal])

  const startedCount = useMemo(() => getStartedPathCount(progress), [progress])
  const currentPathState = activePaths[0]
    ? getLearningPathState(progress, buildLearningPathId(activeTab, activePaths[0].title))
    : null

  return (
    <section id="paths" className="bg-slate-50 py-16 dark:bg-slate-900 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10 xl:px-16">
        <SectionHeader badge={data.sections.paths.badge} title={data.sections.paths.title} />

        <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_360px]">
          <div className="flex flex-wrap gap-2 self-start">
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

          <Card className="border-cyan-200/70 bg-cyan-50/70 p-4 dark:border-cyan-400/20 dark:bg-cyan-400/10">
            <div className="flex items-start gap-3">
              <span className="rounded-2xl bg-cyan-500/15 p-2 text-cyan-700 dark:text-cyan-300"><Sparkles size={20} /></span>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">{learningCopy.summaryTitle}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{learningCopy.summaryDescription}</p>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
                  <Badge className="bg-white text-cyan-700 dark:bg-slate-950 dark:text-cyan-300">{startedCount} {learningCopy.activePaths}</Badge>
                  {currentPathState?.started && <Badge className="bg-white text-emerald-700 dark:bg-slate-950 dark:text-emerald-300">{currentPathState.percent}%</Badge>}
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {activePaths.map((path, idx) => {
            const pathId = buildLearningPathId(activeTab, path.title)
            const state = getLearningPathState(progress, pathId)
            const displayProgress = state.started ? state.percent : path.progress
            const actionLabel = state.started ? learningCopy.continuePath : data.ui.startLearning

            return (
              <motion.div key={path.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} whileHover={{ y: -4 }}>
                <Card className={cn('h-full', state.started && 'border-cyan-300/80 shadow-glow dark:border-cyan-400/30')}>
                  <div className="relative">
                    <OptimizedImage src={path.image} alt={`${path.title} path illustration`} className="h-28 w-full rounded-xl border border-slate-200/70 dark:border-white/10" />
                    <Badge className={cn('absolute left-3 top-3 gap-1 bg-white/90 backdrop-blur dark:bg-slate-950/90', state.started ? 'text-emerald-700 dark:text-emerald-300' : 'text-slate-600 dark:text-slate-300')}>
                      {state.started ? <CheckCircle2 size={13} /> : <Clock3 size={13} />}
                      {state.started ? learningCopy.started : learningCopy.notStarted}
                    </Badge>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">{path.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{path.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span>{path.modules} {data.ui.modules}</span><span>•</span><span>{path.duration}</span><span>•</span><span>{path.difficulty}</span>
                  </div>
                  {state.started && (
                    <p className="mt-3 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                      <PlayCircle size={13} /> {learningCopy.nextModule}
                    </p>
                  )}
                  <Progress className="mt-4" value={displayProgress} />
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    <Button className="w-full" onClick={() => startPath(path)}>{actionLabel}</Button>
                    <Button className="w-full" variant="secondary" onClick={() => document.getElementById('topics')?.scrollIntoView({ behavior: 'smooth' })}>{learningCopy.openTopics}</Button>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
