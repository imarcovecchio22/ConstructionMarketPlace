"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar, Search, Plus, Edit2, Trash2, Eye, ArrowLeft } from "lucide-react"

export default function ProfessionalJobs() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Datos de ejemplo - en un entorno real, estos vendrían de una API
  const jobs = [
    {
      id: "job-1",
      title: "Reparación de Plomería en Baño",
      client: "Juan Pérez",
      date: "10 de Abril, 2025",
      status: "En Progreso",
      price: "$25.000",
    },
    {
      id: "job-2",
      title: "Instalación de Calefón",
      client: "María González",
      date: "15 de Abril, 2025",
      status: "Programado",
      price: "$60.000",
    },
    {
      id: "job-3",
      title: "Limpieza de Desagües",
      client: "Roberto Sánchez",
      date: "20 de Abril, 2025",
      status: "Pendiente de Confirmación",
      price: "$18.000",
    },
    {
      id: "job-4",
      title: "Reparación de Cañerías",
      client: "Laura Fernández",
      date: "5 de Abril, 2025",
      status: "Completado",
      price: "$22.000",
    },
    {
      id: "job-5",
      title: "Instalación de Grifería",
      client: "Carlos Gómez",
      date: "25 de Abril, 2025",
      status: "Programado",
      price: "$30.000",
    },
  ]

  // Filtrar trabajos según búsqueda y filtro de estado
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.client.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || job.status === statusFilter

    return matchesSearch && matchesStatus
  })

  // Función para obtener el color de la insignia según el estado
  const getStatusBadgeVariant = (status) => {
    switch (status) {
      case "En Progreso":
        return "default"
      case "Programado":
        return "secondary"
      case "Completado":
        return "success"
      case "Pendiente de Confirmación":
        return "warning"
      default:
        return "outline"
    }
  }

  return (
    <div className="container py-10">
      <div className="flex justify-start mb-6">
        <Link href="/dashboard/professional">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Volver al Panel
          </Button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-3xl font-bold">Mis Trabajos</h1>
        <div className="mt-4 md:mt-0">
          <Link href="/dashboard/professional/jobs/new">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Publicar Nuevo Servicio
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar por título o cliente..."
              className="pl-8 pr-4"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Filtrar por estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los estados</SelectItem>
              <SelectItem value="En Progreso">En Progreso</SelectItem>
              <SelectItem value="Programado">Programado</SelectItem>
              <SelectItem value="Pendiente de Confirmación">Pendiente de Confirmación</SelectItem>
              <SelectItem value="Completado">Completado</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <Card key={job.id}>
              <CardContent className="p-4 flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="font-medium">{job.title}</h3>
                  <p className="text-sm text-muted-foreground">Cliente: {job.client}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{job.date}</span>
                    <span className="text-xs font-medium">{job.price}</span>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                  <Badge variant={getStatusBadgeVariant(job.status)}>{job.status}</Badge>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">Ver detalles</span>
                    </Button>
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                      <Edit2 className="h-4 w-4" />
                      <span className="sr-only">Editar</span>
                    </Button>
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0 text-red-500 hover:text-red-600">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Eliminar</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No se encontraron trabajos que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>
    </div>
  )
}
