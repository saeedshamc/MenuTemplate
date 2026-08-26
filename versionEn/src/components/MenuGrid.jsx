import MenuCard from './MenuCard'

export default function MenuGrid({ items, query }) {
  if (items.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="font-display text-2xl">Nothing on the board for that.</p>
        <p className="mt-2 text-sm" style={{ color: 'var(--ink-soft)' }}>
          {query
            ? `No matches for “${query}”. Try a different dish, drink, or dietary tag.`
            : 'Try another category.'}
        </p>
      </div>
    )
  }

  const grouped = items.reduce((acc, item) => {
    acc[item.course] = acc[item.course] ? [...acc[item.course], item] : [item]
    return acc
  }, {})

  return (
    <div className="flex flex-col gap-10">
      {Object.entries(grouped).map(([course, courseItems]) => (
        <section key={course}>
          <h2
            className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em]"
            style={{ color: 'var(--ink-soft)' }}
          >
            {course}
            <span className="h-px flex-1" style={{ background: 'var(--line)' }} />
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {courseItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
