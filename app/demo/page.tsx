'use client';
import { useState } from "react"
import Logo from "@/components/logo"
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
      <h1 className="text-3xl font-bold mb-8 text-center">Logo Size Demo</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Icon Only</h2>
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
          <h2 className="text-xl font-bold mb-4">Full Logo</h2>
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

      <div className="bg-white p-8 rounded-lg shadow-md mb-16">
        <h2 className="text-xl font-bold mb-4">Loading Spinner Demo</h2>
        <div className="flex flex-col items-center">
          <Button onClick={simulateLoading} disabled={isLoading}>
            {isLoading ? "Loading..." : "Simulate Loading"}
          </Button>

          {isLoading && (
            <div className="mt-8">
              <LoadingSpinner text="Carregando..." />
            </div>
          )}
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Text Variant</h2>
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
    </div>
  )
}