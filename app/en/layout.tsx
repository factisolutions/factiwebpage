import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Raleway } from "next/font/google"
import "../globals.css"
import MotionConfigProvider from "@/components/animations/motion-config"
import ScrollToTop from "@/components/scroll-to-top"
import ScrollProgress from "@/components/animations/scroll-progress"
import ClientLayout from "../client-layout"

// Initialize the Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

// Initialize the Raleway font
const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
})

export const metadata: Metadata = {
  title: "FACTI Solutions - Transforming Businesses with Responsible AI",
  description:
    "Experts in AI governance, intelligent automation and digital transformation. Personalized solutions for companies seeking responsible innovation.",
  keywords: "AI, Artificial Intelligence, Governance, Automation, Digital Transformation, Consulting",
  authors: [{ name: "FACTI Solutions" }],
  creator: "FACTI Solutions",
  publisher: "FACTI Solutions",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://facti.solutions/en",
    title: "FACTI Solutions - Transforming Businesses with Responsible AI",
    description: "Experts in AI governance, intelligent automation and digital transformation.",
    siteName: "FACTI Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "FACTI Solutions - Transforming Businesses with Responsible AI",
    description: "Experts in AI governance, intelligent automation and digital transformation.",
  },
  generator: 'v0.dev'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#00D8D6",
}

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${raleway.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ClientLayout>
          <MotionConfigProvider>
            <ScrollProgress />
            <header>
              {/* Your navbar or fixed header */}
            </header>
            <main role="main">{children}</main>
            <footer>
              {/* Footer with links or useful information */}
            </footer>
            <ScrollToTop />
          </MotionConfigProvider>
        </ClientLayout>
      </body>
    </html>
  )
}
