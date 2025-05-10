"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Save, Upload, X } from "lucide-react"

export default function NewServicePage() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
    duration: "",
    location: "",
  })

  const [images, setImages] = useState<string[]>([])
  const [isSaving, setIsSaving] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSaving(true)

    // Simulamos un envío de datos
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // En un entorno real, aquí enviaríamos los datos a la API
    console.log("Datos del formulario:", formData)
    console.log("Imágenes:", images)

    // Redirigir al usuario a la página de trabajos
    window.location.href = "/dashboard/professional/jobs"
  }

  // Simulación de carga de imágenes
  const handleImageUpload = () => {
    // En un entorno real, aquí subiríamos la imagen a un servicio de almacenamiento
    const newImageUrl = `/placeholder.svg?height=200&width=300&text=Imagen+${images.length + 1}`
    setImages((prev) => [...prev, newImageUrl])
  }

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="container py-10">
      <div className="flex justify-start mb-6">
        <Link href="/dashboard/professional/jobs">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Volver a Mis Trabajos
          </Button>
        </Link>
      </div>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Publicar Nuevo Servicio</h1>
        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>Detalles del Servicio</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Título del Servicio</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="ej., Reparación de Plomería en Baño"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Categoría</Label>
                <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Seleccioná una categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="plumbing">Plomería</SelectItem>
                    <SelectItem value="electrical">Electricidad</SelectItem>
                    <SelectItem value="carpentry">Carpintería</SelectItem>
                    <SelectItem value="painting">Pintura</SelectItem>
                    <SelectItem value="roofing">Techado</SelectItem>
                    <SelectItem value="flooring">Pisos</SelectItem>
                    <SelectItem value="landscaping">Jardinería</SelectItem>
                    <SelectItem value="hvac">Climatización</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descripción</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describí tu servicio en detalle. Incluí lo que ofrecés, materiales incluidos y cualquier información relevante."
                  rows={5}
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Precio (ARS)</Label>
                  <Input
                    id="price"
                    name="price"
                    placeholder="ej., $25.000 o $15.000-25.000"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Duración Estimada</Label>
                  <Input
                    id="duration"
                    name="duration"
                    placeholder="ej., 2 horas o 1-2 días"
                    value={formData.duration}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Ubicación de Servicio</Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="ej., CABA o A domicilio"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Fotos (Opcional)</Label>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {images.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Imagen ${index + 1}`}
                        className="h-32 w-full object-cover rounded-md border"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                  <div
                    className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-muted-foreground/25 p-4 text-center hover:bg-muted"
                    onClick={handleImageUpload}
                  >
                    <Upload className="h-6 w-6 text-muted-foreground mb-2" />
                    <div className="text-sm text-muted-foreground">Hacé clic para subir</div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Subí fotos de tus trabajos anteriores para mostrar tu experiencia y calidad.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" disabled={isSaving}>
                {isSaving ? (
                  "Guardando..."
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Publicar Servicio
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  )
}
