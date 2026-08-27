import Logo from './Logo'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1642851401295-b99357ccc3ba?auto=format&fit=crop&w=1800&q=80"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(15,11,8,0.55) 0%, rgba(15,11,8,0.72) 55%, var(--paper) 100%)',
          }}
        />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-5 py-16 text-center sm:py-20">
        <Logo size={104} className="text-[#F2E9D8] drop-shadow-sm" />
        <p className="max-w-md text-sm text-[#E8DCC6] sm:text-base">
          One roof, three counters — a full-service table, an all-day café, and a scoop shop.
          Search the whole menu below, or browse by counter.
        </p>
      </div>
    </section>
  )
}
