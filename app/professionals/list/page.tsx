"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Star, Search, HardHat } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProfessionalsList() {
  const searchParams = useSearchParams()
  const serviceParam = searchParams.get("service")
  const [filter, setFilter] = useState("rating") // Default filter by rating
  const [service, setService] = useState(serviceParam || "todos")
  const [professionals, setProfessionals] = useState([])
  const [loading, setLoading] = useState(true)

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
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-red-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-teal-500",
      "bg-orange-500",
    ]

    // Usar el ID para seleccionar un color
    const colorIndex =
      String(id)
        .split("")
        .reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length
    return colors[colorIndex]
  }

  // Simulated data - in a real app, you would fetch this from an API
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const data = [
        {
          id: 1,
          name: "Carlos Rodríguez",
          profession: "Plomero Matriculado",
          services: ["plomería"],
          rating: 4.9,
          reviews: 124,
          positiveReviews: 120,
          negativeReviews: 4,
          completedJobs: 187,
          location: "Buenos Aires, CABA",
          image: "/placeholder.svg?height=100&width=100",
        },
        {
          id: 2,
          name: "Laura Fernández",
          profession: "Electricista Certificada",
          services: ["electricidad"],
          rating: 4.8,
          reviews: 98,
          positiveReviews: 94,
          negativeReviews: 4,
          completedJobs: 145,
          location: "Córdoba, Argentina",
          image: "/placeholder.svg?height=100&width=100",
        },
        {
          id: 3,
          name: "Miguel Sánchez",
          profession: "Carpintero y Ebanista",
          services: ["carpintería"],
          rating: 4.7,
          reviews: 87,
          positiveReviews: 82,
          negativeReviews: 5,
          completedJobs: 132,
          location: "Rosario, Santa Fe",
          image: "/placeholder.svg?height=100&width=100",
        },
        {
          id: 4,
          name: "Ana Gómez",
          profession: "Pintora Profesional",
          services: ["pintura"],
          rating: 4.9,
          reviews: 76,
          positiveReviews: 74,
          negativeReviews: 2,
          completedJobs: 110,
          location: "Mendoza, Argentina",
          image: "/placeholder.svg?height=100&width=100",
        },
        {
          id: 5,
          name: "Roberto Martínez",
          profession: "Especialista en Techado",
          services: ["techado"],
          rating: 4.6,
          reviews: 65,
          positiveReviews: 60,
          negativeReviews: 5,
          completedJobs: 95,
          location: "Buenos Aires, CABA",
          image: "/placeholder.svg?height=100&width=100",
        },
        {
          id: 6,
          name: "Lucía Pérez",
          profession: "Instaladora de Pisos",
          services: ["pisos"],
          rating: 4.8,
          reviews: 58,
          positiveReviews: 55,
          negativeReviews: 3,
          completedJobs: 87,
          location: "La Plata, Buenos Aires",
          image: "/placeholder.svg?height=100&width=100",
        },
        {
          id: 7,
          name: "Javier Torres",
          profession: "Paisajista y Jardinero",
          services: ["jardinería"],
          rating: 4.7,
          reviews: 52,
          positiveReviews: 49,
          negativeReviews: 3,
          completedJobs: 78,
          location: "Córdoba, Argentina",
          image: "/placeholder.svg?height=100&width=100",
        },
        {
          id: 8,
          name: "Marcela Díaz",
          profession: "Técnica en Climatización",
          services: ["climatización"],
          rating: 4.5,
          reviews: 45,
          positiveReviews: 40,
          negativeReviews: 5,
          completedJobs: 67,
          location: "Rosario, Santa Fe",
          image: "/placeholder.svg?height=100&width=100",
        },
      ]

      // Filter by service if provided
      let filteredData = data
      if (service && service !== "todos") {
        filteredData = data.filter((p) => p.services.some((s) => s.toLowerCase() === service.toLowerCase()))
      }

      // Sort based on filter
      switch (filter) {
        case "completedJobs":
          filteredData.sort((a, b) => b.completedJobs - a.completedJobs)
          break
        case "rating":
          filteredData.sort((a, b) => b.rating - a.rating)
          break
        case "positiveReviews":
          filteredData.sort((a, b) => b.positiveReviews - a.positiveReviews)
          break
        case "negativeReviews":
          filteredData.sort((a, b) => b.negativeReviews - a.negativeReviews)
          break
        default:
          filteredData.sort((a, b) => b.rating - a.rating)
      }

      setProfessionals(filteredData)
      setLoading(false)
    }, 500)
  }, [service, filter])

  const handleFilterChange = (value) => {
    setFilter(value)
  }

  const handleServiceChange = (value) => {
    setService(value)
  }

  const serviceOptions = [
    { value: "todos", label: "Todos los servicios" },
    { value: "plomería", label: "Plomería" },
    { value: "electricidad", label: "Electricidad" },
    { value: "carpintería", label: "Carpintería" },
    { value: "pintura", label: "Pintura" },
    { value: "techado", label: "Techado" },
    { value: "pisos", label: "Pisos" },
    { value: "jardinería", label: "Jardinería" },
    { value: "climatización", label: "Climatización" },
  ]

  return (
    <div className="container py-10">
      <div className="flex justify-start mb-6">
        <Link href="/">
          <Button variant="outline" className="gap-2">
            <HardHat className="h-4 w-4" />
            Volver al Inicio
          </Button>
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6">
        Profesionales de {serviceOptions.find((s) => s.value === service)?.label || "Todos los servicios"}
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Buscar profesionales..." className="pl-8 pr-4" />
          </div>
        </div>
        <div className="flex gap-2">
          <Select value={service} onValueChange={handleServiceChange}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Filtrar por servicio" />
            </SelectTrigger>
            <SelectContent>
              {serviceOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={filter} onValueChange={handleFilterChange}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Mejor puntuación</SelectItem>
              <SelectItem value="completedJobs">Más trabajos completados</SelectItem>
              <SelectItem value="positiveReviews">Más reseñas positivas</SelectItem>
              <SelectItem value="negativeReviews">Más reseñas negativas</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <p>Cargando profesionales...</p>
        </div>
      ) : professionals.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-muted-foreground">No se encontraron profesionales para esta categoría.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {professionals.map((professional) => {
            const avatarColor = getAvatarColor(professional.id)
            return (
              <Link href={`/professionals/${professional.id}`} key={professional.id}>
                <Card className="overflow-hidden transition-all hover:shadow-lg border-2 border-transparent hover:border-yellow-400">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-16 w-16 border-2 border-gray-100 shadow-sm">
                        <AvatarImage src={professional.image} alt={professional.name} />
                        <AvatarFallback className={avatarColor}>{getInitials(professional.name)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold">{professional.name}</h3>
                            <p className="text-sm text-muted-foreground">{professional.profession}</p>
                          </div>
                          <Badge variant="secondary" className="flex items-center gap-1 bg-yellow-400 text-black">
                            <Star className="h-3 w-3 fill-current" />
                            {professional.rating}
                          </Badge>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-muted-foreground">
                          <MapPin className="mr-1 h-3 w-3" />
                          {professional.location}
                        </div>
                        <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                          <div>
                            <span className="font-medium">Trabajos:</span> {professional.completedJobs}
                          </div>
                          <div>
                            <span className="font-medium">Reseñas:</span> {professional.reviews}
                          </div>
                          <div>
                            <span className="font-medium">Positivas:</span> {professional.positiveReviews}
                          </div>
                          <div>
                            <span className="font-medium">Negativas:</span> {professional.negativeReviews}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
