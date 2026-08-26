import ThemeToggle from './ThemeToggle'

export default function Header({ theme, onToggleTheme }) {
  return (
    <header
      className="sticky top-0 z-30 border-b backdrop-blur-sm"
      style={{ borderColor: 'var(--line)', background: 'color-mix(in srgb, var(--paper) 88%, transparent)' }}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <div>
          <p className="font-display text-2xl tracking-tight sm:text-3xl">
            No. <span style={{ color: 'var(--stamp)' }}>04</span> Comptoir
          </p>
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--ink-soft)' }}>
            Table · Counter · Scoop
          </p>
        </div>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </header>
  )
}
