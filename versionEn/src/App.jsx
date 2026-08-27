import { useMemo, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SearchBar from './components/SearchBar'
import CategoryTabs from './components/CategoryTabs'
import MenuGrid from './components/MenuGrid'
import Footer from './components/Footer'
import { categories, menuItems } from './data/menuData'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase()
    return menuItems.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory
      if (!matchesCategory) return false
      if (!q) return true
      const haystack = [item.name, item.description, item.course, ...item.tags]
        .join(' ')
        .toLowerCase()
      return haystack.includes(q)
    })
  }, [query, activeCategory])

  return (
    <div className="min-h-screen">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <Hero />

      <main className="mx-auto max-w-5xl px-5 py-8 sm:px-8">
        <div className="mb-8 flex flex-col gap-4">
          <SearchBar value={query} onChange={setQuery} />
          <CategoryTabs categories={categories} active={activeCategory} onSelect={setActiveCategory} />
        </div>

        <MenuGrid items={filteredItems} query={query} />
      </main>

      <Footer />
    </div>
  )
}

export default App
