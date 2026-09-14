import { useCallback, useEffect, useState } from 'react'
import { createMenuStore } from '../lib/menuStore'

export function useMenuStore(brandKey, defaultSettings) {
  const store = createMenuStore(brandKey)
  const [products, setProductsState] = useState(() => store.getProducts())
  const [categories, setCategoriesState] = useState(() => store.getCategories())
  const [settings, setSettingsState] = useState(() => store.getSettings(defaultSettings))
  const [tick, setTick] = useState(0)

  const reload = useCallback(() => {
    setProductsState(store.getProducts())
    setCategoriesState(store.getCategories())
    setSettingsState(store.getSettings(defaultSettings))
    setTick((t) => t + 1)
  }, [brandKey]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const onStorage = (e) => {
      if (!e.key || e.key.startsWith(brandKey)) reload()
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [brandKey, reload])

  const saveProducts = (next) => {
    store.setProducts(next)
    setProductsState(next)
  }

  const saveCategories = (next) => {
    store.setCategories(next)
    setCategoriesState(next)
  }

  const saveSettings = (next) => {
    store.setSettings(next)
    setSettingsState(next)
  }

  const upsertProduct = (product) => {
    const list = store.getProducts()
    const idx = list.findIndex((p) => p.id === product.id)
    let next
    if (idx === -1) {
      next = [...list, { ...product, id: product.id || store.nextId(list) }]
    } else {
      next = list.map((p) => (p.id === product.id ? product : p))
    }
    saveProducts(next)
  }

  const deleteProduct = (id) => {
    saveProducts(store.getProducts().filter((p) => p.id !== id))
  }

  const reset = () => {
    store.resetAll()
    reload()
  }

  return {
    products,
    categories,
    settings,
    tick,
    reload,
    saveProducts,
    saveCategories,
    saveSettings,
    upsertProduct,
    deleteProduct,
    reset,
    store,
  }
}
