"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import ResponsiveLogo from "./responsive-logo"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <ResponsiveLogo
            mobileVariant="icon"
            tabletVariant="full"
            desktopVariant="full"
            mobileSize="sm"
            tabletSize="md"
            desktopSize="md"
          />
        </div>

        {/* Desktop Navigation - Simplified */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${
              isActive("/") ? "text-brand-blue" : "text-gray-700 hover:text-brand-blue"
            }`}
          >
            Início
          </Link>
          <Link
            href="/servicos"
            className={`text-sm font-medium transition-colors ${
              isActive("/servicos") ? "text-brand-blue" : "text-gray-700 hover:text-brand-blue"
            }`}
          >
            Serviços
          </Link>
          <Link
            href="/sobre"
            className={`text-sm font-medium transition-colors ${
              isActive("/sobre") ? "text-brand-blue" : "text-gray-700 hover:text-brand-blue"
            }`}
          >
            Sobre
          </Link>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
            <Link
              href="/contato"
              className={`text-sm font-medium px-4 py-2 rounded-md bg-brand-blue text-white hover:bg-brand-blue/90 transition-colors`}
            >
              Contato
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Simplified */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="md:hidden bg-white absolute top-full left-0 right-0 border-t">
              <div className="px-4 py-2 space-y-1">
                <Link
                  href="/"
                  className={`py-2 ${isActive("/") ? "text-brand-blue" : "text-gray-700"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Início
                </Link>
                <Link
                  href="/servicos"
                  className={`py-2 ${isActive("/servicos") ? "text-brand-blue" : "text-gray-700"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Serviços
                </Link>
                <Link
                  href="/sobre"
                  className={`py-2 ${isActive("/sobre") ? "text-brand-blue" : "text-gray-700"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre
                </Link>
                <Link
                  href="/contato"
                  className="py-2 px-4 bg-brand-blue text-white rounded-md inline-block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contato
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
