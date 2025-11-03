"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Home, ChevronRight } from "lucide-react"

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
    playersList: [
      { id: 1, name: "Martín García", number: 7, position: "Delantero", goals: 8, assists: 3 },
      { id: 2, name: "Carlos López", number: 10, position: "Mediapunta", goals: 5, assists: 6 },
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
    playersList: [
      { id: 6, name: "Roberto Martín", number: 7, position: "Delantero", goals: 9, assists: 4 },
      { id: 7, name: "Javier Ruiz", number: 10, position: "Mediapunta", goals: 4, assists: 5 },
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
    playersList: [{ id: 11, name: "Ismael Soto", number: 7, position: "Delantero", goals: 7, assists: 3 }],
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
    playersList: [{ id: 15, name: "Emilio Vázquez", number: 7, position: "Delantero", goals: 7, assists: 2 }],
  },
]

const leagues = ["SUPERLIGA", "PREMIER", "LALIGA", "BUNDESLIGA", "SERIE A", "PRIMERA SÁBADOS"]

export default function TeamsPage() {
  const teamsByLeague = {
    SUPERLIGA: teamsData.filter((t) => t.league === "SUPERLIGA"),
    PREMIER: teamsData.filter((t) => t.league === "PREMIER"),
    LALIGA: teamsData.filter((t) => t.league === "LALIGA"),
    BUNDESLIGA: [],
    "SERIE A": [],
    "PRIMERA SÁBADOS": [],
  }

  const [selectedLeague, setSelectedLeague] = useState("SUPERLIGA")

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-4 px-4 border-b border-border bg-background">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              <Home size={16} />
              <span>Inicio</span>
            </Link>
            <ChevronRight size={16} className="text-muted-foreground" />
            <span className="text-foreground font-semibold">Equipos</span>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Equipos</h1>
          <p className="text-lg text-muted-foreground">Conoce todos los equipos participantes</p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 mb-8">
            {leagues.map((league) => (
              <button
                key={league}
                onClick={() => setSelectedLeague(league)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all text-sm cursor-pointer ${
                  selectedLeague === league ? "bg-primary text-white" : "bg-border text-foreground hover:bg-primary/20"
                }`}
              >
                {league}
              </button>
            ))}
          </div>

          {teamsByLeague[selectedLeague as keyof typeof teamsByLeague]?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamsByLeague[selectedLeague as keyof typeof teamsByLeague].map((team) => (
                <Card
                  key={team.id}
                  className="p-6 hover:shadow-lg transition-all border border-border hover:border-primary/50"
                >
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded">
                      {team.league}
                    </span>
                  </div>

                  <Link
                    href={`/teams/${team.id}`}
                    className="text-xl font-bold text-foreground mb-4 hover:text-primary transition-colors block cursor-pointer"
                  >
                    {team.name}
                  </Link>

                  <div className="space-y-3 mb-6 pb-6 border-b border-border">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Delegado</span>
                      <span className="font-semibold text-foreground">{team.coach}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Jugadores</span>
                      <span className="font-semibold text-foreground">{team.players}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-6">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">{team.points}</p>
                      <p className="text-xs text-muted-foreground">Puntos</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-foreground">
                        {team.gf}-{team.ga}
                      </p>
                      <p className="text-xs text-muted-foreground">GF-GC</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-foreground">{team.wins}W</p>
                      <p className="text-xs text-muted-foreground">
                        {team.draws}D {team.losses}L
                      </p>
                    </div>
                  </div>

                  <Button
                    onClick={() => (window.location.href = `/teams/${team.id}`)}
                    className="w-full bg-primary hover:bg-primary/90 cursor-pointer"
                  >
                    Ver equipo
                  </Button>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No hay equipos en esta liga aún</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
