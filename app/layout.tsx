import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/contexts/theme-context"
import { SkipLink } from "@/components/skip-link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ConstruConecta - Conectando profesionales de la construcción",
  description: "Plataforma para conectar profesionales de la construcción con clientes",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <SkipLink />
          <div className="min-h-screen flex flex-col">
            <main id="main-content" className="flex-1">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
