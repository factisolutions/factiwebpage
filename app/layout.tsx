import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Raleway } from "next/font/google"
import "./globals.css"
import MotionConfigProvider from "@/components/animations/motion-config"
import ScrollToTop from "@/components/scroll-to-top"
import ScrollProgress from "@/components/animations/scroll-progress"
import ClientLayout from "./client-layout"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
})

export const metadata: Metadata = {
  title: "FACTI Solutions - Transformando Negócios com IA Responsável",
  description:
    "Especialistas em governança de IA, automação inteligente e transformação digital. Soluções personalizadas para empresas que buscam inovação responsável.",
  keywords: "IA, Inteligência Artificial, Governança, Automação, Transformação Digital, Consultoria",
  authors: [{ name: "FACTI Solutions" }],
  creator: "FACTI Solutions",
  publisher: "FACTI Solutions",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://facti.solutions",
    title: "FACTI Solutions - Transformando Negócios com IA Responsável",
    description: "Especialistas em governança de IA, automação inteligente e transformação digital.",
    siteName: "FACTI Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "FACTI Solutions - Transformando Negócios com IA Responsável",
    description: "Especialistas em governança de IA, automação inteligente e transformação digital.",
  },
  generator: 'v0.dev'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#00D8D6",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${raleway.variable}`}>
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
              {/* Coloque aqui sua navbar ou cabeçalho fixo */}
            </header>
            <main role="main">{children}</main>
            <footer>
              {/* Footer com links ou informações úteis */}
            </footer>
            <ScrollToTop />
          </MotionConfigProvider>
        </ClientLayout>
      </body>
    </html>
  )
}