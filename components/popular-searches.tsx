import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Search, TrendingUp } from "lucide-react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const popularSearches = [
  { query: "Plomero urgente", count: 1245 },
  { query: "Electricista matriculado", count: 987 },
  { query: "Pintor de interiores", count: 876 },
  { query: "Carpintero muebles a medida", count: 765 },
  { query: "Instalación aire acondicionado", count: 654 },
  { query: "Reparación de techos", count: 543 },
]

export function PopularSearches() {
  return (
    <div className="mt-4">
      <div className="flex items-center gap-2 mb-3">
        <TrendingUp className="h-4 w-4 text-professional-600 dark:text-professional-400" aria-hidden="true" />
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Búsquedas populares</h3>
      </div>

      {/* Versión móvil con scroll horizontal */}
      <ScrollArea
        className="w-full whitespace-nowrap pb-4 md:hidden"
        aria-label="Búsquedas populares (desliza horizontalmente)"
      >
        <div className="flex space-x-2">
          {popularSearches.map((item, index) => (
            <Link
              href={`/professionals/directory?query=${encodeURIComponent(item.query)}`}
              key={index}
              className="flex-none focus:outline-none focus:ring-2 focus:ring-professional-500 focus:ring-offset-2 dark:focus:ring-professional-400 rounded-md"
              aria-label={`Buscar ${item.query}`}
            >
              <Badge
                variant="outline"
                className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors whitespace-nowrap"
              >
                <Search className="h-3 w-3 mr-1 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                {item.query}
              </Badge>
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      {/* Versión desktop con wrap */}
      <div className="hidden md:flex flex-wrap gap-2" role="list" aria-label="Búsquedas populares">
        {popularSearches.map((item, index) => (
          <Link
            href={`/professionals/directory?query=${encodeURIComponent(item.query)}`}
            key={index}
            className="focus:outline-none focus:ring-2 focus:ring-professional-500 focus:ring-offset-2 dark:focus:ring-professional-400 rounded-md"
            aria-label={`Buscar ${item.query}`}
            role="listitem"
          >
            <Badge
              variant="outline"
              className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors"
            >
              <Search className="h-3 w-3 mr-1 text-gray-400 dark:text-gray-500" aria-hidden="true" />
              {item.query}
            </Badge>
          </Link>
        ))}
      </div>
    </div>
  )
}
