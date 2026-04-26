const DEFAULT_TITLE = 'Untitled Learning Path'
const DEFAULT_DESCRIPTION = 'Path description is not available yet.'
const DEFAULT_DURATION = 'Self-paced'

export const getSafeLearningPaths = (paths) => {
  if (!Array.isArray(paths)) return []

  return paths
    .filter(Boolean)
    .map((path, index) => ({
      id: path.id || `path-${index + 1}`,
      name: path.name || DEFAULT_TITLE,
      description: path.description || DEFAULT_DESCRIPTION,
      duration: path.duration || DEFAULT_DURATION,
      materials: Array.isArray(path.materials) ? path.materials.filter(Boolean) : [],
      level: path.level || 'General',
      category: path.category || 'Learning',
    }))
}

export const getLearningPathById = (paths, pathId) =>
  getSafeLearningPaths(paths).find((path) => path.id === pathId) || null
