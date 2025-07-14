"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Phone, Mail, Linkedin, Instagram, Plus } from "lucide-react"
import { usePathname } from "next/navigation"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

interface ContactOption {
  icon: React.ComponentType<{ size?: number }>
  label: string
  href: string
  color: string
  tooltip: string
}

export default function FloatingContactButton() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  // Don't show on certain pages
  const shouldRender = !pathname?.includes("/demo") && !pathname?.includes("/responsive-logo-demo")

  useEffect(() => {
    if (shouldRender) {
      const timer = setTimeout(() => setIsVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [shouldRender])

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  const contactOptions: ContactOption[] = [
    {
      icon: Phone,
      label: "Telefone",
      href: "tel:+551151966199",
      color: "bg-green-500 hover:bg-green-600",
      tooltip: "Telefone",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:contactus@facti.solutions",
      color: "bg-blue-500 hover:bg-blue-600",
      tooltip: "Email",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/company/facti-solutions",
      color: "bg-blue-600 hover:bg-blue-700",
      tooltip: "LinkedIn",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/facti.solutions/",
      color: "bg-pink-500 hover:bg-pink-600",
      tooltip: "Instagram",
    },
  ]

  return (
    <TooltipProvider>
      <AnimatePresence>
        {shouldRender && isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
          >
            <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
              {/* Expanded contact options */}
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="flex flex-col items-end space-y-3 mb-3">
                    {/* WhatsApp */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <a
                        href="https://wa.me/551151966199"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
                        aria-label="WhatsApp"
                      >
                        <MessageCircle className="w-6 h-6" />
                      </a>
                    </motion.div>

                    {/* Email */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <a
                        href="mailto:contactus@facti.solutions"
                        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="w-6 h-6" />
                      </a>
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <a
                        href="tel:+551151966199"
                        className="bg-purple-500 text-white p-3 rounded-full shadow-lg hover:bg-purple-600 transition-colors"
                        aria-label="Phone"
                      >
                        <Phone className="w-6 h-6" />
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* Main floating button */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: isExpanded ? 45 : 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div 
                  onClick={toggleExpanded}
                  className="relative cursor-pointer"
                >
                  <div className="w-14 h-14 bg-brand-blue rounded-full shadow-lg flex items-center justify-center relative overflow-hidden">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                    >
                      <div className="absolute inset-0 rounded-full bg-brand-blue" />
                    </motion.div>
                    <Plus className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </TooltipProvider>
  )
}
