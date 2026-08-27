import { useEffect, useMemo, useState } from 'react'
import { sections, menuItems } from './data/menuData'
import ThemeToggle from './components/ThemeToggle'
import SearchBar from './components/SearchBar'
import MenuCard from './components/MenuCard'

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('menu-theme') || 'light')
  const [activeSection, setActiveSection] = useState('all')
  const [activeCategory, setActiveCategory] = useState('all')
  const [query, setQuery] = useState('')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('menu-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  // دسته‌های موجود بر اساس بخش انتخاب‌شده
  const categories = useMemo(() => {
    const pool = activeSection === 'all' ? menuItems : menuItems.filter((i) => i.section === activeSection)
    return ['all', ...Array.from(new Set(pool.map((i) => i.category)))]
  }, [activeSection])

  useEffect(() => {
    setActiveCategory('all')
  }, [activeSection])

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchSection = activeSection === 'all' || item.section === activeSection
      const matchCategory = activeCategory === 'all' || item.category === activeCategory
      const q = query.trim().toLowerCase()
      const matchQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      return matchSection && matchCategory && matchQuery
    })
  }, [activeSection, activeCategory, query])

  return (
    <div className="app">
      <header className="header">
        <div className="header-top">
          <div className="brand">
            <span className="brand-icon">🍴</span>
            <div>
              <h1>ذائقه</h1>
              <p>رستوران · کافه · بستنی‌فروشی</p>
            </div>
          </div>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>

        <SearchBar value={query} onChange={setQuery} />

        <nav className="sections">
          <button
            className={`section-chip ${activeSection === 'all' ? 'active' : ''}`}
            onClick={() => setActiveSection('all')}
          >
            <span>🧾</span> همه
          </button>
          {sections.map((s) => (
            <button
              key={s.id}
              className={`section-chip ${activeSection === s.id ? 'active' : ''}`}
              onClick={() => setActiveSection(s.id)}
            >
              <span>{s.icon}</span> {s.label}
            </button>
          ))}
        </nav>

        {categories.length > 1 && (
          <div className="categories">
            {categories.map((c) => (
              <button
                key={c}
                className={`category-pill ${activeCategory === c ? 'active' : ''}`}
                onClick={() => setActiveCategory(c)}
              >
                {c === 'all' ? 'همه دسته‌ها' : c}
              </button>
            ))}
          </div>
        )}
      </header>

      <main className="content">
        <div className="results-count">
          {filteredItems.length.toLocaleString('fa-IR')} مورد یافت شد
        </div>
        {filteredItems.length === 0 ? (
          <div className="empty-state">
            <span>😕</span>
            <p>موردی با این مشخصات پیدا نشد.</p>
          </div>
        ) : (
          <div className="menu-grid">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </main>

      <footer className="footer">
        <p>این یک نمونه‌کار (Portfolio) طراحی‌شده با React است — © {new Date().getFullYear()} ذائقه</p>
      </footer>
    </div>
  )
}

export default App
