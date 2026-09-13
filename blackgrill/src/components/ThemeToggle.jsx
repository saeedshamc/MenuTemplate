export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      aria-label={theme === 'dark' ? 'حالت روشن' : 'حالت تاریک'}
      type="button"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}
