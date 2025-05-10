"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Star, ThumbsUp, ThumbsDown, HardHat } from "lucide-react"
import Link from "next/link"

export default function Reviews() {
  const [activeReview, setActiveReview] = useState<number | null>(null)

  const reviews = [
    {
      id: 1,
      professional: {
        name: "Carlos Rodríguez",
        profession: "Plomero Matriculado",
        image: "/placeholder.svg?height=100&width=100",
      },
      project: "Reparación de Cañerías",
      date: "15 de Marzo, 2025",
      status: "Completado",
      rated: true,
      rating: 5,
      comment:
        "¡Carlos fue fantástico! Llegó a tiempo, diagnosticó rápidamente el problema con nuestra cañería con pérdidas y lo arregló por un precio razonable. Muy profesional y con conocimientos.",
    },
    {
      id: 2,
      professional: {
        name: "Laura Fernández",
        profession: "Electricista Certificada",
        image: "/placeholder.svg?height=100&width=100",
      },
      project: "Cableado Eléctrico",
      date: "5 de Marzo, 2025",
      status: "Completado",
      rated: false,
    },
    {
      id: 3,
      professional: {
        name: "Miguel Sánchez",
        profession: "Carpintero",
        image: "/placeholder.svg?height=100&width=100",
      },
      project: "Muebles de Cocina",
      date: "20 de Febrero, 2025",
      status: "Completado",
      rated: true,
      rating: 4,
      comment:
        "Miguel hizo un excelente trabajo con nuestros muebles de cocina. La calidad del trabajo es excelente. La única razón para 4 estrellas en lugar de 5 es que el proyecto tomó un poco más de tiempo de lo estimado inicialmente.",
    },
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

      <h1 className="text-3xl font-bold mb-6">Mis Reseñas</h1>

      <div className="grid gap-6">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={review.professional.image} alt={review.professional.name} />
                    <AvatarFallback>{review.professional.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold">{review.professional.name}</h3>
                    <p className="text-sm text-muted-foreground">{review.professional.profession}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline">{review.project}</Badge>
                      <span className="text-xs text-muted-foreground flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {review.date}
                      </span>
                    </div>
                  </div>
                </div>

                {review.rated ? (
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm">{review.comment}</p>
                    <div className="flex gap-2 mt-2">
                      <Button variant="outline" size="sm">
                        Editar Reseña
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div>
                    {activeReview === review.id ? (
                      <div className="space-y-4">
                        <div className="flex justify-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <button key={i} className="p-1">
                              <Star
                                className={`h-8 w-8 ${i < 3 ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
                              />
                            </button>
                          ))}
                        </div>
                        <Textarea
                          placeholder="Compartí tu experiencia con este profesional..."
                          className="min-h-[100px]"
                        />
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" onClick={() => setActiveReview(null)}>
                            Cancelar
                          </Button>
                          <Button>Enviar Reseña</Button>
                        </div>
                      </div>
                    ) : (
                      <Button onClick={() => setActiveReview(review.id)}>Dejar una Reseña</Button>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Reseñas Sobre Ti</h2>

      <div className="grid gap-6">
        {[
          {
            id: 1,
            reviewer: {
              name: "Profesional: Carlos Rodríguez",
              image: "/placeholder.svg?height=100&width=100",
            },
            project: "Reparación de Cañerías",
            date: "16 de Marzo, 2025",
            rating: 5,
            comment: "¡Gran cliente! Comunicación clara sobre el problema y pago puntual. Trabajaría nuevamente.",
            helpful: 2,
          },
          {
            id: 2,
            reviewer: {
              name: "Profesional: Miguel Sánchez",
              image: "/placeholder.svg?height=100&width=100",
            },
            project: "Muebles de Cocina",
            date: "21 de Febrero, 2025",
            rating: 5,
            comment:
              "Excelente cliente que sabía exactamente lo que quería. Facilitó mucho el trabajo con buena preparación y comunicación.",
            helpful: 1,
          },
        ].map((review) => (
          <Card key={review.id}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={review.reviewer.image} alt={review.reviewer.name} />
                    <AvatarFallback>{review.reviewer.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold">{review.reviewer.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline">{review.project}</Badge>
                      <span className="text-xs text-muted-foreground flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {review.date}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start md:items-end gap-2">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm">{review.comment}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-xs text-muted-foreground">¿Te resultó útil esta reseña?</span>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ThumbsUp className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ThumbsDown className="h-4 w-4" />
                      </Button>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {review.helpful} personas encontraron esto útil
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
