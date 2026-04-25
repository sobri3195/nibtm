function SearchFilter({ search, setSearch, filterValue, setFilterValue, options = [], label = 'Filter', placeholder = 'Cari...' }) {
  return (
    <div className="toolbar card" role="search" aria-label={`Search ${label}`}>
      <input aria-label="Search input" value={search} onChange={(e) => setSearch(e.target.value)} placeholder={placeholder} />
      {options.length > 0 && (
        <select aria-label={`Filter ${label}`} value={filterValue} onChange={(e) => setFilterValue(e.target.value)}>
          <option value="all">Semua {label}</option>
          {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      )}
    </div>
  )
}

export default SearchFilter
