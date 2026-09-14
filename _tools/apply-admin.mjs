/**
 * Applies admin panel + store to all menu template projects.
 * Run: node _tools/apply-admin.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

const BRANDS = {
  forno: {
    brandName: 'فورنو',
    eyebrow: 'Wood-Fired · Napoli Style',
    tagline: 'پیتزای تنور چوبی — خمیر ۲۴ ساعته، آتش واقعی',
    footer: 'تنور چوبی · از ساعت ۱۲ تا ۲۳',
    themeKey: 'forno-theme',
    storeKey: 'forno',
  },
  noorgahve: {
    brandName: 'نورقهوه',
    eyebrow: 'Specialty Coffee · Single Origin',
    tagline: 'قهوهٔ اسپشیالتی — رُست تازه، دم‌آوری دقیق، لحظه‌ای آرام',
    footer: 'Specialty Coffee · از ساعت ۸ تا ۲۲',
    themeKey: 'noorgahve-theme',
    storeKey: 'noorgahve',
  },
  shahan: {
    brandName: 'شاهان',
    eyebrow: 'Traditional Persian Grill',
    tagline: 'چلوکبابی سنتی — آتش زغال و مهمان‌نوازی ایرانی',
    footer: 'از ساعت ۱۲ تا ۲۳',
    themeKey: 'shahan-theme',
    storeKey: 'shahan',
  },
  blackgrill: {
    brandName: 'بلک‌گریل',
    eyebrow: 'Smash · Smoke · Street',
    tagline: 'برگر ذغالی — اسمش، دود و طعم خیابان',
    footer: 'از ساعت ۱۲ تا ۲۴',
    themeKey: 'blackgrill-theme',
    storeKey: 'blackgrill',
  },
  ikigai: {
    brandName: 'ایکیگای',
    eyebrow: 'Omakase · Fresh Daily',
    tagline: 'سوشی تازه روزانه — مینیمال، دقیق، پریمیوم',
    footer: 'از ساعت ۱۲ تا ۲۳',
    themeKey: 'ikigai-theme',
    storeKey: 'ikigai',
  },
  ardineh: {
    brandName: 'آردینه',
    eyebrow: 'Fresh Baked Daily',
    tagline: 'نانوایی و قنادی — عطر صبح و خمیر تازه',
    footer: 'از ساعت ۷ تا ۲۱',
    themeKey: 'ardineh-theme',
    storeKey: 'ardineh',
  },
  sabzab: {
    brandName: 'سبزآب',
    eyebrow: 'Fresh · Pressed · Daily',
    tagline: 'آبمیوه و اسموتی تازه — پرس روزانه، طعم طبیعی',
    footer: 'از ساعت ۹ تا ۲۲',
    themeKey: 'sabzab-theme',
    storeKey: 'sabzab',
  },
  ahan: {
    brandName: 'آهن‌وآتش',
    eyebrow: 'Iron · Fire · Reserve',
    tagline: 'استیک‌هاوس فاخر — زغال، آهن و طعم‌های رزرو',
    footer: 'از ساعت ۱۹ تا ۲۴',
    themeKey: 'ahan-theme',
    storeKey: 'ahan',
  },
  ghandil: {
    brandName: 'قندیل',
    eyebrow: 'Traditional Tea House',
    tagline: 'چایخانه سنتی — عطر دمنوش و مهمان‌نوازی گرم',
    footer: 'از ساعت ۹ تا ۲۴',
    themeKey: 'ghandil-theme',
    storeKey: 'ghandil',
  },
  charkh: {
    brandName: 'چرخ‌طعم',
    eyebrow: 'Street · Fast · Hot',
    tagline: 'فودتراک خیابانی — سریع، داغ و پر از طعم',
    footer: 'از ساعت ۱۲ تا ۲۴',
    themeKey: 'charkh-theme',
    storeKey: 'charkh',
  },
  kakao: {
    brandName: 'کاکائو',
    eyebrow: 'Velvet · Cocoa · Craft',
    tagline: 'خانهٔ شکلات دست‌ساز — ترافل و دسر مخملی',
    footer: 'از ساعت ۱۰ تا ۲۲',
    themeKey: 'kakao-theme',
    storeKey: 'kakao',
  },
  sobhgah: {
    brandName: 'صبح‌گاه',
    eyebrow: 'Brunch · Sunshine · Slow',
    tagline: 'برانچ آفتابی و بی‌عجله — صبحانه‌های تازه',
    footer: 'از ساعت ۸ تا ۱۶',
    themeKey: 'sobhgah-theme',
    storeKey: 'sobhgah',
  },
  zoghal: {
    brandName: 'زغال‌چوب',
    eyebrow: 'Wood · Night · Craft',
    tagline: 'بار صنعتی شبانه — گریل ذغالی و ماکتل‌های دست‌ساز',
    footer: 'از ساعت ۱۸ تا ۱ بامداد',
    themeKey: 'zoghal-theme',
    storeKey: 'zoghal',
  },
  zeytoon: {
    brandName: 'زیتون',
    eyebrow: 'Mezze · Olive · Share',
    tagline: 'سفرهٔ لبنانی — مزه، کباب و طعم مدیترانه',
    footer: 'از ساعت ۱۲ تا ۲۳',
    themeKey: 'zeytoon-theme',
    storeKey: 'zeytoon',
  },
  dogstreet: {
    brandName: 'داگ‌استریت',
    eyebrow: 'Mustard · Street · Snap',
    tagline: 'هات‌داگ خیابانی — سوسیس داغ و اسنک سریع',
    footer: 'از ساعت ۱۲ تا ۲۴',
    themeKey: 'dogstreet-theme',
    storeKey: 'dogstreet',
  },
  barg: {
    brandName: 'برگ‌سبز',
    eyebrow: 'Leaf · Bowl · Balance',
    tagline: 'سالادبار تازه — سبزی ترد و بول متعادل',
    footer: 'از ساعت ۱۰ تا ۲۲',
    themeKey: 'barg-theme',
    storeKey: 'barg',
  },
  yakh: {
    brandName: 'یخ‌شیرین',
    eyebrow: 'Scoop · Smile · Chill',
    tagline: 'خانهٔ بستنی — اسکوپ رنگی و میلک‌شیک خنک',
    footer: 'از ساعت ۱۲ تا ۲۴',
    themeKey: 'yakh-theme',
    storeKey: 'yakh',
  },
  fiesta: {
    brandName: 'فیستا',
    eyebrow: 'Fire · Fiesta · Fresh',
    tagline: 'طعم مکزیک — تاکو، بوریتو و سالسای تازه',
    footer: 'از ساعت ۱۲ تا ۲۳',
    themeKey: 'fiesta-theme',
    storeKey: 'fiesta',
  },
}

function appSource(b) {
  return `import { useEffect, useMemo, useState } from 'react'
import Logo from './components/Logo'
import ThemeToggle from './components/ThemeToggle'
import SearchBar from './components/SearchBar'
import MenuCard from './components/MenuCard'
import AdminPanel from './components/AdminPanel'
import { useMenuStore } from './hooks/useMenuStore'

const DEFAULT_SETTINGS = {
  brandName: ${JSON.stringify(b.brandName)},
  eyebrow: ${JSON.stringify(b.eyebrow)},
  tagline: ${JSON.stringify(b.tagline)},
  footer: ${JSON.stringify(b.footer)},
  heroImage: '/hero.png',
}

function normalize(str) {
  return (str || '')
    .toString()
    .toLowerCase()
    .replace(/ي/g, 'ی')
    .replace(/ك/g, 'ک')
    .replace(/[\\u064B-\\u0652]/g, '')
    .trim()
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('${b.themeKey}') || 'light')
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
  } = useMenuStore('${b.storeKey}', DEFAULT_SETTINGS)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('${b.themeKey}', theme)
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
    ? { backgroundImage: \`var(--hero-overlay), url('\${settings.heroImage}')\` }
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
          brandName={settings.brandName || ${JSON.stringify(b.brandName)}}
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
`
}

const ADMIN_CSS = `
/* ---- shared admin + effects (auto) ---- */
.hero-top-actions{position:absolute;top:18px;left:18px;display:flex;gap:8px;z-index:3}
.admin-entry{width:auto;min-width:44px;height:44px;border:1px solid rgba(255,255,255,.25);border-radius:12px;background:rgba(20,10,8,.35);backdrop-filter:blur(8px);cursor:pointer;font-size:.9rem;color:#fff;font-family:inherit;padding:0 12px}
.footer-admin{border:0;background:transparent;color:var(--accent);font:inherit;cursor:pointer;text-decoration:underline;text-underline-offset:3px}
.menu-card-media{position:relative}
.menu-card-shine{position:absolute;inset:0;background:linear-gradient(120deg,transparent 30%,rgba(255,255,255,.18) 50%,transparent 70%);transform:translateX(-120%);pointer-events:none}
.menu-card:hover .menu-card-shine{animation:shine .9s ease}
@keyframes shine{to{transform:translateX(120%)}}
.admin-overlay{position:fixed;inset:0;z-index:1000;background:rgba(10,6,4,.55);backdrop-filter:blur(6px);display:grid;place-items:center;padding:16px;animation:rise .25s ease both}
.admin-login,.admin-panel{width:min(960px,100%);max-height:min(92vh,900px);overflow:auto;background:var(--bg-elevated);color:var(--text);border:1px solid var(--border);border-radius:18px;box-shadow:0 24px 64px rgba(0,0,0,.35);padding:20px}
.admin-login{width:min(420px,100%);display:grid;gap:12px}
.admin-login h2,.admin-header h2{margin:0 0 4px}
.admin-login p,.admin-header p,.admin-help{margin:0;color:var(--muted);font-size:.92rem}
.admin-login input,.admin-form input,.admin-form textarea,.admin-form select,.admin-toolbar input,.admin-cat-row input,.admin-body input,.admin-body textarea,.admin-body select{width:100%;margin-top:6px;border:1px solid var(--border);border-radius:10px;padding:10px 12px;font:inherit;background:var(--bg);color:var(--text)}
.admin-login-actions,.admin-form-actions,.admin-header-actions,.admin-toolbar{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
.admin-login button,.admin-panel button,.admin-file-btn{border:0;border-radius:10px;padding:10px 14px;font:inherit;cursor:pointer;background:var(--accent);color:#fff}
.admin-panel button.ghost,.admin-login button.ghost{background:transparent;color:var(--text);border:1px solid var(--border)}
.admin-panel button.danger{background:#b42318}
.admin-error{color:#b42318;font-size:.88rem}
.admin-hint{color:var(--muted);font-size:.78rem}
.admin-header{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:12px}
.admin-tabs{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px}
.admin-tabs button{background:var(--chip);color:var(--text);border:1px solid var(--border)}
.admin-tabs button.active{background:var(--chip-active);color:var(--chip-active-text);border-color:transparent}
.admin-body{display:grid;gap:14px}
.admin-toolbar input{flex:1;min-width:180px;margin-top:0}
.admin-form{display:grid;gap:12px;padding:14px;border:1px dashed var(--border);border-radius:14px;background:var(--bg)}
.admin-form h3{margin:0}
.admin-grid-2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
.admin-grid-2 .full,.admin-file.full{grid-column:1/-1}
.admin-preview{width:140px;height:100px;border-radius:12px;overflow:hidden;border:1px solid var(--border)}
.admin-preview.wide{width:100%;height:160px}
.admin-preview img,.admin-thumb{width:100%;height:100%;object-fit:cover}
.admin-thumb{width:52px;height:52px;border-radius:10px;display:block}
.admin-table-wrap{overflow:auto;border:1px solid var(--border);border-radius:12px}
.admin-table{width:100%;border-collapse:collapse;font-size:.9rem}
.admin-table th,.admin-table td{padding:10px;border-bottom:1px solid var(--border);text-align:right;vertical-align:middle}
.admin-row-actions{display:flex;gap:6px;justify-content:flex-start}
.admin-row-actions button{padding:6px 10px;font-size:.82rem}
.admin-mini-badge{margin-right:6px;font-size:.72rem;color:var(--accent)}
.admin-cat-row{display:grid;grid-template-columns:1fr 1fr auto;gap:8px}
.admin-toast{position:sticky;top:0;z-index:2;background:var(--accent);color:#fff;padding:8px 12px;border-radius:10px;margin-bottom:10px}
.admin-file-btn{display:inline-flex;align-items:center}
@media (max-width:640px){.admin-grid-2,.admin-cat-row{grid-template-columns:1fr}}
`

const srcForno = path.join(root, 'forno', 'src')
const filesToCopy = [
  ['lib/menuStore.js', 'lib/menuStore.js'],
  ['hooks/useMenuStore.js', 'hooks/useMenuStore.js'],
  ['components/AdminPanel.jsx', 'components/AdminPanel.jsx'],
  ['components/MenuCard.jsx', 'components/MenuCard.jsx'],
]

let ok = 0
for (const [folder, conf] of Object.entries(BRANDS)) {
  const base = path.join(root, folder)
  if (!fs.existsSync(path.join(base, 'package.json'))) {
    console.log('skip missing', folder)
    continue
  }
  for (const [from, to] of filesToCopy) {
    const dest = path.join(base, 'src', to)
    fs.mkdirSync(path.dirname(dest), { recursive: true })
    fs.copyFileSync(path.join(srcForno, from), dest)
  }
  fs.writeFileSync(path.join(base, 'src', 'App.jsx'), appSource(conf), 'utf8')
  const cssPath = path.join(base, 'src', 'index.css')
  let css = fs.readFileSync(cssPath, 'utf8')
  if (!css.includes('shared admin + effects')) {
    css += '\n' + ADMIN_CSS
    fs.writeFileSync(cssPath, css, 'utf8')
  }
  // README note
  const readme = path.join(base, 'README.md')
  if (fs.existsSync(readme)) {
    let r = fs.readFileSync(readme, 'utf8')
    if (!r.includes('#admin')) {
      r += `\n\n## مدیریت محصولات\n\nدر سایت روی **مدیریت** بزنید یا به \`#admin\` بروید.\nرمز پیش‌فرض: \`admin123\`\n\nاز پنل می‌توانید محصول اضافه/ویرایش/حذف کنید، عکس آپلود کنید، دسته‌ها و تنظیمات سایت را عوض کنید و پشتیبان JSON بگیرید.\n`
      fs.writeFileSync(readme, r, 'utf8')
    }
  }
  ok++
  console.log('updated', folder)
}
console.log('done', ok)
