import { CATEGORIES as DEFAULT_CATEGORIES, PRODUCTS as DEFAULT_PRODUCTS } from '../data/menuData'

const STORE_VERSION = 1

export function createMenuStore(brandKey) {
  const productsKey = `${brandKey}-products-v${STORE_VERSION}`
  const categoriesKey = `${brandKey}-categories-v${STORE_VERSION}`
  const settingsKey = `${brandKey}-settings-v${STORE_VERSION}`
  const authKey = `${brandKey}-admin-pass`

  function readJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key)
      if (!raw) return fallback
      return JSON.parse(raw)
    } catch {
      return fallback
    }
  }

  function writeJSON(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  function getProducts() {
    return readJSON(productsKey, DEFAULT_PRODUCTS)
  }

  function setProducts(products) {
    writeJSON(productsKey, products)
  }

  function getCategories() {
    return readJSON(categoriesKey, DEFAULT_CATEGORIES)
  }

  function setCategories(categories) {
    writeJSON(categoriesKey, categories)
  }

  function getSettings(defaults) {
    return { ...defaults, ...readJSON(settingsKey, {}) }
  }

  function setSettings(settings) {
    writeJSON(settingsKey, settings)
  }

  function getPassword() {
    return localStorage.getItem(authKey) || 'admin123'
  }

  function setPassword(pass) {
    localStorage.setItem(authKey, pass)
  }

  function resetAll() {
    localStorage.removeItem(productsKey)
    localStorage.removeItem(categoriesKey)
    localStorage.removeItem(settingsKey)
  }

  function exportData() {
    return {
      version: STORE_VERSION,
      brandKey,
      products: getProducts(),
      categories: getCategories(),
      settings: readJSON(settingsKey, {}),
      exportedAt: new Date().toISOString(),
    }
  }

  function importData(data) {
    if (!data || !Array.isArray(data.products)) {
      throw new Error('فایل نامعتبر است')
    }
    setProducts(data.products)
    if (Array.isArray(data.categories)) setCategories(data.categories)
    if (data.settings && typeof data.settings === 'object') setSettings(data.settings)
  }

  function nextId(products) {
    const max = products.reduce((m, p) => Math.max(m, Number(p.id) || 0), 0)
    return max + 1
  }

  return {
    getProducts,
    setProducts,
    getCategories,
    setCategories,
    getSettings,
    setSettings,
    getPassword,
    setPassword,
    resetAll,
    exportData,
    importData,
    nextId,
    defaults: { products: DEFAULT_PRODUCTS, categories: DEFAULT_CATEGORIES },
  }
}

export function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    if (!file) return reject(new Error('فایلی انتخاب نشد'))
    if (!file.type.startsWith('image/')) return reject(new Error('فقط تصویر مجاز است'))
    if (file.size > 2.5 * 1024 * 1024) return reject(new Error('حداکثر حجم عکس ۲٫۵ مگابایت'))
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = () => reject(new Error('خطا در خواندن فایل'))
    reader.readAsDataURL(file)
  })
}
