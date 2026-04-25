function DashboardStats({ stats }) {
  const progress = stats.totalTopics ? Math.round((stats.learnedTopics / stats.totalTopics) * 100) : 0
  return (
    <section className="grid cols-3">
      <article className="card"><h3>Total topik tersimpan</h3><p>{stats.savedTopics}</p></article>
      <article className="card"><h3>Total topik selesai</h3><p>{stats.learnedTopics}</p></article>
      <article className="card"><h3>Total dataset tersimpan</h3><p>{stats.savedDatasets}</p></article>
      <article className="card"><h3>Total mentor tersimpan</h3><p>{stats.savedMentors}</p></article>
      <article className="card"><h3>Total ide riset</h3><p>{stats.researchIdeas}</p></article>
      <article className="card"><h3>Total ide AI-IoT</h3><p>{stats.savedAiIotIdeas}</p></article>
      <article className="card col-span">
        <h3>Progress Belajar</h3>
        <div className="progress-bar"><div style={{ width: `${progress}%` }} /></div>
        <p>{progress}% topik selesai dipelajari</p>
      </article>
    </section>
  )
}

export default DashboardStats
