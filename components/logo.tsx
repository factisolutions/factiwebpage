"use client"

import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"

interface LogoProps {
  variant?: "full" | "icon" | "text" | "vertical"
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  className?: string
  linkClassName?: string
  textColor?: string
  noLink?: boolean
  homeLink?: string
  theme?: "light" | "dark" | "auto"
}

export default function Logo({
  variant = "full",
  size = "md",
  className = "",
  linkClassName = "",
  textColor,
  noLink = false,
  homeLink = "/",
  theme = "auto",
}: LogoProps) {
  const { resolvedTheme } = useTheme()

  // Determine which logo to use based on theme
  const isDark = theme === "auto" ? resolvedTheme === "dark" : theme === "dark"
  // Use the available logo files - fallback to the existing ones
  const logoIcon = isDark ? "/images/facti-icon.png" : "/images/facti-icon.png"

  // Enhanced size classes with better proportions
  const sizeClasses = {
    xs: {
      container: "h-6",
      icon: "w-6 h-6",
      text: "text-xs",
      spacing: "space-x-1.5",
      letterSpacing: "tracking-wide",
    },
    sm: {
      container: "h-8",
      icon: "w-8 h-8",
      text: "text-sm",
      spacing: "space-x-2",
      letterSpacing: "tracking-wide",
    },
    md: {
      container: "h-10",
      icon: "w-10 h-10",
      text: "text-lg",
      spacing: "space-x-3",
      letterSpacing: "tracking-wider",
    },
    lg: {
      container: "h-12",
      icon: "w-12 h-12",
      text: "text-xl",
      spacing: "space-x-3",
      letterSpacing: "tracking-wider",
    },
    xl: {
      container: "h-16",
      icon: "w-16 h-16",
      text: "text-2xl",
      spacing: "space-x-4",
      letterSpacing: "tracking-widest",
    },
  }

  // Determine text color based on theme if not provided
  const finalTextColor = textColor || (isDark ? "text-white" : "text-gray-900")

  const LogoContent = () => {
    if (variant === "icon") {
      return (
        <div className={`relative ${sizeClasses[size].icon} ${className}`}>
          <Image
            src={logoIcon}
            alt="FACTI Solutions Logo"
            fill
            className="object-contain drop-shadow-sm transition-transform hover:scale-105"
            priority
          />
        </div>
      )
    }

    if (variant === "text") {
      return (
        <div
          className={`font-raleway font-semibold ${sizeClasses[size].text} ${finalTextColor} ${sizeClasses[size].letterSpacing} ${className}`}
        >
          <span className="inline-block">FACTI</span>
          <span className="inline-block ml-2 bg-gradient-to-r from-brand-teal to-brand-blue bg-clip-text text-transparent">
            SOLUTIONS
          </span>
        </div>
      )
    }

    if (variant === "vertical") {
      return (
        <div className={`flex flex-col items-center space-y-2 ${className}`}>
          <div className={`relative ${sizeClasses[size].icon}`}>
            <Image
              src={logoIcon}
              alt="FACTI Solutions Logo"
              fill
              className="object-contain drop-shadow-sm transition-transform hover:scale-105"
              priority
            />
          </div>
          <div
            className={`font-raleway font-semibold ${sizeClasses[size].text} ${finalTextColor} ${sizeClasses[size].letterSpacing} text-center`}
          >
            <div className="inline-block">FACTI</div>
            <div className="inline-block ml-1 bg-gradient-to-r from-brand-teal to-brand-blue bg-clip-text text-transparent">
              SOLUTIONS
            </div>
          </div>
        </div>
      )
    }

    // Full horizontal logo (default) with enhanced spacing and alignment
    return (
      <div className={`flex items-center ${sizeClasses[size].spacing}`}>
        <div className={`relative ${sizeClasses[size].icon}`}>
          <Image
            src={logoIcon}
            alt="FACTI Solutions Logo"
            fill
            className="object-contain drop-shadow-sm transition-transform hover:scale-105"
            priority
          />
        </div>
        <div
          className={`font-raleway font-semibold ${sizeClasses[size].text} ${finalTextColor} ${sizeClasses[size].letterSpacing}`}
        >
          <span className="inline-block">FACTI</span>
          <span className="inline-block ml-2 bg-gradient-to-r from-brand-teal to-brand-blue bg-clip-text text-transparent">
            SOLUTIONS
          </span>
        </div>
      </div>
    )
  }

  if (noLink) {
    return <LogoContent />
  }

  return (
    <Link href={homeLink} className={`block transition-transform hover:scale-105 ${linkClassName}`}>
      <LogoContent />
    </Link>
  )
}
