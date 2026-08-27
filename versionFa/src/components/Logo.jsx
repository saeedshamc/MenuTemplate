export default function Logo({ size = 44 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="لوگوی دلچین"
    >
      <circle cx="32" cy="32" r="31" fill="var(--logo-bg)" stroke="var(--logo-ring)" strokeWidth="2" />

      {/* بخار / گرمای غذا */}
      <path
        d="M23 16c-1.5 2 1.5 3 0 5.5S20 25 21.5 27"
        stroke="var(--logo-steam)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M32 14c-1.5 2 1.5 3 0 5.5s-2.5 3.5-1 5.5"
        stroke="var(--logo-steam)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M41 16c-1.5 2 1.5 3 0 5.5S38.5 25 40 27"
        stroke="var(--logo-steam)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />

      {/* چنگال (سمت راست) */}
      <g fill="var(--logo-fg)">
        <rect x="38.2" y="26" width="2.6" height="24" rx="1.3" />
        <rect x="34.5" y="26" width="2" height="9" rx="1" />
        <rect x="38" y="26" width="2" height="9" rx="1" />
        <rect x="41.5" y="26" width="2" height="9" rx="1" />
        <path d="M33.5 35c0 3.5 2.5 5.5 6 5.5s6-2 6-5.5h-12z" />
      </g>

      {/* قاشق (سمت چپ) */}
      <g fill="var(--logo-fg)">
        <ellipse cx="24" cy="31" rx="5.4" ry="7.2" />
        <rect x="22.8" y="37" width="2.4" height="13" rx="1.2" />
      </g>
    </svg>
  )
}
