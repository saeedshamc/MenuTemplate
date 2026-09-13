export const CATEGORIES = [
  { id: 'dog', name: 'هات‌داگ' },
  { id: 'sausage', name: 'سوسیس' },
  { id: 'side', name: 'ساید' },
  { id: 'sauce', name: 'سس' },
  { id: 'drink', name: 'نوشیدنی' },
]

export function formatPrice(n) {
  return `${n.toLocaleString('fa-IR')} تومان`
}

export function img(id, w = 640) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`
}

export const PRODUCTS = [
  { id: 1, category: 'dog', name: 'کلاسیک خردل', price: 98000, prep: 5, badge: 'best', desc: 'هات‌داگ کلاسیک با خردل دیژون و پیاز سرخ.', tags: ['کلاسیک'], image: img('photo-1612392062798-2fdfb59d4f4e') },
  { id: 2, category: 'dog', name: 'چیلی داگ', price: 125000, prep: 7, badge: 'spicy', desc: 'هات‌داگ با چیلی گوشت و پنیر چدار.', tags: ['تند'], image: img('photo-1612392062798-2fdfb59d4f4e') },
  { id: 3, category: 'dog', name: 'چیز داگ', price: 115000, prep: 6, desc: 'سوسیس با پنیر ذوب و سس مخصوص.', tags: ['پنیری'], image: img('photo-1541214113241-49ce0dbddc4c') },
  { id: 4, category: 'dog', name: 'شیکاگو استایل', price: 135000, prep: 7, badge: 'new', desc: 'با خیارشور، گوجه، خردل و کرفس نمک.', tags: ['امضا'], image: img('photo-1612392062798-2fdfb59d4f4e') },
  { id: 5, category: 'dog', name: 'داگ باربیکیو', price: 128000, prep: 6, desc: 'سوسیس دودی با سس باربیکیو و پیاز.', tags: ['دودی'], image: img('photo-1541214113241-49ce0dbddc4c') },
  { id: 6, category: 'dog', name: 'دبل داگ', price: 155000, prep: 8, badge: 'best', desc: 'دو سوسیس در یک نان با تاپینگ کامل.', tags: ['سنگین'], image: img('photo-1612392062798-2fdfb59d4f4e') },
  { id: 7, category: 'sausage', name: 'سوسیس آلمانی', price: 145000, prep: 8, desc: 'سوسیس آلمانی گریل با خردل درشت.', tags: [], image: img('photo-1529692236671-f1f6cf9683ba') },
  { id: 8, category: 'sausage', name: 'سوسیس تند مجاری', price: 138000, prep: 8, badge: 'spicy', desc: 'سوسیس پاپریکایی تند با پیاز.', tags: ['تند'], image: img('photo-1529692236671-f1f6cf9683ba') },
  { id: 9, category: 'sausage', name: 'سوسیس پنیری', price: 142000, prep: 8, badge: 'new', desc: 'سوسیس با مغز پنیر کش‌دار.', tags: ['پنیری'], image: img('photo-1529692236671-f1f6cf9683ba') },
  { id: 10, category: 'sausage', name: 'سوسیس گیاهی', price: 125000, prep: 7, desc: 'سوسیس گیاهی گریل با سبزیجات.', tags: ['گیاهی'], image: img('photo-1529692236671-f1f6cf9683ba') },
  { id: 11, category: 'side', name: 'سیب‌زمینی خلالی', price: 75000, prep: 6, badge: 'best', desc: 'خلال طلایی با نمک.', tags: [], image: img('photo-1576107232684-1279f390859f') },
  { id: 12, category: 'side', name: 'پیاز حلقه‌ای', price: 78000, prep: 7, desc: 'حلقه پیاز ترد و طلایی.', tags: [], image: img('photo-1630384060421-cb20d0e0649d') },
  { id: 13, category: 'side', name: 'ناگت مرغ', price: 98000, prep: 8, desc: 'شش عدد ناگت ترد.', tags: [], image: img('photo-1562967914-608f82629710') },
  { id: 14, category: 'side', name: 'ذرت کره‌ای', price: 65000, prep: 5, badge: 'new', desc: 'ذرت آب‌پز با کره و پنیر.', tags: [], image: img('photo-1551754655-cd27e38d2076') },
  { id: 15, category: 'sauce', name: 'خردل دیژون', price: 20000, prep: 1, desc: 'خردل کلاسیک فرانسوی.', tags: [], image: img('photo-1472476443507-c7a5948772fc') },
  { id: 16, category: 'sauce', name: 'کتچاپ خانگی', price: 18000, prep: 1, badge: 'best', desc: 'کتچاپ کمی ترش و شیرین.', tags: [], image: img('photo-1472476443507-c7a5948772fc') },
  { id: 17, category: 'sauce', name: 'سس مخصوص استریت', price: 25000, prep: 1, badge: 'new', desc: 'سس امضادار داگ‌استریت.', tags: ['امضا'], image: img('photo-1472476443507-c7a5948772fc') },
  { id: 18, category: 'sauce', name: 'سس آتشین', price: 22000, prep: 1, badge: 'spicy', desc: 'سس فلفل تند.', tags: ['تند'], image: img('photo-1472476443507-c7a5948772fc') },
  { id: 19, category: 'drink', name: 'کولا یخ', price: 45000, prep: 1, desc: 'نوشابه گازدار سرد.', tags: [], image: img('photo-1622483767028-3f66f32aef97') },
  { id: 20, category: 'drink', name: 'لیموناد', price: 58000, prep: 3, badge: 'best', desc: 'لیموناد تازه خانگی.', tags: [], image: img('photo-1523677011781-c91d1bbe2f9e') },
  { id: 21, category: 'drink', name: 'آب معدنی', price: 25000, prep: 1, desc: 'بطری آب سرد.', tags: [], image: img('photo-1523362628745-0c100150b504') },
  { id: 22, category: 'dog', name: 'کمبو داگ + فرایز', price: 155000, prep: 8, badge: 'best', desc: 'یک هات‌داگ به انتخاب + سیب‌زمینی + نوشابه.', tags: ['کمبو'], image: img('photo-1612392062798-2fdfb59d4f4e') },
]
