"use client"

import ResponsiveLogo from "./responsive-logo"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl"
  text?: string
  fullScreen?: boolean
}

export default function LoadingSpinner({ size = "md", text, fullScreen = false }: LoadingSpinnerProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center ${
        fullScreen ? "fixed inset-0 bg-white bg-opacity-90 z-50" : ""
      }`}
    >
      <ResponsiveLogo
        mobileVariant="full"
        tabletVariant="full"
        desktopVariant="full"
        mobileSize={size}
        tabletSize={size}
        desktopSize={size}
        animateTransition={false}
      />

      {text && <p className="mt-4 text-gray-600">{text}</p>}
    </div>
  )
}
