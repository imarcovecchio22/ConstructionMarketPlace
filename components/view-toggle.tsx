"use client"

import { useState, useEffect } from "react"
import { Grid, List } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

interface ViewToggleProps {
  currentView: "cards" | "list"
  onChange: (view: "cards" | "list") => void
  className?: string
}

export function ViewToggle({ currentView, onChange, className = "" }: ViewToggleProps) {
  // Estado local para manejar el valor actual
  const [view, setView] = useState<string>(currentView)

  // Actualizar el estado local cuando cambia la prop
  useEffect(() => {
    setView(currentView)
  }, [currentView])

  // Manejar el cambio de valor
  const handleValueChange = (value: string | string[]) => {
    if (typeof value === "string" && (value === "cards" || value === "list")) {
      setView(value)
      onChange(value as "cards" | "list")
    }
  }

  return (
    <div className={`flex items-center ${className}`}>
      <span className="mr-2 text-sm font-medium text-muted-foreground">Vista:</span>
      <ToggleGroup type="single" value={view} onValueChange={handleValueChange}>
        <ToggleGroupItem
          value="cards"
          aria-label="Vista de tarjetas"
          className="data-[state=on]:bg-professional-100 data-[state=on]:text-professional-700 dark:data-[state=on]:bg-professional-900 dark:data-[state=on]:text-professional-300"
        >
          <Grid className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="list"
          aria-label="Vista de lista"
          className="data-[state=on]:bg-professional-100 data-[state=on]:text-professional-700 dark:data-[state=on]:bg-professional-900 dark:data-[state=on]:text-professional-300"
        >
          <List className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
