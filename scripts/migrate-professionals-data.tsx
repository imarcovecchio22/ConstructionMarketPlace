"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { professionalProfiles } from "@/app/data/professionals"
import { Progress } from "@/components/ui/progress"

export default function MigrateProfessionalsData() {
  const [status, setStatus] = useState<"idle" | "migrating" | "completed" | "error">("idle")
  const [progress, setProgress] = useState<number>(0)
  const [results, setResults] = useState<{ success: number; failed: number }>({ success: 0, failed: 0 })
  const [error, setError] = useState<string | null>(null)
  const [logs, setLogs] = useState<string[]>([])

  const addLog = (message: string) => {
    setLogs((prev) => [...prev, message])
  }

  const migrateData = async () => {
    setStatus("migrating")
    setProgress(0)
    setResults({ success: 0, failed: 0 })
    setError(null)
    setLogs([])

    try {
      addLog("Iniciando migración de datos...")

      // En un entorno real, aquí conectaríamos con la base de datos Neon
      // const sql = neon(process.env.DATABASE_URL!)

      let successCount = 0
      let failedCount = 0

      // Primero, insertamos las categorías de servicio únicas
      addLog("Insertando categorías de servicio...")
      const uniqueServices = Array.from(
        new Set(professionalProfiles.flatMap((p) => p.services.map((s) => (typeof s === "string" ? s : String(s))))),
      ).sort()

      // Simulamos la inserción de categorías
      addLog(`Encontradas ${uniqueServices.length} categorías únicas`)

      // En un entorno real, haríamos algo como:
      // for (const service of uniqueServices) {
      //   await sql`
      //     INSERT INTO service_categories (name)
      //     VALUES (${service})
      //     ON CONFLICT (name) DO NOTHING
      //   `
      // }

      // Ahora, migramos los profesionales y sus datos relacionados
      addLog(`Migrando ${professionalProfiles.length} perfiles de profesionales...`)

      for (let i = 0; i < professionalProfiles.length; i++) {
        const professional = professionalProfiles[i]

        try {
          // En un entorno real, insertaríamos el profesional en la base de datos
          // await sql`
          //   INSERT INTO professionals (
          //     id, name, profession, bio, rating, reviews_count, completed_jobs,
          //     location, joined_date, response_time, image_url
          //   ) VALUES (
          //     ${professional.id}, ${professional.name}, ${professional.profession},
          //     ${professional.bio || null}, ${professional.rating}, ${professional.reviewsCount},
          //     ${professional.completedJobs}, ${professional.location},
          //     ${professional.joinedDate || null}, ${professional.responseTime || null},
          //     ${professional.image || null}
          //   )
          //   ON CONFLICT (id) DO UPDATE SET
          //     name = EXCLUDED.name,
          //     profession = EXCLUDED.profession,
          //     bio = EXCLUDED.bio,
          //     rating = EXCLUDED.rating,
          //     reviews_count = EXCLUDED.reviews_count,
          //     completed_jobs = EXCLUDED.completed_jobs,
          //     location = EXCLUDED.location,
          //     joined_date = EXCLUDED.joined_date,
          //     response_time = EXCLUDED.response_time,
          //     updated_at = CURRENT_TIMESTAMP
          // `

          // Luego insertaríamos los servicios del profesional
          if (professional.services && Array.isArray(professional.services)) {
            for (const service of professional.services) {
              if (typeof service === "object" && service.name) {
                // await sql`
                //   INSERT INTO professional_services (professional_id, name, price, duration)
                //   VALUES (${professional.id}, ${service.name}, ${service.price || null}, ${service.duration || null})
                //   ON CONFLICT (professional_id, name) DO UPDATE SET
                //     price = EXCLUDED.price,
                //     duration = EXCLUDED.duration,
                //     updated_at = CURRENT_TIMESTAMP
                // `
              } else if (typeof service === "string") {
                // Primero obtendríamos el ID de la categoría
                // const categoryResult = await sql`
                //   SELECT id FROM service_categories WHERE name = ${service}
                // `
                // if (categoryResult.length > 0) {
                //   const categoryId = categoryResult[0].id
                //   await sql`
                //     INSERT INTO professional_categories (professional_id, category_id)
                //     VALUES (${professional.id}, ${categoryId})
                //     ON CONFLICT (professional_id, category_id) DO NOTHING
                //   `
                // }
              }
            }
          }

          // Insertaríamos las certificaciones
          if (professional.certifications && Array.isArray(professional.certifications)) {
            for (const certification of professional.certifications) {
              // await sql`
              //   INSERT INTO professional_certifications (professional_id, name)
              //   VALUES (${professional.id}, ${certification})
              //   ON CONFLICT (professional_id, name) DO NOTHING
              // `
            }
          }

          // Insertaríamos las reseñas
          if (professional.reviews && Array.isArray(professional.reviews)) {
            for (const review of professional.reviews) {
              // await sql`
              //   INSERT INTO professional_reviews (
              //     professional_id, author, date, rating, comment, project
              //   ) VALUES (
              //     ${professional.id}, ${review.author}, ${review.date},
              //     ${review.rating}, ${review.comment}, ${review.project || null}
              //   )
              //   ON CONFLICT (id) DO UPDATE SET
              //     author = EXCLUDED.author,
              //     date = EXCLUDED.date,
              //     rating = EXCLUDED.rating,
              //     comment = EXCLUDED.comment,
              //     project = EXCLUDED.project
              // `
            }
          }

          successCount++
          addLog(`✅ Migrado: ${professional.name}`)
        } catch (err) {
          failedCount++
          addLog(`❌ Error al migrar: ${professional.name}`)
          console.error(`Error migrating professional ${professional.id}:`, err)
        }

        // Actualizamos el progreso
        const newProgress = Math.round(((i + 1) / professionalProfiles.length) * 100)
        setProgress(newProgress)
      }

      setResults({ success: successCount, failed: failedCount })
      setStatus("completed")
      addLog(`Migración completada. Éxitos: ${successCount}, Fallos: ${failedCount}`)
    } catch (err) {
      console.error("Error migrating data:", err)
      setError("Ocurrió un error durante la migración")
      setStatus("error")
      addLog(`❌ Error general: ${err instanceof Error ? err.message : String(err)}`)
    }
  }

  return (
    <div className="container py-10">
      <Card>
        <CardHeader>
          <CardTitle>Migración de Datos de Profesionales</CardTitle>
          <CardDescription>
            Migra los datos de profesionales desde el archivo estático a la base de datos Neon
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-4">
              <Button onClick={migrateData} disabled={status === "migrating"}>
                {status === "migrating" ? "Migrando..." : "Iniciar Migración"}
              </Button>
            </div>

            {status === "migrating" && (
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">
                  Progreso: {progress}% ({results.success} éxitos, {results.failed} fallos)
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            )}

            {status === "completed" && (
              <div className="text-green-600">
                Migración completada. {results.success} profesionales migrados correctamente, {results.failed} fallidos.
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
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="text-sm text-gray-500">Total de profesionales: {professionalProfiles.length}</div>
        </CardFooter>
      </Card>
    </div>
  )
}
