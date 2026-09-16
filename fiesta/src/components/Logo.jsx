export default function Logo({ size = 72 }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}logo.png`}
      alt="لوگوی فیستا"
      width={size}
      height={size}
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        borderRadius: '50%',
        boxShadow: '0 8px 28px rgba(224, 122, 61, 0.4)',
        background: 'var(--logo-bg)',
      }}
    />
  )
}
