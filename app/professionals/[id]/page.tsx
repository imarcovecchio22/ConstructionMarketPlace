import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Calendar, Clock, HardHat, MapPin, Star, ThumbsUp, Wrench, ArrowLeft, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { professionalProfiles } from "@/app/data/professionals"
import { ProfessionalProfileImage } from "@/components/professional-profile-image"

export default function ProfessionalProfile({ params }: { params: { id: string } }) {
  // Buscar el profesional en los datos reales
  const professionalData = professionalProfiles.find((p) => p.id === params.id)

  // Si no se encuentra, usar datos de ejemplo
  const professional = professionalData || {
    id: params.id,
    name: "Carlos Rodríguez",
    profession: "Plomero Matriculado",
    bio: "Plomero matriculado con más de 15 años de experiencia en plomería residencial y comercial. Especializado en reparaciones, instalaciones y servicios de emergencia.",
    rating: 4.9,
    reviewsCount: 124,
    completedJobs: 187,
    location: "Buenos Aires, CABA",
    joinedDate: "Enero 2020",
    responseTime: "Menos de 1 hora",
    image: "/placeholder.svg?height=400&width=400",
    services: [
      { name: "Reparación de Cañerías", price: "$15.000-25.000", duration: "1-2 horas" },
      { name: "Limpieza de Desagües", price: "$12.000-18.000", duration: "1 hora" },
      { name: "Instalación de Grifería", price: "$20.000-30.000", duration: "1-3 horas" },
      { name: "Reparación de Calefón", price: "$25.000-40.000", duration: "2-4 horas" },
      { name: "Instalación de Calefón", price: "$60.000-100.000", duration: "4-6 horas" },
      { name: "Instalación de Inodoro", price: "$35.000-50.000", duration: "2-3 horas" },
    ],
    reviews: [
      {
        id: 1,
        author: "Javier L.",
        date: "15 de Marzo, 2025",
        rating: 5,
        comment:
          "¡Carlos fue fantástico! Llegó a tiempo, diagnosticó rápidamente el problema con nuestra cañería con pérdidas y lo arregló por un precio razonable. Muy profesional y con conocimientos.",
        project: "Reparación de Cañerías",
      },
      {
        id: 2,
        author: "Miguel T.",
        date: "28 de Febrero, 2025",
        rating: 5,
        comment:
          "Gran experiencia con Carlos instalando nuestro nuevo calefón. Explicó todas nuestras opciones y completó el trabajo eficientemente. Sin duda lo contrataría de nuevo.",
        project: "Instalación de Calefón",
      },
      {
        id: 3,
        author: "Sofía K.",
        date: "10 de Febrero, 2025",
        rating: 4,
        comment:
          "Carlos hizo un buen trabajo destapando nuestro desagüe de la cocina. Fue profesional y terminó el trabajo rápidamente. La única razón para las 4 estrellas es que llegó un poco más tarde de lo programado.",
        project: "Limpieza de Desagües",
      },
    ],
    certifications: ["Matrícula de Plomero", "Certificado en Prevención de Reflujo", "Certificación de Líneas de Gas"],
  }

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

  // Función para formatear el nombre del servicio
  const formatServiceName = (service: string | any): string => {
    if (typeof service === "string") {
      return service.charAt(0).toUpperCase() + service.slice(1)
    }
    if (service && typeof service === "object") {
      if (service.name) return service.name
      if (service.label) return service.label
    }
    return "Servicio general"
  }

  // Asegurarse de que la imagen exista, o usar un placeholder
  const profileImage =
    professional.image ||
    `/placeholder.svg?height=400&width=400&text=${encodeURIComponent(getInitials(professional.name))}`
  const avatarColor = getAvatarColor(professional.id)

  return (
    <div className="container py-10">
      <div className="flex justify-start mb-6">
        <Link href="/">
          <Button
            variant="outline"
            className="gap-2 border-professional-600 text-professional-700 hover:bg-professional-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al Inicio
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card className="border border-gray-100 shadow-card overflow-hidden">
            <div className="h-24 professional-gradient"></div>
            <CardContent className="p-6 -mt-12">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <ProfessionalProfileImage
                    professionalId={professional.id}
                    name={professional.name}
                    size="xl"
                    className="h-32 w-32 border-4 border-white shadow-md"
                  />
                  <div className="absolute -bottom-2 -right-2 rating-badge text-white font-bold rounded-full h-8 w-8 flex items-center justify-center shadow-md">
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                </div>
                <h1 className="text-2xl font-bold text-professional-800">{professional.name}</h1>
                <p className="text-muted-foreground">{professional.profession}</p>
                <div className="flex items-center mt-2">
                  <Star className="h-4 w-4 fill-accent-500 text-accent-500 mr-1" />
                  <span className="font-medium">{professional.rating}</span>
                  <span className="text-muted-foreground ml-1">({professional.reviewsCount} reseñas)</span>
                </div>
                <div className="flex items-center mt-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  {professional.location}
                </div>
                <div className="mt-3 flex flex-wrap justify-center gap-1">
                  {Array.isArray(professional.services)
                    ? professional.services.map((service, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-professional-200 text-professional-700 dark:border-professional-800 dark:text-professional-300"
                        >
                          {formatServiceName(service)}
                        </Badge>
                      ))
                    : professional.services && typeof professional.services === "object"
                      ? Object.entries(professional.services).map(([key, service], index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="border-professional-200 text-professional-700 dark:border-professional-800 dark:text-professional-300"
                          >
                            {typeof service === "object" && service.name ? service.name : key}
                          </Badge>
                        ))
                      : null}
                </div>
                <div className="mt-6 w-full">
                  <Button className="w-full mb-3 bg-professional-700 hover:bg-professional-800 text-white">
                    <Phone className="mr-2 h-4 w-4" /> Contactar
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-professional-600 text-professional-700 hover:bg-professional-50"
                  >
                    <Mail className="mr-2 h-4 w-4" /> Solicitar Presupuesto
                  </Button>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t">
                <h3 className="font-medium mb-4 text-professional-800">Información Profesional</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <ThumbsUp className="h-5 w-5 mr-3 text-professional-600" />
                    <div>
                      <p className="text-sm font-medium text-professional-800">Trabajos Completados</p>
                      <p className="text-sm text-muted-foreground">{professional.completedJobs}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 mr-3 text-professional-600" />
                    <div>
                      <p className="text-sm font-medium text-professional-800">Miembro Desde</p>
                      <p className="text-sm text-muted-foreground">{professional.joinedDate}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 mr-3 text-professional-600" />
                    <div>
                      <p className="text-sm font-medium text-professional-800">Tiempo de Respuesta</p>
                      <p className="text-sm text-muted-foreground">{professional.responseTime}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-2">
          <Tabs defaultValue="about">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger
                value="about"
                className="data-[state=active]:bg-professional-700 data-[state=active]:text-white"
              >
                Acerca de
              </TabsTrigger>
              <TabsTrigger
                value="services"
                className="data-[state=active]:bg-professional-700 data-[state=active]:text-white"
              >
                Servicios y Precios
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="data-[state=active]:bg-professional-700 data-[state=active]:text-white"
              >
                Reseñas
              </TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="mt-6">
              <Card className="border border-gray-100 shadow-card">
                <CardHeader>
                  <CardTitle className="text-professional-800">Acerca de {professional.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{professional.bio}</p>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-4 text-professional-800">Certificaciones y Licencias</h3>
                    <div className="flex flex-wrap gap-2">
                      {professional.certifications?.map((cert, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="flex items-center gap-1 bg-professional-100 text-professional-700"
                        >
                          {index % 2 === 0 ? <HardHat className="h-3 w-3" /> : <Wrench className="h-3 w-3" />}
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="services" className="mt-6">
              <Card className="border border-gray-100 shadow-card">
                <CardHeader>
                  <CardTitle className="text-professional-800">Servicios y Precios</CardTitle>
                  <CardDescription>
                    Precios preestablecidos para servicios comunes. El costo real puede variar según las
                    especificaciones del proyecto.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {Array.isArray(professional.servicesList) ? (
                      professional.servicesList.map((service, index) => (
                        <Card
                          key={index}
                          className="overflow-hidden border border-gray-100 shadow-sm hover:shadow-card transition-shadow"
                        >
                          <CardContent className="p-4">
                            <h3 className="font-medium text-professional-800">
                              {typeof service === "object" && service.name ? service.name : "Servicio"}
                            </h3>
                            <div className="mt-2 flex justify-between">
                              <div className="text-sm">
                                <span className="font-medium text-professional-700">Precio:</span> {service.price}
                              </div>
                              <div className="text-sm">
                                <span className="font-medium text-professional-700">Duración:</span> {service.duration}
                              </div>
                            </div>
                            <Button
                              className="mt-4 w-full bg-professional-700 hover:bg-professional-800 text-white"
                              size="sm"
                            >
                              Reservar Servicio
                            </Button>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <div className="col-span-2 text-center py-4">
                        <p className="text-muted-foreground">No hay información detallada de servicios disponible.</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <Card className="border border-gray-100 shadow-card">
                <CardHeader>
                  <CardTitle className="text-professional-800">Reseñas de Clientes</CardTitle>
                  <CardDescription>Opiniones de clientes anteriores</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {professional.reviews?.map((review) => (
                      <div key={review.id} className="border-b pb-6 last:border-0">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10 border border-gray-100">
                              <AvatarFallback className="bg-professional-100 text-professional-700">
                                {review.author.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-professional-800">{review.author}</div>
                              <div className="text-sm text-muted-foreground">{review.date}</div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? "fill-accent-500 text-accent-500" : "text-muted-foreground"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="mt-2">
                          <Badge variant="outline" className="mb-2 border-professional-200 text-professional-700">
                            {review.project}
                          </Badge>
                          <p className="text-sm text-muted-foreground">{review.comment}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
