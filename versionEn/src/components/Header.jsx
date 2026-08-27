import Logo from './Logo'
import ThemeToggle from './ThemeToggle'

export default function Header({ theme, onToggleTheme }) {
  return (
    <header
      className="sticky top-0 z-30 border-b backdrop-blur-sm"
      style={{ borderColor: 'var(--line)', background: 'color-mix(in srgb, var(--paper) 88%, transparent)' }}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <div className="flex items-center gap-3">
          <Logo size={38} style={{ color: 'var(--gold)' }} />
          <div>
            <p className="font-display text-xl leading-tight tracking-tight sm:text-2xl">Salt &amp; Sundae</p>
            <p className="text-[0.65rem] uppercase tracking-[0.2em]" style={{ color: 'var(--ink-soft)' }}>
              Table · Counter · Scoop
            </p>
          </div>
        </div>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </header>
  )
}
