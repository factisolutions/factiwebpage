"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Logo from "./logo"
import { useScreenSize } from "@/hooks/use-screen-size"
import { usePathname } from "next/navigation"

interface ResponsiveLogoProps {
  className?: string
  linkClassName?: string
  textColor?: string
  mobileVariant?: "icon" | "text" | "full" | "vertical"
  tabletVariant?: "icon" | "text" | "full" | "vertical"
  desktopVariant?: "icon" | "text" | "full" | "vertical"
  mobileSize?: "xs" | "sm" | "md" | "lg" | "xl"
  tabletSize?: "xs" | "sm" | "md" | "lg" | "xl"
  desktopSize?: "xs" | "sm" | "md" | "lg" | "xl"
  animateTransition?: boolean
  noLink?: boolean
  theme?: "light" | "dark" | "auto"
}

export default function ResponsiveLogo({
  className = "",
  linkClassName = "",
  textColor,
  mobileVariant = "icon",
  tabletVariant = "full",
  desktopVariant = "full",
  mobileSize = "sm",
  tabletSize = "md",
  desktopSize = "md",
  animateTransition = true,
  noLink = false,
  theme = "auto",
}: ResponsiveLogoProps) {
  const { isSmallScreen, isMediumScreen, isLargeScreen } = useScreenSize()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  // Determine if we're in the English version
  const isEnglish = pathname.startsWith("/en")

  // Set the appropriate home link based on language
  const homeLink = isEnglish ? "/en" : "/"

  // Determine current variant and size based on screen size
  const currentVariant = isSmallScreen ? mobileVariant : isMediumScreen ? tabletVariant : desktopVariant
  const currentSize = isSmallScreen ? mobileSize : isMediumScreen ? tabletSize : desktopSize

  // Only render after mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder with the same dimensions to avoid layout shift
    return (
      <div
        className={`h-${currentSize === "xs" ? "6" : currentSize === "sm" ? "8" : currentSize === "md" ? "10" : currentSize === "lg" ? "12" : "16"} ${className}`}
      />
    )
  }

  if (animateTransition) {
    return (
      <AnimatePresence mode="wait">
        <div className={className}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <Logo
              variant={currentVariant}
              size={currentSize}
              textColor={textColor}
              linkClassName={linkClassName}
              noLink={noLink}
              homeLink={homeLink}
              theme={theme}
            />
          </motion.div>
        </div>
      </AnimatePresence>
    )
  }

  // Non-animated version
  return (
    <Logo
      variant={currentVariant}
      size={currentSize}
      textColor={textColor}
      className={className}
      linkClassName={linkClassName}
      noLink={noLink}
      homeLink={homeLink}
      theme={theme}
    />
  )
}
