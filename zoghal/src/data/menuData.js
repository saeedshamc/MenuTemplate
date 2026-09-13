export const CATEGORIES = [
  { id: 'starter', name: 'پیش‌غذای بار' },
  { id: 'grill', name: 'گریل' },
  { id: 'fries', name: 'سیب‌زمینی' },
  { id: 'drink', name: 'نوشیدنی' },
  { id: 'combo', name: 'کمبو' },
]

export function formatPrice(n) {
  return `${n.toLocaleString('fa-IR')} تومان`
}

export function img(id, w = 640) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`
}

export const PRODUCTS = [
  { id: 1, category: 'starter', name: 'بال‌مرغ دودی', price: 185000, prep: 15, badge: 'best', desc: 'بال‌مرغ زغال‌پز با سس باربیکیو دودی.', tags: ['دودی'], image: img('photo-1527477396000-e27173b57599') },
  { id: 2, category: 'starter', name: 'ناچو بار', price: 165000, prep: 10, desc: 'چیپس ذرت با پنیر، سالسا و خامه ترش.', tags: ['اشتراکی'], image: img('photo-1513456852971-30c0b8199d4d') },
  { id: 3, category: 'starter', name: 'پیاز حلقه‌ای', price: 98000, prep: 8, badge: 'new', desc: 'حلقه‌های پیاز ترد با سس سیر.', tags: [], image: img('photo-1630384060421-cb20d0e0649d') },
  { id: 4, category: 'starter', name: 'سوسیس گریل بشقابی', price: 175000, prep: 12, desc: 'سوسیس دودی زغال با خردل دیژون.', tags: [], image: img('photo-1529692236671-f1f6cf9683ba') },
  { id: 5, category: 'grill', name: 'برگر ذغالی زغال‌چوب', price: 245000, prep: 14, badge: 'best', desc: 'برگر ۲۰۰ گرمی زغال‌پز با پنیر چدار.', tags: ['امضا'], image: img('photo-1568901346375-23c9450c58cd') },
  { id: 6, category: 'grill', name: 'استیک تاگلیاتا', price: 485000, prep: 18, desc: 'استیک ورقه‌ای با روکولا و پارمزان.', tags: ['پریمیوم'], image: img('photo-1544025166-1c7d0bf0e859') },
  { id: 7, category: 'grill', name: 'جوجه ساطوری', price: 220000, prep: 16, desc: 'جوجه ساطوری با ادویه دودی.', tags: [], image: img('photo-1598103442097-8b74394b95c6') },
  { id: 8, category: 'grill', name: 'ماهی سفید گریل', price: 295000, prep: 15, desc: 'فیله ماهی سفید با لیمو و کره سیر.', tags: ['دریایی'], image: img('photo-1467003909585-2f8a72700288') },
  { id: 9, category: 'grill', name: 'کباب بوقلمون', price: 235000, prep: 16, badge: 'new', desc: 'سیخ بوقلمون با سس ماست نعناع.', tags: ['سبک'], image: img('photo-1529692236671-f1f6cf9683ba') },
  { id: 10, category: 'fries', name: 'فریز کلاسیک', price: 85000, prep: 8, badge: 'best', desc: 'سیب‌زمینی طلایی با نمک دریا.', tags: [], image: img('photo-1576107232684-1279f390859f') },
  { id: 11, category: 'fries', name: 'فریز لودد', price: 135000, prep: 10, desc: 'با بیکن ترد، پنیر و پیازچه.', tags: ['سنگین'], image: img('photo-1630384060421-cb20d0e0649d') },
  { id: 12, category: 'fries', name: 'سیب‌زمینی تنوری رزماری', price: 98000, prep: 18, desc: 'قاچ‌های تنوری با رزماری و سیر.', tags: [], image: img('photo-1518013431117-eb1465fa5752') },
  { id: 13, category: 'fries', name: 'سیب‌زمینی پاپریکا', price: 92000, prep: 9, badge: 'spicy', desc: 'خلال با ادویه پاپریکا تند.', tags: ['تند'], image: img('photo-1576107232684-1279f390859f') },
  { id: 14, category: 'drink', name: 'ماکتل دودی سیب', price: 125000, prep: 6, badge: 'best', desc: 'آب سیب دودی با رزماری و مرکبات.', tags: ['امضا'], image: img('photo-1514362545857-3bc16c4c7d1b') },
  { id: 15, category: 'drink', name: 'لیموناد زنجبیل', price: 78000, prep: 4, desc: 'لیموناد تازه با زنجبیل تند.', tags: [], image: img('photo-1523677011781-c91d1bbe2f9e') },
  { id: 16, category: 'drink', name: 'آیس کافی بار', price: 85000, prep: 4, desc: 'قهوه سرد با شیر و یخ.', tags: [], image: img('photo-1517701604599-bb29b565090c') },
  { id: 17, category: 'drink', name: 'شربت آلبالو', price: 65000, prep: 3, desc: 'شربت آلبالوی خانگی با یخ.', tags: [], image: img('photo-1556679343-c7306c1976bc') },
  { id: 18, category: 'drink', name: 'آب گازدار مس', price: 45000, prep: 1, desc: 'آب گازدار سرد در لیوان مسی.', tags: [], image: img('photo-1523362628745-0c100150b504') },
  { id: 19, category: 'combo', name: 'کمبو برگر شب', price: 295000, prep: 16, badge: 'best', desc: 'برگر ذغالی + فریز + ماکتل دودی.', tags: ['پیشنهادی'], image: img('photo-1568901346375-23c9450c58cd') },
  { id: 20, category: 'combo', name: 'کمبو بال‌مرغ', price: 255000, prep: 18, desc: 'بال‌مرغ دودی + فریز لودد + لیموناد.', tags: [], image: img('photo-1527477396000-e27173b57599') },
  { id: 21, category: 'combo', name: 'کمبو جوجه', price: 275000, prep: 18, badge: 'new', desc: 'جوجه ساطوری + سیب تنوری + آیس کافی.', tags: [], image: img('photo-1598103442097-8b74394b95c6') },
  { id: 22, category: 'combo', name: 'پلاتر اشتراکی', price: 520000, prep: 22, desc: 'بال، ناچو، سوسیس و فرایز برای ۳–۴ نفر.', tags: ['اشتراکی'], image: img('photo-1555939594-58d7cb561ad1') },
]
