export default function Logo({ size = 72 }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}logo.png`}
      alt="لوگوی بلک‌گریل"
      width={size}
      height={size}
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        borderRadius: '12px',
        boxShadow: '0 8px 28px rgba(184, 255, 60, 0.25)',
        background: 'var(--logo-bg)',
      }}
    />
  )
}
