export default function CategoryTabs({ categories, active, onSelect }) {
  return (
    <div className="scrollbar-none -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:px-0">
      {categories.map((cat) => {
        const isActive = active === cat.id
        return (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className="shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200"
            style={{
              borderColor: isActive ? 'var(--gold)' : 'var(--line)',
              background: isActive ? 'var(--gold)' : 'transparent',
              color: isActive ? 'var(--paper)' : 'var(--ink)',
            }}
          >
            {cat.label}
          </button>
        )
      })}
    </div>
  )
}
