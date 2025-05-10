"use client"

import { useState } from "react"
import { ImageUpload } from "@/components/image-upload"
import { X, Plus } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProjectGalleryProps {
  images: string[]
  onImagesChange: (images: string[]) => void
  maxImages?: number
  className?: string
}

export function ProjectGallery({ images = [], onImagesChange, maxImages = 6, className }: ProjectGalleryProps) {
  const [showUploader, setShowUploader] = useState(false)

  const handleImageUploaded = (url: string) => {
    if (url) {
      const newImages = [...images, url]
      onImagesChange(newImages)
    }
    setShowUploader(false)
  }

  const removeImage = (index: number) => {
    const newImages = [...images]
    newImages.splice(index, 1)
    onImagesChange(newImages)
  }

  return (
    <div className={cn("space-y-4", className)}>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-square rounded-md overflow-hidden border border-border">
            <Image
              src={image || "/placeholder.svg"}
              alt={`Imagen del proyecto ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <button
              onClick={() => removeImage(index)}
              className="absolute top-2 right-2 bg-destructive text-white p-1 rounded-full"
              aria-label="Eliminar imagen"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}

        {images.length < maxImages && !showUploader && (
          <button
            onClick={() => setShowUploader(true)}
            className="aspect-square rounded-md border-2 border-dashed border-professional-300 dark:border-professional-700 flex items-center justify-center bg-muted/50 hover:bg-muted transition-colors"
            aria-label="Añadir imagen"
          >
            <Plus className="h-8 w-8 text-muted-foreground" />
          </button>
        )}
      </div>

      {showUploader && (
        <div className="p-4 border border-border rounded-md bg-muted/30">
          <h4 className="text-sm font-medium mb-4">Subir nueva imagen</h4>
          <ImageUpload onImageUploaded={handleImageUploaded} folder="projects" className="mx-auto" />
        </div>
      )}

      <p className="text-sm text-muted-foreground">
        {images.length} de {maxImages} imágenes
      </p>
    </div>
  )
}
