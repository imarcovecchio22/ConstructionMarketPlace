"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send } from "lucide-react"
import { HardHat } from "lucide-react"
import Link from "next/link"

// Añadir el botón de volver al inicio en la parte superior

export default function Messages() {
  const [activeChat, setActiveChat] = useState(1)

  const contacts = [
    {
      id: 1,
      name: "Carlos Rodríguez",
      profession: "Plomero",
      lastMessage: "Estaré allí mañana a las 14:00.",
      time: "10:30",
      unread: true,
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 2,
      name: "Laura Fernández",
      profession: "Electricista",
      lastMessage: "El presupuesto para tu proyecto es de $35.000.",
      time: "Ayer",
      unread: false,
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 3,
      name: "Miguel Sánchez",
      profession: "Carpintero",
      lastMessage: "He terminado la instalación de los muebles.",
      time: "15 Mar",
      unread: false,
      image: "/placeholder.svg?height=50&width=50",
    },
  ]

  const messages = {
    1: [
      {
        id: 1,
        sender: "them",
        text: "¡Hola! Estoy disponible para arreglar tu problema de plomería. ¿Podés describir el problema?",
        time: "9:15",
      },
      {
        id: 2,
        sender: "you",
        text: "Hola Carlos, tengo una cañería con pérdida debajo del fregadero de la cocina. Está goteando lentamente pero constantemente.",
        time: "9:20",
      },
      {
        id: 3,
        sender: "them",
        text: "Entiendo. ¿Hay algún daño por agua visible? ¿Y hace cuánto tiempo que gotea?",
        time: "9:25",
      },
      {
        id: 4,
        sender: "you",
        text: "Lleva goteando unos 2 días. Hay una pequeña mancha de agua en el piso del mueble, pero nada grave todavía.",
        time: "9:30",
      },
      {
        id: 5,
        sender: "them",
        text: "Entendido. Puedo pasar mañana a las 14:00 para arreglarlo. ¿Te parece bien?",
        time: "10:15",
      },
      {
        id: 6,
        sender: "you",
        text: "Sí, eso funciona perfectamente. ¿Cuál es tu tarifa para este tipo de reparación?",
        time: "10:20",
      },
      {
        id: 7,
        sender: "them",
        text: "Para una pérdida simple de cañería, sería entre $15.000-25.000 dependiendo de qué repuestos se necesiten. Sabré mejor cuando lo vea.",
        time: "10:25",
      },
      { id: 8, sender: "them", text: "Estaré allí mañana a las 14:00.", time: "10:30" },
    ],
    2: [
      {
        id: 1,
        sender: "them",
        text: "¡Hola! Recibí tu solicitud sobre el cableado eléctrico en tu oficina en casa.",
        time: "20 Mar, 15:15",
      },
      {
        id: 2,
        sender: "you",
        text: "Sí, necesito agregar algunos tomacorrientes y arreglar algunas luces que parpadean.",
        time: "20 Mar, 15:30",
      },
      {
        id: 3,
        sender: "them",
        text: "Puedo ayudarte con eso. ¿Te gustaría que pase primero para hacer una evaluación?",
        time: "20 Mar, 15:45",
      },
      { id: 4, sender: "you", text: "Eso sería genial. ¿Cuándo estás disponible?", time: "20 Mar, 16:00" },
      {
        id: 5,
        sender: "them",
        text: "Puedo pasar este jueves alrededor de las 10:00. ¿Te funcionaría?",
        time: "20 Mar, 16:15",
      },
      {
        id: 6,
        sender: "you",
        text: "El jueves a las 10:00 me viene bien. ¿Cuánto cobrás por la evaluación?",
        time: "20 Mar, 16:30",
      },
      {
        id: 7,
        sender: "them",
        text: "La evaluación es gratuita. Después de ver el trabajo necesario, te proporcionaré un presupuesto.",
        time: "20 Mar, 16:45",
      },
      { id: 8, sender: "them", text: "El presupuesto para tu proyecto es de $35.000.", time: "Ayer, 14:30" },
    ],
    3: [
      {
        id: 1,
        sender: "you",
        text: "Hola Miguel, estoy interesado en instalar muebles de cocina a medida.",
        time: "10 Mar, 11:00",
      },
      {
        id: 2,
        sender: "them",
        text: "¡Hola! Me encantaría ayudarte con tus muebles de cocina. ¿Tenés algún diseño específico en mente?",
        time: "10 Mar, 11:30",
      },
      {
        id: 3,
        sender: "you",
        text: "Estoy pensando en muebles estilo shaker blancos con algunos frentes de vidrio en los muebles superiores.",
        time: "10 Mar, 12:00",
      },
      {
        id: 4,
        sender: "them",
        text: "Esa es una elección popular y atemporal. Definitivamente puedo trabajar con eso. ¿Te gustaría programar un momento para que vaya a medir tu cocina?",
        time: "10 Mar, 12:30",
      },
      {
        id: 5,
        sender: "you",
        text: "Sí, eso sería genial. ¿Estás disponible en algún momento la próxima semana?",
        time: "10 Mar, 13:00",
      },
      {
        id: 6,
        sender: "them",
        text: "Puedo pasar el próximo martes a las 15:00. ¿Te funciona?",
        time: "10 Mar, 13:30",
      },
      { id: 7, sender: "you", text: "El martes a las 15:00 funciona perfectamente. ¡Gracias!", time: "10 Mar, 14:00" },
      { id: 8, sender: "them", text: "He terminado la instalación de los muebles.", time: "15 Mar, 16:00" },
    ],
  }

  return (
    <div className="flex h-screen flex-col">
      <div className="p-4 border-b">
        <Link href="/">
          <Button variant="outline" className="gap-2">
            <HardHat className="h-4 w-4" />
            Volver al Inicio
          </Button>
        </Link>
      </div>
      <div className="flex flex-1">
        <div className="w-1/3 border-r">
          <div className="p-4 border-b">
            <h1 className="text-xl font-bold">Mensajes</h1>
          </div>
          <div className="overflow-y-auto h-[calc(100vh-65px)]">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className={`p-4 border-b cursor-pointer hover:bg-muted/50 ${activeChat === contact.id ? "bg-muted" : ""}`}
                onClick={() => setActiveChat(contact.id)}
              >
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={contact.image} alt={contact.name} />
                    <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium truncate">{contact.name}</h3>
                      <span className="text-xs text-muted-foreground">{contact.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{contact.profession}</p>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-sm truncate">{contact.lastMessage}</p>
                      {contact.unread && <span className="h-2 w-2 rounded-full bg-primary"></span>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage
                  src={contacts.find((c) => c.id === activeChat)?.image}
                  alt={contacts.find((c) => c.id === activeChat)?.name}
                />
                <AvatarFallback>{contacts.find((c) => c.id === activeChat)?.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-medium">{contacts.find((c) => c.id === activeChat)?.name}</h2>
                <p className="text-sm text-muted-foreground">{contacts.find((c) => c.id === activeChat)?.profession}</p>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages[activeChat].map((message) => (
              <div key={message.id} className={`flex ${message.sender === "you" ? "justify-end" : "justify-start"}`}>
                <div className="flex gap-2 max-w-[80%]">
                  {message.sender === "them" && (
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={contacts.find((c) => c.id === activeChat)?.image}
                        alt={contacts.find((c) => c.id === activeChat)?.name}
                      />
                      <AvatarFallback>{contacts.find((c) => c.id === activeChat)?.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <Card className={`${message.sender === "you" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                      <CardContent className="p-3">
                        <p className="text-sm">{message.text}</p>
                      </CardContent>
                    </Card>
                    <p className="text-xs text-muted-foreground mt-1">{message.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input placeholder="Escribí un mensaje..." className="flex-1" />
              <Button size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
