"use client"

import { motion } from "framer-motion"

interface HeroSectionProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function HeroSection({ title, subtitle, centered = true, className = "" }: HeroSectionProps) {
  return (
    <section className={`py-16 md:py-24 ${className}`} role="banner">
      <div className="container mx-auto px-4">
        <div className={`max-w-3xl mx-auto ${centered ? "text-center" : ""}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-4xl md:text-5xl font-bold mb-6">
              {title}
            </div>
          </motion.div>

          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-xl text-gray-600">
                {subtitle}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
