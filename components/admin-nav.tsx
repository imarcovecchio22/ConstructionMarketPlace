"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Database, ImageIcon, Upload, ArrowLeft } from "lucide-react"

export function AdminNav() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="space-y-4">
      <Link href="/">
        <Button variant="outline" size="sm" className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al Inicio
        </Button>
      </Link>

      <Card className="p-4">
        <h2 className="text-lg font-medium mb-4">Panel de Administración</h2>
        <div className="space-y-2">
          <Link href="/admin/migrate-data">
            <Button variant={isActive("/admin/migrate-data") ? "default" : "ghost"} className="w-full justify-start">
              <Database className="mr-2 h-4 w-4" />
              Migrar Datos
            </Button>
          </Link>
          <Link href="/admin/generate-images">
            <Button variant={isActive("/admin/generate-images") ? "default" : "ghost"} className="w-full justify-start">
              <ImageIcon className="mr-2 h-4 w-4" />
              Generar Imágenes
            </Button>
          </Link>
          <Link href="/admin/profile-images">
            <Button variant={isActive("/admin/profile-images") ? "default" : "ghost"} className="w-full justify-start">
              <Upload className="mr-2 h-4 w-4" />
              Gestionar Imágenes
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  )
}
