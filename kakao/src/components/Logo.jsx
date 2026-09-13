export default function Logo({ size = 72 }) {
  return (
    <img
      src="/logo.png"
      alt="لوگوی کاکائو"
      width={size}
      height={size}
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        borderRadius: '50%',
        boxShadow: '0 8px 28px rgba(62, 39, 35, 0.4)',
        background: 'var(--logo-bg)',
      }}
    />
  )
}
