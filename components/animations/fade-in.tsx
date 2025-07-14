"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  className?: string
  once?: boolean
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up",
  distance = 20,
  className = "",
  once = true,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentRef = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && currentRef) {
            observer.unobserve(currentRef)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold: 0.1,
      },
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [once])

  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance }
      case "down":
        return { y: -distance }
      case "left":
        return { x: distance }
      case "right":
        return { x: -distance }
      case "none":
        return {}
      default:
        return { y: distance }
    }
  }

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, ...getDirectionOffset() }}
        animate={isVisible ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...getDirectionOffset() }}
        transition={{ duration, delay, ease: "easeOut" }}
        aria-hidden={!isVisible}
      >
        {children}
      </motion.div>
    </div>
  )
}
