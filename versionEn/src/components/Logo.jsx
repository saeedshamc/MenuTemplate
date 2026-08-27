import { useId } from 'react'

export default function Logo({ size = 44, className = '', style }) {
  const uid = useId()
  const topArcId = `logoArcTop-${uid}`
  const bottomArcId = `logoArcBottom-${uid}`

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      style={style}
      role="img"
      aria-label="Salt & Sundae logo"
    >
      <circle cx="100" cy="100" r="94" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />

      <path id={topArcId} d="M 32 100 A 68 68 0 0 1 168 100" fill="none" />
      <path id={bottomArcId} d="M 168 108 A 68 68 0 0 1 32 108" fill="none" />

      <text fontSize="14.5" letterSpacing="3.5" fill="currentColor" fontFamily="Fraunces, serif" fontWeight="600">
        <textPath href={`#${topArcId}`} startOffset="50%" textAnchor="middle">
          SALT &amp; SUNDAE
        </textPath>
      </text>
      <text fontSize="10.5" letterSpacing="3" fill="currentColor" fontFamily="Work Sans, sans-serif" opacity="0.85">
        <textPath href={`#${bottomArcId}`} startOffset="50%" textAnchor="middle">
          TABLE · COUNTER · SCOOP
        </textPath>
      </text>

      {/* spoon */}
      <ellipse cx="100" cy="88" rx="17" ry="23" fill="none" stroke="currentColor" strokeWidth="4" />
      <line x1="100" y1="110" x2="100" y2="146" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />

      {/* sparkle */}
      <g stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
        <line x1="132" y1="58" x2="132" y2="72" />
        <line x1="125" y1="65" x2="139" y2="65" />
      </g>
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.8">
        <line x1="70" y1="130" x2="70" y2="140" />
        <line x1="65" y1="135" x2="75" y2="135" />
      </g>
    </svg>
  )
}
