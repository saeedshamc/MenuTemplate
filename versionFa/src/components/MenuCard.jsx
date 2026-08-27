import { useState } from 'react'
import { formatPrice, getImageUrl } from '../data/menuData'

export default function MenuCard({ item }) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <div className="menu-card">
      {item.popular && <span className="badge">پرطرفدار</span>}

      <div className="menu-card-media">
        {!imgFailed ? (
          <img
            src={getImageUrl(item)}
            alt={item.name}
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="menu-card-img"
          />
        ) : (
          <div className="menu-card-img-fallback">{item.icon}</div>
        )}
      </div>

      <div className="menu-card-body">
        <div className="menu-card-top">
          <h3>{item.name}</h3>
          <span className="menu-card-category">{item.category}</span>
        </div>
        <p className="menu-card-desc">{item.desc}</p>
        <div className="menu-card-footer">
          <span className="menu-card-price">{formatPrice(item.price)}</span>
        </div>
      </div>
    </div>
  )
}
