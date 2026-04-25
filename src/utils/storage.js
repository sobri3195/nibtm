export const storageKeys = [
  'savedTopics',
  'learnedTopics',
  'savedDatasets',
  'savedMentors',
  'researchIdeas',
  'savedAiIotIdeas',
  'communityNotes',
  'customTopics',
  'customDatasets',
  'customMentors',
  'customAiIotIdeas',
  'learningPathProgress',
]

export const getLocal = (key, fallback = []) => {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

export const setLocal = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const exportAllData = () => {
  const data = {}
  storageKeys.forEach((key) => {
    data[key] = getLocal(key, Array.isArray(data[key]) ? [] : {})
  })
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'nibtm7-data.json'
  link.click()
  URL.revokeObjectURL(url)
}

export const importAllData = (file, onDone) => {
  const reader = new FileReader()
  reader.onload = (event) => {
    try {
      const parsed = JSON.parse(event.target?.result)
      storageKeys.forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(parsed, key)) {
          setLocal(key, parsed[key])
        }
      })
      onDone(true)
    } catch {
      onDone(false)
    }
  }
  reader.readAsText(file)
}

export const resetAllData = () => {
  storageKeys.forEach((key) => localStorage.removeItem(key))
}
