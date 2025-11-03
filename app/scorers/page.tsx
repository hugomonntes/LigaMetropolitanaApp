"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { useState } from "react"

const scorersDataByLeague = {
  SUPERLIGA: [
    {
      id: 1,
      position: 1,
      name: "Carlos Rodríguez",
      team: "Dragones FC",
      goals: 24,
      assists: 8,
      matches: 12,
      category: "Forward",
    },
    {
      id: 2,
      position: 2,
      name: "Miguel Sánchez",
      team: "Titanes de Vigo",
      goals: 22,
      assists: 7,
      matches: 12,
      category: "Midfielder",
    },
    {
      id: 3,
      position: 3,
      name: "David López",
      team: "Halcones Unidos",
      goals: 19,
      assists: 5,
      matches: 11,
      category: "Defender",
    },
    {
      id: 4,
      position: 4,
      name: "Roberto Silva",
      team: "Fuego Metropolitano",
      goals: 17,
      assists: 6,
      matches: 12,
      category: "Goalkeeper",
    },
  ],
  PREMIER: [
    {
      id: 5,
      position: 1,
      name: "Juan Martínez",
      team: "Rayo Verde",
      goals: 20,
      assists: 9,
      matches: 12,
      category: "Forward",
    },
    {
      id: 6,
      position: 2,
      name: "Pablo García",
      team: "Phoenix Squad",
      goals: 18,
      assists: 4,
      matches: 12,
      category: "Midfielder",
    },
    {
      id: 7,
      position: 3,
      name: "Andrés Fernández",
      team: "Estrella Azul",
      goals: 16,
      assists: 7,
      matches: 11,
      category: "Defender",
    },
    {
      id: 8,
      position: 4,
      name: "Luis Torres",
      team: "Tormenta FC",
      goals: 14,
      assists: 5,
      matches: 11,
      category: "Goalkeeper",
    },
  ],
  LALIGA: [
    {
      id: 9,
      position: 1,
      name: "Vicente Ruiz",
      team: "Velocidad Roja",
      goals: 19,
      assists: 6,
      matches: 10,
      category: "Forward",
    },
    {
      id: 10,
      position: 2,
      name: "Jorge Alves",
      team: "Vortex Amarillo",
      goals: 15,
      assists: 8,
      matches: 10,
      category: "Midfielder",
    },
  ],
}

const leagues = ["SUPERLIGA", "PREMIER", "LALIGA"] as const

export default function ScorersPage() {
  const [activeLeague, setActiveLeague] = useState<"SUPERLIGA" | "PREMIER" | "LALIGA">("SUPERLIGA")

  const scorers = scorersDataByLeague[activeLeague]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-4 md:py-6 border-b border-border bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              <Home size={16} />
              <span>Inicio</span>
            </Link>
            <ChevronRight size={16} className="text-muted-foreground" />
            <span className="text-foreground font-semibold">Máximos Goleadores</span>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Máximos Goleadores</h1>
          <p className="text-lg text-muted-foreground mb-12">Mejores anotadores de la temporada 2025/26</p>

          <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
            {leagues.map((league) => (
              <button
                key={league}
                onClick={() => setActiveLeague(league)}
                className={`px-3 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-all text-sm md:text-base cursor-pointer ${
                  activeLeague === league
                    ? "bg-primary text-white shadow-lg"
                    : "bg-border text-foreground hover:bg-primary/20"
                }`}
              >
                {league}
              </button>
            ))}
          </div>

          <div className="grid gap-4">
            {scorers.map((scorer) => (
              <Link key={scorer.id} href={`/players/${scorer.id}`}>
                <Card className="p-4 md:p-6 hover:shadow-lg transition-all cursor-pointer border border-border hover:border-primary/50">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-bold text-sm md:text-xl ${
                          scorer.position === 1
                            ? "bg-yellow-400 text-black"
                            : scorer.position === 2
                              ? "bg-gray-300 text-black"
                              : scorer.position === 3
                                ? "bg-orange-400 text-white"
                                : "bg-primary/20 text-primary"
                        }`}
                      >
                        #{scorer.position}
                      </div>
                    </div>

                    <div className="flex-grow min-w-0">
                      <h3 className="text-base md:text-xl font-bold text-foreground mb-1 md:mb-2 truncate">
                        {scorer.name}
                      </h3>
                      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                        <Link
                          href={`/teams/${scorer.team}`}
                          className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors font-semibold cursor-pointer"
                        >
                          {scorer.team}
                        </Link>
                        <span className="inline-block px-2 md:px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded w-fit">
                          {scorer.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex-shrink-0 text-right space-y-1 md:space-y-2">
                      <div>
                        <p className="text-2xl md:text-3xl font-bold text-primary">{scorer.goals}</p>
                        <p className="text-xs md:text-xs text-muted-foreground">Goles</p>
                      </div>
                      <div className="pt-1 md:pt-2 border-t border-border">
                        <p className="text-base md:text-lg font-semibold text-foreground">{scorer.assists}</p>
                        <p className="text-xs text-muted-foreground">Asist.</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
