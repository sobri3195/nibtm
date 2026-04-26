import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import UserSegmentCard from './components/UserSegmentCard'
import TopicCard from './components/TopicCard'
import DatasetCard from './components/DatasetCard'
import MentorCard from './components/MentorCard'
import ResearchIdeaForm from './components/ResearchIdeaForm'
import AiIotIdeaCard from './components/AiIotIdeaCard'
import DashboardStats from './components/DashboardStats'
import SearchFilter from './components/SearchFilter'
import Footer from './components/Footer'
import MotionSection from './components/MotionSection'
import { Atom, Dna, FlaskConical, Stethoscope } from './components/icons'
import { aiIotIdeas, datasets, learningPaths, mentors, topics, userSegments } from './data'
import { getLearningPathById, getSafeLearningPaths } from './utils/learningPaths'
import { exportAllData, getLocal, importAllData, resetAllData, setLocal } from './utils/storage'
import { getNextStepLabel, getPathActionLabel, getPathProgress } from './utils/learningPath'

const withCustom = (base, custom) => [...base, ...custom]
const topicTabs = ['All', 'In Progress', 'Completed', 'Bookmarked', 'Not Started']
const pathIcons = [Dna, FlaskConical, Stethoscope, Atom]

function App() {
  const [darkMode, setDarkMode] = useState(getLocal('darkMode', false))
  const [savedTopics, setSavedTopics] = useState(getLocal('savedTopics'))
  const [learnedTopics, setLearnedTopics] = useState(getLocal('learnedTopics'))
  const [savedDatasets, setSavedDatasets] = useState(getLocal('savedDatasets'))
  const [savedMentors, setSavedMentors] = useState(getLocal('savedMentors'))
  const [researchIdeas, setResearchIdeas] = useState(getLocal('researchIdeas'))
  const [savedAiIotIdeas, setSavedAiIotIdeas] = useState(getLocal('savedAiIotIdeas'))
  const [customTopics] = useState(getLocal('customTopics'))
  const [customDatasets] = useState(getLocal('customDatasets'))
  const [customMentors] = useState(getLocal('customMentors'))
  const [customAiIotIdeas] = useState(getLocal('customAiIotIdeas'))
  const [learningPathProgress, setLearningPathProgress] = useState(getLocal('learningPathProgress', {}))
  const [selectedPathId, setSelectedPathId] = useState(learningPaths[0]?.id ?? null)

  const [topicSearch, setTopicSearch] = useState('')
  const [topicFilter, setTopicFilter] = useState('all')
  const [topicStatusFilter, setTopicStatusFilter] = useState('All')
  const [datasetSearch, setDatasetSearch] = useState('')
  const [datasetFilter, setDatasetFilter] = useState('all')
  const [mentorSearch, setMentorSearch] = useState('')
  const [aiSearch, setAiSearch] = useState('')
  const [aiFilter, setAiFilter] = useState('all')
  const [editingIndex, setEditingIndex] = useState(null)
  const [debouncedTopicSearch, setDebouncedTopicSearch] = useState('')
  const [toast, setToast] = useState('')
  const [datasetView, setDatasetView] = useState('card')
  const [loading, setLoading] = useState(true)
  const [selectedPathId, setSelectedPathId] = useState(null)

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedTopicSearch(topicSearch), 250)
    return () => clearTimeout(timeout)
  }, [topicSearch])

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode)
    setLocal('darkMode', darkMode)
  }, [darkMode])

  useEffect(() => {
    if (!toast) return undefined
    const timeout = setTimeout(() => setToast(''), 2000)
    return () => clearTimeout(timeout)
  }, [toast])

  const allTopics = withCustom(topics, customTopics)
  const allDatasets = withCustom(datasets, customDatasets)
  const allMentors = withCustom(mentors, customMentors)
  const allAiIot = withCustom(aiIotIdeas, customAiIotIdeas)
  const safeLearningPaths = useMemo(() => getSafeLearningPaths(learningPaths), [])
  const selectedPath = useMemo(
    () => getLearningPathById(safeLearningPaths, selectedPathId) || safeLearningPaths[0] || null,
    [safeLearningPaths, selectedPathId],
  )

  const toggleSaved = (id, current, setter, key, message = 'Saved') => {
    const updated = current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    setter(updated)
    setLocal(key, updated)
    setToast(message)
  }

  const getTopicStatus = (topicId) => {
    if (learnedTopics.includes(topicId)) return 'Completed'
    if (savedTopics.includes(topicId)) return 'In Progress'
    return 'Not Started'
  }

  const filteredTopics = useMemo(() => allTopics.filter((item) => {
    const status = getTopicStatus(item.id)
    const matchesSearch = item.title.toLowerCase().includes(debouncedTopicSearch.toLowerCase())
    const matchesFilter = topicFilter === 'all' || item.level === topicFilter || item.category === topicFilter
    const matchesStatus = topicStatusFilter === 'All'
      || (topicStatusFilter === 'Bookmarked' && savedTopics.includes(item.id))
      || topicStatusFilter === status
    return matchesSearch && matchesFilter && matchesStatus
  }), [allTopics, debouncedTopicSearch, topicFilter, topicStatusFilter, learnedTopics, savedTopics])

  const filteredDatasets = useMemo(() => allDatasets.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(datasetSearch.toLowerCase())
    const matchesFilter = datasetFilter === 'all' || item.category === datasetFilter
    return matchesSearch && matchesFilter
  }), [allDatasets, datasetSearch, datasetFilter])

  const filteredMentors = useMemo(() => allMentors.filter((item) =>
    `${item.name} ${item.expertise} ${item.topics}`.toLowerCase().includes(mentorSearch.toLowerCase()),
  ), [allMentors, mentorSearch])

  const filteredAiIot = useMemo(() => allAiIot.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(aiSearch.toLowerCase())
    const matchesFilter = aiFilter === 'all' || item.difficulty === aiFilter
    return matchesSearch && matchesFilter
  }), [allAiIot, aiSearch, aiFilter])

  const saveResearchIdea = (idea) => {
    const updated = editingIndex !== null
      ? researchIdeas.map((item, idx) => (idx === editingIndex ? { ...idea, id: item.id } : item))
      : [...researchIdeas, { ...idea, id: Date.now() }]
    setEditingIndex(null)
    setResearchIdeas(updated)
    setLocal('researchIdeas', updated)
    setToast('Research idea updated')
  }

  const workflowPercent = safeLearningPaths.length
    ? Math.round((Object.keys(learningPathProgress).length / safeLearningPaths.length) * 100)
    : 0

  const startPath = (pathId) => {
    const updated = { ...learningPathProgress, [pathId]: true }
    setLearningPathProgress(updated)
    setLocal('learningPathProgress', updated)
    setSelectedPathId(pathId)
  }

  const selectPath = (pathId) => {
    setSelectedPathId(pathId)
    if (!learningPathProgress[pathId]) {
      startPath(pathId)
    }
  }

  const selectPath = (pathId) => {
    setSelectedPathId(pathId)
    if (!learningPathProgress[pathId]) {
      startPath(pathId)
    }
  }

  const stats = {
    savedTopics: savedTopics.length,
    learnedTopics: learnedTopics.length,
    savedDatasets: savedDatasets.length,
    savedMentors: savedMentors.length,
    researchIdeas: researchIdeas.length,
    savedAiIotIdeas: savedAiIotIdeas.length,
    totalTopics: allTopics.length,
  }

  if (loading) {
    return <main className="container"><div className="skeleton hero-skeleton" /><div className="skeleton" /><div className="skeleton" /></main>
  }

  return (
    <div>
      <Navbar darkMode={darkMode} onToggleDarkMode={() => setDarkMode((prev) => !prev)} />
      <main className="container">
        <Hero workflowPercent={workflowPercent} />

        <MotionSection id="about" delay={60}>
          <p className="eyebrow">Tentang Platform</p>
          <h2 className="heading-md">About NIBM 7.0</h2>
          <p className="body-text">Platform edukasi dan riset Nanoimmunobiotechnomedicine untuk pelajar hingga profesional.</p>
        </MotionSection>

        <MotionSection className="grid about-grid" delay={100}>{userSegments.map((segment, i) => <div key={segment.title} style={{ transitionDelay: `${100 + i * 100}ms` }} className="motion-item"><UserSegmentCard {...segment} /></div>)}</MotionSection>

        <MotionSection id="paths" delay={130}>
          <p className="eyebrow">Belajar Terstruktur</p>
          <h2 className="heading-md">Learning Paths</h2>
          {safeLearningPaths.length === 0 ? (
            <article className="card">
              <h3>Learning paths are coming soon</h3>
              <p className="body-text">We are preparing structured paths. Please check back shortly.</p>
            </article>
          ) : (
            <div className="grid cols-2">
              {safeLearningPaths.map((path, idx) => {
              const Icon = pathIcons[idx] || Dna
              const isStarted = learningPathProgress[path.id]
              const progress = getPathProgress(isStarted)

              return (
                <article key={path.id} className="card learning-path-card">
                  <div className="meta-row"><div className="icon-pill"><Icon /></div><span className={`badge ${isStarted ? 'in-progress' : 'beginner'}`}>{isStarted ? 'In Progress' : 'Not Started'}</span></div>
                  <h3>{path.name}</h3>
                  <p className="body-text">{path.description}</p>
                  <p className="body-text">Estimated time: {path.duration}</p>
                  <div className="thin-progress"><div style={{ width: `${progress}%` }} /></div>
                  <a
                    className="btn-primary"
                    href="#path-detail"
                    onClick={() => selectPath(path.id)}
                  >
                    {isStarted ? 'Continue Path' : 'Start Path'}
                  </a>
                </article>
              )
              })}
            </div>
          )}
        </MotionSection>

        <MotionSection id="path-detail" delay={145}>
          <p className="eyebrow">Path Detail</p>
          <h2 className="heading-md">{selectedPath ? selectedPath.name : 'Learning Path Detail'}</h2>
          {selectedPath ? (
            <article className="card">
              <p className="body-text">{selectedPath.description}</p>
              <div className="tags">
                <span className="tag">{selectedPath.level}</span>
                <span className="tag accent">{selectedPath.category}</span>
                <span className="tag">{selectedPath.duration}</span>
              </div>
              <h3 style={{ marginTop: '16px' }}>Modules</h3>
              {selectedPath.materials.length > 0 ? (
                <ul>
                  {selectedPath.materials.map((material) => <li key={material}>{material}</li>)}
                </ul>
              ) : (
                <p className="body-text">Module details will be published soon.</p>
              )}
              <div className="actions">
                <button className="btn-primary" onClick={() => startPath(selectedPath.id)}>
                  {learningPathProgress[selectedPath.id] ? 'Continue Learning' : 'Start Learning'}
                </button>
                <a className="btn-secondary" href="#paths">Back to Learning Paths</a>
              </div>
            </article>
          ) : (
            <article className="card">
              <p className="body-text">No learning path selected yet. Start from the Learning Paths section above.</p>
            </article>
          )}
        </MotionSection>

        <MotionSection id="topics" delay={160}>
          <h2 className="heading-md">Topics</h2>
          <SearchFilter search={topicSearch} setSearch={setTopicSearch} filterValue={topicFilter} setFilterValue={setTopicFilter} options={['Beginner', 'Intermediate', 'Advanced', 'Biology', 'Technology', 'AI', 'Medicine', 'Research']} label="level/kategori" />
          <div className="topic-tabs" role="tablist" aria-label="Topic status filters">
            {topicTabs.map((tab) => <button key={tab} role="tab" aria-selected={tab === topicStatusFilter} className={`tab-btn ${tab === topicStatusFilter ? 'active' : ''}`} onClick={() => setTopicStatusFilter(tab)}>{tab}</button>)}
          </div>
          {filteredTopics.length === 0 ? <p className="card empty-state">No topics match your current filters.</p> : <div className="grid topic-grid">
            {filteredTopics.map((topic, i) => <div key={topic.id} className="motion-item" style={{ transitionDelay: `${i * 100}ms` }}><TopicCard topic={topic} status={getTopicStatus(topic.id)} isSaved={savedTopics.includes(topic.id)} onSave={(id) => toggleSaved(id, savedTopics, setSavedTopics, 'savedTopics', 'Topic updated')} onLearn={(id) => toggleSaved(id, learnedTopics, setLearnedTopics, 'learnedTopics', 'Progress updated')} /></div>)}
          </div>}
        </MotionSection>

        <MotionSection id="datasets" delay={190}>
          <div className="row-between"><h2 className="heading-md">Dataset & Big Data</h2><button className="btn-secondary" onClick={() => setDatasetView((v) => (v === 'card' ? 'table' : 'card'))}>View: {datasetView}</button></div>
          <SearchFilter search={datasetSearch} setSearch={setDatasetSearch} filterValue={datasetFilter} setFilterValue={setDatasetFilter} options={[...new Set(allDatasets.map((item) => item.category))]} label="kategori" />
          {datasetView === 'card' ? (
            filteredDatasets.length === 0 ? <p className="card empty-state">No datasets found for this search/filter.</p> : <div className="grid cols-3">{filteredDatasets.map((dataset, i) => <div key={dataset.id} className="motion-item" style={{ transitionDelay: `${i * 70}ms` }}><DatasetCard dataset={dataset} isSaved={savedDatasets.includes(dataset.id)} onSave={(id) => toggleSaved(id, savedDatasets, setSavedDatasets, 'savedDatasets', 'Dataset saved')} /></div>)}</div>
          ) : (
            filteredDatasets.length === 0 ? <p className="card empty-state">No datasets found for this search/filter.</p> : <div className="table-wrap card"><table><thead><tr><th>Name</th><th>Category</th><th>Format</th><th>Action</th></tr></thead><tbody>{filteredDatasets.map((d) => <tr key={d.id}><td>{d.name}</td><td>{d.category}</td><td>{d.format}</td><td><button className="btn-primary" onClick={() => toggleSaved(d.id, savedDatasets, setSavedDatasets, 'savedDatasets', 'Dataset saved')}>Save</button></td></tr>)}</tbody></table></div>
          )}
        </MotionSection>

        <MotionSection id="mentors" delay={220}><h2 className="heading-md">Tutors & Mentors</h2><SearchFilter search={mentorSearch} setSearch={setMentorSearch} filterValue="all" setFilterValue={() => {}} options={[]} label="mentor" />{filteredMentors.length === 0 ? <p className="card empty-state">No mentors match your search.</p> : <div className="grid cols-3">{filteredMentors.map((mentor, i) => <div key={mentor.id} className="motion-item" style={{ transitionDelay: `${i * 70}ms` }}><MentorCard mentor={mentor} isSaved={savedMentors.includes(mentor.id)} onSave={(id) => toggleSaved(id, savedMentors, setSavedMentors, 'savedMentors', 'Mentor saved')} /></div>)}</div>}</MotionSection>

        <MotionSection id="research" delay={250}><h2 className="heading-md">Research Hub</h2><div className="grid cols-2"><ResearchIdeaForm onSubmit={saveResearchIdea} editingIdea={editingIndex !== null ? researchIdeas[editingIndex] : null} onCancelEdit={() => setEditingIndex(null)} /><article className="card"><h3>Daftar Ide Riset</h3>{researchIdeas.map((idea, index) => <div className="item-block" key={idea.id}><h4>{idea.title}</h4><p className="body-text">{idea.background}</p><button className="btn-secondary" onClick={() => setEditingIndex(index)}>Edit</button></div>)}</article></div></MotionSection>

        <MotionSection id="aiiot" delay={280}><h2 className="heading-md">AI & IoT Lab</h2><SearchFilter search={aiSearch} setSearch={setAiSearch} filterValue={aiFilter} setFilterValue={setAiFilter} options={['Intermediate', 'Advanced']} label="difficulty" />{filteredAiIot.length === 0 ? <p className="card empty-state">No AI/IoT ideas found for this filter.</p> : <div className="grid cols-3">{filteredAiIot.map((idea) => <AiIotIdeaCard key={idea.id} idea={idea} isSaved={savedAiIotIdeas.includes(idea.id)} onSave={(id) => toggleSaved(id, savedAiIotIdeas, setSavedAiIotIdeas, 'savedAiIotIdeas', 'AI/IoT idea saved')} />)}</div>}</MotionSection>

        <MotionSection id="dashboard" delay={310}><h2 className="heading-md">Progress Dashboard</h2><DashboardStats stats={stats} /><div className="actions wrap"><button className="btn-secondary" onClick={() => { resetAllData(); window.location.reload() }}>Reset</button><button className="btn-secondary" onClick={exportAllData}>Export</button><label className="btn-primary btn-label">Import<input type="file" accept="application/json" onChange={(event) => importAllData(event.target.files?.[0], (ok) => setToast(ok ? 'Import success' : 'Import failed'))} /></label></div></MotionSection>
      </main>
      <Footer />
      {toast && <div className="toast">{toast}</div>}
    </div>
  )
}

export default App
