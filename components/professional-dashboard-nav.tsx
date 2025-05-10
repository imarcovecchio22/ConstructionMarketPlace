"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, FileText, Calendar, MessageSquare, Star, Settings, LogOut, User, HardHat } from "lucide-react"

export function ProfessionalDashboardNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Abrir menú</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <div className="flex h-16 items-center border-b px-4">
            <div className="flex items-center gap-2 font-semibold">
              <User className="h-5 w-5" />
              <span>Carlos Rodríguez</span>
            </div>
          </div>
          <nav className="grid gap-2 p-4">
            <Link href="/dashboard/professional" onClick={() => setOpen(false)}>
              <Button
                variant={isActive("/dashboard/professional") ? "default" : "ghost"}
                className="w-full justify-start"
              >
                <FileText className="mr-2 h-4 w-4" />
                Panel Principal
              </Button>
            </Link>
            <Link href="/dashboard/professional/jobs" onClick={() => setOpen(false)}>
              <Button
                variant={isActive("/dashboard/professional/jobs") ? "default" : "ghost"}
                className="w-full justify-start"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Mis Trabajos
              </Button>
            </Link>
            <Link href="/dashboard/messages" onClick={() => setOpen(false)}>
              <Button variant={isActive("/dashboard/messages") ? "default" : "ghost"} className="w-full justify-start">
                <MessageSquare className="mr-2 h-4 w-4" />
                Mensajes
              </Button>
            </Link>
            <Link href="/dashboard/reviews" onClick={() => setOpen(false)}>
              <Button variant={isActive("/dashboard/reviews") ? "default" : "ghost"} className="w-full justify-start">
                <Star className="mr-2 h-4 w-4" />
                Reseñas
              </Button>
            </Link>
            <Link href="/professionals/edit-profile" onClick={() => setOpen(false)}>
              <Button
                variant={isActive("/professionals/edit-profile") ? "default" : "ghost"}
                className="w-full justify-start"
              >
                <Settings className="mr-2 h-4 w-4" />
                Editar Perfil
              </Button>
            </Link>
            <div className="border-t my-2"></div>
            <Link href="/" onClick={() => setOpen(false)}>
              <Button variant="outline" className="w-full justify-start gap-2">
                <HardHat className="h-4 w-4" />
                Volver al Inicio
              </Button>
            </Link>
            <Link href="/logout" onClick={() => setOpen(false)}>
              <Button variant="ghost" className="w-full justify-start text-red-500">
                <LogOut className="mr-2 h-4 w-4" />
                Cerrar Sesión
              </Button>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
