"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Upload, X, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { uploadImage, type UploadResult } from "@/lib/blob-service"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ImageUploadProps {
  onImageUploaded: (url: string) => void
  currentImageUrl?: string
  className?: string
  folder?: string
}

export function ImageUpload({ onImageUploaded, currentImageUrl, className, folder = "profiles" }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [previewUrl, setPreviewUrl] = useState<string | null>(currentImageUrl || null)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    try {
      setIsUploading(true)
      setError(null)

      // Crear una URL de vista previa temporal
      const objectUrl = URL.createObjectURL(file)
      setPreviewUrl(objectUrl)

      // Subir la imagen
      const result: UploadResult = await uploadImage(file, folder)

      if (result.success) {
        onImageUploaded(result.url)
      } else {
        setError(result.error || "Error al subir la imagen")
        setPreviewUrl(currentImageUrl || null)
      }
    } catch (err) {
      console.error("Error al procesar la imagen:", err)
      setError("Error al procesar la imagen. Intente nuevamente.")
      setPreviewUrl(currentImageUrl || null)
    } finally {
      setIsUploading(false)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const removeImage = () => {
    setPreviewUrl(null)
    onImageUploaded("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
        aria-label="Subir imagen"
      />

      {previewUrl ? (
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-professional-200 dark:border-professional-700">
          <Image
            src={previewUrl || "/placeholder.svg"}
            alt="Vista previa"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 128px"
          />
          {!isUploading && (
            <button
              onClick={removeImage}
              className="absolute top-0 right-0 bg-destructive text-white p-1 rounded-full"
              aria-label="Eliminar imagen"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      ) : (
        <div
          onClick={triggerFileInput}
          className="w-32 h-32 rounded-full flex items-center justify-center border-2 border-dashed border-professional-300 dark:border-professional-700 bg-muted/50 cursor-pointer hover:bg-muted transition-colors"
          role="button"
          tabIndex={0}
          aria-label="Subir imagen de perfil"
          onKeyDown={(e) => e.key === "Enter" && triggerFileInput()}
        >
          <Upload className="h-8 w-8 text-muted-foreground" />
        </div>
      )}

      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={triggerFileInput}
        disabled={isUploading}
        className="flex items-center gap-2"
      >
        {isUploading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Subiendo...</span>
          </>
        ) : (
          <>
            <Upload className="h-4 w-4" />
            <span>{previewUrl ? "Cambiar imagen" : "Subir imagen"}</span>
          </>
        )}
      </Button>

      {error && <p className="text-sm text-destructive mt-2">{error}</p>}
    </div>
  )
}
