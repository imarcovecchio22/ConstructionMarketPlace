"use client"

import { useState, useEffect, useId } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Search, ArrowLeft } from "lucide-react"
import { ProfessionalsCardView } from "@/components/professionals-card-view"
import { ProfessionalsListView } from "@/components/professionals-list-view"
import { ViewToggle } from "@/components/view-toggle"
import { professionalProfiles } from "@/app/data/professionals"

export default function ProfessionalsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState("")
  const [serviceFilter, setServiceFilter] = useState("todos")
  const [sortBy, setSortBy] = useState("rating")
  const [view, setView] = useState<"cards" | "list">("cards")
  const [professionals, setProfessionals] = useState([])
  const [loading, setLoading] = useState(true)
  const [announcement, setAnnouncement] = useState("")

  // Generar IDs únicos para asociar labels con inputs
  const searchId = useId()
  const serviceFilterId = useId()
  const sortById = useId()

  // Inicializar filtros desde URL al cargar
  useEffect(() => {
    const query = searchParams.get("query") || ""
    const service = searchParams.get("service") || "todos"
    const sort = searchParams.get("sort") || "rating"
    const viewParam = searchParams.get("view") || "cards"

    setSearchTerm(query)
    setServiceFilter(service)
    setSortBy(sort)
    setView(viewParam as "cards" | "list")

    // Anuncio para lectores de pantalla
    const filters = []
    if (query) filters.push(`búsqueda: ${query}`)
    if (service !== "todos") filters.push(`servicio: ${service}`)
    if (sort !== "rating") filters.push(`ordenado por: ${sort}`)

    if (filters.length > 0) {
      setAnnouncement(`Mostrando resultados con ${filters.join(", ")}`)
    }
  }, [searchParams])

  // Cargar y filtrar profesionales
  useEffect(() => {
    setLoading(true)

    // Simular carga de datos
    setTimeout(() => {
      // Filtrar profesionales según búsqueda y categoría
      let filteredData = [...professionalProfiles]

      if (searchTerm) {
        filteredData = filteredData.filter(
          (professional) =>
            professional.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            professional.profession.toLowerCase().includes(searchTerm.toLowerCase()),
        )
      }

      if (serviceFilter !== "todos") {
        filteredData = filteredData.filter((professional) =>
          professional.services.some((s) => String(s).toLowerCase() === serviceFilter.toLowerCase()),
        )
      }

      // Ordenar según el criterio seleccionado
      switch (sortBy) {
        case "completedJobs":
          filteredData.sort((a, b) => b.completedJobs - a.completedJobs)
          break
        case "rating":
          filteredData.sort((a, b) => b.rating - a.rating)
          break
        case "reviews":
          filteredData.sort((a, b) => {
            const aReviews = a.reviews || a.reviewsCount || 0
            const bReviews = b.reviews || b.reviewsCount || 0
            return bReviews - aReviews
          })
          break
        default:
          filteredData.sort((a, b) => b.rating - a.rating)
      }

      setProfessionals(filteredData)
      setLoading(false)

      // Actualizar anuncio cuando cambian los resultados
      setAnnouncement(`Se encontraron ${filteredData.length} profesionales que coinciden con tu búsqueda.`)
    }, 500)
  }, [searchTerm, serviceFilter, sortBy])

  // Actualizar URL con los filtros
  const updateFilters = () => {
    const params = new URLSearchParams()
    if (searchTerm) params.set("query", searchTerm)
    if (serviceFilter !== "todos") params.set("service", serviceFilter)
    if (sortBy !== "rating") params.set("sort", sortBy)
    if (view !== "cards") params.set("view", view)

    router.push(`/professionals?${params.toString()}`)
  }

  // Obtener categorías únicas para el filtro
  const uniqueServices = Array.from(
    new Set(professionalProfiles.flatMap((p) => p.services.map((s) => String(s)))),
  ).sort()

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
              onKeyUp={(e) => e.key === "Enter" && updateFilters()}
              aria-label="Buscar profesionales por nombre o profesión"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div>
            <label htmlFor={serviceFilterId} className="sr-only">
              Filtrar por servicio
            </label>
            <Select
              value={serviceFilter}
              onValueChange={(value) => {
                setServiceFilter(value)
                setTimeout(updateFilters, 0)
              }}
            >
              <SelectTrigger
                id={serviceFilterId}
                className="w-full sm:w-[200px] border-input focus:border-professional-500 focus:ring-professional-500 dark:focus:border-professional-700 dark:focus:ring-professional-700"
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
          <div>
            <label htmlFor={sortById} className="sr-only">
              Ordenar por
            </label>
            <Select
              value={sortBy}
              onValueChange={(value) => {
                setSortBy(value)
                setTimeout(updateFilters, 0)
              }}
            >
              <SelectTrigger
                id={sortById}
                className="w-full sm:w-[200px] border-input focus:border-professional-500 focus:ring-professional-500 dark:focus:border-professional-700 dark:focus:ring-professional-700"
                aria-label="Ordenar por"
              >
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Mejor puntuación</SelectItem>
                <SelectItem value="completedJobs">Más trabajos completados</SelectItem>
                <SelectItem value="reviews">Más reseñas</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <ViewToggle
            currentView={view}
            onChange={(newView) => {
              setView(newView)
              setTimeout(updateFilters, 0)
            }}
            className="mt-2 sm:mt-0 self-end"
          />
        </div>
      </div>

      {view === "cards" ? (
        <ProfessionalsCardView professionals={professionals} loading={loading} />
      ) : (
        <ProfessionalsListView professionals={professionals} loading={loading} />
      )}

      <div className="mt-6 text-center text-sm text-muted-foreground" aria-live="polite">
        Mostrando {professionals.length} de {professionalProfiles.length} profesionales
      </div>
    </div>
  )
}
