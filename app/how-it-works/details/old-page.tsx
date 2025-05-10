import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Star,
  MessageSquare,
  Calendar,
  CheckCircle,
  UserPlus,
  Briefcase,
  Bell,
  Clock,
  FileText,
  DollarSign,
  Shield,
  Award,
  ThumbsUp,
} from "lucide-react"

export default function HowItWorksDetails() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Cómo Funciona ConstruConecta</h1>
        <p className="max-w-[700px] text-muted-foreground text-lg">
          Conectamos a personas que necesitan servicios de construcción con profesionales calificados de manera simple y
          segura.
        </p>
      </div>

      <Tabs defaultValue="clients" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="clients">Para Clientes</TabsTrigger>
          <TabsTrigger value="professionals">Para Profesionales</TabsTrigger>
        </TabsList>

        {/* CONTENIDO PARA CLIENTES */}
        <TabsContent value="clients">
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-6">Encontrá al profesional perfecto para tu proyecto</h2>
              <p className="text-lg text-muted-foreground mb-8">
                ConstruConecta te permite encontrar, comparar y contratar profesionales de la construcción de forma
                rápida y segura.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Search className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>1. Buscá profesionales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Explorá nuestro directorio de profesionales por categoría, ubicación o nombre. Filtrá por
                      calificaciones, trabajos completados o reseñas para encontrar el profesional ideal.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Star className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>2. Compará opciones</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Revisá perfiles detallados, calificaciones, reseñas de clientes anteriores y ejemplos de trabajos.
                      Compará precios y servicios para tomar la mejor decisión.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>3. Contactá y contratá</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Comunicáte directamente con los profesionales, solicitá presupuestos y acordá los detalles del
                      trabajo. Contratá al profesional que mejor se adapte a tus necesidades.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Publicá un trabajo</h2>
              <p className="text-lg text-muted-foreground mb-8">
                ¿No tenés tiempo para buscar? Publicá tu proyecto y dejá que los profesionales te contacten.
              </p>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4">Cómo publicar un trabajo:</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="mr-4 mt-1">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground font-medium">
                              1
                            </div>
                          </div>
                          <div>
                            <p className="font-medium">Describí tu proyecto</p>
                            <p className="text-sm text-muted-foreground">
                              Detallá qué necesitás, cuándo lo necesitás y cualquier requisito específico.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-4 mt-1">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground font-medium">
                              2
                            </div>
                          </div>
                          <div>
                            <p className="font-medium">Establecé tu presupuesto</p>
                            <p className="text-sm text-muted-foreground">
                              Indicá cuánto estás dispuesto a pagar o solicitá presupuestos.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-4 mt-1">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground font-medium">
                              3
                            </div>
                          </div>
                          <div>
                            <p className="font-medium">Recibí propuestas</p>
                            <p className="text-sm text-muted-foreground">
                              Los profesionales interesados te enviarán sus propuestas y presupuestos.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-4 mt-1">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground font-medium">
                              4
                            </div>
                          </div>
                          <div>
                            <p className="font-medium">Seleccioná al profesional</p>
                            <p className="text-sm text-muted-foreground">
                              Elegí la mejor propuesta y coordiná los detalles del trabajo.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-center">
                      <img
                        src="/placeholder.svg?height=300&width=400"
                        alt="Publicar un trabajo"
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center">
                <Link href="/jobs/post">
                  <Button size="lg" className="gap-2">
                    <FileText className="h-5 w-5" />
                    Publicar un Trabajo
                  </Button>
                </Link>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Durante y después del trabajo</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Seguimiento del proyecto</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Seguí el progreso de tu proyecto desde tu panel de control. Mantené toda la comunicación dentro de
                      la plataforma para mayor seguridad.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Confirmá la finalización</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Una vez completado el trabajo a tu satisfacción, confirmá la finalización del proyecto en la
                      plataforma.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Star className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Dejá una reseña</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Compartí tu experiencia dejando una reseña honesta. Tus comentarios ayudan a otros clientes y a
                      mejorar la calidad de los servicios.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="bg-muted p-8 rounded-lg">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold mb-4">¿Listo para comenzar tu proyecto?</h2>
                  <p className="text-muted-foreground mb-6">
                    Encontrá al profesional perfecto para tu proyecto de construcción o remodelación hoy mismo.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/how-it-works">
                      <Button>Explorar Profesionales</Button>
                    </Link>
                    <Link href="/signup">
                      <Button variant="outline">Crear una Cuenta</Button>
                    </Link>
                  </div>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <Shield className="h-24 w-24 text-primary opacity-80" />
                </div>
              </div>
            </section>
          </div>
        </TabsContent>

        {/* CONTENIDO PARA PROFESIONALES */}
        <TabsContent value="professionals">
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-6">Ofrecé tus servicios y hacé crecer tu negocio</h2>
              <p className="text-lg text-muted-foreground mb-8">
                ConstruConecta te conecta con clientes que buscan exactamente tus servicios, ayudándote a expandir tu
                negocio.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <UserPlus className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>1. Creá tu perfil</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Registráte y creá un perfil profesional detallado. Destacá tus habilidades, experiencia,
                      certificaciones y muestra ejemplos de trabajos anteriores.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>2. Definí tus servicios</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Especificá los servicios que ofrecés, establecé tus tarifas y áreas de cobertura. Cuanto más
                      detallada sea tu información, más relevantes serán las oportunidades que recibas.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Bell className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>3. Recibí oportunidades</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Comenzá a recibir solicitudes de clientes interesados en tus servicios. También podés buscar
                      activamente trabajos publicados que coincidan con tus habilidades.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Gestioná tus proyectos</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Administrá todos tus trabajos desde un solo lugar con nuestras herramientas profesionales.
              </p>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex items-center justify-center">
                      <img
                        src="/placeholder.svg?height=300&width=400"
                        alt="Panel de control profesional"
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4">Tu panel de control profesional:</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="mr-4 mt-1">
                            <Clock className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">Gestión de tiempo</p>
                            <p className="text-sm text-muted-foreground">
                              Organizá tu agenda y programá tus trabajos de manera eficiente.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-4 mt-1">
                            <MessageSquare className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">Comunicación centralizada</p>
                            <p className="text-sm text-muted-foreground">
                              Mantené todas las conversaciones con clientes en un solo lugar.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-4 mt-1">
                            <FileText className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">Presupuestos y contratos</p>
                            <p className="text-sm text-muted-foreground">
                              Creá y enviá presupuestos profesionales directamente desde la plataforma.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-4 mt-1">
                            <DollarSign className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">Seguimiento de pagos</p>
                            <p className="text-sm text-muted-foreground">
                              Llevá un registro de pagos pendientes y completados.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Construí tu reputación</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Star className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Reseñas verificadas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Recibí reseñas de clientes reales que han contratado tus servicios. Las buenas calificaciones
                      aumentan tu visibilidad en la plataforma.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Certificaciones y logros</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Destacá tus certificaciones profesionales y logros. Los profesionales verificados reciben más
                      oportunidades y generan mayor confianza.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <ThumbsUp className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Portafolio de trabajos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Mostrá tus mejores trabajos con fotos de antes y después. Un portafolio sólido es clave para
                      atraer nuevos clientes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="bg-muted p-8 rounded-lg">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold mb-4">¿Listo para hacer crecer tu negocio?</h2>
                  <p className="text-muted-foreground mb-6">
                    Únete a miles de profesionales que ya están expandiendo su cartera de clientes con ConstruConecta.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/signup?type=professional">
                      <Button>Registrarme como Profesional</Button>
                    </Link>
                    <Link href="/pricing">
                      <Button variant="outline">Ver Planes y Precios</Button>
                    </Link>
                  </div>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <Briefcase className="h-24 w-24 text-primary opacity-80" />
                </div>
              </div>
            </section>
          </div>
        </TabsContent>
      </Tabs>

      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Preguntas Frecuentes</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>¿Cómo se garantiza la calidad de los profesionales?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Todos los profesionales pasan por un proceso de verificación. Además, el sistema de reseñas y
                calificaciones permite a los clientes evaluar la calidad del trabajo realizado, creando un entorno de
                confianza y transparencia.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>¿Cuánto cuesta usar la plataforma?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Para los clientes, el uso de la plataforma es completamente gratuito. Los profesionales pueden elegir
                entre diferentes planes según sus necesidades, incluyendo un plan básico gratuito y opciones premium con
                más beneficios.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>¿Cómo se manejan los pagos?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Los pagos se acuerdan directamente entre el cliente y el profesional. La plataforma facilita la
                comunicación y el acuerdo de términos, pero no procesa pagos directamente. Recomendamos documentar todos
                los acuerdos a través de la plataforma.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>¿Qué hago si tengo un problema con un trabajo?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Ante cualquier inconveniente, recomendamos primero intentar resolverlo directamente con el profesional a
                través de nuestra plataforma. Si no se llega a una solución, nuestro equipo de soporte está disponible
                para mediar y ayudar a resolver la situación.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
