"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { professionalProfiles } from "@/app/data/professionals"

// Definimos los tipos de profesionales y sus descripciones para generar imágenes
const professionDescriptions = {
  plomero: "Profesional plomero con herramientas, vistiendo uniforme azul y casco de seguridad",
  electricista: "Electricista profesional con herramientas eléctricas, vistiendo uniforme y equipo de seguridad",
  carpintero: "Carpintero profesional trabajando con madera, vistiendo delantal y gafas de seguridad",
  pintor: "Pintor profesional con rodillo y brocha, vistiendo overol blanco",
  techista: "Profesional de techado trabajando en un techo, con equipo de seguridad y herramientas",
  "instalador de pisos": "Profesional instalando pisos, con herramientas especializadas y rodilleras",
  jardinero: "Paisajista profesional trabajando en un jardín, con herramientas de jardinería",
  climatización: "Técnico de climatización instalando un equipo de aire acondicionado",
}

export default function GenerateProfileImages() {
  const [status, setStatus] = useState<string>("idle")
  const [results, setResults] = useState<{ id: string; imageUrl: string }[]>([])
  const [error, setError] = useState<string | null>(null)

  const generateImages = async () => {
    setStatus("generating")
    setResults([])
    setError(null)

    try {
      // Aquí simularemos la generación de imágenes
      // En un entorno real, usaríamos un servicio de generación de imágenes con IA
      const generatedResults = []

      for (const professional of professionalProfiles) {
        // Determinamos qué tipo de profesional es basado en su profesión o servicios
        let professionType = "profesional"

        const profession = professional.profession.toLowerCase()
        const services = professional.services.map((s) => (typeof s === "string" ? s.toLowerCase() : ""))

        // Buscamos coincidencias en las descripciones
        for (const [key, _] of Object.entries(professionDescriptions)) {
          if (profession.includes(key) || services.some((s) => s.includes(key))) {
            professionType = key
            break
          }
        }

        // Generamos una URL de imagen de placeholder con el nombre del profesional
        // En producción, aquí llamaríamos a un servicio de generación de imágenes con IA
        const imageUrl = `/professionals/${professional.id}.jpg`

        // Agregamos el resultado
        generatedResults.push({
          id: professional.id,
          imageUrl,
        })

        // Simulamos un pequeño retraso para dar sensación de procesamiento
        await new Promise((resolve) => setTimeout(resolve, 100))
      }

      setResults(generatedResults)
      setStatus("completed")
    } catch (err) {
      console.error("Error generating images:", err)
      setError("Ocurrió un error al generar las imágenes")
      setStatus("error")
    }
  }

  const updateDatabase = async () => {
    setStatus("updating")

    try {
      // Aquí iría el código para actualizar la base de datos Neon
      // Esto es una simulación, en producción usaríamos una API real

      // Simulamos un retraso para dar sensación de procesamiento
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setStatus("updated")
    } catch (err) {
      console.error("Error updating database:", err)
      setError("Ocurrió un error al actualizar la base de datos")
      setStatus("error")
    }
  }

  return (
    <div className="container py-10">
      <Card>
        <CardHeader>
          <CardTitle>Generador de Imágenes de Perfil</CardTitle>
          <CardDescription>Genera y asigna imágenes de perfil para los profesionales en la plataforma</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-4">
              <Button onClick={generateImages} disabled={status === "generating" || status === "updating"}>
                Generar Imágenes
              </Button>
              <Button
                onClick={updateDatabase}
                disabled={status !== "completed" || results.length === 0}
                variant="outline"
              >
                Actualizar Base de Datos
              </Button>
            </div>

            {status === "generating" && (
              <div className="text-amber-600">
                Generando imágenes para {professionalProfiles.length} profesionales...
              </div>
            )}

            {status === "updating" && <div className="text-amber-600">Actualizando la base de datos...</div>}

            {status === "completed" && (
              <div className="text-green-600">Se generaron {results.length} imágenes correctamente.</div>
            )}

            {status === "updated" && <div className="text-green-600">Base de datos actualizada correctamente.</div>}

            {error && <div className="text-red-600">{error}</div>}
          </div>

          {results.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Imágenes generadas ({results.length})</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {results.map((result) => {
                  const professional = professionalProfiles.find((p) => p.id === result.id)
                  return (
                    <div key={result.id} className="border rounded-md p-4">
                      <div className="aspect-square relative mb-2">
                        <img
                          src={result.imageUrl || "/placeholder.svg"}
                          alt={professional?.name || "Profesional"}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <p className="font-medium truncate">{professional?.name}</p>
                      <p className="text-sm text-gray-500 truncate">{professional?.profession}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="text-sm text-gray-500">Total de profesionales: {professionalProfiles.length}</div>
        </CardFooter>
      </Card>
    </div>
  )
}
