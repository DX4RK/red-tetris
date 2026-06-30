"use client"

import { cn } from "@/lib/utils"

interface GridPatternProps {
  width?: number
  height?: number
  className?: string
  squares?: [number, number][]
}

export function GridPattern({
  width = 40,
  height = 40,
  className,
  squares,
}: GridPatternProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className,
      )}
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(156,163,175,0.3) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(156,163,175,0.3) 1px, transparent 1px)
        `,
        backgroundSize: `${width}px ${height}px`,
      }}
    >
      {squares?.map(([sx, sy], index) => (
        <div
          key={`${sx}-${sy}-${index}`}
          className="absolute bg-gray-400/30"
          style={{
            width: width - 1,
            height: height - 1,
            left: sx * width + 1,
            top: sy * height + 1,
          }}
        />
      ))}
    </div>
  )
}

export type { GridPatternProps }

export default GridPattern
