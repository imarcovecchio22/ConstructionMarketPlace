"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ToggleGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  type: "single" | "multiple"
  value?: string | string[]
  defaultValue?: string | string[]
  onValueChange?: (value: string | string[]) => void
  children?: React.ReactNode
}

const ToggleGroupContext = React.createContext<{
  type: "single" | "multiple"
  value?: string | string[]
  onValueChange?: (value: string | string[]) => void
}>({
  type: "single",
})

const ToggleGroup = React.forwardRef<HTMLDivElement, ToggleGroupProps>(
  ({ className, type, value, defaultValue, onValueChange, children, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState<string | string[]>(
      defaultValue || (type === "multiple" ? [] : ""),
    )

    const contextValue = React.useMemo(() => {
      return {
        type,
        value: value !== undefined ? value : internalValue,
        onValueChange: (newValue: string | string[]) => {
          if (value === undefined) {
            setInternalValue(newValue)
          }
          onValueChange?.(newValue)
        },
      }
    }, [type, value, internalValue, onValueChange])

    return (
      <ToggleGroupContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cn(
            "inline-flex h-9 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      </ToggleGroupContext.Provider>
    )
  },
)
ToggleGroup.displayName = "ToggleGroup"

interface ToggleGroupItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  disabled?: boolean
}

const ToggleGroupItem = React.forwardRef<HTMLButtonElement, ToggleGroupItemProps>(
  ({ className, children, value, disabled = false, ...props }, ref) => {
    const { type, value: contextValue, onValueChange } = React.useContext(ToggleGroupContext)

    const isActive =
      type === "single" ? contextValue === value : Array.isArray(contextValue) && contextValue.includes(value)

    const handleClick = () => {
      if (disabled) return

      if (type === "single") {
        onValueChange?.(value)
      } else if (Array.isArray(contextValue)) {
        if (contextValue.includes(value)) {
          onValueChange?.(contextValue.filter((v) => v !== value))
        } else {
          onValueChange?.([...contextValue, value])
        }
      }
    }

    return (
      <button
        ref={ref}
        type="button"
        role="tab"
        aria-selected={isActive}
        data-state={isActive ? "on" : "off"}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          isActive && "bg-background text-foreground shadow-sm",
          className,
        )}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    )
  },
)
ToggleGroupItem.displayName = "ToggleGroupItem"

export { ToggleGroup, ToggleGroupItem }
