import React from 'react'

export default function Clock({ hours, minutes, showNumbers }) {
  // Calculate angles for clock hands (in degrees, measured clockwise from 12 o'clock)
  const hourAngle = (hours % 12) * 30 + minutes * 0.5
  const minuteAngle = minutes * 6

  // Generate hour tick marks
  const hourTicks = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 - 90) * (Math.PI / 180)
    const outerRadius = 110
    const innerRadius = 95
    const x1 = 140 + outerRadius * Math.cos(angle)
    const y1 = 140 + outerRadius * Math.sin(angle)
    const x2 = 140 + innerRadius * Math.cos(angle)
    const y2 = 140 + innerRadius * Math.sin(angle)
    return { x1, y1, x2, y2 }
  })

  // Generate number positions
  const numberPositions = Array.from({ length: 12 }, (_, i) => {
    const number = i === 0 ? 12 : i
    const angle = (i * 30 - 90) * (Math.PI / 180)
    const radius = 128
    const x = 140 + radius * Math.cos(angle)
    const y = 140 + radius * Math.sin(angle)
    return { number, x, y }
  })

  return (
    <div className="flex justify-center items-center">
      <svg
        width="340"
        height="340"
        viewBox="0 0 280 280"
        className="drop-shadow-2xl"
      >
        {/* Clock face */}
        <circle cx="140" cy="140" r="110" fill="white" stroke="#1f2937" strokeWidth="4" />

        {/* Hour tick marks */}
        {hourTicks.map((tick, i) => (
          <line
            key={`tick-${i}`}
            x1={tick.x1}
            y1={tick.y1}
            x2={tick.x2}
            y2={tick.y2}
            stroke="#1f2937"
            strokeWidth="3"
            strokeLinecap="round"
          />
        ))}

        {/* Clock numbers */}
        {showNumbers &&
          numberPositions.map((pos) => (
            <text
              key={`num-${pos.number}`}
              x={pos.x}
              y={pos.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="18"
              fontWeight="bold"
              fill="#1f2937"
            >
              {pos.number}
            </text>
          ))}

        {/* Hour hand */}
        <line
          x1="140"
          y1="140"
          x2={140 + 55 * Math.cos((hourAngle - 90) * (Math.PI / 180))}
          y2={140 + 55 * Math.sin((hourAngle - 90) * (Math.PI / 180))}
          stroke="#1f2937"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Minute hand */}
        <line
          x1="140"
          y1="140"
          x2={140 + 85 * Math.cos((minuteAngle - 90) * (Math.PI / 180))}
          y2={140 + 85 * Math.sin((minuteAngle - 90) * (Math.PI / 180))}
          stroke="#4b5563"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Center dot */}
        <circle cx="140" cy="140" r="5" fill="#1f2937" />
      </svg>
    </div>
  )
}
