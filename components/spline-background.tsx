"use client"

import { useEffect, useState } from "react"

interface SplineBackgroundProps {
  src: string
  className?: string
}

export default function SplineBackground({ src, className = "" }: SplineBackgroundProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Add a small delay to ensure smooth loading
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`fixed inset-0 z-0 ${className}`}>
      {isLoaded && (
        <iframe
          src={src}
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full"
          loading="lazy"
          title="3D Background Animation"
        />
      )}
      {/* Fallback gradient background while loading */}
      {!isLoaded && (
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800 animate-pulse" />
      )}
    </div>
  )
}
