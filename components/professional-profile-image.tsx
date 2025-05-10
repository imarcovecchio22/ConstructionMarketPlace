"use client"

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getProfileImage } from "@/lib/profile-image-service"
import { ImageUpload } from "@/components/image-upload"
import { Button } from "@/components/ui/button"
import { Edit2 } from "lucide-react"

interface ProfessionalProfileImageProps {
  professionalId: string
  name: string
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  editable?: boolean
  onImageChange?: (url: string) => void
}

export function ProfessionalProfileImage({
  professionalId,
  name,
  size = "md",
  className = "",
  editable = false,
  onImageChange,
}: ProfessionalProfileImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [isEditing, setIsEditing] = useState<boolean>(false)

  useEffect(() => {
    const loadImage = async () => {
      try {
        const url = await getProfileImage(professionalId)
        setImageUrl(url)
      } catch (error) {
        console.error("Error loading profile image:", error)
      } finally {
        setLoading(false)
      }
    }

    loadImage()
  }, [professionalId])

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

  const handleImageUploaded = async (url: string) => {
    if (url) {
      setImageUrl(url)

      // Llamar a la API para actualizar la imagen en la base de datos
      try {
        const response = await fetch("/api/professionals/update-profile-image", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            professionalId,
            imageUrl: url,
          }),
        })

        if (!response.ok) {
          throw new Error("Error al actualizar la imagen de perfil")
        }

        // Notificar al componente padre si existe el callback
        if (onImageChange) {
          onImageChange(url)
        }
      } catch (error) {
        console.error("Error:", error)
      }
    }

    setIsEditing(false)
  }

  const avatarColor = getAvatarColor(name)
  const sizeClass = sizeClasses[size]

  if (isEditing) {
    return (
      <div className="flex flex-col items-center gap-4">
        <ImageUpload
          onImageUploaded={handleImageUploaded}
          currentImageUrl={imageUrl || undefined}
          folder="professionals"
        />
        <Button variant="outline" size="sm" onClick={() => setIsEditing(false)}>
          Cancelar
        </Button>
      </div>
    )
  }

  return (
    <div className="relative group">
      <Avatar className={`${sizeClass} ${className} border border-gray-100 shadow-sm`}>
        {loading ? (
          <div className={`${sizeClass} animate-pulse bg-gray-200`} />
        ) : (
          <>
            <AvatarImage src={imageUrl || "/placeholder.svg"} alt={name} />
            <AvatarFallback className={`${avatarColor} text-white`}>{getInitials(name)}</AvatarFallback>
          </>
        )}
      </Avatar>

      {editable && !loading && (
        <button
          onClick={() => setIsEditing(true)}
          className="absolute bottom-0 right-0 bg-professional-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Editar imagen de perfil"
        >
          <Edit2 className="h-3 w-3" />
        </button>
      )}
    </div>
  )
}
