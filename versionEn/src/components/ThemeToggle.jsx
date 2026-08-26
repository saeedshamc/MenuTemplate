export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className="relative flex h-9 w-16 items-center rounded-full border px-1 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      style={{
        borderColor: 'var(--line)',
        background: 'var(--paper-alt)',
        '--tw-ring-color': 'var(--gold)',
      }}
    >
      <span
        className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-display transition-transform duration-300 ease-out"
        style={{
          background: 'var(--gold)',
          color: 'var(--paper)',
          transform: isDark ? 'translateX(28px)' : 'translateX(0px)',
        }}
      >
        {isDark ? '☾' : '☼'}
      </span>
    </button>
  )
}
