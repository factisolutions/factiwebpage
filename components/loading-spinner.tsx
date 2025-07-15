"use client"

import ResponsiveLogo from "./responsive-logo"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl"
  text?: string
  fullScreen?: boolean
  variant?: "logo" | "spinner"
}

export default function LoadingSpinner({ 
  size = "md", 
  text, 
  fullScreen = false,
  variant = "logo" 
}: LoadingSpinnerProps) {
  if (variant === "spinner") {
    return (
      <div
        className={`flex flex-col items-center justify-center ${
          fullScreen ? "fixed inset-0 bg-white bg-opacity-90 z-50" : ""
        }`}
      >
        <div className={`animate-spin rounded-full border-4 border-gray-200 border-t-brand-teal ${
          size === "sm" ? "w-6 h-6" : 
          size === "md" ? "w-8 h-8" : 
          size === "lg" ? "w-12 h-12" : 
          "w-16 h-16"
        }`} />
        {text && <p className="mt-4 text-gray-600">{text}</p>}
      </div>
    )
  }

  // Logo-based spinner (default)
  return (
    <div
      className={`flex flex-col items-center justify-center ${
        fullScreen ? "fixed inset-0 bg-white bg-opacity-90 z-50" : ""
      }`}
    >
      <div className={`animate-pulse ${size === "sm" ? "scale-75" : size === "lg" ? "scale-125" : size === "xl" ? "scale-150" : ""}`}>
        <ResponsiveLogo
          mobileVariant="full"
          tabletVariant="full"
          desktopVariant="full"
          mobileSize={size}
          tabletSize={size}
          desktopSize={size}
          animateTransition={false}
        />
      </div>
      {text && <p className="mt-4 text-gray-600">{text}</p>}
    </div>
  )
}
