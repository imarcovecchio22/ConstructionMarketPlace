import { NextResponse } from "next/server"
import { professionalProfiles } from "@/app/data/professionals"

// Definimos la estructura de la solicitud
interface UpdateImageRequest {
  professionalId: string
  imageUrl: string
}

export async function POST(request: Request) {
  try {
    const { professionalId, imageUrl } = (await request.json()) as UpdateImageRequest

    // Verificamos que los datos sean válidos
    if (!professionalId) {
      return NextResponse.json({ error: "Se requiere professionalId" }, { status: 400 })
    }

    // Verificamos que el profesional exista
    const professional = professionalProfiles.find((p) => p.id === professionalId)
    if (!professional) {
      return NextResponse.json({ error: "Profesional no encontrado" }, { status: 404 })
    }

    // En un entorno real, aquí actualizaríamos la base de datos Neon
    // const sql = neon(process.env.DATABASE_URL!)
    // await sql`
    //   UPDATE professionals
    //   SET image_url = ${imageUrl}, updated_at = CURRENT_TIMESTAMP
    //   WHERE id = ${professionalId}
    // `

    // Como estamos trabajando con datos estáticos, simulamos la actualización
    // En un entorno real, esto se haría en la base de datos
    professional.image = imageUrl

    return NextResponse.json({
      success: true,
      message: `Imagen actualizada para ${professional.name}`,
      data: {
        professionalId,
        imageUrl,
        name: professional.name,
      },
    })
  } catch (error) {
    console.error("Error updating profile image:", error)
    return NextResponse.json({ error: "Error al actualizar la imagen de perfil" }, { status: 500 })
  }
}
