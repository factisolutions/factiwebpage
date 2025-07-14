"use client"

import { useState, useEffect } from "react"

// Define breakpoints (matching Tailwind's default breakpoints)
export const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
}

export type Breakpoint = keyof typeof breakpoints

export function useScreenSize() {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>("lg")
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return

    // Set initial values
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)

    // Determine initial breakpoint
    const initialBreakpoint = determineBreakpoint(window.innerWidth)
    setCurrentBreakpoint(initialBreakpoint)

    // Handler for window resize
    const handleResize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)

      const newBreakpoint = determineBreakpoint(window.innerWidth)
      if (newBreakpoint !== currentBreakpoint) {
        setCurrentBreakpoint(newBreakpoint)
      }
    }

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [currentBreakpoint])

  // Helper function to determine current breakpoint
  function determineBreakpoint(width: number): Breakpoint {
    if (width < breakpoints.sm) return "xs"
    if (width < breakpoints.md) return "sm"
    if (width < breakpoints.lg) return "md"
    if (width < breakpoints.xl) return "lg"
    if (width < breakpoints["2xl"]) return "xl"
    return "2xl"
  }

  // Helper functions to check breakpoints
  const isXs = currentBreakpoint === "xs"
  const isSm = currentBreakpoint === "sm"
  const isMd = currentBreakpoint === "md"
  const isLg = currentBreakpoint === "lg"
  const isXl = currentBreakpoint === "xl"
  const is2Xl = currentBreakpoint === "2xl"

  const isSmallScreen = isXs || isSm
  const isMediumScreen = isMd
  const isLargeScreen = isLg || isXl || is2Xl

  return {
    width,
    height,
    currentBreakpoint,
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    is2Xl,
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
  }
}
