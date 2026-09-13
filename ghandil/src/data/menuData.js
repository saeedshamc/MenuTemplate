export const CATEGORIES = [
  { id: 'tea', name: 'چای' },
  { id: 'herbal', name: 'دمنوش' },
  { id: 'coffee', name: 'قهوه خانه' },
  { id: 'snack', name: 'میان‌وعده سنتی' },
  { id: 'sweet', name: 'شیرینی' },
]

export function formatPrice(n) {
  return `${n.toLocaleString('fa-IR')} تومان`
}

export function img(id, w = 640) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`
}

export const PRODUCTS = [
  { id: 1, category: 'tea', name: 'چای سیاه قندیل', price: 45000, prep: 5, badge: 'best', desc: 'چای سیاه دم‌کشیده در سماور، سرو با قند کله‌قندی.', tags: ['امضا'], image: img('photo-1576092768241-dec231879fc3') },
  { id: 2, category: 'tea', name: 'چای دارچین هل', price: 55000, prep: 6, desc: 'چای سیاه با دارچین و هل تازه کوبیده.', tags: ['گرم'], image: img('photo-1597318181409-cf64d0b5d8a2') },
  { id: 3, category: 'tea', name: 'چای بهارنارنج', price: 52000, prep: 5, badge: 'new', desc: 'چای معطر با عرق بهارنارنج شمال.', tags: ['معطر'], image: img('photo-1564890369478-c89ca6d9cde9') },
  { id: 4, category: 'tea', name: 'چای کرک هندی', price: 68000, prep: 7, desc: 'چای شیر و ادویه با هل و زنجبیل.', tags: ['کرک'], image: img('photo-1571934811356-5cc061b6821f') },
  { id: 5, category: 'herbal', name: 'دمنوش آویشن عسل', price: 58000, prep: 6, badge: 'best', desc: 'آویشن کوهی با عسل طبیعی گون.', tags: ['گیاهی'], image: img('photo-1597318181409-cf64d0b5d8a2') },
  { id: 6, category: 'herbal', name: 'دمنوش گل‌گاوزبان', price: 62000, prep: 6, desc: 'گل‌گاوزبان با لیمو عمانی و نبات.', tags: ['آرام‌بخش'], image: img('photo-1564890369478-c89ca6d9cde9') },
  { id: 7, category: 'herbal', name: 'دمنوش به لیمو', price: 55000, prep: 5, desc: 'برگ به لیمو تازه دم‌کرده.', tags: [], image: img('photo-1576092768241-dec231879fc3') },
  { id: 8, category: 'herbal', name: 'دمنوش زنجبیل لیمو', price: 60000, prep: 6, badge: 'new', desc: 'زنجبیل تازه، لیمو و کمی عسل.', tags: ['انرژی'], image: img('photo-1571934811356-5cc061b6821f') },
  { id: 9, category: 'coffee', name: 'قهوه ترک', price: 75000, prep: 8, badge: 'best', desc: 'قهوه ترک جوشیده روی شن، با تل‌تل.', tags: ['سنتی'], image: img('photo-1514432324607-a09d9b4aefdd') },
  { id: 10, category: 'coffee', name: 'قهوه فرانسه', price: 70000, prep: 6, desc: 'قهوه فرانسه با شیوه‌ی فرنچ‌پرس.', tags: [], image: img('photo-1495474472287-4d71bcdd2085') },
  { id: 11, category: 'coffee', name: 'نسکافه مخصوص', price: 65000, prep: 4, desc: 'نسکافه خامه‌ای با دارچین رویه.', tags: [], image: img('photo-1511920170033-f8396924c348') },
  { id: 12, category: 'snack', name: 'آش رشته', price: 125000, prep: 10, badge: 'best', desc: 'آش رشته سنتی با کشک و نعناع داغ.', tags: ['سنگین'], image: img('photo-1547592166-23ac45744acd') },
  { id: 13, category: 'snack', name: 'حلیم گندم', price: 135000, prep: 12, desc: 'حلیم آهسته‌پز با دارچین و کره.', tags: ['صبحگاهی'], image: img('photo-1604908176997-125f25cc6f3d') },
  { id: 14, category: 'snack', name: 'نیمرو و نان سنگک', price: 98000, prep: 8, desc: 'نیمرو کره‌ای با سنگک تازه و پنیر.', tags: [], image: img('photo-1525351484163-7529414344d8') },
  { id: 15, category: 'snack', name: 'عدسی داغ', price: 85000, prep: 8, desc: 'عدسی با لیمو و پیاز سرخ‌شده.', tags: [], image: img('photo-1547592166-23ac45744acd') },
  { id: 16, category: 'snack', name: 'سالاد شیرازی', price: 72000, prep: 5, desc: 'خیار، گوجه، پیاز و آب‌لیمو.', tags: ['سبک'], image: img('photo-1512621776951-a57141f2eefd') },
  { id: 17, category: 'sweet', name: 'باقلوای پسته‌ای', price: 95000, prep: 2, badge: 'best', desc: 'باقلوای لایه‌لایه با پسته و شربت گل‌محمدی.', tags: [], image: img('photo-1599599810769-bcde5a160d32') },
  { id: 18, category: 'sweet', name: 'زولبیا بامیه', price: 78000, prep: 2, desc: 'زولبیا و بامیه تازه با شربت زعفران.', tags: ['فصلی'], image: img('photo-1488477181946-6428a0291777') },
  { id: 19, category: 'sweet', name: 'سوهان قم', price: 88000, prep: 1, badge: 'new', desc: 'سوهان پسته‌ای ترد و زعفرانی.', tags: [], image: img('photo-1606313564200-e75d5e30476c') },
  { id: 20, category: 'sweet', name: 'نان برنجی کرمانشاه', price: 65000, prep: 1, desc: 'نان برنجی هل‌دار سنتی.', tags: [], image: img('photo-1509440159596-0249088772ff') },
  { id: 21, category: 'sweet', name: 'گز آردی اصفهان', price: 92000, prep: 1, desc: 'گز آردی با مغز پسته.', tags: [], image: img('photo-1599599810769-bcde5a160d32') },
  { id: 22, category: 'tea', name: 'سماور دونفره', price: 120000, prep: 8, desc: 'سرو چای سماوری برای دو نفر با شیرینی.', tags: ['اشتراکی'], image: img('photo-1576092768241-dec231879fc3') },
]
