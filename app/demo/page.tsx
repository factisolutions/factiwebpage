'use client';
import { useState } from "react"
import Logo from "@/components/logo"
import ResponsiveLogo from "@/components/responsive-logo"
import LoadingSpinner from "@/components/loading-spinner"
import { Button } from "@/components/ui/button"

export default function DemoPage() {
  const [isLoading, setIsLoading] = useState(false)

  const simulateLoading = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Logo Component Demo</h1>

      {/* Responsive Logo Demo */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-16">
        <h2 className="text-xl font-bold mb-4">Responsive Logo (Adapts to screen size)</h2>
        <p className="text-gray-600 mb-6">
          This logo automatically adapts its variant and size based on screen size. 
          Try resizing your browser window to see the changes.
        </p>
        <div className="flex justify-center">
          <ResponsiveLogo
            mobileVariant="icon"
            tabletVariant="full"
            desktopVariant="full"
            mobileSize="md"
            tabletSize="lg"
            desktopSize="xl"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Icon Only Variant</h2>
          <p className="text-gray-600 mb-4">Shows only the logo icon without text</p>
          <div className="flex flex-col space-y-8">
            <div className="flex items-center space-x-4">
              <span className="w-20 text-sm text-gray-500">XS:</span>
              <Logo size="xs" variant="icon" />
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-20 text-sm text-gray-500">SM:</span>
              <Logo size="sm" variant="icon" />
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-20 text-sm text-gray-500">MD:</span>
              <Logo size="md" variant="icon" />
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-20 text-sm text-gray-500">LG:</span>
              <Logo size="lg" variant="icon" />
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-20 text-sm text-gray-500">XL:</span>
              <Logo size="xl" variant="icon" />
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Full Logo Variant</h2>
          <p className="text-gray-600 mb-4">Shows the complete logo with text</p>
          <div className="flex flex-col space-y-8">
            <div className="flex items-center space-x-4">
              <span className="w-20 text-sm text-gray-500">XS:</span>
              <Logo size="xs" variant="full" />
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-20 text-sm text-gray-500">SM:</span>
              <Logo size="sm" variant="full" />
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-20 text-sm text-gray-500">MD:</span>
              <Logo size="md" variant="full" />
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-20 text-sm text-gray-500">LG:</span>
              <Logo size="lg" variant="full" />
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-20 text-sm text-gray-500">XL:</span>
              <Logo size="xl" variant="full" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Text Only Variant</h2>
          <p className="text-gray-600 mb-4">Shows only the text without icon</p>
          <div className="flex flex-col space-y-8">
            <div className="flex items-center space-x-4">
              <span className="w-20 text-sm text-gray-500">XS:</span>
              <Logo size="xs" variant="text" />
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-20 text-sm text-gray-500">SM:</span>
              <Logo size="sm" variant="text" />
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-20 text-sm text-gray-500">MD:</span>
              <Logo size="md" variant="text" />
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-20 text-sm text-gray-500">LG:</span>
              <Logo size="lg" variant="text" />
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-20 text-sm text-gray-500">XL:</span>
              <Logo size="xl" variant="text" />
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Vertical Variant</h2>
          <p className="text-gray-600 mb-4">Icon above text in vertical layout</p>
          <div className="flex flex-col space-y-8">
            <div className="flex items-center space-x-4">
              <span className="w-20 text-sm text-gray-500">XS:</span>
              <Logo size="xs" variant="vertical" />
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-20 text-sm text-gray-500">SM:</span>
              <Logo size="sm" variant="vertical" />
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-20 text-sm text-gray-500">MD:</span>
              <Logo size="md" variant="vertical" />
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-20 text-sm text-gray-500">LG:</span>
              <Logo size="lg" variant="vertical" />
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-20 text-sm text-gray-500">XL:</span>
              <Logo size="xl" variant="vertical" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md mb-16">
        <h2 className="text-xl font-bold mb-4">Loading Spinner Demo</h2>
        <p className="text-gray-600 mb-4">Shows different types of loading indicators</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <h3 className="font-semibold mb-4">Logo-based Spinner</h3>
            <Button onClick={simulateLoading} disabled={isLoading}>
              {isLoading ? "Loading..." : "Simulate Loading"}
            </Button>
            {isLoading && (
              <div className="mt-8">
                <LoadingSpinner text="Carregando..." variant="logo" />
              </div>
            )}
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-semibold mb-4">Traditional Spinner</h3>
            <Button onClick={simulateLoading} disabled={isLoading}>
              {isLoading ? "Loading..." : "Simulate Loading"}
            </Button>
            {isLoading && (
              <div className="mt-8">
                <LoadingSpinner text="Loading..." variant="spinner" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Theme Variations</h2>
        <p className="text-gray-600 mb-4">Logo appearance in different themes</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="font-semibold mb-2">Light Theme</h3>
            <div className="bg-gray-100 p-4 rounded">
              <Logo size="md" variant="full" theme="light" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-semibold mb-2">Dark Theme</h3>
            <div className="bg-gray-800 p-4 rounded">
              <Logo size="md" variant="full" theme="dark" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-semibold mb-2">Auto Theme</h3>
            <div className="bg-white border p-4 rounded">
              <Logo size="md" variant="full" theme="auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}