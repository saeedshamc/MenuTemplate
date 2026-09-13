export const CATEGORIES = [
  { id: 'wrap', name: 'رپ و ساندویچ' },
  { id: 'fries', name: 'سیب‌زمینی' },
  { id: 'sauce', name: 'سس' },
  { id: 'drink', name: 'نوشیدنی سرد' },
  { id: 'combo', name: 'کمبو' },
]

export function formatPrice(n) {
  return `${n.toLocaleString('fa-IR')} تومان`
}

export function img(id, w = 640) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`
}

export const PRODUCTS = [
  { id: 1, category: 'wrap', name: 'رپ مرغ سوخاری', price: 165000, prep: 8, badge: 'best', desc: 'مرغ سوخاری، کاهو، خیارشور و سس مخصوص چرخ.', tags: ['داغ'], image: img('photo-1626700051175-6818013e1d4f') },
  { id: 2, category: 'wrap', name: 'ساندویچ استیک', price: 185000, prep: 9, desc: 'گوشت استیک ورقه‌ای با پیاز کاراملی و پنیر.', tags: ['پروتئین'], image: img('photo-1550507992-eb52bfee1576') },
  { id: 3, category: 'wrap', name: 'رپ فلافل', price: 128000, prep: 7, badge: 'new', desc: 'فلافل ترد، سبزیجات و سس طحینه.', tags: ['گیاهی'], image: img('photo-1529006557810-274b9b2fc783') },
  { id: 4, category: 'wrap', name: 'هات‌داگ خیابانی', price: 98000, prep: 5, desc: 'هات‌داگ با خردل، کetchup و پیاز سرخ.', tags: [], image: img('photo-1612392062798-2fdfb59d4f4e') },
  { id: 5, category: 'wrap', name: 'ساندویچ مرغ پستو', price: 155000, prep: 8, desc: 'مرغ گریل، پستو و گوجه‌چری در نان باگت.', tags: [], image: img('photo-1539252554453-80ab65ce3586') },
  { id: 6, category: 'wrap', name: 'تاکو گوشت', price: 145000, prep: 8, badge: 'spicy', desc: 'تاکو گوشت چرخ با سالسا تند.', tags: ['تند'], image: img('photo-1565299585323-38d6b0865b47') },
  { id: 7, category: 'fries', name: 'سیب‌زمینی کلاسیک', price: 78000, prep: 6, badge: 'best', desc: 'خلال سیب‌زمینی طلایی با نمک دریا.', tags: [], image: img('photo-1576107232684-1279f390859f') },
  { id: 8, category: 'fries', name: 'فریز چیز', price: 115000, prep: 7, desc: 'سیب‌زمینی با پنیر ذوب و پیازچه.', tags: ['پنیری'], image: img('photo-1630384060421-cb20d0e0649d') },
  { id: 9, category: 'fries', name: 'سیب‌زمینی ترافل', price: 135000, prep: 7, badge: 'new', desc: 'سیب‌زمینی با روغن ترافل و پارمزان.', tags: ['پریمیوم'], image: img('photo-1518013431117-eb1465fa5752') },
  { id: 10, category: 'fries', name: 'وِج فرایز', price: 85000, prep: 8, desc: 'سیب‌زمینی قاچی با پوست و ادویه پاپریکا.', tags: [], image: img('photo-1576107232684-1279f390859f') },
  { id: 11, category: 'sauce', name: 'سس مخصوص چرخ', price: 25000, prep: 1, badge: 'best', desc: 'سس امضادار فودتراک؛ کمی تند و دودی.', tags: ['امضا'], image: img('photo-1472476443507-c7a5948772fc') },
  { id: 12, category: 'sauce', name: 'سس سیر', price: 22000, prep: 1, desc: 'سس سیر خامه‌ای خانگی.', tags: [], image: img('photo-1472476443507-c7a5948772fc') },
  { id: 13, category: 'sauce', name: 'سس باربیکیو', price: 22000, prep: 1, desc: 'باربیکیو دودی شیرین.', tags: [], image: img('photo-1472476443507-c7a5948772fc') },
  { id: 14, category: 'sauce', name: 'سس تند آتشین', price: 22000, prep: 1, badge: 'spicy', desc: 'سس فلفل تند برای عاشقان آتش.', tags: ['تند'], image: img('photo-1472476443507-c7a5948772fc') },
  { id: 15, category: 'drink', name: 'لیموناد خانگی', price: 65000, prep: 3, badge: 'best', desc: 'لیموناد تازه با نعناع و یخ خرد.', tags: [], image: img('photo-1523677011781-c91d1bbe2f9e') },
  { id: 16, category: 'drink', name: 'کولا یخ', price: 45000, prep: 1, desc: 'نوشابه گازدار سرد.', tags: [], image: img('photo-1622483767028-3f66f32aef97') },
  { id: 17, category: 'drink', name: 'آیس تی هلو', price: 58000, prep: 2, desc: 'چای سرد هلویی.', tags: [], image: img('photo-1556679343-c7306c1976bc') },
  { id: 18, category: 'drink', name: 'آب معدنی', price: 25000, prep: 1, desc: 'بطری آب معدنی سرد.', tags: [], image: img('photo-1523362628745-0c100150b504') },
  { id: 19, category: 'combo', name: 'کمبو رپ + فرایز', price: 215000, prep: 10, badge: 'best', desc: 'یک رپ به انتخاب + سیب‌زمینی کلاسیک + نوشابه.', tags: ['پیشنهادی'], image: img('photo-1626700051175-6818013e1d4f') },
  { id: 20, category: 'combo', name: 'کمبو استیک', price: 245000, prep: 11, desc: 'ساندویچ استیک + فریز چیز + لیموناد.', tags: [], image: img('photo-1550507992-eb52bfee1576') },
  { id: 21, category: 'combo', name: 'کمبو گیاهی', price: 185000, prep: 9, badge: 'new', desc: 'رپ فلافل + وِج فرایز + آیس تی.', tags: ['گیاهی'], image: img('photo-1529006557810-274b9b2fc783') },
  { id: 22, category: 'combo', name: 'کمبو آتشین', price: 235000, prep: 10, badge: 'spicy', desc: 'تاکو گوشت + فرایز + سس تند + کولا.', tags: ['تند'], image: img('photo-1565299585323-38d6b0865b47') },
]
