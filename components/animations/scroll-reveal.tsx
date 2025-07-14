"use client"

import React from "react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import type { MotionComponentProps } from "@/lib/utils"

interface ScrollRevealProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  delay?: number
  duration?: number
  once?: boolean
  className?: string
  threshold?: number
  staggerChildren?: boolean
  staggerDelay?: number
}

export default function ScrollReveal({
  children,
  direction = "up",
  distance = 50,
  delay = 0,
  duration = 0.5,
  once = true,
  className = "",
  threshold = 0.1,
  staggerChildren = false,
  staggerDelay = 0.1,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: threshold, margin: "-100px 0px" })

  // Get the initial offset based on direction
  const getInitialOffset = () => {
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

  // Animation variants
  const containerVariants = {
    hidden: {
      opacity: 0,
      ...getInitialOffset(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: staggerChildren ? staggerDelay : 0,
      },
    },
  }

  // Child variants for staggered animations
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      <div className={className}>
        {staggerChildren
          ? React.Children.map(children, (child, index) => (
              <motion.div key={index} variants={childVariants}>
                {child}
              </motion.div>
            ))
          : children}
      </div>
    </motion.div>
  )
}