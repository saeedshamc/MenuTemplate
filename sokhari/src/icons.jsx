import React from 'react';

// آیکون‌ها و تصویرسازی‌های برداری اختصاصی برای هر دسته غذایی
const Icons = {};

Icons.Logo = () => (
  <svg viewBox="0 0 64 64" fill="none">
    <path d="M32 6c-3 0-5 2-5 5 0 2 1 3 1 5-6 1-11 6-11 13 0 3 1 5 2 7-3 3-5 7-5 12 0 9 8 14 18 14s18-5 18-14c0-5-2-9-5-12 1-2 2-4 2-7 0-7-5-12-11-13 0-2 1-3 1-5 0-3-2-5-5-5z" fill="#8C2F1B"/>
    <path d="M20 34c0-7 5-12 12-12s12 5 12 12c0 8-6 15-12 15s-12-7-12-15z" fill="#F2A93E"/>
    <circle cx="27" cy="32" r="2.2" fill="#2B1D13"/>
    <circle cx="37" cy="32" r="2.2" fill="#2B1D13"/>
    <path d="M27 39c2 2 8 2 10 0" stroke="#2B1D13" strokeWidth="2" strokeLinecap="round" fill="none"/>
  </svg>
);

Icons.search = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
    <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

Icons.clock = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

Icons.flame = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M12 2c1 4-4 5-4 10a4 4 0 008 0c0-2-1-3-1-3s2 1 2 4a5 5 0 01-10 0C7 8 12 8 12 2z" fill="currentColor"/>
  </svg>
);

Icons.star = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M12 3l2.6 5.8 6.4.6-4.8 4.2 1.4 6.2L12 16.9 6.4 19.8l1.4-6.2-4.8-4.2 6.4-.6L12 3z" fill="currentColor"/>
  </svg>
);

Icons.leaf = (p) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14z" fill="currentColor"/>
  </svg>
);

// ---- Food illustrations (used inside product card media area) ----

Icons.bucket = () => (
  <svg viewBox="0 0 120 120">
    <ellipse cx="60" cy="100" rx="34" ry="8" fill="#6B2113"/>
    <path d="M28 46l8 52a6 6 0 006 5h36a6 6 0 006-5l8-52z" fill="#D93B29"/>
    <path d="M28 46l8 52a6 6 0 006 5h36a6 6 0 006-5l8-52z" fill="url(#stripe)" opacity="0.15"/>
    <rect x="24" y="34" width="72" height="16" rx="8" fill="#8C2F1B"/>
    <circle cx="46" cy="26" r="12" fill="#F2A93E" stroke="#8C2F1B" strokeWidth="3"/>
    <circle cx="68" cy="22" r="14" fill="#FBD98A" stroke="#8C2F1B" strokeWidth="3"/>
    <circle cx="86" cy="30" r="10" fill="#F2A93E" stroke="#8C2F1B" strokeWidth="3"/>
  </svg>
);

Icons.drumstick = () => (
  <svg viewBox="0 0 120 120">
    <path d="M55 20c10-6 24-2 27 9 3 10-3 20-13 26l-14 26c-3 6-11 8-16 4-5-4-6-12-1-17l19-22c-9-3-14-13-11-22 2-6 5-3 9-4z" fill="#F2A93E" stroke="#8C2F1B" strokeWidth="3"/>
    <circle cx="34" cy="88" r="7" fill="#FBD98A" stroke="#8C2F1B" strokeWidth="3"/>
  </svg>
);

Icons.sandwich = () => (
  <svg viewBox="0 0 120 120">
    <path d="M20 52c0-16 18-28 40-28s40 12 40 28H20z" fill="#FBD98A" stroke="#8C2F1B" strokeWidth="3"/>
    <rect x="18" y="52" width="84" height="10" rx="4" fill="#7C9A46"/>
    <rect x="18" y="62" width="84" height="14" rx="4" fill="#8C2F1B"/>
    <rect x="18" y="76" width="84" height="8" rx="3" fill="#D93B29"/>
    <path d="M18 84h84c0 10-19 14-42 14s-42-4-42-14z" fill="#F2A93E" stroke="#8C2F1B" strokeWidth="3"/>
  </svg>
);

Icons.wrap = () => (
  <svg viewBox="0 0 120 120">
    <path d="M30 30c30-10 60 4 62 34 2 26-20 44-40 40-18-4-30-22-28-42 1-14 3-27 6-32z" fill="#FBD98A" stroke="#8C2F1B" strokeWidth="3"/>
    <path d="M38 44c14 6 30 20 34 42" stroke="#8C2F1B" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <circle cx="55" cy="60" r="4" fill="#D93B29"/>
    <circle cx="66" cy="72" r="4" fill="#7C9A46"/>
    <circle cx="48" cy="74" r="4" fill="#F2A93E"/>
  </svg>
);

Icons.strips = () => (
  <svg viewBox="0 0 120 120">
    <rect x="18" y="30" width="20" height="70" rx="10" fill="#F2A93E" stroke="#8C2F1B" strokeWidth="3" transform="rotate(-8 28 65)"/>
    <rect x="48" y="24" width="20" height="76" rx="10" fill="#FBD98A" stroke="#8C2F1B" strokeWidth="3" transform="rotate(4 58 62)"/>
    <rect x="78" y="32" width="20" height="68" rx="10" fill="#F2A93E" stroke="#8C2F1B" strokeWidth="3" transform="rotate(-3 88 66)"/>
  </svg>
);

Icons.nugget = () => (
  <svg viewBox="0 0 120 120">
    <path d="M30 45c-4-10 4-20 16-19 2-8 12-13 20-8 8-6 20-1 20 9 10 0 15 12 8 20 6 9-1 20-12 19-3 8-14 11-21 5-8 6-19 2-20-8-11 1-18-10-11-18z" fill="#F2A93E" stroke="#8C2F1B" strokeWidth="3"/>
    <path d="M40 65c8-14 32-14 40 0" stroke="#8C2F1B" strokeWidth="2.5" fill="none" opacity="0.4" strokeLinecap="round"/>
  </svg>
);

Icons.wing = () => (
  <svg viewBox="0 0 120 120">
    <path d="M35 30c20-10 45-4 52 16 6 18-4 36-22 40-4-10-4-22 2-32-12 4-20 14-20 26-10-4-16-14-15-26-8 4-13 12-12 20-9-8-11-24 15-44z" fill="#FBD98A" stroke="#8C2F1B" strokeWidth="3"/>
    <circle cx="80" cy="42" r="6" fill="#D93B29"/>
  </svg>
);

Icons.fries = () => (
  <svg viewBox="0 0 120 120">
    <path d="M30 100l-4-60h10l3 60z" fill="#F2A93E" stroke="#8C2F1B" strokeWidth="2"/>
    <path d="M46 100l-2-68h10l1 68z" fill="#FBD98A" stroke="#8C2F1B" strokeWidth="2"/>
    <path d="M62 100l1-68h10l-2 68z" fill="#F2A93E" stroke="#8C2F1B" strokeWidth="2"/>
    <path d="M78 100l3-60h10l-4 60z" fill="#FBD98A" stroke="#8C2F1B" strokeWidth="2"/>
    <path d="M22 100h76l-4 10a6 6 0 01-6 5H32a6 6 0 01-6-5z" fill="#D93B29"/>
  </svg>
);

Icons.salad = () => (
  <svg viewBox="0 0 120 120">
    <path d="M18 55a42 42 0 0184 0z" fill="#7C9A46"/>
    <path d="M22 58h76c-2 22-18 38-38 38S24 80 22 58z" fill="#FBD98A" stroke="#8C2F1B" strokeWidth="3"/>
    <circle cx="45" cy="66" r="5" fill="#D93B29"/>
    <circle cx="68" cy="70" r="5" fill="#D93B29"/>
    <path d="M50 60c4-4 10-4 14 0" stroke="#7C9A46" strokeWidth="3" strokeLinecap="round" fill="none"/>
  </svg>
);

Icons.drink = () => (
  <svg viewBox="0 0 120 120">
    <path d="M38 30h44l-6 68a8 8 0 01-8 7H52a8 8 0 01-8-7z" fill="#F2A93E" stroke="#8C2F1B" strokeWidth="3"/>
    <rect x="34" y="22" width="52" height="12" rx="6" fill="#8C2F1B"/>
    <rect x="55" y="8" width="6" height="20" rx="3" fill="#8C2F1B" transform="rotate(15 58 18)"/>
    <path d="M44 42c8 4 24 4 32 0" stroke="#FBD98A" strokeWidth="3" fill="none" strokeLinecap="round"/>
  </svg>
);

Icons.sauce = () => (
  <svg viewBox="0 0 120 120">
    <path d="M40 45h40l4 45a10 10 0 01-10 10H46a10 10 0 01-10-10z" fill="#FBD98A" stroke="#8C2F1B" strokeWidth="3"/>
    <rect x="46" y="30" width="28" height="16" rx="4" fill="#D93B29"/>
    <rect x="52" y="20" width="16" height="12" rx="3" fill="#8C2F1B"/>
    <path d="M46 62h28" stroke="#D93B29" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

export default Icons;
