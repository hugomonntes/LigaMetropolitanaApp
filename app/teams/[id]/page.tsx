"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

const teamsData = [
  {
    id: 1,
    name: "Dragones FC",
    category: "SUPERLIGA",
    wins: 10,
    draws: 1,
    losses: 1,
    points: 31,
    gf: 32,
    ga: 12,
    players: 12,
    coach: "Juan García",
    league: "SUPERLIGA",
    foundedYear: 2018,
    position: 1,
    playersList: [
      { id: 1, name: "Martín García", number: 7, position: "Delantero", goals: 8, assists: 3 },
      { id: 2, name: "Carlos López", number: 10, position: "Mediapunta", goals: 5, assists: 6 },
      { id: 3, name: "Diego Fernández", number: 9, position: "Delantero", goals: 7, assists: 2 },
      { id: 4, name: "Antonio Rodríguez", number: 4, position: "Defensa", goals: 1, assists: 0 },
      { id: 5, name: "Pablo Sánchez", number: 1, position: "Portero", goals: 0, assists: 0 },
      { id: 17, name: "Lucas Iglesias", number: 3, position: "Defensa", goals: 0, assists: 1 },
      { id: 18, name: "Fernando Ruiz", number: 6, position: "Centrocampista", goals: 1, assists: 2 },
      { id: 19, name: "Miguel Pérez", number: 11, position: "Extremo", goals: 3, assists: 4 },
    ],
  },
  {
    id: 2,
    name: "Titanes de Vigo",
    category: "SUPERLIGA",
    wins: 9,
    draws: 2,
    losses: 1,
    points: 29,
    gf: 28,
    ga: 11,
    players: 11,
    coach: "Carlos López",
    league: "SUPERLIGA",
    foundedYear: 2015,
    position: 2,
    playersList: [
      { id: 6, name: "Roberto Martín", number: 7, position: "Delantero", goals: 9, assists: 4 },
      { id: 7, name: "Javier Ruiz", number: 10, position: "Mediapunta", goals: 4, assists: 5 },
      { id: 8, name: "Felipe Gómez", number: 9, position: "Delantero", goals: 6, assists: 2 },
      { id: 9, name: "Luis Fernández", number: 4, position: "Defensa", goals: 1, assists: 0 },
      { id: 10, name: "Sergio Pérez", number: 1, position: "Portero", goals: 0, assists: 0 },
    ],
  },
  {
    id: 3,
    name: "Rayo Verde",
    category: "PREMIER",
    wins: 8,
    draws: 1,
    losses: 3,
    points: 25,
    gf: 24,
    ga: 15,
    players: 13,
    coach: "Miguel Rodríguez",
    league: "PREMIER",
    foundedYear: 2016,
    position: 1,
    playersList: [
      { id: 11, name: "Ismael Soto", number: 7, position: "Delantero", goals: 7, assists: 3 },
      { id: 12, name: "Ángel Torres", number: 10, position: "Mediapunta", goals: 3, assists: 4 },
    ],
  },
  {
    id: 4,
    name: "Andes FC",
    category: "PREMIER",
    wins: 7,
    draws: 2,
    losses: 3,
    points: 23,
    gf: 21,
    ga: 16,
    players: 12,
    coach: "David Martínez",
    league: "PREMIER",
    foundedYear: 2017,
    position: 2,
    playersList: [{ id: 13, name: "Rubén López", number: 7, position: "Delantero", goals: 6, assists: 2 }],
  },
  {
    id: 5,
    name: "Vigo City",
    category: "LALIGA",
    wins: 9,
    draws: 1,
    losses: 2,
    points: 28,
    gf: 26,
    ga: 13,
    players: 14,
    coach: "Pedro Sánchez",
    league: "LALIGA",
    foundedYear: 2014,
    position: 1,
    playersList: [{ id: 14, name: "Álvaro Santos", number: 7, position: "Delantero", goals: 8, assists: 3 }],
  },
  {
    id: 6,
    name: "Sporting Vigo",
    category: "LALIGA",
    wins: 8,
    draws: 2,
    losses: 2,
    points: 26,
    gf: 23,
    ga: 12,
    players: 12,
    coach: "Antonio González",
    league: "LALIGA",
    foundedYear: 2019,
    position: 2,
    playersList: [{ id: 15, name: "Emilio Vázquez", number: 7, position: "Delantero", goals: 7, assists: 2 }],
  },
]

export default function TeamProfilePage({ params }: { params: { id: string } }) {
  const teamId = Number.parseInt(params.id)
  const team = teamsData.find((t) => t.id === teamId)
  const [selectedPlayer, setSelectedPlayer] = useState(null)

  const isDelegate = true

  if (!team) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold text-foreground">Equipo no encontrado</h1>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  const footy7Formation = [
    [team.playersList[0]?.number || "1"], // Portero
    [team.playersList[1]?.number || "2", team.playersList[2]?.number || "3", team.playersList[3]?.number || "4"], // Defensa
    [team.playersList[4]?.number || "5", team.playersList[5]?.number || "6"], // Centrocampistas
    [team.playersList[6]?.number || "7"], // Delantero
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-4 border-b border-border bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Inicio
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/teams" className="hover:text-foreground transition-colors">
              Equipos
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{team.name}</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/20 to-secondary/20 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="w-40 h-40 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
              <div className="text-center">
                <p className="text-white text-sm">Escudo</p>
                <p className="text-white text-4xl font-bold mt-2">{team.name.split(" ")[0][0]}</p>
              </div>
            </div>

            <div className="flex-grow">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">{team.name}</h1>
              <p className="text-lg text-muted-foreground mb-4">{team.league}</p>
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-4 py-2 bg-primary text-white font-semibold rounded">Delegado: {team.coach}</span>
                <span className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded">
                  Fundado: {team.foundedYear}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Stats */}
      <section className="py-8 md:py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">Estadísticas Generales</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-6 text-center border border-border">
              <p className="text-4xl font-bold text-primary mb-2">{team.position}º</p>
              <p className="text-sm text-muted-foreground">Posición</p>
            </Card>
            <Card className="p-6 text-center border border-border">
              <p className="text-4xl font-bold text-primary mb-2">{team.points}</p>
              <p className="text-sm text-muted-foreground">Puntos</p>
            </Card>
            <Card className="p-6 text-center border border-border">
              <p className="text-4xl font-bold text-primary mb-2">
                {team.gf}-{team.ga}
              </p>
              <p className="text-sm text-muted-foreground">GF - GC</p>
            </Card>
            <Card className="p-6 text-center border border-border">
              <p className="text-4xl font-bold text-primary mb-2">
                {team.wins}-{team.draws}-{team.losses}
              </p>
              <p className="text-sm text-muted-foreground">V-E-D</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Info */}
      <section className="py-8 md:py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">Información del Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 border border-border">
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">LIGA</p>
                  <p className="font-semibold text-foreground text-lg">{team.league}</p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-xs text-muted-foreground mb-1">DELEGADO</p>
                  <p className="font-semibold text-foreground text-lg">{team.coach}</p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-xs text-muted-foreground mb-1">AÑO DE CREACIÓN</p>
                  <p className="font-semibold text-foreground text-lg">{team.foundedYear}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border border-border">
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">NÚMERO DE JUGADORES</p>
                  <p className="font-semibold text-foreground text-lg">{team.players}</p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-xs text-muted-foreground mb-1">DIFERENCIA DE GOLES</p>
                  <p className="font-semibold text-foreground text-lg">+{team.gf - team.ga}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Football Field Formation - Fútbol 7 */}
      <section className="py-8 md:py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">Alineación Inicial (Fútbol 7)</h2>

          <div className="relative w-full bg-gradient-to-b from-green-600 to-green-700 rounded-lg overflow-hidden aspect-[4/3] mt-6 max-w-2xl mx-auto">
            {/* Field lines */}
            <div className="absolute inset-0">
              {/* Center line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/30 transform -translate-x-1/2" />

              {/* Center circle */}
              <div className="absolute left-1/2 top-1/2 w-16 h-16 border-2 border-white/30 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* Player positions - 7 players for fútbol 7 */}
            <div className="absolute inset-0 flex flex-col justify-around px-4 py-4">
              {footy7Formation.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-around w-full">
                  {row.map((playerNumber, colIndex) => (
                    <div
                      key={`${rowIndex}-${colIndex}`}
                      className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xs border-2 border-white shadow-lg"
                    >
                      {playerNumber}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-4">Formación del equipo para fútbol 7</p>
        </div>
      </section>

      {/* Players Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">Jugadores del Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {team.playersList.map((player) => (
              <button
                key={player.id}
                onClick={() => setSelectedPlayer(player)}
                className="flex items-center gap-4 p-4 bg-muted rounded-lg hover:bg-primary/10 transition-all border border-border hover:border-primary/50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {player.number}
                </div>
                <div className="flex-grow text-left">
                  <p className="font-bold text-foreground text-lg">{player.name}</p>
                  <p className="text-sm text-muted-foreground">{player.position}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary text-lg">{player.goals}</p>
                  <p className="text-xs text-muted-foreground">Goles</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Player Detail Modal */}
      {selectedPlayer && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md border border-border">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">{selectedPlayer.name}</h2>
              <button
                onClick={() => setSelectedPlayer(null)}
                className="text-muted-foreground hover:text-foreground text-2xl"
              >
                ×
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="w-full h-48 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <span className="text-7xl font-bold text-white">{selectedPlayer.number}</span>
                  <p className="text-white text-sm mt-2">Foto de Perfil</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-3 bg-primary/10 rounded">
                  <p className="text-2xl font-bold text-primary">{selectedPlayer.goals}</p>
                  <p className="text-xs text-muted-foreground">Goles</p>
                </div>
                <div className="text-center p-3 bg-primary/10 rounded">
                  <p className="text-2xl font-bold text-primary">{selectedPlayer.assists}</p>
                  <p className="text-xs text-muted-foreground">Asistencias</p>
                </div>
                <div className="text-center p-3 bg-primary/10 rounded">
                  <p className="text-xl font-bold text-primary">{selectedPlayer.number}</p>
                  <p className="text-xs text-muted-foreground">Dorsal</p>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Posición</span>
                  <span className="font-semibold">{selectedPlayer.position}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Equipo</span>
                  <span className="font-semibold">{team.name}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      <Footer />
    </main>
  )
}
