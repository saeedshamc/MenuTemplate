import { useEffect, useMemo, useState } from 'react'
import Logo from './components/Logo'
import ThemeToggle from './components/ThemeToggle'
import SearchBar from './components/SearchBar'
import MenuCard from './components/MenuCard'
import AdminPanel from './components/AdminPanel'
import { useMenuStore } from './hooks/useMenuStore'

const DEFAULT_SETTINGS = {
  brandName: "نورقهوه",
  eyebrow: "Specialty Coffee · Single Origin",
  tagline: "قهوهٔ اسپشیالتی — رُست تازه، دم‌آوری دقیق، لحظه‌ای آرام",
  footer: "Specialty Coffee · از ساعت ۸ تا ۲۲",
  heroImage: `${import.meta.env.BASE_URL}hero.png`,
}

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
  const [theme, setTheme] = useState(() => localStorage.getItem('noorgahve-theme') || 'light')
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [adminOpen, setAdminOpen] = useState(() => window.location.hash === '#admin')

  const {
    products,
    categories,
    settings,
    upsertProduct,
    deleteProduct,
    saveCategories,
    saveSettings,
    reset,
    store,
  } = useMenuStore('noorgahve', DEFAULT_SETTINGS)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('noorgahve-theme', theme)
  }, [theme])

  useEffect(() => {
    const onHash = () => setAdminOpen(window.location.hash === '#admin')
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const openAdmin = () => {
    window.location.hash = 'admin'
    setAdminOpen(true)
  }

  const closeAdmin = () => {
    if (window.location.hash === '#admin') {
      history.replaceState(null, '', window.location.pathname + window.location.search)
    }
    setAdminOpen(false)
  }

  const filtered = useMemo(() => {
    const q = normalize(query)
    return products.filter((p) => {
      const catOk = category === 'all' || p.category === category
      if (!catOk) return false
      if (!q) return true
      const catName = categories.find((c) => c.id === p.category)?.name || ''
      const hay = normalize([p.name, p.desc, catName, ...(p.tags || [])].join(' '))
      return hay.includes(q)
    })
  }, [query, category, products, categories])

  const heroStyle = settings.heroImage
    ? { backgroundImage: `var(--hero-overlay), url('${settings.heroImage}')` }
    : undefined

  return (
    <div className="app-wrapper">
      <section className="hero" style={heroStyle}>
        <div className="hero-overlay" />
        <div className="hero-top-actions">
          <button type="button" className="admin-entry" onClick={openAdmin} title="مدیریت منو">
            مدیریت
          </button>
          <ThemeToggle theme={theme} onToggle={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} />
        </div>
        <div className="hero-content">
          <Logo size={88} />
          <p className="eyebrow">{settings.eyebrow}</p>
          <h1>{settings.brandName}</h1>
          <p className="tagline">{settings.tagline}</p>
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
            {categories.map((c) => (
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
              {filtered.map((item, index) => (
                <MenuCard key={item.id} item={item} index={index} />
              ))}
            </div>
          )}
        </main>

        <footer className="footer">
          <strong>{settings.brandName}</strong>
          <span>{settings.footer}</span>
          <button type="button" className="footer-admin" onClick={openAdmin}>
            ورود مدیر
          </button>
        </footer>
      </div>

      {adminOpen && (
        <AdminPanel
          brandName={settings.brandName || "نورقهوه"}
          products={products}
          categories={categories}
          settings={settings}
          onSaveProduct={upsertProduct}
          onDeleteProduct={deleteProduct}
          onSaveCategories={saveCategories}
          onSaveSettings={saveSettings}
          onReset={reset}
          store={store}
          onClose={closeAdmin}
        />
      )}
    </div>
  )
}
