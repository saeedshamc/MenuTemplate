export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      aria-label="تغییر تم"
      title={isDark ? 'حالت روشن' : 'حالت تاریک'}
    >
      <span className={`toggle-track ${isDark ? 'dark' : 'light'}`}>
        <span className="toggle-thumb">{isDark ? '🌙' : '☀️'}</span>
      </span>
    </button>
  )
}
