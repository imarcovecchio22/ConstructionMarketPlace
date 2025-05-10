import { put, del, list } from "@vercel/blob"
import { nanoid } from "nanoid"

export type UploadResult = {
  url: string
  success: boolean
  error?: string
}

/**
 * Sube una imagen al blob store
 * @param file Archivo a subir
 * @param folder Carpeta donde se guardará (ej: 'profiles', 'projects')
 * @returns Objeto con la URL de la imagen y estado de éxito
 */
export async function uploadImage(file: File, folder = "profiles"): Promise<UploadResult> {
  try {
    // Validar el tipo de archivo
    if (!file.type.startsWith("image/")) {
      return {
        url: "",
        success: false,
        error: "El archivo debe ser una imagen",
      }
    }

    // Validar el tamaño del archivo (máximo 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return {
        url: "",
        success: false,
        error: "La imagen no debe superar los 5MB",
      }
    }

    // Generar un nombre único para el archivo
    const fileExtension = file.name.split(".").pop()
    const fileName = `${folder}/${nanoid()}.${fileExtension}`

    // Subir el archivo a Vercel Blob
    const { url } = await put(fileName, file, {
      access: "public",
      addRandomSuffix: false,
    })

    return {
      url,
      success: true,
    }
  } catch (error) {
    console.error("Error al subir la imagen:", error)
    return {
      url: "",
      success: false,
      error: "Error al subir la imagen. Intente nuevamente.",
    }
  }
}

/**
 * Elimina una imagen del blob store
 * @param url URL de la imagen a eliminar
 * @returns Estado de éxito
 */
export async function deleteImage(url: string): Promise<boolean> {
  try {
    await del(url)
    return true
  } catch (error) {
    console.error("Error al eliminar la imagen:", error)
    return false
  }
}

/**
 * Lista todas las imágenes en una carpeta
 * @param folder Carpeta a listar (ej: 'profiles', 'projects')
 * @returns Lista de URLs de imágenes
 */
export async function listImages(folder = "profiles"): Promise<string[]> {
  try {
    const { blobs } = await list({ prefix: folder })
    return blobs.map((blob) => blob.url)
  } catch (error) {
    console.error("Error al listar imágenes:", error)
    return []
  }
}
