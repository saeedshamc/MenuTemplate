const accentByCategory = {
  restaurant: 'var(--stamp)',
  cafe: 'var(--gold)',
  icecream: 'var(--pistachio)',
}

const tagLabels = {
  vegan: 'Vegan',
  vegetarian: 'Veg',
  'gluten-free': 'GF',
  seafood: 'Seafood',
  signature: 'Signature',
}

export default function MenuCard({ item }) {
  const accent = accentByCategory[item.category] ?? 'var(--gold)'

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl border shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
      style={{ borderColor: 'var(--line)', background: 'var(--paper-alt)' }}
    >
      <div className="relative h-36 w-full overflow-hidden sm:h-40">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span
          className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white shadow-sm"
          style={{ background: accent }}
        >
          {item.course}
        </span>
      </div>

      <div className="flex flex-1">
        <div className="flex-1 px-5 py-4">
          <h3 className="font-display text-lg leading-snug sm:text-xl">{item.name}</h3>
          <p className="mt-1 text-sm leading-snug" style={{ color: 'var(--ink-soft)' }}>
            {item.description}
          </p>
          {item.tags.length > 0 && (
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide"
                  style={{ borderColor: 'var(--line)', color: 'var(--ink-soft)' }}
                >
                  {tagLabels[tag] ?? tag}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div
          className="ticket-notch relative flex w-24 shrink-0 flex-col items-center justify-center border-l border-dashed sm:w-28"
          style={{ borderColor: 'var(--line)' }}
        >
          <span className="font-mono-price text-lg font-semibold sm:text-xl">
            ${item.price.toFixed(2)}
          </span>
        </div>
      </div>
    </article>
  )
}
