function SearchFilter({ search, setSearch, filterValue, setFilterValue, options = [], label = 'Filter' }) {
  return (
    <div className="toolbar">
      <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Cari..." />
      {options.length > 0 && (
        <select value={filterValue} onChange={(e) => setFilterValue(e.target.value)}>
          <option value="all">Semua {label}</option>
          {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      )}
    </div>
  )
}

export default SearchFilter
