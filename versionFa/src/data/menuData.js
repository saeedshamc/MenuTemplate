// داده‌های نمونه منو — رستوران، کافه و بستنی‌فروشی
// هر آیتم: id, section, category, name, desc, price (تومان), img (کلیدواژه تصویر), icon (ایموجی fallback), popular

export const sections = [
  { id: 'restaurant', label: 'رستوران', icon: '🍽️' },
  { id: 'cafe', label: 'کافه', icon: '☕' },
  { id: 'icecream', label: 'بستنی‌فروشی', icon: '🍨' },
]

export const menuItems = [
  // ==================== رستوران ====================
  // پیش‌غذا
  { id: 1, section: 'restaurant', category: 'پیش‌غذا', name: 'سالاد سزار', desc: 'کاهو، مرغ گریل، پنیر پارمزان، سس سزار خانگی', price: 145000, img: 'caesar-salad', icon: '🥗', popular: true },
  { id: 2, section: 'restaurant', category: 'پیش‌غذا', name: 'سالاد یونانی', desc: 'گوجه، خیار، زیتون، پنیر فتا و روغن زیتون', price: 130000, img: 'greek-salad', icon: '🥙' },
  { id: 3, section: 'restaurant', category: 'پیش‌غذا', name: 'سوپ جو', desc: 'سوپ جو با مرغ و سبزیجات تازه', price: 95000, img: 'barley-soup', icon: '🍲' },
  { id: 4, section: 'restaurant', category: 'پیش‌غذا', name: 'سوپ عدس', desc: 'سوپ عدس با ادویه‌جات معطر', price: 90000, img: 'lentil-soup', icon: '🍜' },
  { id: 5, section: 'restaurant', category: 'پیش‌غذا', name: 'نان سیر مخصوص', desc: 'نان تست‌شده با کره سیر و پنیر موزارلا', price: 110000, img: 'garlic-bread', icon: '🥖' },
  { id: 6, section: 'restaurant', category: 'پیش‌غذا', name: 'میگو سوخاری', desc: 'میگوی سوخاری با سس تارتار', price: 195000, img: 'fried-shrimp', icon: '🍤', popular: true },
  { id: 7, section: 'restaurant', category: 'پیش‌غذا', name: 'کالاماری سرخ‌شده', desc: 'حلقه‌های ماهی مرکب با سس مخصوص', price: 175000, img: 'calamari', icon: '🦑' },
  { id: 8, section: 'restaurant', category: 'پیش‌غذا', name: 'بروشتای گوجه', desc: 'نان تست با گوجه تازه، ریحان و پستو', price: 105000, img: 'bruschetta', icon: '🍅' },

  // غذای اصلی
  { id: 9, section: 'restaurant', category: 'غذای اصلی', name: 'چلوکباب کوبیده', desc: 'دو سیخ کباب کوبیده گوشت گوسفندی با برنج ایرانی', price: 320000, img: 'kebab-rice', icon: '🍢', popular: true, spicy: true },
  { id: 10, section: 'restaurant', category: 'غذای اصلی', name: 'جوجه کباب زعفرانی', desc: 'فیله مرغ مزه‌دار شده با زعفران و لیمو', price: 285000, img: 'chicken-kebab', icon: '🍗', popular: true },
  { id: 11, section: 'restaurant', category: 'غذای اصلی', name: 'استیک گوشت گوساله', desc: 'استیک با سس فلفل سیاه و سیب‌زمینی سرخ‌کرده', price: 480000, img: 'beef-steak', icon: '🥩' },
  { id: 12, section: 'restaurant', category: 'غذای اصلی', name: 'استیک سالمون', desc: 'فیله سالمون گریل‌شده با سبزیجات بخارپز', price: 420000, img: 'salmon-steak', icon: '🐟' },
  { id: 13, section: 'restaurant', category: 'غذای اصلی', name: 'پاستا آلفردو', desc: 'پاستا فوتوچینی با سس خامه و مرغ', price: 265000, img: 'alfredo-pasta', icon: '🍝' },
  { id: 14, section: 'restaurant', category: 'غذای اصلی', name: 'اسپاگتی بولونیز', desc: 'اسپاگتی با سس گوشت چرخ‌کرده و گوجه', price: 250000, img: 'spaghetti-bolognese', icon: '🍝' },
  { id: 15, section: 'restaurant', category: 'غذای اصلی', name: 'پیتزا پپرونی', desc: 'پپرونی، قارچ، فلفل دلمه‌ای و پنیر موزارلا', price: 310000, img: 'pepperoni-pizza', icon: '🍕', popular: true },
  { id: 16, section: 'restaurant', category: 'غذای اصلی', name: 'پیتزا مارگاریتا', desc: 'سس گوجه، پنیر موزارلا و ریحان تازه', price: 270000, img: 'margherita-pizza', icon: '🍕' },
  { id: 17, section: 'restaurant', category: 'غذای اصلی', name: 'برگر کلاسیک', desc: 'برگر گوشت ۱۸۰ گرمی با پنیر چدار و سس مخصوص', price: 220000, img: 'cheeseburger', icon: '🍔' },
  { id: 18, section: 'restaurant', category: 'غذای اصلی', name: 'برگر دوبل بیکن', desc: 'دو برگر گوشت، بیکن و پنیر دوبل', price: 265000, img: 'bacon-burger', icon: '🍔', popular: true },
  { id: 19, section: 'restaurant', category: 'غذای اصلی', name: 'ریزوتو قارچ', desc: 'برنج ایتالیایی با قارچ و پنیر پارمزان', price: 230000, img: 'mushroom-risotto', icon: '🍚' },
  { id: 20, section: 'restaurant', category: 'غذای اصلی', name: 'خوراک میگو', desc: 'میگو با سیر، فلفل و سس مخصوص رستوران', price: 340000, img: 'shrimp-dish', icon: '🦐' },
  { id: 21, section: 'restaurant', category: 'غذای اصلی', name: 'بال کبابی مخصوص', desc: 'بال مرغ با سس باربیکیو تند', price: 165000, img: 'chicken-wings', icon: '🍗' },
  { id: 22, section: 'restaurant', category: 'غذای اصلی', name: 'راسته گوسفندی', desc: 'راسته گوسفندی گریل‌شده با سس نعنا', price: 460000, img: 'lamb-chops', icon: '🍖' },
  { id: 23, section: 'restaurant', category: 'غذای اصلی', name: 'لازانیا گوشت', desc: 'لازانیای سنتی ایتالیایی با سس بشامل', price: 255000, img: 'lasagna', icon: '🧀' },
  { id: 24, section: 'restaurant', category: 'غذای اصلی', name: 'رول کالیفرنیا', desc: 'سوشی با خیار، آووکادو و گوشت خرچنگ', price: 210000, img: 'california-roll', icon: '🍣' },

  // دسر رستوران
  { id: 25, section: 'restaurant', category: 'دسر', name: 'تیرامیسو', desc: 'دسر ایتالیایی با قهوه و ماسکارپونه', price: 135000, img: 'tiramisu', icon: '🍰', popular: true },
  { id: 26, section: 'restaurant', category: 'دسر', name: 'موس شکلات', desc: 'موس شکلات تلخ با تزیین توت‌فرنگی', price: 120000, img: 'chocolate-mousse', icon: '🍫' },
  { id: 27, section: 'restaurant', category: 'دسر', name: 'کرم بروله', desc: 'دسر فرانسوی با روکش کارامل ترد', price: 125000, img: 'creme-brulee', icon: '🍮' },

  // نوشیدنی رستوران
  { id: 28, section: 'restaurant', category: 'نوشیدنی', name: 'دوغ سنتی', desc: 'دوغ خانگی با نعنا', price: 45000, img: 'yogurt-drink', icon: '🥛' },
  { id: 29, section: 'restaurant', category: 'نوشیدنی', name: 'آب‌پرتقال طبیعی', desc: 'آب‌پرتقال تازه‌گرفته', price: 65000, img: 'orange-juice', icon: '🍊' },
  { id: 30, section: 'restaurant', category: 'نوشیدنی', name: 'آب‌انار تازه', desc: 'آب‌انار طبیعی بدون شکر افزوده', price: 70000, img: 'pomegranate-juice', icon: '🍷' },

  // ==================== کافه ====================
  // قهوه
  { id: 31, section: 'cafe', category: 'قهوه', name: 'اسپرسو', desc: 'شات غلیظ قهوه با کرمای طلایی', price: 75000, img: 'espresso', icon: '☕' },
  { id: 32, section: 'cafe', category: 'قهوه', name: 'کاپوچینو', desc: 'اسپرسو با شیر بخارداده و فوم نرم', price: 95000, img: 'cappuccino', icon: '☕', popular: true },
  { id: 33, section: 'cafe', category: 'قهوه', name: 'لاته کارامل', desc: 'لاته با سس کارامل و کف شیر', price: 105000, img: 'caramel-latte', icon: '☕' },
  { id: 34, section: 'cafe', category: 'قهوه', name: 'آمریکانو', desc: 'اسپرسو رقیق‌شده با آب داغ', price: 80000, img: 'americano-coffee', icon: '☕' },
  { id: 35, section: 'cafe', category: 'قهوه', name: 'موکا', desc: 'ترکیب اسپرسو، شکلات داغ و شیر', price: 110000, img: 'mocha-coffee', icon: '☕' },
  { id: 36, section: 'cafe', category: 'قهوه', name: 'فلت وایت', desc: 'اسپرسو دوبل با شیر مخملی', price: 100000, img: 'flat-white', icon: '☕' },
  { id: 37, section: 'cafe', category: 'قهوه', name: 'قهوه ترک', desc: 'قهوه سنتی دم‌کرده در دیزی مسی', price: 85000, img: 'turkish-coffee', icon: '☕' },
  { id: 38, section: 'cafe', category: 'قهوه', name: 'قهوه دمی وی۶۰', desc: 'قهوه تخصصی دمی با دانه‌های تازه‌آسیاب', price: 120000, img: 'filter-coffee', icon: '☕', popular: true },

  // نوشیدنی سرد
  { id: 39, section: 'cafe', category: 'نوشیدنی سرد', name: 'آیس‌لاته وانیل', desc: 'قهوه سرد با شربت وانیل و یخ', price: 115000, img: 'iced-latte', icon: '🧊', popular: true },
  { id: 40, section: 'cafe', category: 'نوشیدنی سرد', name: 'موهیتو توت‌فرنگی', desc: 'نوشیدنی بدون الکل با نعنا و توت‌فرنگی', price: 130000, img: 'strawberry-mojito', icon: '🍹' },
  { id: 41, section: 'cafe', category: 'نوشیدنی سرد', name: 'اسموتی انبه', desc: 'اسموتی خنک با انبه طبیعی', price: 125000, img: 'mango-smoothie', icon: '🥭' },
  { id: 42, section: 'cafe', category: 'نوشیدنی سرد', name: 'آیس‌تی هلو', desc: 'چای سرد با طعم هلوی طبیعی', price: 95000, img: 'peach-iced-tea', icon: '🍑' },
  { id: 43, section: 'cafe', category: 'نوشیدنی سرد', name: 'لیموناد نعنا', desc: 'لیموناد خانگی با نعنای تازه', price: 90000, img: 'mint-lemonade', icon: '🍋' },
  { id: 44, section: 'cafe', category: 'نوشیدنی سرد', name: 'میلک‌شیک بلوبری', desc: 'میلک‌شیک با طعم بلوبری تازه', price: 118000, img: 'blueberry-milkshake', icon: '🫐' },

  // صبحانه
  { id: 45, section: 'cafe', category: 'صبحانه', name: 'کروسان کره‌ای', desc: 'کروسان تازه با کره و مربای خانگی', price: 90000, img: 'butter-croissant', icon: '🥐' },
  { id: 46, section: 'cafe', category: 'صبحانه', name: 'پنکیک عسل', desc: 'پنکیک با عسل، موز و آجیل', price: 140000, img: 'honey-pancakes', icon: '🥞', popular: true },
  { id: 47, section: 'cafe', category: 'صبحانه', name: 'صبحانه ایرانی مخصوص', desc: 'پنیر، گردو، مربا، کره و نان تازه', price: 165000, img: 'persian-breakfast', icon: '🍳' },
  { id: 48, section: 'cafe', category: 'صبحانه', name: 'آووکادو تست', desc: 'نان تست با آووکادو، تخم‌مرغ و فلفل', price: 150000, img: 'avocado-toast', icon: '🥑' },
  { id: 49, section: 'cafe', category: 'صبحانه', name: 'وافل با عسل', desc: 'وافل بلژیکی با عسل و میوه‌های تازه', price: 145000, img: 'waffle-honey', icon: '🧇' },

  // دسر کافه
  { id: 50, section: 'cafe', category: 'دسر', name: 'چیزکیک نیویورکی', desc: 'چیزکیک با سس توت قرمز', price: 130000, img: 'new-york-cheesecake', icon: '🍰' },
  { id: 51, section: 'cafe', category: 'دسر', name: 'براونی داغ', desc: 'براونی شکلاتی با بستنی وانیلی', price: 145000, img: 'hot-brownie', icon: '🍫', popular: true },
  { id: 52, section: 'cafe', category: 'دسر', name: 'کوکی شکلاتی', desc: 'کوکی خانگی با تکه‌های شکلات', price: 65000, img: 'chocolate-cookie', icon: '🍪' },
  { id: 53, section: 'cafe', category: 'دسر', name: 'مافین بلوبری', desc: 'مافین نرم با تکه‌های بلوبری', price: 75000, img: 'blueberry-muffin', icon: '🧁' },

  // ==================== بستنی‌فروشی ====================
  // بستنی سنتی
  { id: 54, section: 'icecream', category: 'بستنی سنتی', name: 'بستنی سنتی زعفرانی', desc: 'بستنی سنتی با زعفران، پسته و خامه', price: 85000, img: 'persian-saffron-ice-cream', icon: '🍨', popular: true },
  { id: 55, section: 'icecream', category: 'بستنی سنتی', name: 'بستنی گل و بلبل', desc: 'بستنی سنتی با تکه‌های بستنی گل و بلبل', price: 90000, img: 'saffron-ice-cream', icon: '🍨' },
  { id: 56, section: 'icecream', category: 'بستنی سنتی', name: 'بستنی اکبر مشتی', desc: 'بستنی سنتی با طعم گلاب و پسته', price: 95000, img: 'traditional-ice-cream', icon: '🍨' },

  // بستنی فانتزی
  { id: 57, section: 'icecream', category: 'بستنی فانتزی', name: 'بستنی شکلاتی مغزدار', desc: 'بستنی شکلاتی با مغز فندق و سس شکلات', price: 110000, img: 'chocolate-ice-cream', icon: '🍦' },
  { id: 58, section: 'icecream', category: 'بستنی فانتزی', name: 'بستنی توت‌فرنگی', desc: 'بستنی خامه‌ای با تکه‌های توت‌فرنگی تازه', price: 100000, img: 'strawberry-ice-cream', icon: '🍧', popular: true },
  { id: 59, section: 'icecream', category: 'بستنی فانتزی', name: 'بستنی نارگیلی', desc: 'بستنی خامه‌ای با براده نارگیل تازه', price: 95000, img: 'coconut-ice-cream', icon: '🍨' },
  { id: 60, section: 'icecream', category: 'بستنی فانتزی', name: 'بستنی پسته', desc: 'بستنی خامه‌ای با پسته خرد‌شده', price: 105000, img: 'pistachio-ice-cream', icon: '🍨' },
  { id: 61, section: 'icecream', category: 'بستنی فانتزی', name: 'بستنی نعنا شکلاتی', desc: 'بستنی نعنایی با تکه‌های شکلات', price: 100000, img: 'mint-chocolate-ice-cream', icon: '🍦' },
  { id: 62, section: 'icecream', category: 'بستنی فانتزی', name: 'بستنی کارامل نمکی', desc: 'بستنی کارامل با کمی نمک دریایی', price: 108000, img: 'salted-caramel-ice-cream', icon: '🍨', popular: true },
  { id: 63, section: 'icecream', category: 'بستنی فانتزی', name: 'بستنی توت آبی', desc: 'بستنی خامه‌ای با تکه‌های بلوبری', price: 102000, img: 'blueberry-ice-cream', icon: '🍧' },
  { id: 64, section: 'icecream', category: 'بستنی فانتزی', name: 'بستنی موزی', desc: 'بستنی با طعم موز طبیعی', price: 95000, img: 'banana-ice-cream', icon: '🍨' },

  // میلک‌شیک
  { id: 65, section: 'icecream', category: 'میلک‌شیک', name: 'میلک‌شیک نوتلا', desc: 'میلک‌شیک با نوتلا و تاپینگ ویپ‌کریم', price: 120000, img: 'nutella-milkshake', icon: '🥤', popular: true },
  { id: 66, section: 'icecream', category: 'میلک‌شیک', name: 'میلک‌شیک وانیل', desc: 'میلک‌شیک کلاسیک وانیلی با خامه', price: 105000, img: 'vanilla-milkshake', icon: '🥤' },
  { id: 67, section: 'icecream', category: 'میلک‌شیک', name: 'میلک‌شیک شکلات', desc: 'میلک‌شیک غلیظ با شکلات تلخ', price: 112000, img: 'chocolate-milkshake', icon: '🥤' },
  { id: 68, section: 'icecream', category: 'میلک‌شیک', name: 'میلک‌شیک اورئو', desc: 'میلک‌شیک با تکه‌های بیسکویت اورئو', price: 125000, img: 'oreo-milkshake', icon: '🥤' },

  // دسر یخی
  { id: 69, section: 'icecream', category: 'دسر یخی', name: 'ساندی موز و کارامل', desc: 'بستنی وانیلی با موز، کارامل و آجیل', price: 135000, img: 'banana-caramel-sundae', icon: '🍨', popular: true },
  { id: 70, section: 'icecream', category: 'دسر یخی', name: 'وافل با بستنی', desc: 'وافل داغ با یک اسکوپ بستنی وانیلی', price: 140000, img: 'waffle-ice-cream', icon: '🧇' },
  { id: 71, section: 'icecream', category: 'دسر یخی', name: 'ساندویچ بستنی', desc: 'بستنی میان دو کوکی شکلاتی', price: 98000, img: 'ice-cream-sandwich', icon: '🍪' },
]

export const formatPrice = (price) =>
  price.toLocaleString('fa-IR') + ' تومان'

// آدرس تصویر بر اساس کلیدواژه — از یک سرویس تصاویر رایگان و کلیدواژه‌محور استفاده می‌شود.
// در صورت خطای بارگذاری تصویر، کامپوننت MenuCard به‌صورت خودکار به ایموجی بازمی‌گردد.
export const getImageUrl = (item) =>
  `https://loremflickr.com/480/360/${item.img}/all?lock=${item.id}`
