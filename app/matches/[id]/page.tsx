"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface MatchDetailsPageProps {
  params: {
    id: string
  }
}

export default async function MatchDetailsPage({ params }: MatchDetailsPageProps) {
  const matchId = params.id

  const matchData = {
    id: 1,
    category: "SUPERLIGA",
    team1: "Dragones FC",
    team2: "Titanes de Vigo",
    score1: 3,
    score2: 2,
    date: "15 de Marzo de 2025",
    time: "20:00",
    location: "Campo Centro, Metropolitana",
    status: "ended",
    cards: {
      team1: { yellow: 2, red: 0 },
      team2: { yellow: 3, red: 1 },
    },
    goalscorers: [
      { time: "12", player: "Martín García", team: "Dragones FC" },
      { time: "28", player: "Carlos López", team: "Titanes de Vigo" },
      { time: "35", player: "Diego Fernández", team: "Dragones FC" },
      { time: "67", player: "Antonio Rodríguez", team: "Titanes de Vigo" },
      { time: "81", player: "Pablo Sánchez", team: "Dragones FC" },
    ],
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb Navigation */}
      <section className="py-4 md:py-6 bg-muted/30 border-b border-border">
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
            <Link href="/matches" className="text-muted-foreground hover:text-foreground transition-colors">
              Partidos
            </Link>
            <ChevronRight size={16} className="text-muted-foreground" />
            <span className="text-foreground font-semibold">Detalles del Partido</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary/10 to-background py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded mb-4">
              {matchData.category}
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-right flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{matchData.team1}</h1>
            </div>

            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-4">
                {matchData.score1} - {matchData.score2}
              </div>
              <p className="text-muted-foreground">{matchData.date}</p>
            </div>

            <div className="text-center md:text-left flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{matchData.team2}</h1>
            </div>
          </div>

          <div className="mt-8 text-center text-muted-foreground">
            <p className="mb-2">{matchData.location}</p>
            <p>{matchData.time}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Goals, Cards & Sidebar Info */}
            <div className="lg:col-span-2">
              {/* Goalscorers */}
              <h2 className="text-2xl font-bold text-foreground mb-6">Goles</h2>

              <Card className="p-6 border border-border mb-8">
                <div className="space-y-3">
                  {matchData.goalscorers.length > 0 ? (
                    matchData.goalscorers.map((goal, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between pb-3 border-b border-border last:border-b-0"
                      >
                        <div className="flex items-center gap-4 flex-grow">
                          <span className="text-sm font-bold text-muted-foreground min-w-8">{goal.time}'</span>
                          <div>
                            <p className="font-semibold text-foreground">{goal.player}</p>
                            <p className="text-xs text-muted-foreground">{goal.team}</p>
                          </div>
                        </div>
                        <span className="text-primary font-bold text-lg">⚽</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-muted-foreground">Sin goles registrados</p>
                  )}
                </div>
              </Card>

              {/* Cards */}
              <h2 className="text-2xl font-bold text-foreground mb-6">Tarjetas</h2>

              <Card className="p-6 border border-border">
                <div className="space-y-6">
                  {/* Team 1 Cards */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">{matchData.team1}</h3>
                    <div className="space-y-2">
                      {matchData.cards.team1.yellow > 0 && (
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-8 bg-yellow-400 rounded"></span>
                          <span className="text-foreground">
                            {matchData.cards.team1.yellow} tarjeta{matchData.cards.team1.yellow !== 1 ? "s" : ""}{" "}
                            amarilla{matchData.cards.team1.yellow !== 1 ? "s" : ""}
                          </span>
                        </div>
                      )}
                      {matchData.cards.team1.red > 0 && (
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-8 bg-red-600 rounded"></span>
                          <span className="text-foreground">
                            {matchData.cards.team1.red} tarjeta{matchData.cards.team1.red !== 1 ? "s" : ""} roja
                            {matchData.cards.team1.red !== 1 ? "s" : ""}
                          </span>
                        </div>
                      )}
                      {matchData.cards.team1.yellow === 0 && matchData.cards.team1.red === 0 && (
                        <p className="text-muted-foreground">Sin tarjetas</p>
                      )}
                    </div>
                  </div>

                  <div className="border-t border-border"></div>

                  {/* Team 2 Cards */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">{matchData.team2}</h3>
                    <div className="space-y-2">
                      {matchData.cards.team2.yellow > 0 && (
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-8 bg-yellow-400 rounded"></span>
                          <span className="text-foreground">
                            {matchData.cards.team2.yellow} tarjeta{matchData.cards.team2.yellow !== 1 ? "s" : ""}{" "}
                            amarilla{matchData.cards.team2.yellow !== 1 ? "s" : ""}
                          </span>
                        </div>
                      )}
                      {matchData.cards.team2.red > 0 && (
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-8 bg-red-600 rounded"></span>
                          <span className="text-foreground">
                            {matchData.cards.team2.red} tarjeta{matchData.cards.team2.red !== 1 ? "s" : ""} roja
                            {matchData.cards.team2.red !== 1 ? "s" : ""}
                          </span>
                        </div>
                      )}
                      {matchData.cards.team2.yellow === 0 && matchData.cards.team2.red === 0 && (
                        <p className="text-muted-foreground">Sin tarjetas</p>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column - Sidebar Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Información</h2>

              <Card className="p-6 border border-border">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">CATEGORÍA</p>
                    <p className="font-semibold text-foreground">{matchData.category}</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-xs text-muted-foreground mb-1">FECHA</p>
                    <p className="font-semibold text-foreground">{matchData.date}</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-xs text-muted-foreground mb-1">HORA</p>
                    <p className="font-semibold text-foreground">{matchData.time}</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-xs text-muted-foreground mb-1">CAMPO</p>
                    <p className="font-semibold text-foreground">{matchData.location}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
