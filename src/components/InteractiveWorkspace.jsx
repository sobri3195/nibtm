import { useMemo, useState } from 'react'
import { BrainCircuit, CheckCircle2, Download, FileText, Lightbulb, MessageSquareText, RotateCcw, Save, Upload, UsersRound } from 'lucide-react'
import Button from './ui/Button'
import Card from './ui/Card'
import Badge from './ui/Badge'
import Progress from './ui/Progress'
import SectionHeader from './SectionHeader'
import { cn } from '../lib/utils'
import { exportAllData, getLocal, importAllData, resetAllData, setLocal } from '../utils/storage'
import { readLearningProgress } from '../utils/learningProgress'

const tabs = [
  { key: 'dashboard', label: 'Dashboard', icon: CheckCircle2 },
  { key: 'community', label: 'Community', icon: MessageSquareText },
  { key: 'research', label: 'Research Hub', icon: FileText },
  { key: 'aiiot', label: 'AI & IoT Lab', icon: BrainCircuit },
  { key: 'admin', label: 'Admin Mini Panel', icon: Upload },
]

const defaultIdea = {
  title: '',
  field: 'Translational AI',
  objective: '',
  collaboration: '',
  status: 'Draft',
}

const aiIdeaTemplates = [
  ['Smart Vaccine Cold Chain', 'IoT suhu dan kelembapan dengan AI anomaly detection untuk menjaga stabilitas vaksin.'],
  ['Wearable Recovery Coach', 'Sensor wearable memantau pemulihan pasien dan merekomendasikan edukasi personal.'],
  ['NanoTheranostics Tracker', 'Dashboard lab untuk melacak nanopartikel, biomarker, dan outcome uji biologis.'],
  ['Clinical Triage Companion', 'Model AI membantu prioritas konsultasi berbasis gejala, riwayat, dan sinyal vital.'],
]

const createId = (prefix) => `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`

const readStoredWorkspace = () => ({
  savedTopics: getLocal('savedTopics', []),
  learnedTopics: getLocal('learnedTopics', []),
  savedDatasets: getLocal('savedDatasets', []),
  savedMentors: getLocal('savedMentors', []),
  communityNotes: getLocal('communityNotes', []),
  researchIdeas: getLocal('researchIdeas', []),
  savedAiIotIdeas: getLocal('savedAiIotIdeas', []),
})

function MetricCard({ label, value, detail }) {
  return (
    <Card className="p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{label}</p>
      <p className="mt-2 text-3xl font-black text-slate-900 dark:text-white">{value}</p>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{detail}</p>
    </Card>
  )
}

export default function InteractiveWorkspace({ data }) {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [workspace, setWorkspace] = useState(readStoredWorkspace)
  const [note, setNote] = useState('')
  const [idea, setIdea] = useState(defaultIdea)
  const [importStatus, setImportStatus] = useState('')

  const learningProgress = useMemo(() => readLearningProgress(), [workspace])
  const startedPaths = Object.values(learningProgress).filter((entry) => entry?.started).length
  const completedPaths = Object.values(learningProgress).filter((entry) => Number(entry?.percent) >= 100).length
  const portfolioScore = Math.min(100, (startedPaths * 12) + (workspace.learnedTopics.length * 8) + (workspace.savedDatasets.length * 6) + (workspace.researchIdeas.length * 10) + (workspace.savedAiIotIdeas.length * 6))

  const quickTopics = data.topics.slice(0, 6)
  const quickDatasets = data.datasets.slice(0, 4)
  const quickMentors = data.mentors.slice(0, 3)

  const refreshWorkspace = () => setWorkspace(readStoredWorkspace())

  const updateList = (key, nextList) => {
    setLocal(key, nextList)
    setWorkspace((current) => ({ ...current, [key]: nextList }))
  }

  const toggleItem = (key, item) => {
    const current = workspace[key]
    const exists = current.some((entry) => entry.id === item.id)
    updateList(key, exists ? current.filter((entry) => entry.id !== item.id) : [...current, item])
  }

  const addCommunityNote = () => {
    const trimmed = note.trim()
    if (!trimmed) return
    updateList('communityNotes', [{ id: createId('note'), text: trimmed, createdAt: new Date().toISOString() }, ...workspace.communityNotes])
    setNote('')
  }

  const saveResearchIdea = (event) => {
    event.preventDefault()
    if (!idea.title.trim() || !idea.objective.trim()) return
    updateList('researchIdeas', [{ ...idea, id: createId('research'), createdAt: new Date().toISOString() }, ...workspace.researchIdeas])
    setIdea(defaultIdea)
  }

  const generateAiIotIdea = () => {
    const [title, description] = aiIdeaTemplates[workspace.savedAiIotIdeas.length % aiIdeaTemplates.length]
    updateList('savedAiIotIdeas', [{ id: createId('aiiot'), title, description, readiness: 45 + (workspace.savedAiIotIdeas.length % 4) * 12 }, ...workspace.savedAiIotIdeas])
  }

  const handleImport = (event) => {
    const file = event.target.files?.[0]
    if (!file) return
    importAllData(file, (success) => {
      setImportStatus(success ? 'Import berhasil. Workspace diperbarui.' : 'Import gagal. Pastikan file JSON valid.')
      refreshWorkspace()
    })
    event.target.value = ''
  }

  const handleReset = () => {
    resetAllData()
    refreshWorkspace()
    setImportStatus('Semua data lokal NiBTM telah direset.')
  }

  return (
    <section id="workspace" className="bg-slate-50 py-16 dark:bg-slate-900 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10 xl:px-16">
        <SectionHeader badge="NiBTM Workspace" title="Simpan progres, bangun komunitas, dan kelola portofolio riset dalam satu panel." />

        <div className="mb-6 flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button key={tab.key} type="button" onClick={() => setActiveTab(tab.key)} className={cn('inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition', activeTab === tab.key ? 'bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950' : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:ring-white/10')}>
                <Icon size={16} /> {tab.label}
              </button>
            )
          })}
        </div>

        {activeTab === 'dashboard' && (
          <div className="grid gap-4 lg:grid-cols-[1fr_360px]">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <MetricCard label="Learning paths" value={startedPaths} detail={`${completedPaths} completed`} />
              <MetricCard label="Saved topics" value={workspace.savedTopics.length} detail={`${workspace.learnedTopics.length} marked learned`} />
              <MetricCard label="Datasets" value={workspace.savedDatasets.length} detail="ready for analysis" />
              <MetricCard label="Research ideas" value={workspace.researchIdeas.length} detail="drafted locally" />
            </div>
            <Card className="border-cyan-200 bg-white p-5 dark:border-cyan-400/20 dark:bg-slate-950/50">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">Portfolio readiness</p>
                  <p className="mt-1 text-3xl font-black text-slate-900 dark:text-white">{portfolioScore}%</p>
                </div>
                <Badge className="bg-cyan-50 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">Local-first</Badge>
              </div>
              <Progress className="mt-5" value={portfolioScore} />
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Skor naik saat pengguna memulai path, menyimpan topik/dataset, menulis ide riset, dan membuat konsep AI-IoT.</p>
            </Card>
          </div>
        )}

        {activeTab === 'community' && (
          <div className="grid gap-4 lg:grid-cols-[420px_1fr]">
            <Card className="p-5">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white"><UsersRound size={20} /><h3 className="font-bold">Community Notes</h3></div>
              <textarea value={note} onChange={(event) => setNote(event.target.value)} placeholder="Tulis catatan diskusi, pertanyaan mentor, atau rencana kolaborasi..." className="mt-4 min-h-32 w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm outline-none focus:border-cyan-400 dark:border-white/10 dark:bg-slate-900" />
              <Button className="mt-3 w-full" onClick={addCommunityNote}><Save size={16} /> Simpan catatan</Button>
            </Card>
            <div className="grid gap-3">
              {workspace.communityNotes.length ? workspace.communityNotes.map((item) => (
                <Card key={item.id} className="p-4"><p className="text-sm text-slate-700 dark:text-slate-200">{item.text}</p><p className="mt-2 text-xs text-slate-400">{new Date(item.createdAt).toLocaleString()}</p></Card>
              )) : <Card className="p-8 text-center text-sm text-slate-500 dark:text-slate-400">Belum ada catatan komunitas.</Card>}
            </div>
          </div>
        )}

        {activeTab === 'research' && (
          <div className="grid gap-4 lg:grid-cols-[420px_1fr]">
            <Card as="form" className="p-5" onSubmit={saveResearchIdea}>
              <h3 className="font-bold text-slate-900 dark:text-white">Research Idea Builder</h3>
              <input value={idea.title} onChange={(event) => setIdea((current) => ({ ...current, title: event.target.value }))} placeholder="Judul riset" className="mt-4 w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm outline-none dark:border-white/10 dark:bg-slate-900" required />
              <input value={idea.field} onChange={(event) => setIdea((current) => ({ ...current, field: event.target.value }))} placeholder="Bidang" className="mt-3 w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm outline-none dark:border-white/10 dark:bg-slate-900" />
              <textarea value={idea.objective} onChange={(event) => setIdea((current) => ({ ...current, objective: event.target.value }))} placeholder="Tujuan dan outcome yang diharapkan" className="mt-3 min-h-28 w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm outline-none dark:border-white/10 dark:bg-slate-900" required />
              <input value={idea.collaboration} onChange={(event) => setIdea((current) => ({ ...current, collaboration: event.target.value }))} placeholder="Potensi kolaborasi" className="mt-3 w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm outline-none dark:border-white/10 dark:bg-slate-900" />
              <Button className="mt-3 w-full" type="submit">Simpan ide riset</Button>
            </Card>
            <div className="grid gap-3">
              {workspace.researchIdeas.length ? workspace.researchIdeas.map((item) => (
                <Card key={item.id} className="p-4"><Badge>{item.status}</Badge><h4 className="mt-3 font-bold text-slate-900 dark:text-white">{item.title}</h4><p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.field} • {item.objective}</p><p className="mt-2 text-xs text-cyan-700 dark:text-cyan-300">Kolaborasi: {item.collaboration || 'TBD'}</p></Card>
              )) : <Card className="p-8 text-center text-sm text-slate-500 dark:text-slate-400">Belum ada ide riset tersimpan.</Card>}
            </div>
          </div>
        )}

        {activeTab === 'aiiot' && (
          <div className="grid gap-4 lg:grid-cols-[360px_1fr]">
            <Card className="p-5">
              <Lightbulb className="text-cyan-500" size={28} />
              <h3 className="mt-3 font-bold text-slate-900 dark:text-white">AI-IoT Idea Generator</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Buat konsep cepat untuk sensor, model AI, dan translasi klinis.</p>
              <Button className="mt-4 w-full" onClick={generateAiIotIdea}>Generate konsep</Button>
            </Card>
            <div className="grid gap-3 md:grid-cols-2">
              {workspace.savedAiIotIdeas.map((item) => (
                <Card key={item.id} className="p-4"><h4 className="font-bold text-slate-900 dark:text-white">{item.title}</h4><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.description}</p><Progress className="mt-4" value={item.readiness} /><p className="mt-1 text-xs text-slate-500">Readiness {item.readiness}%</p></Card>
              ))}
              {!workspace.savedAiIotIdeas.length && <Card className="p-8 text-center text-sm text-slate-500 dark:text-slate-400 md:col-span-2">Belum ada konsep AI-IoT tersimpan.</Card>}
            </div>
          </div>
        )}

        {activeTab === 'admin' && (
          <div className="grid gap-4 lg:grid-cols-3">
            <Card className="p-5"><h3 className="font-bold text-slate-900 dark:text-white">Quick Save</h3><div className="mt-4 space-y-2">{quickTopics.map((topic) => <button key={topic.title} type="button" onClick={() => toggleItem('savedTopics', { id: topic.title, title: topic.title })} className="flex w-full items-center justify-between rounded-xl bg-slate-100 px-3 py-2 text-left text-sm dark:bg-slate-800"><span>{topic.title}</span><Badge>{workspace.savedTopics.some((entry) => entry.id === topic.title) ? 'Saved' : 'Save'}</Badge></button>)}</div></Card>
            <Card className="p-5"><h3 className="font-bold text-slate-900 dark:text-white">Dataset & Mentor</h3><div className="mt-4 space-y-2">{quickDatasets.map((dataset) => <button key={dataset.name} type="button" onClick={() => toggleItem('savedDatasets', { id: dataset.name, title: dataset.name })} className="block w-full rounded-xl bg-slate-100 px-3 py-2 text-left text-sm dark:bg-slate-800">{dataset.name}</button>)}{quickMentors.map((mentor) => <button key={mentor.name} type="button" onClick={() => toggleItem('savedMentors', { id: mentor.name, title: mentor.name })} className="block w-full rounded-xl bg-cyan-50 px-3 py-2 text-left text-sm text-cyan-800 dark:bg-cyan-400/10 dark:text-cyan-200">{mentor.name}</button>)}</div></Card>
            <Card className="p-5"><h3 className="font-bold text-slate-900 dark:text-white">Data Utility</h3><Button className="mt-4 w-full" onClick={exportAllData}><Download size={16} /> Export JSON</Button><label className="mt-3 flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 dark:border-white/10 dark:text-slate-200"><Upload size={16} /> Import JSON<input type="file" accept="application/json" onChange={handleImport} className="sr-only" /></label><Button variant="secondary" className="mt-3 w-full" onClick={handleReset}><RotateCcw size={16} /> Reset local data</Button>{importStatus && <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{importStatus}</p>}</Card>
          </div>
        )}
      </div>
    </section>
  )
}
