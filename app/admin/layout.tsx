import type React from "react"
import { AdminNav } from "@/components/admin-nav"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Panel de Administración</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <AdminNav />
        </div>

        <div className="md:col-span-3">{children}</div>
      </div>
    </div>
  )
}
