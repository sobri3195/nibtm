export const learningProgressStorageKey = 'learningPathProgress'

const normalizeTitle = (value = '') =>
  String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

export const buildLearningPathId = (tabKey, title) => `${normalizeTitle(tabKey) || 'path'}-${normalizeTitle(title) || 'learning'}`

export const readLearningProgress = (storage = globalThis.localStorage) => {
  if (!storage) return {}

  try {
    const raw = storage.getItem(learningProgressStorageKey)
    const parsed = raw ? JSON.parse(raw) : {}
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {}
  } catch {
    return {}
  }
}

export const writeLearningProgress = (progress, storage = globalThis.localStorage) => {
  if (!storage) return progress
  storage.setItem(learningProgressStorageKey, JSON.stringify(progress))
  return progress
}

export const getLearningPathState = (progress, pathId) => {
  const entry = progress?.[pathId]
  if (!entry) return { started: false, completedModules: 0, percent: 0, status: 'not-started' }

  const completedModules = Number.isFinite(entry.completedModules) ? Math.max(0, entry.completedModules) : 0
  const percent = Number.isFinite(entry.percent) ? Math.min(100, Math.max(0, entry.percent)) : 0

  return {
    ...entry,
    started: Boolean(entry.started),
    completedModules,
    percent,
    status: percent >= 100 ? 'completed' : 'in-progress',
  }
}

export const startLearningPath = ({ pathId, modules = 1, now = new Date().toISOString() }, progress = {}) => {
  const current = getLearningPathState(progress, pathId)
  const safeModules = Math.max(1, Number(modules) || 1)
  const completedModules = Math.max(current.completedModules, current.started ? current.completedModules : 1)
  const percent = Math.max(current.percent, Math.round((completedModules / safeModules) * 100))

  return {
    ...progress,
    [pathId]: {
      ...current,
      started: true,
      completedModules,
      percent: Math.min(100, percent),
      startedAt: current.startedAt || now,
      updatedAt: now,
    },
  }
}

export const getStartedPathCount = (progress) =>
  Object.values(progress || {}).filter((entry) => getLearningPathState({ active: entry }, 'active').started).length
