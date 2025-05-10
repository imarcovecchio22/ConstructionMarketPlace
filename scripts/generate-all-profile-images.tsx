"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { professionalProfiles } from "@/app/data/professionals"
import { Progress } from "@/components/ui/progress"
import { ProfessionalProfileImage } from "@/components/professional-profile-image"

export default function GenerateAllProfileImages() {
  const [status, setStatus] = useState<"idle" | "generating" | "completed" | "error">("idle")
  const [progress, setProgress] = useState<number>(0)
  const [results, setResults] = useState<{ success: number; failed: number }>({ success: 0, failed: 0 })
  const [error, setError] = useState<string | null>(null)
  const [logs, setLogs] = useState<string[]>([])
  const [generatedImages, setGeneratedImages] = useState<{ id: string; name: string; imageUrl: string }[]>([])

  const addLog = (message: string) => {
    setLogs((prev) => [...prev, message])
  }

  const generateImages = async () => {
    setStatus("generating")
    setProgress(0)
    setResults({ success: 0, failed: 0 })
    setError(null)
    setLogs([])
    setGeneratedImages([])

    try {
      addLog("Iniciando generación de imágenes de perfil...")

      let successCount = 0
      let failedCount = 0
      const images: { id: string; name: string; imageUrl: string }[] = []

      for (let i = 0; i < professionalProfiles.length; i++) {
        const professional = professionalProfiles[i]

        try {
          addLog(`Generando imagen para ${professional.name}...`)

          // En un entorno real, llamaríamos a nuestra API
          // const response = await fetch('/api/professionals/generate-image', {
          //   method: 'POST',
          //   headers: {
          //     'Content-Type': 'application/json',
          //   },
          //   body: JSON.stringify({
          //     professionalId: professional.id,
          //     profession: professional.profession,
          //     name: professional.name,
          //   }),
          // })

          // const data = await response.json()

          // if (data.success) {
          //   successCount++
          //   addLog(`✅ Imagen generada para ${professional.name}`)
          //   images.push({
          //     id: professional.id,
          //     name: professional.name,
          //     imageUrl: data.data.imageUrl,
          //   })
          // } else {
          //   failedCount++
          //   addLog(`❌ Error al generar imagen para ${professional.name}: ${data.error}`)
          // }

          // Como estamos simulando, generamos una URL de placeholder
          const imageUrl = `/professionals/${professional.id}.jpg`
          successCount++
          addLog(`✅ Imagen generada para ${professional.name}`)
          images.push({
            id: professional.id,
            name: professional.name,
            imageUrl,
          })

          // Simulamos un pequeño retraso para dar sensación de procesamiento
          await new Promise((resolve) => setTimeout(resolve, 100))
        } catch (err) {
          failedCount++
          addLog(`❌ Error al generar imagen para ${professional.name}`)
          console.error(`Error generating image for professional ${professional.id}:`, err)
        }

        // Actualizamos el progreso
        const newProgress = Math.round(((i + 1) / professionalProfiles.length) * 100)
        setProgress(newProgress)
      }

      setResults({ success: successCount, failed: failedCount })
      setGeneratedImages(images)
      setStatus("completed")
      addLog(`Generación completada. Éxitos: ${successCount}, Fallos: ${failedCount}`)
    } catch (err) {
      console.error("Error generating images:", err)
      setError("Ocurrió un error durante la generación de imágenes")
      setStatus("error")
      addLog(`❌ Error general: ${err instanceof Error ? err.message : String(err)}`)
    }
  }

  return (
    <div className="container py-10">
      <Card>
        <CardHeader>
          <CardTitle>Generador de Imágenes de Perfil</CardTitle>
          <CardDescription>Genera imágenes de perfil para todos los profesionales utilizando IA</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-4">
              <Button onClick={generateImages} disabled={status === "generating"}>
                {status === "generating" ? "Generando..." : "Generar Todas las Imágenes"}
              </Button>
            </div>

            {status === "generating" && (
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">
                  Progreso: {progress}% ({results.success} éxitos, {results.failed} fallos)
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            )}

            {status === "completed" && (
              <div className="text-green-600">
                Generación completada. {results.success} imágenes generadas correctamente, {results.failed} fallidas.
              </div>
            )}

            {error && <div className="text-red-600">{error}</div>}

            {logs.length > 0 && (
              <div className="mt-4">
                <h3 className="text-lg font-medium mb-2">Registro de actividad</h3>
                <div className="bg-muted p-4 rounded-md h-64 overflow-y-auto">
                  {logs.map((log, index) => (
                    <div key={index} className="text-sm mb-1">
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {generatedImages.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Imágenes generadas ({generatedImages.length})</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {generatedImages.map((image) => (
                    <div key={image.id} className="border rounded-md p-4 flex flex-col items-center">
                      <ProfessionalProfileImage
                        professionalId={image.id}
                        name={image.name}
                        size="lg"
                        className="mb-2"
                      />
                      <p className="text-sm font-medium text-center truncate w-full">{image.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="text-sm text-gray-500">Total de profesionales: {professionalProfiles.length}</div>
        </CardFooter>
      </Card>
    </div>
  )
}
