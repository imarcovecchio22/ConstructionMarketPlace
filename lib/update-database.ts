import { neon } from "@neondatabase/serverless"
import { DATABASE_URL } from "@/lib/env"

interface UpdateProfileImageParams {
  professionalId: string
  imageUrl: string
}

export async function updateProfileImage({ professionalId, imageUrl }: UpdateProfileImageParams): Promise<boolean> {
  try {
    // Conectamos a la base de datos Neon
    const sql = neon(DATABASE_URL)

    // Actualizamos la imagen de perfil
    await sql`
      UPDATE professionals 
      SET image_url = ${imageUrl} 
      WHERE id = ${professionalId}
    `

    return true
  } catch (error) {
    console.error("Error updating profile image in database:", error)
    return false
  }
}
