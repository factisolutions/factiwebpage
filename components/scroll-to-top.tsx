"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp } from "lucide-react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let ticking = false

    const toggleVisibility = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (window.scrollY > 500) {
            setIsVisible(true)
          } else {
            setIsVisible(false)
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", toggleVisibility, { passive: true })
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 z-40 bg-brand-blue text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            aria-label="Voltar ao topo"
            role="button"
            tabIndex={0}
          >
            <ChevronUp className="w-6 h-6" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
