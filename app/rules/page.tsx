"use client"

import Header from "@/components/header"
import { ChevronRight, Home } from "lucide-react"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function RulesPage() {
  const rules = [
    {
      category: "Jugadores",
      items: [
        "Máximo 7 jugadores en cancha por equipo",
        "Mínimo 3 jugadores en cancha (en caso contrario se pierde el partido)",
        "Cada equipo debe tener un portero",
        "Máximo 5 cambios durante el partido",
      ],
    },
    {
      category: "Duración",
      items: [
        "Dos tiempos de 20 minutos cada uno",
        "5 minutos de descanso entre tiempos",
        "Tiempo muerto de 1 minuto por equipo y por tiempo",
        "El árbitro puede añadir tiempo según considere",
      ],
    },
    {
      category: "Balón",
      items: [
        "Balón de fútbol de tamaño 4 o 5",
        "Presión reglamentaria según especificaciones FIFA",
        "Si el balón sale del campo, se reanuda con saque de banda",
      ],
    },
    {
      category: "Faltas y Sanciones",
      items: [
        "Falta directa: disparo directo a portería",
        "Falta indirecta: pase a un compañero",
        "Tarjeta amarilla: comportamiento antideportivo",
        "Tarjeta roja: expulsión inmediata",
        "Penalti: falta dentro del área",
      ],
    },
    {
      category: "Ofside",
      items: [
        "No hay regla de fuera de juego en fútbol 7",
        "Los jugadores pueden estar delante del balón en todo momento",
      ],
    },
    {
      category: "Tanteo y Victorias",
      items: [
        "Victoria: 3 puntos",
        "Empate: 1 punto",
        "Derrota: 0 puntos",
        "Gol: 1 punto en la clasificación de goleadores",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <nav className="flex items-center gap-2 mb-8 text-sm">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <Home size={18} />
            <span>Inicio</span>
          </Link>
          <ChevronRight size={18} className="text-muted-foreground" />
          <span className="text-muted-foreground">Reglas de Juego</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Reglas de Juego</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Conoce las normas oficiales de la Liga Metropolitana de Fútbol 7
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {rules.map((ruleGroup, idx) => (
            <Card key={idx} className="p-8 border-2 border-primary/20 hover:border-primary/50 transition-colors">
              <h2 className="text-2xl font-bold text-primary mb-6">{ruleGroup.category}</h2>
              <ul className="space-y-4">
                {ruleGroup.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex gap-3 items-start">
                    <span className="text-secondary font-bold mt-1">•</span>
                    <span className="text-foreground text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Información adicional */}
        <Card className="mt-12 p-8 bg-primary/5 border-2 border-primary/30">
          <h2 className="text-2xl font-bold text-foreground mb-4">Información Importante</h2>
          <div className="space-y-3 text-foreground">
            <p>
              <strong>Protocolo de Accidentes:</strong> Descarga el protocolo oficial de la liga en caso de lesiones o
              incidentes.
            </p>
            <p>
              <strong>Normativa de Competición:</strong> Consulta la normativa completa de la temporada actual.
            </p>
            <p>
              <strong>Premios en Metálico:</strong> Campeones: 300€ | Subcampeones: 200€ | Se abonan en inscripción
              temporada siguiente.
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
