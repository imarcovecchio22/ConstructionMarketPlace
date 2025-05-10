import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin } from "lucide-react"
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

interface ProfessionalsListViewProps {
  professionals: Professional[]
  loading?: boolean
}

export function ProfessionalsListView({ professionals, loading = false }: ProfessionalsListViewProps) {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <p>Cargando profesionales...</p>
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
        {professionals.length > 0 ? (
          professionals.map((professional) => (
            <div
              key={professional.id}
              className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-muted/50 transition-colors"
              role="row"
            >
              <div className="col-span-3 flex items-center gap-3" role="cell">
                <ProfessionalAvatar name={professional.name} image={professional.image} size="sm" />
                <div>
                  <div className="font-bold text-professional-800 dark:text-professional-200">{professional.name}</div>
                  <div className="text-sm text-muted-foreground">{professional.profession}</div>
                </div>
              </div>
              <div className="col-span-2" role="cell">
                {Array.isArray(professional.services) &&
                  professional.services.map((service, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="mr-1 border-professional-200 text-professional-700 dark:border-professional-800 dark:text-professional-300"
                    >
                      {formatServiceName(service)}
                    </Badge>
                  ))}
              </div>
              <div
                className="col-span-2 flex items-center"
                role="cell"
                aria-label={`Calificación: ${professional.rating} de 5 estrellas, ${typeof professional.reviews === "number" ? professional.reviews : professional.reviewsCount || 0} reseñas`}
              >
                <Star className="h-4 w-4 text-accent-500 fill-accent-500 mr-1" aria-hidden="true" />
                <span className="font-medium">{professional.rating}</span>
                <span className="text-sm text-muted-foreground ml-1">
                  ({typeof professional.reviews === "number" ? professional.reviews : professional.reviewsCount || 0})
                </span>
              </div>
              <div className="col-span-2" role="cell" aria-label={`${professional.completedJobs} trabajos completados`}>
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
          ))
        ) : (
          <div className="p-8 text-center text-muted-foreground" role="row" aria-live="polite">
            <p role="cell">No se encontraron profesionales que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>
    </div>
  )
}
