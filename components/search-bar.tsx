"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Search, MapPin, Star, X, ChevronDown, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useId } from "react"

// Servicios populares para autocompletado
const popularServices = [
  "Plomería",
  "Electricidad",
  "Carpintería",
  "Pintura",
  "Techado",
  "Pisos",
  "Albañilería",
  "Jardinería",
  "Climatización",
  "Herrería",
  "Decoración",
  "Seguridad",
]

// Ubicaciones populares
const popularLocations = [
  "Buenos Aires, CABA",
  "Córdoba, Argentina",
  "Rosario, Santa Fe",
  "Mendoza, Argentina",
  "La Plata, Buenos Aires",
  "Mar del Plata, Buenos Aires",
  "San Miguel de Tucumán, Tucumán",
  "Salta, Argentina",
]

// Búsquedas recientes (simuladas)
const recentSearches = [
  "Plomero para reparación de cañerías",
  "Electricista certificado",
  "Pintor para exterior",
  "Carpintero muebles a medida",
]

export function SearchBar({ className }: { className?: string }) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [location, setLocation] = useState("")
  const [category, setCategory] = useState("")
  const [rating, setRating] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const searchRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Generar IDs únicos para asociar labels con inputs
  const searchId = useId()
  const categoryId = useId()
  const locationId = useId()
  const ratingId = useId()

  // Estado para anuncios de lectores de pantalla
  const [announcement, setAnnouncement] = useState("")

  // Actualizar sugerencias basadas en la entrada del usuario
  useEffect(() => {
    if (searchQuery.length > 1) {
      const filtered = popularServices.filter((service) => service.toLowerCase().includes(searchQuery.toLowerCase()))
      setSuggestions(filtered)
      setShowSuggestions(true)

      // Anuncio para lectores de pantalla
      if (filtered.length > 0) {
        setAnnouncement(`${filtered.length} sugerencias disponibles. Use las teclas de flecha para navegar.`)
      } else {
        setAnnouncement("No hay sugerencias disponibles.")
      }
    } else {
      setShowSuggestions(false)
      setAnnouncement("")
    }
  }, [searchQuery])

  // Cerrar sugerencias al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Actualizar filtros activos
  useEffect(() => {
    const filters = []
    if (category) filters.push(category)
    if (location) filters.push(location)
    if (rating) filters.push(`${rating} estrellas o más`)
    setActiveFilters(filters)

    // Anuncio para lectores de pantalla cuando cambian los filtros
    if (filters.length > 0) {
      setAnnouncement(`Filtros aplicados: ${filters.join(", ")}`)
    } else if (filters.length === 0 && activeFilters.length > 0) {
      setAnnouncement("Todos los filtros han sido eliminados")
    }
  }, [category, location, rating, activeFilters.length])

  // Manejar la búsqueda
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    // Construir la URL con los parámetros de búsqueda
    const params = new URLSearchParams()

    if (searchQuery.trim()) {
      params.append("query", searchQuery.trim())
    }

    if (category) {
      params.append("service", category.toLowerCase())
    }

    if (location) {
      params.append("location", location)
    }

    if (rating) {
      params.append("rating", rating)
    }

    setAnnouncement("Realizando búsqueda...")
    router.push(`/professionals/directory?${params.toString()}`)
  }

  // Seleccionar una sugerencia
  const selectSuggestion = (suggestion: string) => {
    setSearchQuery(suggestion)
    setShowSuggestions(false)
    setAnnouncement(`Seleccionado: ${suggestion}`)
    // Enfocar el campo de búsqueda después de seleccionar
    searchInputRef.current?.focus()
  }

  // Limpiar todos los filtros
  const clearAllFilters = () => {
    setCategory("")
    setLocation("")
    setRating("")
    setAnnouncement("Todos los filtros han sido eliminados")
  }

  // Remover un filtro específico
  const removeFilter = (filter: string) => {
    if (category === filter) setCategory("")
    if (location === filter) setLocation("")
    if (filter.includes("estrellas")) setRating("")
    setAnnouncement(`Filtro eliminado: ${filter}`)
  }

  // Manejar navegación por teclado en sugerencias
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (showSuggestions && suggestions.length > 0) {
      if (e.key === "ArrowDown") {
        e.preventDefault()
        const commandList = searchRef.current?.querySelector('[role="listbox"]')
        const firstItem = commandList?.querySelector('[role="option"]') as HTMLElement
        firstItem?.focus()
      } else if (e.key === "Escape") {
        setShowSuggestions(false)
      }
    }
  }

  return (
    <div className={cn("w-full max-w-3xl mx-auto", className)} ref={searchRef}>
      {/* Región de anuncios para lectores de pantalla */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </div>

      <form onSubmit={handleSearch} className="space-y-4" role="search" aria-label="Buscar profesionales">
        <div className="relative">
          <div className="flex flex-col md:flex-row gap-2 md:gap-0">
            <div className="relative flex-1">
              <label htmlFor={searchId} className="sr-only">
                Buscar servicios
              </label>
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                id={searchId}
                ref={searchInputRef}
                type="search"
                placeholder="¿Qué servicio necesitás?"
                className="w-full pl-10 pr-4 py-6 border border-input rounded-md md:rounded-l-md md:rounded-r-none focus:ring-professional-500 focus:border-professional-500 dark:focus:ring-professional-700 dark:focus:border-professional-700"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => {
                  if (searchQuery.length > 1) setShowSuggestions(true)
                }}
                onKeyDown={handleKeyDown}
                aria-expanded={showSuggestions}
                aria-autocomplete="list"
                aria-controls={showSuggestions ? "search-suggestions" : undefined}
                autoComplete="off"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label="Limpiar búsqueda"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              )}
            </div>
            <div className="flex w-full md:w-auto">
              <Button
                type="button"
                variant="outline"
                className="flex-1 md:flex-none rounded-l-md md:rounded-l-none rounded-r-none border border-input"
                onClick={() => setShowFilters(!showFilters)}
                aria-expanded={showFilters}
                aria-controls="search-filters"
              >
                <Filter className="h-4 w-4 mr-2" aria-hidden="true" />
                <span className="text-sm">Filtros</span>
                <ChevronDown
                  className={`h-4 w-4 ml-2 transition-transform ${showFilters ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </Button>
              <Button
                type="submit"
                className="rounded-r-md bg-professional-700 hover:bg-professional-800 text-white dark:bg-professional-600 dark:hover:bg-professional-700"
                aria-label="Buscar profesionales"
              >
                <Search className="h-4 w-4 md:mr-2" aria-hidden="true" />
                <span className="hidden md:inline">Buscar</span>
              </Button>
            </div>
          </div>

          {/* Sugerencias de autocompletado */}
          {showSuggestions && (
            <div
              id="search-suggestions"
              className="absolute z-10 mt-1 w-full bg-background rounded-md shadow-lg border border-border"
              role="listbox"
            >
              <Command>
                <CommandList>
                  {suggestions.length > 0 ? (
                    <CommandGroup heading="Servicios sugeridos">
                      {suggestions.map((suggestion, index) => (
                        <CommandItem
                          key={suggestion}
                          onSelect={() => selectSuggestion(suggestion)}
                          className="cursor-pointer"
                          role="option"
                          aria-selected={false}
                          tabIndex={-1}
                        >
                          <Search className="mr-2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                          {suggestion}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  ) : (
                    <CommandEmpty>No se encontraron sugerencias</CommandEmpty>
                  )}

                  {recentSearches.length > 0 && (
                    <CommandGroup heading="Búsquedas recientes">
                      {recentSearches.slice(0, 3).map((search) => (
                        <CommandItem
                          key={search}
                          onSelect={() => selectSuggestion(search)}
                          className="cursor-pointer"
                          role="option"
                          aria-selected={false}
                          tabIndex={-1}
                        >
                          <Search className="mr-2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                          {search}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  )}
                </CommandList>
              </Command>
            </div>
          )}
        </div>

        {/* Filtros adicionales - versión móvil mejorada */}
        {showFilters && (
          <div
            id="search-filters"
            className="grid grid-cols-1 gap-4 p-4 bg-muted/50 dark:bg-muted/20 rounded-md border border-border animate-in slide-in-from-top duration-300"
            aria-label="Filtros de búsqueda"
          >
            <div>
              <label htmlFor={categoryId} className="block text-sm font-medium mb-1">
                Categoría
              </label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger id={categoryId} className="w-full">
                  <SelectValue placeholder="Todas las categorías" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las categorías</SelectItem>
                  {popularServices.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor={locationId} className="block text-sm font-medium mb-1">
                Ubicación
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id={locationId}
                    variant="outline"
                    role="combobox"
                    className="w-full justify-between"
                    aria-expanded="false"
                  >
                    {location ? location : "Cualquier ubicación"}
                    <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" aria-hidden="true" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[calc(100vw-2rem)] md:w-full p-0" align="start">
                  <Command>
                    <CommandInput placeholder="Buscar ubicación..." />
                    <CommandList>
                      <CommandEmpty>No se encontraron ubicaciones</CommandEmpty>
                      <CommandGroup>
                        {popularLocations.map((loc) => (
                          <CommandItem
                            key={loc}
                            onSelect={() => setLocation(loc)}
                            className="cursor-pointer"
                            role="option"
                            aria-selected={location === loc}
                          >
                            <MapPin className="mr-2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                            {loc}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <label htmlFor={ratingId} className="block text-sm font-medium mb-1">
                Calificación mínima
              </label>
              <Select value={rating} onValueChange={setRating}>
                <SelectTrigger id={ratingId} className="w-full">
                  <SelectValue placeholder="Cualquier calificación" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Cualquier calificación</SelectItem>
                  <SelectItem value="5">
                    <div className="flex items-center">
                      <span>5</span>
                      <Star className="h-4 w-4 ml-1 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                      <span className="sr-only">estrellas</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="4">
                    <div className="flex items-center">
                      <span>4</span>
                      <Star className="h-4 w-4 ml-1 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                      <span className="ml-1">o más</span>
                      <span className="sr-only">estrellas o más</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="3">
                    <div className="flex items-center">
                      <span>3</span>
                      <Star className="h-4 w-4 ml-1 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                      <span className="ml-1">o más</span>
                      <span className="sr-only">estrellas o más</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Filtros activos - versión móvil mejorada */}
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap gap-2 items-center" aria-label="Filtros activos">
            <span className="text-sm text-muted-foreground">Filtros:</span>
            <div className="flex flex-wrap gap-2">
              {activeFilters.map((filter) => (
                <Badge
                  key={filter}
                  variant="secondary"
                  className="bg-professional-50 text-professional-700 hover:bg-professional-100 dark:bg-professional-950/50 dark:text-professional-400 dark:hover:bg-professional-900/50"
                >
                  {filter}
                  <button
                    type="button"
                    onClick={() => removeFilter(filter)}
                    className="ml-1 hover:text-professional-900 dark:hover:text-professional-300"
                    aria-label={`Eliminar filtro ${filter}`}
                  >
                    <X className="h-3 w-3" aria-hidden="true" />
                  </button>
                </Badge>
              ))}
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="text-professional-600 hover:text-professional-800 hover:bg-professional-50 dark:text-professional-400 dark:hover:text-professional-300 dark:hover:bg-professional-950/50 text-xs"
                aria-label="Limpiar todos los filtros"
              >
                Limpiar
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
