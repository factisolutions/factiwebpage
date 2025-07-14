"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface ConfettiPiece {
  id: number
  x: number
  y: number
  color: string
  size: number
  rotation: number
}

interface ConfettiProps {
  duration?: number
  pieces?: number
}

export default function Confetti({ duration = 3000, pieces = 100 }: ConfettiProps) {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([])
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    // Generate confetti pieces
    const colors = ["#00D8D6", "#0056b3", "#4CAF50", "#FFC107", "#E91E63", "#9C27B0"]
    const newConfetti: ConfettiPiece[] = []

    for (let i = 0; i < pieces; i++) {
      newConfetti.push({
        id: i,
        x: Math.random() * 100, // random position across screen width (%)
        y: -20 - Math.random() * 80, // start above the viewport
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 5 + Math.random() * 10, // random size between 5-15px
        rotation: Math.random() * 360, // random initial rotation
      })
    }

    setConfetti(newConfetti)

    // Set timeout to remove confetti after duration
    const timer = setTimeout(() => {
      setIsActive(false)
      setConfetti([]) // Clear confetti array to free memory
    }, duration)

    return () => {
      clearTimeout(timer)
      setConfetti([]) // Cleanup on unmount
    }
  }, [pieces, duration])

  if (!isActive) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true" role="presentation">
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          style={{
            left: piece.x,
            top: piece.y,
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
          }}
          animate={{
            y: [piece.y, piece.y + 100],
            x: [piece.x, piece.x + (Math.random() - 0.5) * 50],
            rotate: [piece.rotation, piece.rotation + 360],
            opacity: [1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            ease: "easeOut",
          }}
        >
          <div className={`rounded-full`} />
        </motion.div>
      ))}
    </div>
  )
}
