import type React from "react"
import { ProfessionalDashboardNav } from "@/components/professional-dashboard-nav"

export default function ProfessionalDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center border-b bg-background px-4 md:px-6">
        <ProfessionalDashboardNav />
        <div className="ml-auto flex items-center gap-2">
          {/* Aquí puedes agregar elementos adicionales para el encabezado móvil */}
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}
