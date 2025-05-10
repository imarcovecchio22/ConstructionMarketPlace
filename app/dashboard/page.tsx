"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, FileText, MessageSquare, Star, User, Settings, LogOut, Bell, HardHat } from "lucide-react"

export default function Dashboard() {
  const [userType, setUserType] = useState<"client" | "professional">("client")

  return (
    <div className="flex min-h-screen">
      <div className="hidden w-64 border-r bg-muted/40 md:block">
        <div className="flex h-16 items-center border-b px-4">
          <div className="flex items-center gap-2 font-semibold">
            <User className="h-5 w-5" />
            <span>Juan Pérez</span>
          </div>
        </div>
        <div className="p-4">
          <nav className="grid gap-2">
            <Button variant="ghost" className="justify-start" asChild>
              <Link href="/dashboard">
                <FileText className="mr-2 h-4 w-4" />
                Panel Principal
              </Link>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <Link href="/dashboard/jobs">
                <Calendar className="mr-2 h-4 w-4" />
                Mis Trabajos
              </Link>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <Link href="/dashboard/messages">
                <MessageSquare className="mr-2 h-4 w-4" />
                Mensajes
              </Link>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <Link href="/dashboard/reviews">
                <Star className="mr-2 h-4 w-4" />
                Reseñas
              </Link>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <Link href="/dashboard/settings">
                <Settings className="mr-2 h-4 w-4" />
                Configuración
              </Link>
            </Button>
            <Button variant="ghost" className="justify-start text-red-500" asChild>
              <Link href="/logout">
                <LogOut className="mr-2 h-4 w-4" />
                Cerrar Sesión
              </Link>
            </Button>
          </nav>
        </div>
      </div>
      <div className="flex-1">
        <header className="flex h-16 items-center border-b px-6">
          <div className="flex items-center">
            <Link href="/">
              <Button variant="outline" className="gap-2 mr-4">
                <HardHat className="h-4 w-4" />
                Volver al Inicio
              </Button>
            </Link>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Notificaciones</span>
            </Button>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <Button
                  variant={userType === "client" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setUserType("client")}
                >
                  Vista Cliente
                </Button>
                <Button
                  variant={userType === "professional" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setUserType("professional")}
                >
                  Vista Profesional
                </Button>
              </div>
            </div>
          </div>
        </header>
        <main className="p-6">
          <h1 className="text-2xl font-bold mb-6">Panel Principal</h1>

          {userType === "client" ? <ClientDashboard /> : <ProfessionalDashboard />}
        </main>
      </div>
    </div>
  )
}

function ClientDashboard() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Trabajos Activos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Trabajos Completados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Mensajes No Leídos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="active">
        <TabsList>
          <TabsTrigger value="active">Trabajos Activos</TabsTrigger>
          <TabsTrigger value="completed">Trabajos Completados</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="mt-6">
          <div className="grid gap-4">
            {[
              {
                id: "job-1",
                title: "Reparación de Plomería en Baño",
                professional: "Carlos Rodríguez",
                date: "10 de Abril, 2025",
                status: "En Progreso",
                image: "/placeholder.svg?height=50&width=50",
              },
              {
                id: "job-2",
                title: "Renovación de Cocina",
                professional: "Miguel Sánchez",
                date: "15 de Abril, 2025",
                status: "Programado",
                image: "/placeholder.svg?height=50&width=50",
              },
              {
                id: "job-3",
                title: "Arreglo de Cableado Eléctrico",
                professional: "Laura Fernández",
                date: "18 de Abril, 2025",
                status: "Pendiente de Presupuesto",
                image: "/placeholder.svg?height=50&width=50",
              },
            ].map((job) => (
              <Card key={job.id}>
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={job.image} alt={job.professional} />
                      <AvatarFallback>{job.professional.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{job.title}</h3>
                      <p className="text-sm text-muted-foreground">Profesional: {job.professional}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Calendar className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{job.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge
                      variant={
                        job.status === "En Progreso" ? "default" : job.status === "Programado" ? "secondary" : "outline"
                      }
                    >
                      {job.status}
                    </Badge>
                    <Button size="sm">Ver Detalles</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="completed" className="mt-6">
          <div className="grid gap-4">
            {[
              {
                id: "job-4",
                title: "Reparación de Techo",
                professional: "David Wilson",
                date: "25 de Marzo, 2025",
                rating: 5,
                image: "/placeholder.svg?height=50&width=50",
              },
              {
                id: "job-5",
                title: "Instalación de Cerco",
                professional: "Javier Torres",
                date: "15 de Marzo, 2025",
                rating: 4,
                image: "/placeholder.svg?height=50&width=50",
              },
            ].map((job) => (
              <Card key={job.id}>
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={job.image} alt={job.professional} />
                      <AvatarFallback>{job.professional.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{job.title}</h3>
                      <p className="text-sm text-muted-foreground">Profesional: {job.professional}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Calendar className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{job.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < job.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <Button size="sm">Ver Detalles</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ProfessionalDashboard() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Trabajos Activos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Presupuestos Pendientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Trabajos Completados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">187</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Calificación Promedio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="text-2xl font-bold mr-2">4.9</div>
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="jobs">
        <TabsList>
          <TabsTrigger value="jobs">Trabajos Actuales</TabsTrigger>
          <TabsTrigger value="requests">Solicitudes de Trabajo</TabsTrigger>
          <TabsTrigger value="reviews">Reseñas Recientes</TabsTrigger>
        </TabsList>
        <TabsContent value="jobs" className="mt-6">
          <div className="grid gap-4">
            {[
              {
                id: "job-1",
                title: "Reparación de Plomería en Baño",
                client: "Juan Pérez",
                date: "10 de Abril, 2025",
                status: "En Progreso",
                address: "Av. Corrientes 1234, CABA",
                image: "/placeholder.svg?height=50&width=50",
              },
              {
                id: "job-2",
                title: "Instalación de Calefón",
                client: "María González",
                date: "15 de Abril, 2025",
                status: "Programado",
                address: "Av. Santa Fe 5678, CABA",
                image: "/placeholder.svg?height=50&width=50",
              },
            ].map((job) => (
              <Card key={job.id}>
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={job.image} alt={job.client} />
                      <AvatarFallback>{job.client.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{job.title}</h3>
                      <p className="text-sm text-muted-foreground">Cliente: {job.client}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Calendar className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{job.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge
                      variant={
                        job.status === "En Progreso" ? "default" : job.status === "Programado" ? "secondary" : "outline"
                      }
                    >
                      {job.status}
                    </Badge>
                    <Button size="sm">Ver Detalles</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="requests" className="mt-6">
          <div className="grid gap-4">
            {[
              {
                id: "req-1",
                title: "Reparación de Grifo con Pérdida",
                client: "Sofía Martínez",
                date: "8 de Abril, 2025",
                budget: "$15.000-$25.000",
                image: "/placeholder.svg?height=50&width=50",
              },
              {
                id: "req-2",
                title: "Instalación de Inodoro",
                client: "Miguel Fernández",
                date: "12 de Abril, 2025",
                budget: "$35.000-$50.000",
                image: "/placeholder.svg?height=50&width=50",
              },
            ].map((request) => (
              <Card key={request.id}>
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={request.image} alt={request.client} />
                      <AvatarFallback>{request.client.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{request.title}</h3>
                      <p className="text-sm text-muted-foreground">Cliente: {request.client}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Calendar className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{request.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge variant="outline">{request.budget}</Badge>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Rechazar
                      </Button>
                      <Button size="sm">Enviar Presupuesto</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="mt-6">
          <div className="grid gap-4">
            {[
              {
                id: "review-1",
                client: "Javier L.",
                date: "15 de Marzo, 2025",
                rating: 5,
                comment:
                  "¡Carlos fue fantástico! Llegó a tiempo, diagnosticó rápidamente el problema con nuestra cañería con pérdidas y lo arregló por un precio razonable. Muy profesional y con conocimientos.",
                project: "Reparación de Cañerías",
                image: "/placeholder.svg?height=50&width=50",
              },
              {
                id: "review-2",
                client: "Miguel T.",
                date: "28 de Febrero, 2025",
                rating: 5,
                comment:
                  "Gran experiencia con Carlos instalando nuestro nuevo calefón. Explicó todas nuestras opciones y completó el trabajo eficientemente. Sin duda lo contrataría de nuevo.",
                project: "Instalación de Calefón",
                image: "/placeholder.svg?height=50&width=50",
              },
            ].map((review) => (
              <Card key={review.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={review.image} alt={review.client} />
                        <AvatarFallback>{review.client.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{review.client}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Calendar className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{review.date}</span>
                        </div>
                        <Badge variant="outline" className="mt-1">
                          {review.project}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 text-sm">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
