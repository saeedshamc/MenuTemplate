export default function Logo({ size = 72 }) {
  return (
    <img
      src="/logo.png"
      alt="لوگوی یخ‌شیرین"
      width={size}
      height={size}
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        borderRadius: '50%',
        boxShadow: '0 8px 28px rgba(255, 183, 197, 0.45)',
        background: 'var(--logo-bg)',
      }}
    />
  )
}
