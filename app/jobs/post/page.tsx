"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { cn } from "@/lib/utils"
import { HardHat } from "lucide-react"
import Link from "next/link"

export default function PostJob() {
  const [date, setDate] = useState<Date>()

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

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Publicar un Trabajo</h1>
        <Card>
          <CardHeader>
            <CardTitle>Detalles del Trabajo</CardTitle>
            <CardDescription>
              Proporcioná detalles sobre tu proyecto de construcción para encontrar al profesional adecuado.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Título del Trabajo</Label>
              <Input id="title" placeholder="ej., Reparación de Plomería en Baño" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Categoría</Label>
              <Select>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Seleccioná una categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="plumbing">Plomería</SelectItem>
                  <SelectItem value="electrical">Electricidad</SelectItem>
                  <SelectItem value="carpentry">Carpintería</SelectItem>
                  <SelectItem value="painting">Pintura</SelectItem>
                  <SelectItem value="roofing">Techado</SelectItem>
                  <SelectItem value="flooring">Pisos</SelectItem>
                  <SelectItem value="landscaping">Jardinería</SelectItem>
                  <SelectItem value="hvac">Climatización</SelectItem>
                  <SelectItem value="other">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descripción</Label>
              <Textarea
                id="description"
                placeholder="Describí tu proyecto en detalle. Incluí el alcance del trabajo, materiales necesarios y cualquier requisito específico."
                rows={5}
              />
            </div>

            <div className="space-y-2">
              <Label>Cronograma del Proyecto</Label>
              <RadioGroup defaultValue="flexible">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="asap" id="asap" />
                  <Label htmlFor="asap">Lo antes posible</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="specific" id="specific" />
                  <Label htmlFor="specific">Fecha específica</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="flexible" id="flexible" />
                  <Label htmlFor="flexible">Flexible (dentro de unas semanas)</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Fecha Específica (si aplica)</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP", { locale: es }) : "Seleccioná una fecha"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus locale={es} />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget">Rango de Presupuesto (ARS)</Label>
              <Select>
                <SelectTrigger id="budget">
                  <SelectValue placeholder="Seleccioná un rango de presupuesto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-20000">Menos de $20.000</SelectItem>
                  <SelectItem value="20000-50000">$20.000 - $50.000</SelectItem>
                  <SelectItem value="50000-100000">$50.000 - $100.000</SelectItem>
                  <SelectItem value="100000-500000">$100.000 - $500.000</SelectItem>
                  <SelectItem value="500000-plus">$500.000+</SelectItem>
                  <SelectItem value="not-sure">No estoy seguro (necesito presupuesto)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Ubicación</Label>
              <Input id="location" placeholder="Ingresá tu dirección" />
            </div>

            <div className="space-y-2">
              <Label>Fotos (Opcional)</Label>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-muted-foreground/25 p-4 text-center hover:bg-muted">
                  <div className="text-sm text-muted-foreground">Hacé clic para subir</div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Subí fotos del área del proyecto para ayudar a los profesionales a entender mejor el trabajo.
              </p>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox id="terms" />
              <div className="grid gap-1.5 leading-none">
                <Label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Acepto los términos y condiciones
                </Label>
                <p className="text-xs text-muted-foreground">
                  Al publicar este trabajo, aceptás nuestros términos de servicio y política de privacidad.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Publicar Trabajo</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
