"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  HardHat,
  Star,
  MapPin,
  ArrowRight,
  Wrench,
  Zap,
  Hammer,
  PaintBucket,
  Wind,
  Scissors,
  Building2,
  Flower2,
  Layers,
  Paintbrush,
  Shield,
  HomeIcon,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ProfessionalProfileImage } from "@/components/professional-profile-image"
import { SearchBar } from "@/components/search-bar"
import { PopularSearches } from "@/components/popular-searches"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"

// Definir los servicios como una constante para mejor mantenimiento
const POPULAR_SERVICES = [
  {
    name: "Plomería",
    count: 245,
    icon: <Wrench className="h-5 w-5 text-professional-600 dark:text-professional-400 mb-2" />,
    path: "plomería",
  },
  {
    name: "Electricidad",
    count: 189,
    icon: <Zap className="h-5 w-5 text-professional-600 dark:text-professional-400 mb-2" />,
    path: "electricidad",
  },
  {
    name: "Carpintería",
    count: 167,
    icon: <Hammer className="h-5 w-5 text-professional-600 dark:text-professional-400 mb-2" />,
    path: "carpintería",
  },
  {
    name: "Pintura",
    count: 203,
    icon: <PaintBucket className="h-5 w-5 text-professional-600 dark:text-professional-400 mb-2" />,
    path: "pintura",
  },
  {
    name: "Aire Acondicionado",
    count: 132,
    icon: <Wind className="h-5 w-5 text-professional-600 dark:text-professional-400 mb-2" />,
    path: "climatización",
  },
  {
    name: "Herrería",
    count: 98,
    icon: <Scissors className="h-5 w-5 text-professional-600 dark:text-professional-400 mb-2" />,
    path: "herrería",
  },
  {
    name: "Albañilería",
    count: 176,
    icon: <Building2 className="h-5 w-5 text-professional-600 dark:text-professional-400 mb-2" />,
    path: "albañilería",
  },
  {
    name: "Jardinería",
    count: 112,
    icon: <Flower2 className="h-5 w-5 text-professional-600 dark:text-professional-400 mb-2" />,
    path: "jardinería",
  },
  {
    name: "Techado",
    count: 87,
    icon: <HomeIcon className="h-5 w-5 text-professional-600 dark:text-professional-400 mb-2" />,
    path: "techado",
  },
  {
    name: "Pisos",
    count: 143,
    icon: <Layers className="h-5 w-5 text-professional-600 dark:text-professional-400 mb-2" />,
    path: "pisos",
  },
  {
    name: "Decoración",
    count: 95,
    icon: <Paintbrush className="h-5 w-5 text-professional-600 dark:text-professional-400 mb-2" />,
    path: "decoración",
  },
  {
    name: "Seguridad",
    count: 76,
    icon: <Shield className="h-5 w-5 text-professional-600 dark:text-professional-400 mb-2" />,
    path: "seguridad",
  },
]

// Definir los profesionales destacados como una constante
const FEATURED_PROFESSIONALS = [
  {
    id: "plomeria-1",
    name: "Carlos Rodríguez",
    profession: "Plomero Matriculado",
    rating: 4.9,
    reviews: 124,
    location: "Buenos Aires, CABA",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "electricidad-1",
    name: "Laura Fernández",
    profession: "Electricista Certificada",
    rating: 4.8,
    reviews: 98,
    location: "Córdoba, Argentina",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "carpinteria-1",
    name: "Miguel Sánchez",
    profession: "Carpintero y Ebanista",
    rating: 4.7,
    reviews: 87,
    location: "Rosario, Santa Fe",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <MobileNav />
            <Link href="/" className="flex items-center gap-2">
              <HardHat className="h-5 w-5 text-professional-700 dark:text-professional-400" />
              <span className="text-lg font-medium text-professional-800 dark:text-professional-300">
                ConstruConecta
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-professional-600 dark:hover:text-professional-400 transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="/jobs/post"
              className="text-sm font-medium text-muted-foreground hover:text-professional-600 dark:hover:text-professional-400 transition-colors"
            >
              Publicar Trabajo
            </Link>
            <Link
              href="/como-funciona"
              className="text-sm font-medium text-muted-foreground hover:text-professional-600 dark:hover:text-professional-400 transition-colors"
            >
              Cómo Funciona
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/login" className="hidden md:block">
              <Button
                variant="ghost"
                className="text-professional-700 hover:bg-accent dark:text-professional-400 dark:hover:bg-accent"
              >
                Ingresar
              </Button>
            </Link>
            <Link href="/signup/options" className="hidden md:block">
              <Button className="bg-professional-700 hover:bg-professional-800 text-white dark:bg-professional-600 dark:hover:bg-professional-700">
                Registrarse
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 bg-muted/50 dark:bg-muted/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center mb-8">
              <h1 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
                Encontrá al profesional adecuado para tu proyecto
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                Conectate con profesionales calificados para tus proyectos de construcción.
              </p>
            </div>

            {/* Nuevo componente de búsqueda avanzada */}
            <SearchBar />

            {/* Componente de búsquedas populares */}
            <div className="max-w-3xl mx-auto">
              <PopularSearches />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 bg-background">
          <div className="container px-4 md:px-6 max-w-6xl">
            <h2 className="text-2xl font-medium mb-6 md:mb-8 text-center">Servicios populares</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
              {POPULAR_SERVICES.map((service, index) => (
                <Link href={`/professionals/directory?service=${encodeURIComponent(service.path)}`} key={index}>
                  <Card className="border border-border hover:border-professional-200 dark:hover:border-professional-800 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group">
                    <CardContent className="p-3 md:p-4 flex flex-col items-center text-center">
                      <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:text-professional-600 dark:group-hover:text-professional-400">
                        {service.icon}
                      </div>
                      <h3 className="text-xs md:text-sm font-medium group-hover:text-professional-700 dark:group-hover:text-professional-400 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-[10px] md:text-xs text-muted-foreground mt-1 group-hover:text-professional-500 dark:group-hover:text-professional-500 transition-colors duration-300">
                        {service.count} prof.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-6 md:mt-8 text-center">
              <Link href="/professionals/directory">
                <Button
                  variant="outline"
                  className="border-professional-200 text-professional-700 hover:bg-professional-50 dark:border-professional-800 dark:text-professional-400 dark:hover:bg-professional-950/50"
                >
                  Ver todas las categorías <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/50 dark:bg-muted/20">
          <div className="container px-4 md:px-6 max-w-5xl">
            <h2 className="text-2xl font-medium mb-6 md:mb-8 text-center">Profesionales destacados</h2>
            <div className="grid grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURED_PROFESSIONALS.map((professional, index) => (
                <Link href={`/professionals/${professional.id}`} key={index}>
                  <Card className="overflow-hidden border border-border hover:border-professional-200 dark:hover:border-professional-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
                    <div className="aspect-square w-full relative flex items-center justify-center bg-muted/50 dark:bg-muted/30 overflow-hidden">
                      <div className="transition-transform duration-500 transform group-hover:scale-105">
                        <ProfessionalProfileImage
                          professionalId={professional.id}
                          name={professional.name}
                          size="xl"
                          className="h-24 w-24 md:h-32 md:w-32"
                        />
                      </div>
                      <div className="absolute top-2 right-2">
                        <Badge
                          variant="secondary"
                          className="flex items-center gap-1 bg-background dark:bg-background/80 text-foreground group-hover:bg-professional-50 dark:group-hover:bg-professional-950/50 transition-colors duration-300"
                        >
                          <Star className="h-3 w-3 fill-yellow-400 stroke-yellow-400" />
                          {professional.rating}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-3 md:p-4">
                      <div>
                        <h3 className="font-medium text-sm md:text-base group-hover:text-professional-700 dark:group-hover:text-professional-400 transition-colors duration-300">
                          {professional.name}
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground group-hover:text-professional-500 dark:group-hover:text-professional-500 transition-colors duration-300">
                          {professional.profession}
                        </p>
                      </div>
                      <div className="mt-1 md:mt-2 flex items-center text-xs md:text-sm text-muted-foreground group-hover:text-professional-500 dark:group-hover:text-professional-500 transition-colors duration-300">
                        <MapPin className="mr-1 h-3 w-3" />
                        {professional.location}
                      </div>
                      <div className="mt-1 md:mt-2 text-xs md:text-sm text-muted-foreground group-hover:text-professional-500 dark:group-hover:text-professional-500 transition-colors duration-300">
                        {professional.reviews} reseñas
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-6 md:mt-8 text-center">
              <Link href="/professionals/directory">
                <Button className="bg-professional-700 hover:bg-professional-800 text-white dark:bg-professional-600 dark:hover:bg-professional-700">
                  Explorar Profesionales
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-16 bg-background">
          <div className="container px-4 md:px-6 max-w-3xl text-center">
            <h2 className="text-2xl font-medium mb-4">¿Listo para comenzar tu proyecto?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Encontrá profesionales verificados, compará presupuestos y contratá con confianza.
            </p>
            <Link href="/signup/options">
              <Button className="bg-professional-700 hover:bg-professional-800 text-white dark:bg-professional-600 dark:hover:bg-professional-700 px-8">
                Registrarse ahora
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-border py-8 bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row max-w-5xl">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © 2025 ConstruConecta. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Términos
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacidad
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contacto
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
