"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { HardHat, Menu, Home, FileText, Info, User, LogIn, Search, X, Moon, Sun } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useTheme } from "@/contexts/theme-context"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const searchInputRef = useRef<HTMLInputElement>(null)
  const firstFocusableRef = useRef<HTMLButtonElement>(null)
  const lastFocusableRef = useRef<HTMLButtonElement>(null)

  // Manejar el enfoque cuando se abre la búsqueda
  useEffect(() => {
    if (searchOpen) {
      // Enfocar el campo de búsqueda cuando se abre
      setTimeout(() => {
        searchInputRef.current?.focus()
      }, 100)
    }
  }, [searchOpen])

  // Implementar trampa de foco para el modal de búsqueda
  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (searchOpen) {
      if (e.key === "Escape") {
        setSearchOpen(false)
        return
      }

      if (e.key === "Tab") {
        // Si estamos en el último elemento y presionamos Tab, volver al primero
        if (document.activeElement === lastFocusableRef.current && !e.shiftKey) {
          e.preventDefault()
          firstFocusableRef.current?.focus()
        }

        // Si estamos en el primer elemento y presionamos Shift+Tab, ir al último
        if (document.activeElement === firstFocusableRef.current && e.shiftKey) {
          e.preventDefault()
          lastFocusableRef.current?.focus()
        }
      }
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/professionals/directory?query=${encodeURIComponent(searchQuery)}`)
      setSearchOpen(false)
      setSearchQuery("")
    }
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <>
      <div className="flex items-center gap-2 md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="relative"
          aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        >
          <Sun
            className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            aria-hidden="true"
          />
          <Moon
            className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            aria-hidden="true"
          />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSearchOpen(!searchOpen)}
          className="relative"
          aria-label={searchOpen ? "Cerrar búsqueda" : "Abrir búsqueda"}
          aria-expanded={searchOpen}
          aria-controls="mobile-search-panel"
        >
          {searchOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Search className="h-5 w-5" aria-hidden="true" />
          )}
        </Button>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Abrir menú de navegación"
              aria-expanded={open}
              aria-controls="mobile-nav-menu"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-background text-foreground w-[85vw] max-w-sm"
            id="mobile-nav-menu"
            aria-label="Menú de navegación"
          >
            <div className="flex items-center gap-2 mb-8">
              <HardHat className="h-5 w-5 text-professional-700 dark:text-professional-400" aria-hidden="true" />
              <span className="text-lg font-medium">ConstruConecta</span>
            </div>
            <nav className="flex flex-col gap-4" aria-label="Navegación principal">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 py-2 text-base hover:text-professional-600 dark:hover:text-professional-400 transition-colors focus:outline-none focus:ring-2 focus:ring-professional-500 focus:ring-offset-2 dark:focus:ring-professional-400 rounded-md"
              >
                <Home className="h-5 w-5" aria-hidden="true" />
                Inicio
              </Link>
              <Link
                href="/jobs/post"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 py-2 text-base hover:text-professional-600 dark:hover:text-professional-400 transition-colors focus:outline-none focus:ring-2 focus:ring-professional-500 focus:ring-offset-2 dark:focus:ring-professional-400 rounded-md"
              >
                <FileText className="h-5 w-5" aria-hidden="true" />
                Publicar Trabajo
              </Link>
              <Link
                href="/como-funciona"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 py-2 text-base hover:text-professional-600 dark:hover:text-professional-400 transition-colors focus:outline-none focus:ring-2 focus:ring-professional-500 focus:ring-offset-2 dark:focus:ring-professional-400 rounded-md"
              >
                <Info className="h-5 w-5" aria-hidden="true" />
                Cómo Funciona
              </Link>
              <Link
                href="/professionals/directory"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 py-2 text-base hover:text-professional-600 dark:hover:text-professional-400 transition-colors focus:outline-none focus:ring-2 focus:ring-professional-500 focus:ring-offset-2 dark:focus:ring-professional-400 rounded-md"
              >
                <User className="h-5 w-5" aria-hidden="true" />
                Directorio de Profesionales
              </Link>

              <div className="border-t border-border my-4" role="separator"></div>

              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 py-2 text-base hover:text-professional-600 dark:hover:text-professional-400 transition-colors focus:outline-none focus:ring-2 focus:ring-professional-500 focus:ring-offset-2 dark:focus:ring-professional-400 rounded-md"
              >
                <LogIn className="h-5 w-5" aria-hidden="true" />
                Ingresar
              </Link>
              <Link href="/signup" onClick={() => setOpen(false)}>
                <Button className="w-full bg-professional-700 hover:bg-professional-800 text-white dark:bg-professional-600 dark:hover:bg-professional-700 mt-2 focus:ring-2 focus:ring-professional-500 focus:ring-offset-2 dark:focus:ring-professional-400">
                  Registrarse
                </Button>
              </Link>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                <span className="text-sm">Cambiar tema</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleTheme}
                  className="gap-2 focus:ring-2 focus:ring-professional-500 focus:ring-offset-2 dark:focus:ring-professional-400"
                  aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="h-4 w-4" aria-hidden="true" /> Claro
                    </>
                  ) : (
                    <>
                      <Moon className="h-4 w-4" aria-hidden="true" /> Oscuro
                    </>
                  )}
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Barra de búsqueda móvil */}
      {searchOpen && (
        <div
          id="mobile-search-panel"
          className="fixed inset-0 z-50 bg-background p-4 animate-in slide-in-from-top md:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="search-heading"
          onKeyDown={handleSearchKeyDown}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 id="search-heading" className="text-lg font-medium">
              Buscar
            </h2>
            <Button
              ref={lastFocusableRef}
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(false)}
              aria-label="Cerrar búsqueda"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
          <form onSubmit={handleSearch} className="space-y-4" role="search">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                ref={searchInputRef}
                type="search"
                placeholder="¿Qué servicio necesitás?"
                className="w-full pl-10 pr-4 py-6 border border-input rounded-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                aria-label="Buscar servicios"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label="Limpiar búsqueda"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              )}
            </div>
            <Button
              ref={firstFocusableRef}
              type="submit"
              className="w-full bg-professional-700 hover:bg-professional-800 text-white dark:bg-professional-600 dark:hover:bg-professional-700 py-6 focus:ring-2 focus:ring-professional-500 focus:ring-offset-2 dark:focus:ring-professional-400"
              aria-label="Buscar profesionales"
            >
              <Search className="h-5 w-5 mr-2" aria-hidden="true" />
              <span>Buscar Profesionales</span>
            </Button>
          </form>
        </div>
      )}
    </>
  )
}
