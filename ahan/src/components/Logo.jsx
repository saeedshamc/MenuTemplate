export default function Logo({ size = 72 }) {
  return (
    <img
      src="/logo.png"
      alt="لوگوی آهن‌وآتش"
      width={size}
      height={size}
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        borderRadius: '50%',
        boxShadow: '0 8px 28px rgba(198, 167, 94, 0.35)',
        background: 'var(--logo-bg)',
      }}
    />
  )
}
