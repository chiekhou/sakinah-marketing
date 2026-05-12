import Link from 'next/link'

export function AppAndroidLink({ color = 'black' }) {
  const isDark = color === 'black'
  const bg = isDark ? '#000000' : '#ffffff'
  const fg = isDark ? '#ffffff' : '#000000'

  return (
    <Link
      href="#"
      aria-label="Télécharger à venir sur Google Play."
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block transition-opacity hover:opacity-90"
    >
      <svg
        viewBox="0 0 135 40"
        className="h-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <rect
          width="135"
          height="40"
          rx="5"
          fill={bg}
          stroke={isDark ? 'transparent' : '#A6A6A6'}
          strokeWidth={isDark ? 0 : 1}
        />

        {/* Google Play icon — colorful arrow split into 4 triangles */}
        {/*
          Arrow vertices:
            A = (9, 9)  — top-left
            B = (25, 20) — right tip
            C = (9, 31)  — bottom-left
          Midpoints:
            M_AB = (17, 14.5)
            M_BC = (17, 25.5)
            M_CA = (9, 20)
        */}
        {/* Top-left — Red */}
        <path d="M9 9 L17 14.5 L9 20 Z" fill="#FF3D00" />
        {/* Right tip — Blue */}
        <path d="M25 20 L17 14.5 L17 25.5 Z" fill="#00B4FF" />
        {/* Bottom-left — Green */}
        <path d="M9 31 L17 25.5 L9 20 Z" fill="#00D56A" />
        {/* Center — Yellow */}
        <path d="M17 14.5 L17 25.5 L9 20 Z" fill="#FFD600" />

        {/* "GET IT ON" — small label */}
        <text
          x="33"
          y="17"
          fill={fg}
          fontSize="7"
          fontFamily="Arial, Helvetica, sans-serif"
          letterSpacing="0.6"
        >
          GET IT ON
        </text>

        {/* "Google Play" — main label */}
        <text
          x="33"
          y="30"
          fill={fg}
          fontSize="13.5"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="600"
          letterSpacing="-0.2"
        >
          Google Play
        </text>
      </svg>
    </Link>
  )
}
