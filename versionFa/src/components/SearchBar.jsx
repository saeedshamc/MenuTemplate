export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="جست‌وجوی غذا، نوشیدنی، بستنی..."
        className="search-input"
      />
      {value && (
        <button className="search-clear" onClick={() => onChange('')} aria-label="پاک کردن">
          ✕
        </button>
      )}
    </div>
  )
}
