export default function Logo({ size = 72 }) {
  return (
    <img
      src="/logo.png"
      alt="لوگوی زغال‌چوب"
      width={size}
      height={size}
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        borderRadius: '8px',
        boxShadow: '0 8px 28px rgba(184, 115, 51, 0.4)',
        background: 'var(--logo-bg)',
      }}
    />
  )
}
