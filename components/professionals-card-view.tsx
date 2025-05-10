import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star } from "lucide-react"
import { ProfessionalAvatar } from "@/components/professional-avatar"

interface Professional {
  id: string
  name: string
  profession: string
  services: string[]
  rating: number
  reviews: number
  reviewsCount?: number
  positiveReviews: number
  negativeReviews: number
  completedJobs: number
  location: string
  image?: string
}

interface ProfessionalsCardViewProps {
  professionals: Professional[]
  loading?: boolean
}

export function ProfessionalsCardView({ professionals, loading = false }: ProfessionalsCardViewProps) {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <p>Cargando profesionales...</p>
      </div>
    )
  }

  if (professionals.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground">No se encontraron profesionales para esta categoría.</p>
      </div>
    )
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {professionals.map((professional) => (
        <Link href={`/professionals/${professional.id}`} key={professional.id}>
          <Card className="overflow-hidden transition-all hover:shadow-lg border-2 border-transparent hover:border-yellow-400">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <ProfessionalAvatar name={professional.name} image={professional.image} size="lg" />
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
                  <div className="mt-2 flex flex-wrap gap-1">
                    {Array.isArray(professional.services) &&
                      professional.services.map((service, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-professional-200 text-professional-700 dark:border-professional-800 dark:text-professional-300"
                        >
                          {formatServiceName(service)}
                        </Badge>
                      ))}
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="font-medium">Trabajos:</span> {professional.completedJobs}
                    </div>
                    <div>
                      <span className="font-medium">Reseñas:</span>{" "}
                      {typeof professional.reviews === "number" ? professional.reviews : professional.reviewsCount || 0}
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
      ))}
    </div>
  )
}
