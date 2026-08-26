export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative">
      <span
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base"
        style={{ color: 'var(--ink-soft)' }}
        aria-hidden="true"
      >
        ⌕
      </span>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search the menu — “salmon”, “vegan”, “sundae”…"
        className="w-full rounded-full border py-3 pl-11 pr-4 text-sm outline-none transition-colors focus-visible:ring-2"
        style={{
          borderColor: 'var(--line)',
          background: 'var(--paper-alt)',
          color: 'var(--ink)',
          '--tw-ring-color': 'var(--gold)',
        }}
      />
    </div>
  )
}
