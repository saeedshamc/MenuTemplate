// داده‌های نمونه منو — رستوران، کافه و بستنی‌فروشی
// هر آیتم: id, section (نوع مجموعه), category (دسته داخل بخش), name, desc, price (تومان), icon, popular, spicy, veg

export const sections = [
  { id: 'restaurant', label: 'رستوران', icon: '🍽️' },
  { id: 'cafe', label: 'کافه', icon: '☕' },
  { id: 'icecream', label: 'بستنی‌فروشی', icon: '🍨' },
]

export const menuItems = [
  // ---------------- رستوران ----------------
  { id: 1, section: 'restaurant', category: 'پیش‌غذا', name: 'سالاد سزار', desc: 'کاهو، مرغ گریل، پنیر پارمزان، سس سزار خانگی', price: 145000, icon: '🥗', popular: true },
  { id: 2, section: 'restaurant', category: 'پیش‌غذا', name: 'سوپ جو', desc: 'سوپ جو با مرغ و سبزیجات تازه', price: 95000, icon: '🍲' },
  { id: 3, section: 'restaurant', category: 'پیش‌غذا', name: 'نان سیر مخصوص', desc: 'نان تست شده با کره سیر و پنیر موزارلا', price: 110000, icon: '🥖' },
  { id: 4, section: 'restaurant', category: 'غذای اصلی', name: 'چلوکباب کوبیده', desc: 'دو سیخ کباب کوبیده گوشت گوسفندی با برنج ایرانی', price: 320000, icon: '🍢', popular: true, spicy: true },
  { id: 5, section: 'restaurant', category: 'غذای اصلی', name: 'جوجه کباب زعفرانی', desc: 'فیله مرغ مزه‌دار شده با زعفران و لیمو', price: 285000, icon: '🍗', popular: true },
  { id: 6, section: 'restaurant', category: 'غذای اصلی', name: 'استیک گوشت گوساله', desc: 'استیک با سس فلفل سیاه و سیب‌زمینی سرخ‌کرده', price: 480000, icon: '🥩' },
  { id: 7, section: 'restaurant', category: 'غذای اصلی', name: 'پاستا آلفردو', desc: 'پاستا فوتوچینی با سس خامه و مرغ', price: 265000, icon: '🍝' },
  { id: 8, section: 'restaurant', category: 'غذای اصلی', name: 'پیتزا مخصوص', desc: 'پپرونی، قارچ، فلفل دلمه‌ای و پنیر موزارلا', price: 310000, icon: '🍕' },
  { id: 9, section: 'restaurant', category: 'غذای اصلی', name: 'برگر رستوران', desc: 'برگر گوشت ۱۸۰ گرمی با پنیر چدار و سس مخصوص', price: 220000, icon: '🍔' },
  { id: 10, section: 'restaurant', category: 'دسر', name: 'تیرامیسو', desc: 'دسر ایتالیایی با قهوه و ماسکارپونه', price: 135000, icon: '🍰', popular: true },
  { id: 11, section: 'restaurant', category: 'دسر', name: 'موس شکلات', desc: 'موس شکلات تلخ با تزیین توت فرنگی', price: 120000, icon: '🍫' },
  { id: 12, section: 'restaurant', category: 'نوشیدنی', name: 'دوغ سنتی', desc: 'دوغ خانگی با نعنا', price: 45000, icon: '🥛' },

  // ---------------- کافه ----------------
  { id: 13, section: 'cafe', category: 'قهوه', name: 'اسپرسو', desc: 'شات غلیظ قهوه با کرمای طلایی', price: 75000, icon: '☕' },
  { id: 14, section: 'cafe', category: 'قهوه', name: 'کاپوچینو', desc: 'اسپرسو با شیر بخارداده و فوم نرم', price: 95000, icon: '☕', popular: true },
  { id: 15, section: 'cafe', category: 'قهوه', name: 'لاته کارامل', desc: 'لاته با سس کارامل و کف شیر', price: 105000, icon: '☕' },
  { id: 16, section: 'cafe', category: 'قهوه', name: 'آمریکانو', desc: 'اسپرسو رقیق‌شده با آب داغ', price: 80000, icon: '☕' },
  { id: 17, section: 'cafe', category: 'نوشیدنی سرد', name: 'آیس‌لاته وانیل', desc: 'قهوه سرد با شربت وانیل و یخ', price: 115000, icon: '🧊', popular: true },
  { id: 18, section: 'cafe', category: 'نوشیدنی سرد', name: 'موهیتو توت‌فرنگی', desc: 'نوشیدنی بدون الکل با نعنا و توت‌فرنگی', price: 130000, icon: '🍹' },
  { id: 19, section: 'cafe', category: 'نوشیدنی سرد', name: 'اسموتی انبه', desc: 'اسموتی خنک با انبه طبیعی', price: 125000, icon: '🥭' },
  { id: 20, section: 'cafe', category: 'صبحانه', name: 'کروسان کره‌ای', desc: 'کروسان تازه با کره و مربای خانگی', price: 90000, icon: '🥐' },
  { id: 21, section: 'cafe', category: 'صبحانه', name: 'پنکیک عسل', desc: 'پنکیک با عسل، موز و آجیل', price: 140000, icon: '🥞' },
  { id: 22, section: 'cafe', category: 'دسر', name: 'چیزکیک نیویورکی', desc: 'چیزکیک با سس توت قرمز', price: 130000, icon: '🍰' },
  { id: 23, section: 'cafe', category: 'دسر', name: 'براونی داغ', desc: 'براونی شکلاتی با بستنی وانیلی', price: 145000, icon: '🍫', popular: true },

  // ---------------- بستنی‌فروشی ----------------
  { id: 24, section: 'icecream', category: 'بستنی سنتی', name: 'بستنی سنتی زعفرانی', desc: 'بستنی سنتی با زعفران، پسته و خامه', price: 85000, icon: '🍨', popular: true },
  { id: 25, section: 'icecream', category: 'بستنی سنتی', name: 'بستنی گل و بلبل', desc: 'بستنی سنتی با تکه‌های بستنی گل و بلبل', price: 90000, icon: '🍨' },
  { id: 26, section: 'icecream', category: 'بستنی فانتزی', name: 'بستنی شکلاتی مغزدار', desc: 'بستنی شکلاتی با مغز فندق و سس شکلات', price: 110000, icon: '🍦' },
  { id: 27, section: 'icecream', category: 'بستنی فانتزی', name: 'بستنی توت‌فرنگی', desc: 'بستنی خامه‌ای با تکه‌های توت‌فرنگی تازه', price: 100000, icon: '🍧' },
  { id: 28, section: 'icecream', category: 'بستنی فانتزی', name: 'ساندی موز و کارامل', desc: 'بستنی وانیلی با موز، کارامل و آجیل', price: 135000, icon: '🍨', popular: true },
  { id: 29, section: 'icecream', category: 'میلک‌شیک', name: 'میلک‌شیک نوتلا', desc: 'میلک‌شیک با نوتلا و تاپینگ ویپ‌کریم', price: 120000, icon: '🥤' },
  { id: 30, section: 'icecream', category: 'میلک‌شیک', name: 'میلک‌شیک وانیل', desc: 'میلک‌شیک کلاسیک وانیلی با خامه', price: 105000, icon: '🥤' },
  { id: 31, section: 'icecream', category: 'بستنی فانتزی', name: 'بستنی نارگیلی', desc: 'بستنی خامه‌ای با براده نارگیل تازه', price: 95000, icon: '🍨' },
]

export const formatPrice = (price) =>
  price.toLocaleString('fa-IR') + ' تومان'
