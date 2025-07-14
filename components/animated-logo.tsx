"use client"

import Image from "next/image"

interface AnimatedLogoProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  className?: string
  variant?: "icon" | "full"
}

export default function AnimatedLogo({ size = "md", className = "", variant = "icon" }: AnimatedLogoProps) {
  // Logo path
  const logoIcon = "/images/facti-icon.png"

  // Updated size map to match Logo component
  const sizeMap = {
    xs: { width: 24, height: 24, textSize: "text-sm" },
    sm: { width: 32, height: 32, textSize: "text-base" },
    md: { width: 40, height: 40, textSize: "text-xl" },
    lg: { width: 48, height: 48, textSize: "text-2xl" },
    xl: { width: 64, height: 64, textSize: "text-3xl" },
  }

  const { width, height, textSize } = sizeMap[size]

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="relative">
        <div className="relative z-10">
          <Image
            src={logoIcon || "/placeholder.svg"}
            alt="FACTI Solutions"
            width={width}
            height={height}
            className="object-contain"
          />
        </div>
      </div>

      {variant === "full" && (
        <div className="mt-3">
          <span className={`font-bold ${textSize}`}>
            <span>FACTI</span>{" "}
            <span className="bg-gradient-to-r from-brand-teal to-brand-blue bg-clip-text text-transparent">
              SOLUTIONS
            </span>
          </span>
        </div>
      )}
    </div>
  )
}
