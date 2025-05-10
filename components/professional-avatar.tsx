import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ProfessionalAvatarProps {
  name: string
  image?: string
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

export function ProfessionalAvatar({ name, image, size = "md", className = "" }: ProfessionalAvatarProps) {
  // Obtenemos las iniciales del nombre
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part.charAt(0))
      .join("")
      .toUpperCase()
  }

  // Determinamos el tamaño del avatar
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
    xl: "h-32 w-32",
  }

  // Generamos un color de fondo basado en el nombre
  const getAvatarColor = (name: string) => {
    const colors = [
      "bg-professional-600",
      "bg-professional-700",
      "bg-professional-800",
      "bg-accent-500",
      "bg-accent-600",
      "bg-accent-700",
    ]

    // Usar el nombre para seleccionar un color
    const colorIndex = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length
    return colors[colorIndex]
  }

  const avatarColor = getAvatarColor(name)
  const sizeClass = sizeClasses[size]

  return (
    <Avatar className={`${sizeClass} ${className} border border-gray-100 shadow-sm`}>
      <AvatarImage src={image || "/placeholder.svg"} alt={name} />
      <AvatarFallback className={`${avatarColor} text-white`}>{getInitials(name)}</AvatarFallback>
    </Avatar>
  )
}
