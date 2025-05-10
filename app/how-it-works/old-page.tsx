"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { professionalProfiles } from "@/app/data/professionals"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Star, MapPin, DollarSign } from "lucide-react"

export default function ProfessionalsDirectory() {
  const [searchTerm, setSearchTerm] = useState("")
  const [serviceFilter, setServiceFilter] = useState("todos")
  const [sortBy, setSortBy] = useState("rating")
  const [professionals, setProfessionals] = useState([...professionalProfiles])

  // Obtener categorías únicas para el filtro
  const uniqueServices = Array.from(
    new Set(professionalProfiles.flatMap((p) => p.services.map((s) => String(s)))),
  ).sort()

  // Filtrar y ordenar profesionales
  useEffect(() => {
    let filtered = [...professionalProfiles]

    // Filtrar por término de búsqueda
    if (searchTerm) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.profession.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filtrar por servicio
    if (serviceFilter !== "todos") {
      filtered = filtered.filter((p) => p.services.some((s) => s.toLowerCase() === serviceFilter.toLowerCase()))
    }

    // Ordenar según criterio seleccionado
    switch (sortBy) {
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "reviews":
        filtered.sort((a, b) => b.reviewsCount - a.reviewsCount)
        break
      case "price_low":
        // Ordenar por precio más bajo (usando el precio mínimo del primer servicio como referencia)
        filtered.sort((a, b) => {
          const priceA = a.services && a.services[0] ? Number.parseInt(a.services[0].price.replace(/[^\d]/g, "")) : 0
          const priceB = b.services && b.services[0] ? Number.parseInt(b.services[0].price.replace(/[^\d]/g, "")) : 0
          return priceA - priceB
        })
        break
      case "price_high":
        // Ordenar por precio más alto (usando el precio máximo del primer servicio como referencia)
        filtered.sort((a, b) => {
          const priceA = a.services && a.services[0] ? Number.parseInt(a.services[0].price.replace(/[^\d]/g, "")) : 0
          const priceB = b.services && b.services[0] ? Number.parseInt(b.services[0].price.replace(/[^\d]/g, "")) : 0
          return priceB - priceA
        })
        break
      case "jobs":
        filtered.sort((a, b) => b.completedJobs - a.completedJobs)
        break
      default:
        filtered.sort((a, b) => b.rating - a.rating)
    }

    setProfessionals(filtered)
  }, [searchTerm, serviceFilter, sortBy])

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-2">Directorio de Profesionales</h1>
      <p className="text-muted-foreground mb-8">
        Explorá nuestro listado completo de profesionales calificados y encontrá el indicado para tu proyecto.
      </p>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar por nombre o profesión..."
              className="pl-8 pr-4"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-2 flex-col sm:flex-row">
          <Select value={serviceFilter} onValueChange={setServiceFilter}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Filtrar por servicio" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos los servicios</SelectItem>
              {uniqueServices.map((service) => (
                <SelectItem key={service} value={service}>
                  {typeof service === "string" ? service.charAt(0).toUpperCase() + service.slice(1) : service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Mejor puntuación</SelectItem>
              <SelectItem value="reviews">Más reseñas</SelectItem>
              <SelectItem value="price_low">Precio: menor a mayor</SelectItem>
              <SelectItem value="price_high">Precio: mayor a menor</SelectItem>
              <SelectItem value="jobs">Más trabajos completados</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="grid" className="mb-8">
        <TabsList>
          <TabsTrigger value="grid">Vista de Tarjetas</TabsTrigger>
          <TabsTrigger value="list">Vista de Lista</TabsTrigger>
        </TabsList>

        <TabsContent value="grid" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {professionals.length > 0 ? (
              professionals.map((professional) => (
                <Link href={`/professionals/${professional.id}`} key={professional.id}>
                  <Card className="overflow-hidden transition-all hover:shadow-lg h-full">
                    <div className="aspect-square relative">
                      <img
                        src={professional.image || "/placeholder.svg?height=300&width=300"}
                        alt={professional.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          {professional.rating}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg">{professional.name}</h3>
                      <p className="text-sm text-muted-foreground">{professional.profession}</p>

                      <div className="flex flex-wrap gap-1 mt-2">
                        {professional.services.map((service) => (
                          <Badge key={String(service)} variant="outline" className="text-xs">
                            {String(service)}
                          </Badge>
                        ))}
                      </div>

                      <div className="mt-3 flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-1 h-3 w-3" />
                        {professional.location}
                      </div>

                      <div className="mt-2 flex justify-between items-center">
                        <div className="text-sm">
                          <span className="font-medium">{professional.reviewsCount}</span> reseñas
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">{professional.completedJobs}</span> trabajos
                        </div>
                      </div>

                      {professional.services && professional.services[0] && (
                        <div className="mt-3 text-sm flex items-center">
                          <DollarSign className="h-3 w-3 mr-1 text-muted-foreground" />
                          <span>Desde {professional.services[0].price.split("-")[0]}</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-muted-foreground">
                No se encontraron profesionales que coincidan con tu búsqueda.
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="list" className="mt-6">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="grid grid-cols-12 gap-4 p-4 font-medium text-sm bg-muted">
              <div className="col-span-4">Profesional</div>
              <div className="col-span-2">Servicios</div>
              <div className="col-span-2">Calificación</div>
              <div className="col-span-2">Precio Referencia</div>
              <div className="col-span-2">Ubicación</div>
            </div>

            <div className="divide-y">
              {professionals.length > 0 ? (
                professionals.map((professional) => (
                  <Link href={`/professionals/${professional.id}`} key={professional.id}>
                    <div className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-muted/30">
                      <div className="col-span-4 flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={professional.image} alt={professional.name} />
                          <AvatarFallback>{professional.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-bold">{professional.name}</div>
                          <div className="text-sm text-muted-foreground">{professional.profession}</div>
                        </div>
                      </div>
                      <div className="col-span-2">
                        {professional.services.map((service) => (
                          <Badge key={String(service)} variant="outline" className="mr-1 text-xs">
                            {String(service)}
                          </Badge>
                        ))}
                      </div>
                      <div className="col-span-2 flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                        <span>{professional.rating}</span>
                        <span className="text-sm text-muted-foreground ml-1">({professional.reviewsCount})</span>
                      </div>
                      <div className="col-span-2">
                        {professional.services && professional.services[0]
                          ? professional.services[0].price
                          : "No disponible"}
                      </div>
                      <div className="col-span-2 text-sm">{professional.location}</div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="p-8 text-center text-muted-foreground">
                  No se encontraron profesionales que coincidan con tu búsqueda.
                </div>
              )}
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-6 text-center text-sm text-muted-foreground">
        Mostrando {professionals.length} de {professionalProfiles.length} profesionales
      </div>

      <div className="mt-12 bg-muted p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">¿Cómo funciona ConstruConecta?</h2>
        <p className="mb-4">
          ConstruConecta te conecta con profesionales calificados para tus proyectos de construcción y remodelación.
          Podés explorar perfiles, comparar precios, leer reseñas y contratar al profesional ideal para tu proyecto.
        </p>
        <div className="flex justify-center mt-6">
          <Link href="/how-it-works/details">
            <Button>Ver Guía Completa</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
