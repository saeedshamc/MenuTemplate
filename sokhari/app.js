const { useState, useMemo, useEffect, useRef } = React;
const { CATEGORIES, PRODUCTS } = window;
const Icons = window.Icons;

function normalize(str) {
  return (str || '')
    .toString()
    .toLowerCase()
    .replace(/ي/g, 'ی')
    .replace(/ك/g, 'ک')
    .replace(/[\u064B-\u0652]/g, '')
    .trim();
}

function formatPrice(n) {
  return n.toLocaleString('fa-IR');
}

function BadgeTag({ type }) {
  if (!type) return null;
  const map = {
    best: { cls: 'best', label: 'پرفروش', icon: Icons.star },
    spicy: { cls: 'spicy', label: 'تند', icon: Icons.flame },
    new: { cls: 'new', label: 'جدید', icon: Icons.leaf },
  };
  const conf = map[type];
  if (!conf) return null;
  const Ic = conf.icon;
  return (
    <span className={`badge ${conf.cls}`}>
      <Ic style={{ width: 12, height: 12 }} />
      {conf.label}
    </span>
  );
}

function ProductCard({ product, qty, onAdd, onRemove }) {
  const FoodArt = Icons[product.icon] || Icons.bucket;
  return (
    <div className="card">
      <div className="card-media">
        <BadgeTag type={product.badge} />
        <FoodArt />
      </div>
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <div className="ingredients">
          {product.ingredients.map((ing, i) => (
            <span key={i}>{ing}</span>
          ))}
        </div>
        <div className="meta-row">
          <div className="prep-time">
            <Icons.clock />
            {product.prep} دقیقه آماده‌سازی
          </div>
        </div>
        <div className="price-row">
          <div className="price">
            {formatPrice(product.price)}
            <small> تومان</small>
          </div>
          {qty > 0 ? (
            <div className="qty-control">
              <button onClick={() => onRemove(product.id)}>−</button>
              <b>{qty}</b>
              <button onClick={() => onAdd(product.id)}>+</button>
            </div>
          ) : (
            <button className="add-btn" onClick={() => onAdd(product.id)}>
              افزودن
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [cart, setCart] = useState({});
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  const showToast = (msg) => {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 1600);
  };

  const addItem = (id) => {
    setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
    const p = PRODUCTS.find((x) => x.id === id);
    showToast(`«${p.name}» به سبد اضافه شد`);
  };

  const removeItem = (id) => {
    setCart((c) => {
      const next = { ...c };
      if (next[id] <= 1) delete next[id];
      else next[id] -= 1;
      return next;
    });
  };

  const filtered = useMemo(() => {
    const q = normalize(query);
    return PRODUCTS.filter((p) => {
      const catOk = activeCategory === 'all' || p.category === activeCategory;
      if (!catOk) return false;
      if (!q) return true;
      const haystack = normalize(
        [p.name, p.desc, ...(p.ingredients || []), CATEGORIES.find((c) => c.id === p.category)?.name]
          .filter(Boolean)
          .join(' ')
      );
      return haystack.includes(q);
    });
  }, [query, activeCategory]);

  const grouped = useMemo(() => {
    const byCat = {};
    filtered.forEach((p) => {
      byCat[p.category] = byCat[p.category] || [];
      byCat[p.category].push(p);
    });
    return byCat;
  }, [filtered]);

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const cartTotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const p = PRODUCTS.find((x) => x.id === Number(id));
    return sum + (p ? p.price * qty : 0);
  }, 0);

  return (
    <React.Fragment>
      <header className="top-header">
        <div className="brand-row">
          <div className="brand">
            <div className="logo-badge">
              <Icons.Logo />
            </div>
            <div className="brand-text">
              <h1>کلویی</h1>
              <p>فروشگاه‌های زنجیره‌ای سوخاری کلویی</p>
            </div>
          </div>
          <div className="cart-pill">
            🛒 سبد شما: <b>{cartCount} قلم</b>
          </div>
        </div>

        <div className="search-wrap">
          <input
            type="text"
            placeholder="جستجوی غذا، مواد اولیه یا دسته‌بندی…  مثلاً «تند» یا «برگر»"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Icons.search className="search-icon" />
        </div>
      </header>

      <div className="crispy-edge" />

      <div className="category-row">
        <button
          className={`chip ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          همه محصولات
        </button>
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            className={`chip ${activeCategory === c.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(c.id)}
          >
            {c.name}
          </button>
        ))}
      </div>

      <main className="content">
        {filtered.length === 0 && (
          <div className="empty-state">
            <span className="emoji">🍗</span>
            <h3>چیزی پیدا نشد</h3>
            <p>عبارت دیگری را امتحان کنید یا دسته‌بندی را تغییر دهید.</p>
          </div>
        )}

        {activeCategory === 'all'
          ? CATEGORIES.map((c) =>
              grouped[c.id] && grouped[c.id].length > 0 ? (
                <section key={c.id}>
                  <h2 className="section-label">{c.name}</h2>
                  <div className="grid">
                    {grouped[c.id].map((p) => (
                      <ProductCard
                        key={p.id}
                        product={p}
                        qty={cart[p.id] || 0}
                        onAdd={addItem}
                        onRemove={removeItem}
                      />
                    ))}
                  </div>
                </section>
              ) : null
            )
          : filtered.length > 0 && (
              <section>
                <h2 className="section-label">
                  {CATEGORIES.find((c) => c.id === activeCategory)?.name}
                </h2>
                <div className="grid">
                  {filtered.map((p) => (
                    <ProductCard
                      key={p.id}
                      product={p}
                      qty={cart[p.id] || 0}
                      onAdd={addItem}
                      onRemove={removeItem}
                    />
                  ))}
                </div>
              </section>
            )}
      </main>

      <div className={`cart-bar ${cartCount > 0 ? 'show' : ''}`}>
        <div className="info">
          <span>{cartCount} قلم در سبد</span>
          <b>{formatPrice(cartTotal)} تومان</b>
        </div>
        <button onClick={() => showToast('سفارش شما با موفقیت ثبت شد 🎉')}>
          ثبت سفارش
        </button>
      </div>

      <div className={`toast ${toast ? 'show' : ''}`}>{toast}</div>

      <footer className="footer">
        © {new Date().getFullYear()} <b>کلویی</b> — طعم ترد، همیشه تازه.
      </footer>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
