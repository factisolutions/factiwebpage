"use client"

import { useState } from "react"
import ResponsiveLogo from "@/components/responsive-logo"
import { useScreenSize } from "@/hooks/use-screen-size"
import { Button } from "@/components/ui/button"

export default function ResponsiveLogoDemoEN() {
  const { currentBreakpoint, width } = useScreenSize()
  const [animateTransition, setAnimateTransition] = useState(true)

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2 text-center">Responsive Logo Demo</h1>
      <p className="text-center text-gray-600 mb-8">
        Current screen width: {width}px | Breakpoint: {currentBreakpoint}
      </p>

      <div className="flex justify-center mb-8">
        <Button
          onClick={() => setAnimateTransition(!animateTransition)}
          variant={animateTransition ? "default" : "outline"}
          className="mr-4"
        >
          {animateTransition ? "Animations On" : "Animations Off"}
        </Button>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-xl font-bold mb-6 text-center">Resize your browser to see the logo adapt</h2>

        <div className="flex justify-center mb-12">
          <div className="p-4 border border-gray-200 rounded-lg">
            <ResponsiveLogo
              mobileVariant="icon"
              tabletVariant="full"
              desktopVariant="full"
              mobileSize="sm"
              tabletSize="md"
              desktopSize="lg"
              animateTransition={animateTransition}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-3 text-center">Mobile View</h3>
            <p className="text-sm text-gray-600 mb-4 text-center">xs, sm breakpoints</p>
            <div className="flex justify-center">
              <ResponsiveLogo
                mobileVariant="icon"
                tabletVariant="icon"
                desktopVariant="icon"
                mobileSize="sm"
                animateTransition={false}
              />
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-3 text-center">Tablet View</h3>
            <p className="text-sm text-gray-600 mb-4 text-center">md breakpoint</p>
            <div className="flex justify-center">
              <ResponsiveLogo
                mobileVariant="full"
                tabletVariant="full"
                desktopVariant="full"
                tabletSize="md"
                animateTransition={false}
              />
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-3 text-center">Desktop View</h3>
            <p className="text-sm text-gray-600 mb-4 text-center">lg, xl, 2xl breakpoints</p>
            <div className="flex justify-center">
              <ResponsiveLogo
                mobileVariant="full"
                tabletVariant="full"
                desktopVariant="full"
                desktopSize="lg"
                animateTransition={false}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-xl font-bold mb-6">Common Use Cases</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-bold mb-3">Header Logo</h3>
            <div className="bg-white shadow-sm p-4 rounded flex items-center justify-between">
              <ResponsiveLogo
                mobileVariant="icon"
                tabletVariant="full"
                desktopVariant="full"
                mobileSize="sm"
                tabletSize="md"
                desktopSize="md"
                animateTransition={animateTransition}
              />
              <div className="hidden md:block">
                <div className="h-10 w-40 bg-gray-100 rounded"></div>
              </div>
              <div className="md:hidden">
                <div className="h-8 w-8 bg-gray-100 rounded"></div>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-bold mb-3">Footer Logo</h3>
            <div className="bg-gray-900 p-4 rounded">
              <ResponsiveLogo
                mobileVariant="icon"
                tabletVariant="full"
                desktopVariant="full"
                mobileSize="md"
                tabletSize="md"
                desktopSize="lg"
                textColor="text-white"
                animateTransition={animateTransition}
              />
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-bold mb-3">Mobile Menu Logo</h3>
            <div className="bg-white border-t border-gray-200 p-4 rounded">
              <div className="flex justify-center mb-4">
                <ResponsiveLogo mobileVariant="full" mobileSize="sm" animateTransition={animateTransition} />
              </div>
              <div className="space-y-2">
                <div className="h-8 bg-gray-100 rounded"></div>
                <div className="h-8 bg-gray-100 rounded"></div>
                <div className="h-8 bg-gray-100 rounded"></div>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-bold mb-3">Hero Section Logo</h3>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded flex items-center">
              <ResponsiveLogo
                mobileVariant="icon"
                tabletVariant="icon"
                desktopVariant="icon"
                mobileSize="md"
                tabletSize="lg"
                desktopSize="lg"
                className="mr-3"
                animateTransition={animateTransition}
              />
              <div className="ml-2">
                <div className="h-8 w-48 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 w-36 bg-gray-100 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-6">Dark Mode Examples</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-3 text-white">Header (Dark)</h3>
            <div className="flex items-center justify-between">
              <ResponsiveLogo
                mobileVariant="icon"
                tabletVariant="full"
                desktopVariant="full"
                mobileSize="sm"
                tabletSize="md"
                desktopSize="md"
                textColor="text-white"
                animateTransition={animateTransition}
              />
              <div className="h-8 w-8 bg-gray-700 rounded"></div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-3 text-white">Footer (Dark)</h3>
            <ResponsiveLogo
              mobileVariant="icon"
              tabletVariant="full"
              desktopVariant="full"
              mobileSize="md"
              tabletSize="md"
              desktopSize="lg"
              textColor="text-white"
              animateTransition={animateTransition}
            />
          </div>
        </div>
      </div>
    </div>
  )
} 