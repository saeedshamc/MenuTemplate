import { useEffect, useMemo, useState } from 'react'
import { CATEGORIES, PRODUCTS } from './data/menuData'
import Logo from './components/Logo'
import ThemeToggle from './components/ThemeToggle'
import SearchBar from './components/SearchBar'
import MenuCard from './components/MenuCard'

function normalize(str) {
  return (str || '')
    .toString()
    .toLowerCase()
    .replace(/ي/g, 'ی')
    .replace(/ك/g, 'ک')
    .replace(/[\u064B-\u0652]/g, '')
    .trim()
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('kakao-theme') || 'light')
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('kakao-theme', theme)
  }, [theme])

  const filtered = useMemo(() => {
    const q = normalize(query)
    return PRODUCTS.filter((p) => {
      const catOk = category === 'all' || p.category === category
      if (!catOk) return false
      if (!q) return true
      const catName = CATEGORIES.find((c) => c.id === p.category)?.name || ''
      const hay = normalize([p.name, p.desc, catName, ...(p.tags || [])].join(' '))
      return hay.includes(q)
    })
  }, [query, category])

  return (
    <div className="app-wrapper">
      <section className="hero">
        <div className="hero-overlay" />
        <ThemeToggle theme={theme} onToggle={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} />
        <div className="hero-content">
          <Logo size={88} />
          <p className="eyebrow">Velvet · Cocoa · Craft</p>
          <h1>کاکائو</h1>
          <p className="tagline">خانهٔ شکلات دست‌ساز — ترافل مخملی، کیک غنی و نوشیدنی‌های گرم کاکائویی</p>
        </div>
      </section>

      <div className="app">
        <header className="header">
          <SearchBar value={query} onChange={setQuery} />
          <nav className="categories" aria-label="دسته‌بندی منو">
            <button
              className={category === 'all' ? 'active' : ''}
              onClick={() => setCategory('all')}
              type="button"
            >
              همه
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                className={category === c.id ? 'active' : ''}
                onClick={() => setCategory(c.id)}
                type="button"
              >
                {c.name}
              </button>
            ))}
          </nav>
        </header>

        <main>
          <div className="results-count">
            {filtered.length.toLocaleString('fa-IR')} مورد
          </div>
          {filtered.length === 0 ? (
            <div className="empty">چیزی پیدا نشد — عبارت دیگری امتحان کنید.</div>
          ) : (
            <div className="grid">
              {filtered.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </main>

        <footer className="footer">
          <strong>کاکائو</strong>
          <span>Velvet · Cocoa · Craft · از ساعت ۱۰ تا ۲۳</span>
        </footer>
      </div>
    </div>
  )
}
