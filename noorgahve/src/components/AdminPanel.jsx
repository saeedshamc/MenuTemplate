import { useMemo, useState } from 'react'
import { fileToDataUrl } from '../lib/menuStore'

const EMPTY_PRODUCT = {
  id: null,
  name: '',
  price: 0,
  prep: 5,
  category: '',
  desc: '',
  badge: '',
  tags: [],
  image: '',
}

export default function AdminPanel({
  brandName,
  products,
  categories,
  settings,
  onSaveProduct,
  onDeleteProduct,
  onSaveCategories,
  onSaveSettings,
  onReset,
  store,
  onClose,
}) {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem(`${brandName}-admin-ok`) === '1')
  const [pass, setPass] = useState('')
  const [passError, setPassError] = useState('')
  const [tab, setTab] = useState('products')
  const [query, setQuery] = useState('')
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState(EMPTY_PRODUCT)
  const [tagInput, setTagInput] = useState('')
  const [msg, setMsg] = useState('')
  const [newPass, setNewPass] = useState('')
  const [catDraft, setCatDraft] = useState(categories)
  const [settingsDraft, setSettingsDraft] = useState(settings)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return products
    return products.filter((p) =>
      [p.name, p.desc, p.category].join(' ').toLowerCase().includes(q)
    )
  }, [products, query])

  const showMsg = (text) => {
    setMsg(text)
    setTimeout(() => setMsg(''), 2200)
  }

  const login = (e) => {
    e.preventDefault()
    if (pass === store.getPassword()) {
      sessionStorage.setItem(`${brandName}-admin-ok`, '1')
      setAuthed(true)
      setPassError('')
    } else {
      setPassError('رمز عبور اشتباه است')
    }
  }

  const logout = () => {
    sessionStorage.removeItem(`${brandName}-admin-ok`)
    setAuthed(false)
    onClose()
  }

  const openNew = () => {
    setEditing('new')
    setForm({
      ...EMPTY_PRODUCT,
      category: categories[0]?.id || '',
    })
    setTagInput('')
  }

  const openEdit = (p) => {
    setEditing(p.id)
    setForm({
      ...p,
      badge: p.badge || '',
      tags: p.tags || [],
    })
    setTagInput((p.tags || []).join('، '))
  }

  const onImageFile = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    try {
      const dataUrl = await fileToDataUrl(file)
      setForm((f) => ({ ...f, image: dataUrl }))
      showMsg('عکس بارگذاری شد')
    } catch (err) {
      showMsg(err.message)
    }
  }

  const saveForm = (e) => {
    e.preventDefault()
    if (!form.name.trim()) return showMsg('نام محصول الزامی است')
    if (!form.category) return showMsg('دسته‌بندی را انتخاب کنید')
    const tags = tagInput
      .split(/[,،]/)
      .map((t) => t.trim())
      .filter(Boolean)
    onSaveProduct({
      ...form,
      id: form.id || undefined,
      name: form.name.trim(),
      desc: form.desc.trim(),
      price: Number(form.price) || 0,
      prep: Number(form.prep) || 0,
      badge: form.badge || undefined,
      tags,
      image: form.image.trim(),
    })
    setEditing(null)
    showMsg('محصول ذخیره شد')
  }

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(store.exportData(), null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${brandName}-menu-backup.json`
    a.click()
    URL.revokeObjectURL(url)
    showMsg('فایل پشتیبان دانلود شد')
  }

  const importJson = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    try {
      const text = await file.text()
      store.importData(JSON.parse(text))
      window.location.reload()
    } catch {
      showMsg('وارد کردن فایل ناموفق بود')
    }
  }

  if (!authed) {
    return (
      <div className="admin-overlay">
        <form className="admin-login" onSubmit={login}>
          <h2>ورود مدیریت {brandName}</h2>
          <p>برای مدیریت محصولات و تصاویر وارد شوید.</p>
          <input
            type="password"
            placeholder="رمز عبور"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            autoFocus
          />
          {passError && <div className="admin-error">{passError}</div>}
          <div className="admin-login-actions">
            <button type="submit">ورود</button>
            <button type="button" className="ghost" onClick={onClose}>بستن</button>
          </div>
          <small className="admin-hint">رمز پیش‌فرض: admin123 (از بخش تنظیمات قابل تغییر است)</small>
        </form>
      </div>
    )
  }

  return (
    <div className="admin-overlay">
      <div className="admin-panel">
        <header className="admin-header">
          <div>
            <h2>مدیریت منوی {brandName}</h2>
            <p>{products.length.toLocaleString('fa-IR')} محصول · ویرایش زنده</p>
          </div>
          <div className="admin-header-actions">
            <button type="button" className="ghost" onClick={logout}>خروج</button>
            <button type="button" className="ghost" onClick={onClose}>بستن ✕</button>
          </div>
        </header>

        {msg && <div className="admin-toast">{msg}</div>}

        <nav className="admin-tabs">
          {[
            ['products', 'محصولات'],
            ['categories', 'دسته‌ها'],
            ['settings', 'تنظیمات سایت'],
            ['backup', 'پشتیبان'],
          ].map(([id, label]) => (
            <button
              key={id}
              type="button"
              className={tab === id ? 'active' : ''}
              onClick={() => setTab(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        {tab === 'products' && (
          <div className="admin-body">
            <div className="admin-toolbar">
              <input
                type="search"
                placeholder="جستجوی محصول..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="button" onClick={openNew}>+ محصول جدید</button>
            </div>

            {editing !== null && (
              <form className="admin-form" onSubmit={saveForm}>
                <h3>{editing === 'new' ? 'افزودن محصول' : 'ویرایش محصول'}</h3>
                <div className="admin-grid-2">
                  <label>
                    نام
                    <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                  </label>
                  <label>
                    دسته‌بندی
                    <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
                      {categories.map((c) => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                      ))}
                    </select>
                  </label>
                  <label>
                    قیمت (تومان)
                    <input type="number" min="0" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
                  </label>
                  <label>
                    زمان آماده‌سازی (دقیقه)
                    <input type="number" min="0" value={form.prep} onChange={(e) => setForm({ ...form, prep: e.target.value })} />
                  </label>
                  <label>
                    بج
                    <select value={form.badge} onChange={(e) => setForm({ ...form, badge: e.target.value })}>
                      <option value="">بدون بج</option>
                      <option value="best">پرفروش</option>
                      <option value="new">جدید</option>
                      <option value="spicy">تند</option>
                    </select>
                  </label>
                  <label>
                    تگ‌ها (با ویرگول)
                    <input value={tagInput} onChange={(e) => setTagInput(e.target.value)} placeholder="گیاهی، امضا، ..." />
                  </label>
                </div>
                <label>
                  توضیحات
                  <textarea rows={3} value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} />
                </label>
                <label>
                  آدرس تصویر (URL)
                  <input value={form.image?.startsWith('data:') ? '' : form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} placeholder="https://..." />
                </label>
                <label className="admin-file">
                  یا آپلود عکس از دستگاه
                  <input type="file" accept="image/*" onChange={onImageFile} />
                </label>
                {form.image && (
                  <div className="admin-preview">
                    <img src={form.image} alt="پیش‌نمایش" />
                  </div>
                )}
                <div className="admin-form-actions">
                  <button type="submit">ذخیره</button>
                  <button type="button" className="ghost" onClick={() => setEditing(null)}>انصراف</button>
                </div>
              </form>
            )}

            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>عکس</th>
                    <th>نام</th>
                    <th>دسته</th>
                    <th>قیمت</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((p) => (
                    <tr key={p.id}>
                      <td>
                        <img className="admin-thumb" src={p.image} alt="" />
                      </td>
                      <td>
                        <strong>{p.name}</strong>
                        {p.badge && <span className="admin-mini-badge">{p.badge}</span>}
                      </td>
                      <td>{categories.find((c) => c.id === p.category)?.name || p.category}</td>
                      <td>{Number(p.price).toLocaleString('fa-IR')}</td>
                      <td className="admin-row-actions">
                        <button type="button" onClick={() => openEdit(p)}>ویرایش</button>
                        <button
                          type="button"
                          className="danger"
                          onClick={() => {
                            if (confirm(`حذف «${p.name}»؟`)) onDeleteProduct(p.id)
                          }}
                        >
                          حذف
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tab === 'categories' && (
          <div className="admin-body">
            <p className="admin-help">شناسه دسته را انگلیسی کوتاه نگه دارید (مثل classic). نام فارسی برای نمایش است.</p>
            {catDraft.map((c, i) => (
              <div className="admin-cat-row" key={`${c.id}-${i}`}>
                <input
                  value={c.id}
                  onChange={(e) => {
                    const next = [...catDraft]
                    next[i] = { ...next[i], id: e.target.value }
                    setCatDraft(next)
                  }}
                  placeholder="id"
                />
                <input
                  value={c.name}
                  onChange={(e) => {
                    const next = [...catDraft]
                    next[i] = { ...next[i], name: e.target.value }
                    setCatDraft(next)
                  }}
                  placeholder="نام فارسی"
                />
                <button
                  type="button"
                  className="danger"
                  onClick={() => setCatDraft(catDraft.filter((_, idx) => idx !== i))}
                >
                  حذف
                </button>
              </div>
            ))}
            <div className="admin-form-actions">
              <button type="button" onClick={() => setCatDraft([...catDraft, { id: `cat${Date.now()}`, name: 'دسته جدید' }])}>
                + دسته
              </button>
              <button
                type="button"
                onClick={() => {
                  onSaveCategories(catDraft.filter((c) => c.id && c.name))
                  showMsg('دسته‌ها ذخیره شد')
                }}
              >
                ذخیره دسته‌ها
              </button>
            </div>
          </div>
        )}

        {tab === 'settings' && (
          <div className="admin-body">
            <div className="admin-grid-2">
              <label>
                نام برند
                <input value={settingsDraft.brandName || ''} onChange={(e) => setSettingsDraft({ ...settingsDraft, brandName: e.target.value })} />
              </label>
              <label>
                Eyebrow
                <input value={settingsDraft.eyebrow || ''} onChange={(e) => setSettingsDraft({ ...settingsDraft, eyebrow: e.target.value })} />
              </label>
              <label className="full">
                شعار / توضیحات هیرو
                <input value={settingsDraft.tagline || ''} onChange={(e) => setSettingsDraft({ ...settingsDraft, tagline: e.target.value })} />
              </label>
              <label className="full">
                متن فوتر / ساعت کاری
                <input value={settingsDraft.footer || ''} onChange={(e) => setSettingsDraft({ ...settingsDraft, footer: e.target.value })} />
              </label>
              <label className="full">
                آدرس تصویر هیرو (URL)
                <input
                  value={settingsDraft.heroImage?.startsWith('data:') ? '' : (settingsDraft.heroImage || '')}
                  onChange={(e) => setSettingsDraft({ ...settingsDraft, heroImage: e.target.value })}
                  placeholder="/hero.png یا https://..."
                />
              </label>
              <label className="admin-file full">
                آپلود تصویر هیرو
                <input
                  type="file"
                  accept="image/*"
                  onChange={async (e) => {
                    try {
                      const dataUrl = await fileToDataUrl(e.target.files?.[0])
                      setSettingsDraft({ ...settingsDraft, heroImage: dataUrl })
                      showMsg('هیرو بارگذاری شد')
                    } catch (err) {
                      showMsg(err.message)
                    }
                  }}
                />
              </label>
            </div>
            {settingsDraft.heroImage && (
              <div className="admin-preview wide">
                <img src={settingsDraft.heroImage} alt="hero" />
              </div>
            )}
            <label>
              تغییر رمز ادمین
              <input type="password" value={newPass} onChange={(e) => setNewPass(e.target.value)} placeholder="رمز جدید" />
            </label>
            <div className="admin-form-actions">
              <button
                type="button"
                onClick={() => {
                  onSaveSettings(settingsDraft)
                  if (newPass.trim()) {
                    store.setPassword(newPass.trim())
                    setNewPass('')
                    showMsg('تنظیمات و رمز ذخیره شد')
                  } else {
                    showMsg('تنظیمات ذخیره شد')
                  }
                }}
              >
                ذخیره تنظیمات
              </button>
            </div>
          </div>
        )}

        {tab === 'backup' && (
          <div className="admin-body">
            <p className="admin-help">از منو پشتیبان بگیرید یا فایل JSON را وارد کنید. ریست، همه تغییرات محلی را پاک می‌کند.</p>
            <div className="admin-form-actions">
              <button type="button" onClick={exportJson}>دانلود پشتیبان JSON</button>
              <label className="admin-file-btn">
                وارد کردن JSON
                <input type="file" accept="application/json,.json" onChange={importJson} hidden />
              </label>
              <button
                type="button"
                className="danger"
                onClick={() => {
                  if (confirm('همه تغییرات محلی پاک شود و منوی پیش‌فرض برگردد؟')) {
                    onReset()
                    showMsg('به حالت اولیه برگشت')
                  }
                }}
              >
                ریست به پیش‌فرض
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
