// داده‌های منوی سوخاری کلویی
window.CATEGORIES = [
  { id: 'classic', name: 'سوخاری‌های کلاسیک', icon: 'bucket' },
  { id: 'sandwich', name: 'ساندویچ و برگر', icon: 'sandwich' },
  { id: 'strips', name: 'استریپس و ناگت', icon: 'strips' },
  { id: 'wings', name: 'بال و کتف', icon: 'wing' },
  { id: 'sides', name: 'پیش‌غذا و سالاد', icon: 'salad' },
  { id: 'drinks', name: 'نوشیدنی‌ها', icon: 'drink' },
  { id: 'sauces', name: 'سس‌های مخصوص', icon: 'sauce' },
];

window.PRODUCTS = [
  {
    id: 1, category: 'classic', name: 'سینی خانواده کلویی (۸ تکه)',
    price: 465000, prep: 25, badge: 'best',
    ingredients: ['ران و سینه مرغ', 'پانکو طلایی', 'ادویه ۱۱ گانه', 'سیب‌زمینی سرخ‌شده'],
    icon: 'bucket',
    desc: 'یک سینی پر از تکه‌های سوخاری ترد، مناسب برای جمع‌های خانوادگی.'
  },
  {
    id: 2, category: 'classic', name: 'باکت تکی (۳ تکه)',
    price: 189000, prep: 20,
    ingredients: ['ران مرغ', 'روغن کانولا', 'پوشش پانکو'],
    icon: 'bucket',
    desc: 'سه تکه ران مرغ سوخاری با روکش ترد و طلایی.'
  },
  {
    id: 3, category: 'classic', name: 'ران سوخاری تنوری',
    price: 95000, prep: 18,
    ingredients: ['ران مرغ بی‌استخوان', 'پاپریکا', 'فلفل سیاه'],
    icon: 'drumstick',
    desc: 'ران مرغ بدون استخوان با طعم دودی و ادویه پاپریکا.'
  },
  {
    id: 4, category: 'sandwich', name: 'ساندویچ اسپشیال کلویی',
    price: 145000, prep: 12, badge: 'best',
    ingredients: ['فیله سینه سوخاری', 'نان بریوش', 'کاهو و گوجه', 'سس مخصوص کلویی'],
    icon: 'sandwich',
    desc: 'فیله سوخاری ترد در نان بریوش نرم با سس امضادار کلویی.'
  },
  {
    id: 5, category: 'sandwich', name: 'برگر دوقلو سوخاری',
    price: 165000, prep: 14,
    ingredients: ['دو فیله سوخاری', 'پنیر چدار', 'خیارشور', 'سس باربیکیو'],
    icon: 'sandwich',
    desc: 'دو لایه فیله ترد با پنیر چدار ذوب‌شده و سس باربیکیو دودی.'
  },
  {
    id: 6, category: 'sandwich', name: 'رپ چیکن کلاسیک',
    price: 118000, prep: 10,
    ingredients: ['مرغ سوخاری خردشده', 'نان لواش', 'کاهو', 'سس رنچ'],
    icon: 'wrap',
    desc: 'رپ سبک و خوش‌طعم با مرغ سوخاری و سس رنچ خانگی.'
  },
  {
    id: 7, category: 'strips', name: 'استریپس طلایی (۵ عدد)',
    price: 138000, prep: 12,
    ingredients: ['فیله مرغ', 'پانکو مخصوص', 'سس دیپ انتخابی'],
    icon: 'strips',
    desc: 'استریپس‌های بلند و ترد، عالی برای غوطه‌ور کردن در سس‌ها.'
  },
  {
    id: 8, category: 'strips', name: 'ناگت مخصوص کلویی (۸ عدد)',
    price: 98000, prep: 10, badge: 'new',
    ingredients: ['سینه مرغ چرخ‌شده', 'پانیر مخصوص کلویی'],
    icon: 'nugget',
    desc: 'ناگت‌های گرد و ترد با ترکیب پانیر ویژه کلویی.'
  },
  {
    id: 9, category: 'wings', name: 'بال شعله‌ور تند',
    price: 128000, prep: 15, badge: 'spicy',
    ingredients: ['بال مرغ', 'سس فلفل کاروچینا', 'عسل'],
    icon: 'wing',
    desc: 'بال‌های آتشین با ترکیب فلفل کاروچینا و کمی عسل برای تعادل طعم.'
  },
  {
    id: 10, category: 'wings', name: 'بال سرکه‌ای عسلی',
    price: 128000, prep: 15,
    ingredients: ['بال مرغ', 'سرکه بالزامیک', 'عسل'],
    icon: 'wing',
    desc: 'ترکیبی دلپذیر از ترشی سرکه بالزامیک و شیرینی عسل.'
  },
  {
    id: 11, category: 'wings', name: 'کتف باربیکیو دودی',
    price: 115000, prep: 15,
    ingredients: ['کتف مرغ', 'سس باربیکیو دودی'],
    icon: 'wing',
    desc: 'کتف‌های آبدار با روکش سس باربیکیو دودی غلیظ.'
  },
  {
    id: 12, category: 'sides', name: 'سیب‌زمینی سرخ‌کرده کلویی',
    price: 68000, prep: 8,
    ingredients: ['سیب‌زمینی تازه', 'نمک دریایی', 'ادویه مخصوص'],
    icon: 'fries',
    desc: 'سیب‌زمینی‌های ترد بیرون و نرم داخل، با ادویه امضادار.'
  },
  {
    id: 13, category: 'sides', name: 'کلم سالاد خانگی',
    price: 45000, prep: 5,
    ingredients: ['کلم سفید و بنفش', 'هویج', 'سس مایونز خانگی'],
    icon: 'salad',
    desc: 'سالاد خنک و تازه، همراه خوب برای هر بشقاب سوخاری.'
  },
  {
    id: 14, category: 'sides', name: 'سالاد سزار مرغ',
    price: 138000, prep: 10,
    ingredients: ['کاهو', 'مرغ گریل', 'پارمزان', 'نان تست'],
    icon: 'salad',
    desc: 'سزار کلاسیک با تکه‌های مرغ گریل‌شده و پارمزان تازه.'
  },
  {
    id: 15, category: 'drinks', name: 'نوشابه قوطی',
    price: 35000, prep: 1,
    ingredients: ['کوکاکولا', 'فانتا', 'اسپرایت'],
    icon: 'drink',
    desc: 'نوشابه سرد قوطی، انتخاب کلاسیک برای همراهی با سوخاری.'
  },
  {
    id: 16, category: 'drinks', name: 'دوغ خانگی',
    price: 32000, prep: 1,
    ingredients: ['ماست', 'نعنا', 'آب گازدار'],
    icon: 'drink',
    desc: 'دوغ خنک و خوش‌عطر، تهیه‌شده با نعنای تازه.'
  },
  {
    id: 17, category: 'drinks', name: 'آبمیوه طبیعی فصل',
    price: 58000, prep: 5,
    ingredients: ['پرتقال', 'آناناس', 'هندوانه (بر اساس فصل)'],
    icon: 'drink',
    desc: 'آبمیوه تازه و طبیعی، گزینه‌ای سبک برای هر وعده.'
  },
  {
    id: 18, category: 'sauces', name: 'سس مخصوص کلویی',
    price: 18000, prep: 1,
    ingredients: ['مایونز', 'سیر', 'ادویه مخصوص'],
    icon: 'sauce',
    desc: 'سس امضادار کلویی، مکمل اصلی همه سوخاری‌ها.'
  },
  {
    id: 19, category: 'sauces', name: 'سس تند کلویی',
    price: 18000, prep: 1, badge: 'spicy',
    ingredients: ['فلفل قرمز', 'سیر', 'سرکه'],
    icon: 'sauce',
    desc: 'برای عاشقان تندی، با طعمی تند و ماندگار.'
  },
  {
    id: 20, category: 'sauces', name: 'سس چیزی',
    price: 22000, prep: 1,
    ingredients: ['پنیر چدار', 'شیر', 'فلفل سفید'],
    icon: 'sauce',
    desc: 'سس چیزی غلیظ و کرمی، عالی برای ناگت و استریپس.'
  },
];
