export default function SearchBar({ value, onChange }) {
  return (
    <label className="search-bar">
      <span className="search-icon" aria-hidden>⌕</span>
      <input
        type="search"
        placeholder="جستجو در منو: هات‌داگ، سوسیس، سیب‌زمینی..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  )
}
