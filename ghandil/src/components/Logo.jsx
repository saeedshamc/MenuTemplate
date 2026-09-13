export default function Logo({ size = 72 }) {
  return (
    <img
      src="/logo.png"
      alt="لوگوی قندیل"
      width={size}
      height={size}
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        borderRadius: '50%',
        boxShadow: '0 8px 28px rgba(92, 64, 51, 0.4)',
        background: 'var(--logo-bg)',
      }}
    />
  )
}
