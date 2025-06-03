import { NextResponse } from "next/server"

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { id } = params

  try {
    const res = await fetch(`http://localhost:5054/api/Professionals/${id}`)

    if (!res.ok) {
      return NextResponse.json({ error: "Profesional no encontrado" }, { status: res.status })
    }

    const professional = await res.json()

    return NextResponse.json(professional)
  } catch (error) {
    console.error("Error al obtener profesional:", error)
    return NextResponse.json({ error: "Error del servidor" }, { status: 500 })
  }
}
