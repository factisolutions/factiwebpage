import type React from "react"
import { Inter } from "next/font/google"
import "../globals.css"
import MotionConfigProvider from "@/components/animations/motion-config"

// Initialize the Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <MotionConfigProvider>{children}</MotionConfigProvider>
      </body>
    </html>
  )
}
