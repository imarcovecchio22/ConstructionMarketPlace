import { AdminNav } from "@/components/admin-nav"
import { Database, Image, Upload } from "lucide-react"

export default function AdminPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Panel de Administración</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <AdminNav />
        </div>

        <div className="md:col-span-3">
          <div className="bg-muted p-8 rounded-lg text-center">
            <h2 className="text-2xl font-medium mb-4">Bienvenido al Panel de Administración</h2>
            <p className="text-muted-foreground mb-6">
              Utiliza las herramientas del menú lateral para gestionar los datos y las imágenes de los profesionales.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Database className="h-8 w-8 text-professional-600 mb-2 mx-auto" />
                <h3 className="font-medium mb-1">Migración de Datos</h3>
                <p className="text-sm text-muted-foreground">
                  Migra los datos de profesionales a la base de datos Neon.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Image className="h-8 w-8 text-professional-600 mb-2 mx-auto" />
                <h3 className="font-medium mb-1">Generación de Imágenes</h3>
                <p className="text-sm text-muted-foreground">
                  Genera imágenes de perfil para los profesionales con IA.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Upload className="h-8 w-8 text-professional-600 mb-2 mx-auto" />
                <h3 className="font-medium mb-1">Gestión de Imágenes</h3>
                <p className="text-sm text-muted-foreground">Gestiona las imágenes de perfil de los profesionales.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
