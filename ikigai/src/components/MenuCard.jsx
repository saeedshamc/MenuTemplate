import { useState } from 'react'
import { formatPrice } from '../data/menuData'

const BADGE_LABEL = {
  best: 'پرفروش',
  spicy: 'تند',
  new: 'جدید',
}

export default function MenuCard({ item, index = 0 }) {
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)

  return (
    <article
      className={`menu-card ${loaded ? 'is-loaded' : ''}`}
      style={{ animationDelay: `${Math.min(index, 12) * 45}ms` }}
    >
      {item.badge && <span className={`badge badge-${item.badge}`}>{BADGE_LABEL[item.badge] || item.badge}</span>}
      <div className="menu-card-media">
        {!failed ? (
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="menu-card-fallback">🍽️</div>
        )}
        <div className="menu-card-shine" aria-hidden />
      </div>
      <div className="menu-card-body">
        <div className="menu-card-top">
          <h3>{item.name}</h3>
          <span className="prep">{item.prep} دقیقه</span>
        </div>
        <p>{item.desc}</p>
        {item.tags?.length > 0 && (
          <div className="tags">
            {item.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        )}
        <div className="menu-card-footer">
          <strong>{formatPrice(item.price)}</strong>
        </div>
      </div>
    </article>
  )
}
