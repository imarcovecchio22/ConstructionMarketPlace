"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { professionalProfiles } from "@/app/data/professionals"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Star, ArrowLeft, MapPin } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useSearchParams } from "next/navigation"
import { useId } from "react"

export default function ProfessionalsDirectory() {
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState("")
  const [serviceFilter, setServiceFilter] = useState("todos")
  const [announcement, setAnnouncement] = useState("")

  // Generar IDs únicos para asociar labels con inputs
  const searchId = useId()
  const serviceFilterId = useId()

  // Inicializar filtros desde URL al cargar
  useEffect(() => {
    const query = searchParams.get("query") || ""
    const service = searchParams.get("service") || "todos"

    setSearchTerm(query)
    setServiceFilter(service)

    // Anuncio para lectores de pantalla
    const filters = []
    if (query) filters.push(`búsqueda: ${query}`)
    if (service !== "todos") filters.push(`servicio: ${service}`)

    if (filters.length > 0) {
      setAnnouncement(`Mostrando resultados con ${filters.join(", ")}`)
    }
  }, [searchParams])

  // Ordenar profesionales alfabéticamente por nombre
  const sortedProfessionals = [...professionalProfiles].sort((a, b) => a.name.localeCompare(b.name))

  // Filtrar profesionales según búsqueda y categoría
  const filteredProfessionals = sortedProfessionals.filter((professional) => {
    const matchesSearch =
      professional.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      professional.profession.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesService =
      serviceFilter === "todos" ||
      professional.services.some((s) => String(s).toLowerCase() === serviceFilter.toLowerCase())

    return matchesSearch && matchesService
  })

  // Obtener categorías únicas para el filtro
  const uniqueServices = Array.from(
    new Set(professionalProfiles.flatMap((p) => p.services.map((s) => String(s)))),
  ).sort()

  // Función para obtener iniciales del nombre
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((part) => part.charAt(0))
      .join("")
      .toUpperCase()
  }

  // Generar un color de fondo basado en el ID para avatares sin imagen
  const getAvatarColor = (id) => {
    const colors = [
      "bg-professional-600",
      "bg-professional-700",
      "bg-professional-800",
      "bg-accent-500",
      "bg-accent-600",
      "bg-accent-700",
    ]

    // Usar el ID para seleccionar un color
    const colorIndex = id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length
    return colors[colorIndex]
  }

  // Actualizar anuncio cuando cambian los resultados
  useEffect(() => {
    setAnnouncement(`Se encontraron ${filteredProfessionals.length} profesionales que coinciden con tu búsqueda.`)
  }, [filteredProfessionals.length])

  return (
    <div className="container py-10">
      {/* Región de anuncios para lectores de pantalla */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </div>

      <div className="flex justify-start mb-6">
        <Link href="/">
          <Button
            variant="outline"
            className="gap-2 border-professional-600 text-professional-700 hover:bg-professional-50 dark:border-professional-400 dark:text-professional-300 dark:hover:bg-professional-950/50 focus:ring-2 focus:ring-professional-500 focus:ring-offset-2 dark:focus:ring-professional-400"
            aria-label="Volver a la página de inicio"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Volver al Inicio
          </Button>
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-professional-800 dark:text-professional-200">
        Directorio de Profesionales
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <div className="relative">
            <label htmlFor={searchId} className="sr-only">
              Buscar profesionales
            </label>
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" aria-hidden="true" />
            <Input
              id={searchId}
              type="search"
              placeholder="Buscar profesionales..."
              className="pl-8 pr-4 border-input focus:border-professional-500 focus:ring-professional-500 dark:focus:border-professional-700 dark:focus:ring-professional-700"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Buscar profesionales por nombre o profesión"
            />
          </div>
        </div>
        <div>
          <label htmlFor={serviceFilterId} className="sr-only">
            Filtrar por servicio
          </label>
          <Select value={serviceFilter} onValueChange={setServiceFilter}>
            <SelectTrigger
              id={serviceFilterId}
              className="w-[200px] border-input focus:border-professional-500 focus:ring-professional-500 dark:focus:border-professional-700 dark:focus:ring-professional-700"
              aria-label="Filtrar por servicio"
            >
              <SelectValue placeholder="Filtrar por servicio" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos los servicios</SelectItem>
              {uniqueServices.map((service) => (
                <SelectItem key={service} value={service}>
                  {service.charAt(0).toUpperCase() + service.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="bg-background rounded-lg shadow-card overflow-hidden border border-border">
        <div className="grid grid-cols-12 gap-4 p-4 font-medium text-sm bg-professional-50 dark:bg-professional-950/50">
          <div className="col-span-3">Nombre y Profesión</div>
          <div className="col-span-2">Especialidad</div>
          <div className="col-span-2">Calificación</div>
          <div className="col-span-2">Trabajos Completados</div>
          <div className="col-span-2">Ubicación</div>
          <div className="col-span-1">Acción</div>
        </div>

        <div className="divide-y divide-border" role="table" aria-label="Lista de profesionales">
          {filteredProfessionals.length > 0 ? (
            filteredProfessionals.map((professional) => {
              const avatarColor = getAvatarColor(professional.id)
              return (
                <div
                  key={professional.id}
                  className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-muted/50 transition-colors"
                  role="row"
                >
                  <div className="col-span-3 flex items-center gap-3" role="cell">
                    <Avatar className="h-10 w-10 border border-border shadow-sm">
                      <AvatarImage src={professional.image || "/placeholder.svg"} alt="" aria-hidden="true" />
                      <AvatarFallback className={`${avatarColor} text-white`} aria-hidden="true">
                        {getInitials(professional.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold text-professional-800 dark:text-professional-200">
                        {professional.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{professional.profession}</div>
                    </div>
                  </div>
                  <div className="col-span-2" role="cell">
                    {professional.services.map((service) => (
                      <Badge
                        key={String(service)}
                        variant="outline"
                        className="mr-1 border-professional-200 text-professional-700 dark:border-professional-800 dark:text-professional-300"
                      >
                        {typeof service === "string"
                          ? service.charAt(0).toUpperCase() + service.slice(1)
                          : String(service)}
                      </Badge>
                    ))}
                  </div>
                  <div
                    className="col-span-2 flex items-center"
                    role="cell"
                    aria-label={`Calificación: ${professional.rating} de 5 estrellas, ${professional.reviewsCount} reseñas`}
                  >
                    <Star className="h-4 w-4 text-accent-500 fill-accent-500 mr-1" aria-hidden="true" />
                    <span className="font-medium">{professional.rating}</span>
                    <span className="text-sm text-muted-foreground ml-1">({professional.reviewsCount})</span>
                  </div>
                  <div
                    className="col-span-2"
                    role="cell"
                    aria-label={`${professional.completedJobs} trabajos completados`}
                  >
                    {professional.completedJobs} trabajos
                  </div>
                  <div className="col-span-2 text-sm flex items-center" role="cell">
                    <MapPin className="h-3 w-3 text-muted-foreground mr-1" aria-hidden="true" />
                    <span>{professional.location}</span>
                  </div>
                  <div className="col-span-1" role="cell">
                    <Link href={`/professionals/${professional.id}`}>
                      <Button
                        size="sm"
                        className="bg-professional-700 hover:bg-professional-800 text-white dark:bg-professional-600 dark:hover:bg-professional-700 focus:ring-2 focus:ring-professional-500 focus:ring-offset-2 dark:focus:ring-professional-400"
                        aria-label={`Ver perfil de ${professional.name}`}
                      >
                        Ver Perfil
                      </Button>
                    </Link>
                  </div>
                </div>
              )
            })
          ) : (
            <div className="p-8 text-center text-muted-foreground" role="row" aria-live="polite">
              <p role="cell">No se encontraron profesionales que coincidan con tu búsqueda.</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-muted-foreground" aria-live="polite">
        Mostrando {filteredProfessionals.length} de {professionalProfiles.length} profesionales
      </div>
    </div>
  )
}
