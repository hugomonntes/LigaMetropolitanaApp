"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import { ChevronRight, Home } from "lucide-react"

export default function ProfilePage() {
  // Mock user data
  const user = {
    name: "Carlos García",
    team: "Dragones FC",
    number: 7,
    position: "Delantero",
    goals: 24,
    assists: 8,
    matches: 16,
    yellowCards: 2,
    redCards: 0,
    joinDate: "2024-01-15",
    league: "SUPERLIGA",
  }

  const recentMatches = [
    { id: 1, opponent: "Titanes de Vigo", score: "3-2", date: "Mar 15, 2025", role: "Gol", goals: 2 },
    { id: 2, opponent: "Halcones Unidos", score: "2-1", date: "Mar 8, 2025", role: "Gol", goals: 1 },
    { id: 3, opponent: "Fuego Metropolitano", score: "4-1", date: "Mar 1, 2025", role: "Asistencia", goals: 0 },
    { id: 4, opponent: "Rayo Verde", score: "1-2", date: "Feb 22, 2025", role: "Jugó", goals: 0 },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-6 md:py-8 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Home size={16} />
              <span>Inicio</span>
            </Link>
            <ChevronRight size={16} className="text-muted-foreground" />
            <span className="text-foreground font-semibold">Mi Perfil</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-4 md:p-8 border border-primary/20 mb-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-primary rounded-full flex items-center justify-center text-white font-bold text-3xl sm:text-4xl flex-shrink-0">
                {user.number}
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1 break-words">
                  {user.name}
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground mb-2">{user.team}</p>
                <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full">{user.position}</span>
                  <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full">{user.league}</span>
                </div>
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
              Editar Perfil
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-12">
          <Card className="p-4 md:p-6 border-2 border-primary/20 hover:border-primary/50 transition-colors">
            <div className="text-xs md:text-sm text-muted-foreground mb-2">Goles</div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{user.goals}</div>
            <div className="text-xs text-muted-foreground">en {user.matches} partidos</div>
          </Card>

          <Card className="p-4 md:p-6 border-2 border-secondary/20 hover:border-secondary/50 transition-colors">
            <div className="text-xs md:text-sm text-muted-foreground mb-2">Asistencias</div>
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">{user.assists}</div>
            <div className="text-xs text-muted-foreground">pases</div>
          </Card>

          <Card className="p-4 md:p-6 border-2 border-foreground/20 hover:border-foreground/50 transition-colors">
            <div className="text-xs md:text-sm text-muted-foreground mb-2">Partidos</div>
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{user.matches}</div>
            <div className="text-xs text-muted-foreground">jugados</div>
          </Card>

          <Card className="p-4 md:p-6 border-2 border-foreground/20 hover:border-foreground/50 transition-colors">
            <div className="text-xs md:text-sm text-muted-foreground mb-2">Tarjetas</div>
            <div className="text-sm md:text-lg font-bold text-foreground mb-1">
              <span className="text-yellow-500">🟨 {user.yellowCards}</span>{" "}
              <span className="text-red-500">🟥 {user.redCards}</span>
            </div>
            <div className="text-xs text-muted-foreground">disciplina</div>
          </Card>
        </div>

        {/* Partidos recientes */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 md:mb-6">Partidos Recientes</h2>
          <div className="grid gap-3 md:gap-4">
            {recentMatches.map((match) => (
              <Card key={match.id} className="p-4 md:p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs md:text-sm font-semibold bg-primary/10 text-primary px-2 md:px-3 py-1 rounded break-words">
                      {match.opponent}
                    </span>
                    <span className="text-base md:text-lg font-bold text-foreground">{match.score}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-xs md:text-sm text-muted-foreground">{match.date}</p>
                    <div className="text-right">
                      <div className="text-xs md:text-sm text-muted-foreground">{match.role}</div>
                      {match.goals > 0 && (
                        <div className="text-lg md:text-2xl font-bold text-primary">{match.goals}⚽</div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
