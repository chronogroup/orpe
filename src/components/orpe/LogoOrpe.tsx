interface LogoOrpeProps {
  size?: number;
  className?: string;
}

export function LogoOrpe({ size = 104, className = "" }: LogoOrpeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 104 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      {/* Outer orange ring (coin edge) */}
      <circle
        cx="52"
        cy="52"
        r="50"
        fill="url(#orangeGradient)"
        stroke="#ffc04d"
        strokeWidth="2"
      />

      {/* Inner dark disc (coin face) */}
      <circle cx="52" cy="52" r="42" fill="#1a1a1a" />

      {/* Inner orange ring accent */}
      <circle
        cx="52"
        cy="52"
        r="42"
        fill="none"
        stroke="url(#innerRingGradient)"
        strokeWidth="1.5"
        opacity="0.6"
      />

      {/* ORPE face: Two eyes */}
      <circle cx="42" cy="45" r="3.5" fill="#f97316" />
      <circle cx="62" cy="45" r="3.5" fill="#f97316" />

      {/* ORPE face: Smile */}
      <path
        d="M 38 58 Q 52 68 66 58"
        stroke="#f97316"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Optional: Small "O" letter in center */}
      <text
        x="52"
        y="68"
        textAnchor="middle"
        fill="#f97316"
        fontSize="10"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
        opacity="0.4">
        O
      </text>

      {/* Gradient definitions */}
      <defs>
        <radialGradient id="orangeGradient">
          <stop offset="0%" stopColor="#ffc04d" />
          <stop offset="50%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </radialGradient>

        <linearGradient
          id="innerRingGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ffc04d" />
        </linearGradient>
      </defs>
    </svg>
  );
}
