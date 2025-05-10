"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { professionalProfiles } from "@/app/data/professionals"
import { ProfessionalProfileImage } from "@/components/professional-profile-image"
import { ProjectGallery } from "@/components/project-gallery"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"

export default function EditProfilePage() {
  // En un entorno real, obtendríamos el ID del profesional de la sesión
  const professionalId = "prof-1"
  const professional = professionalProfiles.find((p) => p.id === professionalId)

  const router = useRouter()

  const [formData, setFormData] = useState({
    name: professional?.name || "",
    profession: professional?.profession || "",
    description: professional?.description || "Profesional con experiencia en el sector de la construcción.",
    location: professional?.location || "",
    phone: professional?.phone || "",
    email: professional?.email || "",
    website: professional?.website || "",
  })

  const [projectImages, setProjectImages] = useState<string[]>(professional?.projectImages || [])

  const [isSaving, setIsSaving] = useState(false)
  const [saveMessage, setSaveMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSave = async () => {
    setIsSaving(true)
    setSaveMessage("")

    try {
      // En un entorno real, aquí enviaríamos los datos a la API
      // await fetch('/api/professionals/update', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     professionalId,
      //     ...formData,
      //     projectImages
      //   }),
      // })

      // Simulamos un retraso para mostrar el estado de guardado
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSaveMessage("Perfil actualizado correctamente")

      // En un entorno real, redirigimos al perfil
      // router.push(`/professionals/${professionalId}`)
    } catch (error) {
      console.error("Error al guardar el perfil:", error)
      setSaveMessage("Error al guardar el perfil. Intente nuevamente.")
    } finally {
      setIsSaving(false)
    }
  }

  if (!professional) {
    return <div className="container py-10">Profesional no encontrado</div>
  }

  return (
    <div className="container py-10">
      <div className="flex justify-start mb-6">
        <Link href={`/professionals/${professionalId}`}>
          <Button
            variant="outline"
            className="gap-2 border-professional-600 text-professional-700 hover:bg-professional-50 dark:border-professional-400 dark:text-professional-300 dark:hover:bg-professional-950/50"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al Perfil
          </Button>
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-professional-800 dark:text-professional-200">
        Editar Perfil Profesional
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Imagen de Perfil</CardTitle>
              <CardDescription>Sube una imagen profesional para tu perfil</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <ProfessionalProfileImage
                professionalId={professionalId}
                name={professional.name}
                size="xl"
                editable={true}
              />
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Información Personal</CardTitle>
              <CardDescription>Actualiza tu información de contacto y profesional</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleInputChange} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="profession">Profesión</Label>
                  <Input id="profession" name="profession" value={formData.profession} onChange={handleInputChange} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Ubicación</Label>
                  <Input id="location" name="location" value={formData.location} onChange={handleInputChange} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">Sitio web</Label>
                  <Input id="website" name="website" value={formData.website} onChange={handleInputChange} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descripción profesional</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Galería de Proyectos</CardTitle>
              <CardDescription>Sube imágenes de tus proyectos completados</CardDescription>
            </CardHeader>
            <CardContent>
              <ProjectGallery images={projectImages} onImagesChange={setProjectImages} />
            </CardContent>
          </Card>

          <div className="mt-6 flex justify-end">
            {saveMessage && (
              <p
                className={`mr-4 self-center ${saveMessage.includes("Error") ? "text-destructive" : "text-green-600 dark:text-green-400"}`}
              >
                {saveMessage}
              </p>
            )}
            <Button
              onClick={handleSave}
              disabled={isSaving}
              className="bg-professional-700 hover:bg-professional-800 text-white dark:bg-professional-600 dark:hover:bg-professional-700"
            >
              {isSaving ? (
                <>Guardando...</>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Guardar Cambios
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
