"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Globe } from "lucide-react"
import { usePathname } from "next/navigation"

interface LanguageSelectorProps {
  currentLang: "pt" | "en"
}

export default function LanguageSelector({ currentLang }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const router = useRouter()

  // Function to get the equivalent path in the other language
  const getEquivalentPath = (targetLang: string): string => {
    // If we're in English and going to Portuguese
    if (currentLang === "en" && targetLang === "pt") {
      // Special case for the home page
      if (pathname === "/en") {
        return "/"
      }

      // For other pages, map English routes to Portuguese equivalents
      const routeMapping: Record<string, string> = {
        "/en/services": "/servicos",
        "/en/about": "/sobre",
        "/en/contact": "/contato",
        "/en/landing": "/landing",
        "/en/demo": "/demo",
        "/en/responsive-logo-demo": "/responsive-logo-demo",
      }

      // Check if we have a direct mapping for this path
      if (routeMapping[pathname]) {
        return routeMapping[pathname]
      }

      // Default: remove the /en prefix
      return pathname.replace(/^\/en/, "") || "/"
    }
    // If we're in Portuguese and going to English
    else if (currentLang === "pt" && targetLang === "en") {
      // Special case for the home page
      if (pathname === "/") {
        return "/en"
      }

      // For other pages, map Portuguese routes to English equivalents
      const routeMapping: Record<string, string> = {
        "/servicos": "/en/services",
        "/sobre": "/en/about",
        "/contato": "/en/contact",
        "/landing": "/en/landing",
        "/demo": "/en/demo",
        "/responsive-logo-demo": "/en/responsive-logo-demo",
      }

      // Check if we have a direct mapping for this path
      if (routeMapping[pathname]) {
        return routeMapping[pathname]
      }

      // Default: add the /en prefix
      return `/en${pathname}`
    }

    // Fallback to home page in the target language
    return targetLang === "en" ? "/en" : "/"
  }

  const handleLanguageChange = (langCode: string) => {
    setIsOpen(false)
    
    // Only navigate if we're actually changing languages
    if (langCode !== currentLang) {
      const targetPath = getEquivalentPath(langCode)
      router.push(targetPath)
    }
  }

  const languages = [
    { code: "pt", name: "Português" },
    { code: "en", name: "English" },
  ]

  const currentLanguageObj = languages.find((lang) => lang.code === currentLang)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
        aria-label="Select language"
      >
        <Globe size={16} />
        <span className="hidden sm:inline text-sm font-medium">{currentLanguageObj?.name}</span>
        <span className="sm:hidden text-lg">{currentLanguageObj?.code === "pt" ? "🇧🇷" : "🇺🇸"}</span>
        <ChevronDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                    currentLang === lang.code ? "bg-gray-100 text-brand-blue" : "text-gray-700"
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
