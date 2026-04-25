import { useMemo, useState } from 'react'
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
import { aiIotIdeas, communities, datasets, learningPaths, mentors, topics, userSegments } from './data'
import { exportAllData, getLocal, importAllData, resetAllData, setLocal } from './utils/storage'

const withCustom = (base, custom) => [...base, ...custom]

function App() {
  const [savedTopics, setSavedTopics] = useState(getLocal('savedTopics'))
  const [learnedTopics, setLearnedTopics] = useState(getLocal('learnedTopics'))
  const [savedDatasets, setSavedDatasets] = useState(getLocal('savedDatasets'))
  const [savedMentors, setSavedMentors] = useState(getLocal('savedMentors'))
  const [researchIdeas, setResearchIdeas] = useState(getLocal('researchIdeas'))
  const [savedAiIotIdeas, setSavedAiIotIdeas] = useState(getLocal('savedAiIotIdeas'))
  const [communityNotes, setCommunityNotes] = useState(getLocal('communityNotes'))
  const [customTopics, setCustomTopics] = useState(getLocal('customTopics'))
  const [customDatasets, setCustomDatasets] = useState(getLocal('customDatasets'))
  const [customMentors, setCustomMentors] = useState(getLocal('customMentors'))
  const [customAiIotIdeas, setCustomAiIotIdeas] = useState(getLocal('customAiIotIdeas'))
  const [learningPathProgress, setLearningPathProgress] = useState(getLocal('learningPathProgress', {}))

  const [topicSearch, setTopicSearch] = useState('')
  const [topicFilter, setTopicFilter] = useState('all')
  const [datasetSearch, setDatasetSearch] = useState('')
  const [datasetFilter, setDatasetFilter] = useState('all')
  const [mentorSearch, setMentorSearch] = useState('')
  const [aiSearch, setAiSearch] = useState('')
  const [aiFilter, setAiFilter] = useState('all')
  const [noteInput, setNoteInput] = useState('')
  const [editingIndex, setEditingIndex] = useState(null)

  const allTopics = withCustom(topics, customTopics)
  const allDatasets = withCustom(datasets, customDatasets)
  const allMentors = withCustom(mentors, customMentors)
  const allAiIot = withCustom(aiIotIdeas, customAiIotIdeas)

  const toggleSaved = (id, current, setter, key) => {
    const updated = current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    setter(updated)
    setLocal(key, updated)
  }

  const filteredTopics = useMemo(() => allTopics.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(topicSearch.toLowerCase())
    const matchesFilter = topicFilter === 'all' || item.level === topicFilter || item.category === topicFilter
    return matchesSearch && matchesFilter
  }), [allTopics, topicSearch, topicFilter])

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

  const addNote = () => {
    if (!noteInput.trim()) return
    const updated = [...communityNotes, { id: Date.now(), text: noteInput }]
    setCommunityNotes(updated)
    setLocal('communityNotes', updated)
    setNoteInput('')
  }

  const saveResearchIdea = (idea) => {
    let updated = []
    if (editingIndex !== null) {
      updated = researchIdeas.map((item, idx) => (idx === editingIndex ? { ...idea, id: item.id } : item))
      setEditingIndex(null)
    } else {
      updated = [...researchIdeas, { ...idea, id: Date.now() }]
    }
    setResearchIdeas(updated)
    setLocal('researchIdeas', updated)
  }

  const deleteResearchIdea = (id) => {
    const updated = researchIdeas.filter((item) => item.id !== id)
    setResearchIdeas(updated)
    setLocal('researchIdeas', updated)
  }

  const startPath = (pathId) => {
    const updated = { ...learningPathProgress, [pathId]: true }
    setLearningPathProgress(updated)
    setLocal('learningPathProgress', updated)
  }

  const resetData = () => {
    resetAllData()
    window.location.reload()
  }

  const handleImport = (event) => {
    const file = event.target.files?.[0]
    if (!file) return
    importAllData(file, (ok) => {
      alert(ok ? 'Import berhasil. Halaman akan dimuat ulang.' : 'Import gagal. Periksa file JSON.')
      if (ok) window.location.reload()
    })
  }

  const handleAddCustom = (event, type) => {
    event.preventDefault()
    const formData = Object.fromEntries(new FormData(event.currentTarget).entries())
    const item = { id: `${type}-${Date.now()}`, ...formData }
    if (type === 'topic') {
      const updated = [...customTopics, item]
      setCustomTopics(updated)
      setLocal('customTopics', updated)
    }
    if (type === 'dataset') {
      const updated = [...customDatasets, item]
      setCustomDatasets(updated)
      setLocal('customDatasets', updated)
    }
    if (type === 'mentor') {
      const updated = [...customMentors, item]
      setCustomMentors(updated)
      setLocal('customMentors', updated)
    }
    if (type === 'aiiot') {
      const updated = [...customAiIotIdeas, item]
      setCustomAiIotIdeas(updated)
      setLocal('customAiIotIdeas', updated)
    }
    event.currentTarget.reset()
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

  return (
    <div>
      <Navbar />
      <main className="container">
        <Hero />

        <section id="about">
          <h2>About NiBTM 7.0</h2>
          <p>
            NiBTM 7.0 adalah platform edukasi dan riset Nanoimmunobiotechnomedicine yang ramah untuk siswa SMP/SMA,
            tetap relevan untuk mahasiswa, guru, dosen, peneliti, tenaga kesehatan, dan profesional biomedis.
          </p>
        </section>

        <section className="grid cols-4">
          {userSegments.map((segment) => <UserSegmentCard key={segment.title} {...segment} />)}
        </section>

        <section id="paths">
          <h2>Learning Paths</h2>
          <div className="grid cols-2">
            {learningPaths.map((path) => (
              <article key={path.id} className="card">
                <h3>{path.name}</h3>
                <p>{path.description}</p>
                <p><strong>Durasi:</strong> {path.duration}</p>
                <ul>{path.materials.map((material) => <li key={material}>{material}</li>)}</ul>
                <button onClick={() => startPath(path.id)}>
                  {learningPathProgress[path.id] ? 'In Progress' : 'Start'}
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="topics">
          <h2>Topics</h2>
          <SearchFilter
            search={topicSearch}
            setSearch={setTopicSearch}
            filterValue={topicFilter}
            setFilterValue={setTopicFilter}
            options={['Beginner', 'Intermediate', 'Advanced', 'Biology', 'Technology', 'AI', 'Medicine', 'Research']}
            label="level/kategori"
          />
          <div className="grid cols-3">
            {filteredTopics.map((topic) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                isSaved={savedTopics.includes(topic.id)}
                isLearned={learnedTopics.includes(topic.id)}
                onSave={(id) => toggleSaved(id, savedTopics, setSavedTopics, 'savedTopics')}
                onLearn={(id) => toggleSaved(id, learnedTopics, setLearnedTopics, 'learnedTopics')}
              />
            ))}
          </div>
        </section>

        <section id="datasets">
          <h2>Dataset & Big Data</h2>
          <SearchFilter
            search={datasetSearch}
            setSearch={setDatasetSearch}
            filterValue={datasetFilter}
            setFilterValue={setDatasetFilter}
            options={[...new Set(allDatasets.map((item) => item.category))]}
            label="kategori"
          />
          <div className="grid cols-3">
            {filteredDatasets.map((dataset) => (
              <DatasetCard
                key={dataset.id}
                dataset={dataset}
                isSaved={savedDatasets.includes(dataset.id)}
                onSave={(id) => toggleSaved(id, savedDatasets, setSavedDatasets, 'savedDatasets')}
              />
            ))}
          </div>
        </section>

        <section id="mentors">
          <h2>Tutors & Mentors</h2>
          <SearchFilter search={mentorSearch} setSearch={setMentorSearch} filterValue="all" setFilterValue={() => {}} />
          <div className="grid cols-3">
            {filteredMentors.map((mentor) => (
              <MentorCard
                key={mentor.id}
                mentor={mentor}
                isSaved={savedMentors.includes(mentor.id)}
                onSave={(id) => toggleSaved(id, savedMentors, setSavedMentors, 'savedMentors')}
              />
            ))}
          </div>
        </section>

        <section id="community">
          <h2>Student Community</h2>
          <div className="grid cols-2">
            <article className="card">
              <h3>Daftar Komunitas</h3>
              <ul>{communities.map((community) => <li key={community}>{community}</li>)}</ul>
            </article>
            <article className="card">
              <h3>Forum Diskusi Dummy</h3>
              <p>Contoh topik: “Bagaimana memulai project RNA-seq untuk pemula?”</p>
              <div className="toolbar">
                <input value={noteInput} onChange={(e) => setNoteInput(e.target.value)} placeholder="Tambah catatan diskusi" />
                <button onClick={addNote}>Tambah Catatan</button>
              </div>
              <ul>{communityNotes.map((note) => <li key={note.id}>{note.text}</li>)}</ul>
            </article>
          </div>
        </section>

        <section id="research">
          <h2>Research Hub</h2>
          <div className="grid cols-2">
            <ResearchIdeaForm
              onSubmit={saveResearchIdea}
              editingIdea={editingIndex !== null ? researchIdeas[editingIndex] : null}
              onCancelEdit={() => setEditingIndex(null)}
            />
            <article className="card">
              <h3>Daftar Ide Riset</h3>
              {researchIdeas.length === 0 && <p>Belum ada ide riset. Mulai dari ide kecilmu hari ini.</p>}
              {researchIdeas.map((idea, index) => (
                <div key={idea.id} className="item-block">
                  <h4>{idea.title}</h4>
                  <p><strong>Bidang:</strong> {idea.field}</p>
                  <p><strong>Status:</strong> {idea.status}</p>
                  <p>{idea.background}</p>
                  <div className="actions">
                    <button className="outline" onClick={() => setEditingIndex(index)}>Edit</button>
                    <button onClick={() => deleteResearchIdea(idea.id)}>Hapus</button>
                  </div>
                </div>
              ))}
            </article>
          </div>
        </section>

        <section id="aiiot">
          <h2>AI & IoT Lab</h2>
          <SearchFilter
            search={aiSearch}
            setSearch={setAiSearch}
            filterValue={aiFilter}
            setFilterValue={setAiFilter}
            options={['Intermediate', 'Advanced']}
            label="difficulty"
          />
          <div className="grid cols-3">
            {filteredAiIot.map((idea) => (
              <AiIotIdeaCard
                key={idea.id}
                idea={idea}
                isSaved={savedAiIotIdeas.includes(idea.id)}
                onSave={(id) => toggleSaved(id, savedAiIotIdeas, setSavedAiIotIdeas, 'savedAiIotIdeas')}
              />
            ))}
          </div>
        </section>

        <section id="dashboard">
          <h2>Progress Dashboard</h2>
          <DashboardStats stats={stats} />
          <div className="actions wrap">
            <button onClick={resetData}>Reset All Data</button>
            <button className="outline" onClick={exportAllData}>Export Data as JSON</button>
            <label className="btn-label">
              Import Data from JSON
              <input type="file" accept="application/json" onChange={handleImport} />
            </label>
          </div>
        </section>

        <section id="admin">
          <h2>Admin Mini Panel</h2>
          <p>Tambahkan data baru dan otomatis tampil di halaman terkait.</p>
          <div className="grid cols-2">
            <form className="card form-grid" onSubmit={(e) => handleAddCustom(e, 'topic')}>
              <h3>Tambah Topik Baru</h3>
              <input name="title" placeholder="Judul" required />
              <input name="description" placeholder="Deskripsi" required />
              <select name="level"><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select>
              <select name="category"><option>Biology</option><option>Technology</option><option>AI</option><option>Medicine</option><option>Research</option></select>
              <button type="submit">Tambah Topik</button>
            </form>
            <form className="card form-grid" onSubmit={(e) => handleAddCustom(e, 'dataset')}>
              <h3>Tambah Dataset Baru</h3>
              <input name="name" placeholder="Nama Dataset" required />
              <input name="description" placeholder="Deskripsi" required />
              <input name="format" placeholder="Format" required />
              <input name="samples" placeholder="Jumlah sampel" required />
              <input name="category" placeholder="Kategori" required />
              <button type="submit">Tambah Dataset</button>
            </form>
            <form className="card form-grid" onSubmit={(e) => handleAddCustom(e, 'mentor')}>
              <h3>Tambah Mentor Baru</h3>
              <input name="name" placeholder="Nama" required />
              <input name="expertise" placeholder="Bidang keahlian" required />
              <input name="guidanceLevel" placeholder="Level bimbingan" required />
              <input name="topics" placeholder="Topik yang diajarkan" required />
              <button type="submit">Tambah Mentor</button>
            </form>
            <form className="card form-grid" onSubmit={(e) => handleAddCustom(e, 'aiiot')}>
              <h3>Tambah Ide AI-IoT Baru</h3>
              <input name="name" placeholder="Nama ide" required />
              <input name="description" placeholder="Deskripsi" required />
              <input name="targetUsers" placeholder="Target pengguna" required />
              <input name="sensors" placeholder="Sensor IoT" required />
              <input name="aiRole" placeholder="Peran AI" required />
              <select name="difficulty"><option>Intermediate</option><option>Advanced</option></select>
              <button type="submit">Tambah Ide AI-IoT</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
