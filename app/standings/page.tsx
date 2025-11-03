"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

const standingsData = {
  SUPERLIGA: [
    {
      position: 1,
      name: "Dragones FC",
      id: 1,
      played: 12,
      wins: 10,
      draws: 1,
      losses: 1,
      gf: 32,
      ga: 12,
      diff: 20,
      points: 31,
    },
    {
      position: 2,
      name: "Titanes de Vigo",
      id: 2,
      played: 12,
      wins: 9,
      draws: 2,
      losses: 1,
      gf: 28,
      ga: 11,
      diff: 17,
      points: 29,
    },
    {
      position: 3,
      name: "Halcones Unidos",
      id: 3,
      played: 12,
      wins: 8,
      draws: 1,
      losses: 3,
      gf: 24,
      ga: 15,
      diff: 9,
      points: 25,
    },
    {
      position: 4,
      name: "Fuego Metropolitano",
      id: 4,
      played: 12,
      wins: 7,
      draws: 2,
      losses: 3,
      gf: 21,
      ga: 16,
      diff: 5,
      points: 23,
    },
  ],
  PREMIER: [
    {
      position: 1,
      name: "Rayo Verde",
      id: 5,
      played: 12,
      wins: 9,
      draws: 1,
      losses: 2,
      gf: 26,
      ga: 13,
      diff: 13,
      points: 28,
    },
    {
      position: 2,
      name: "Phoenix Squad",
      id: 6,
      played: 12,
      wins: 8,
      draws: 2,
      losses: 2,
      gf: 23,
      ga: 12,
      diff: 11,
      points: 26,
    },
    {
      position: 3,
      name: "Estrella Azul",
      id: 7,
      played: 11,
      wins: 7,
      draws: 1,
      losses: 3,
      gf: 20,
      ga: 14,
      diff: 6,
      points: 22,
    },
    {
      position: 4,
      name: "Tormenta FC",
      id: 8,
      played: 12,
      wins: 6,
      draws: 2,
      losses: 4,
      gf: 18,
      ga: 16,
      diff: 2,
      points: 20,
    },
  ],
  LALIGA: [
    {
      position: 1,
      name: "Velocidad Roja",
      id: 9,
      played: 12,
      wins: 8,
      draws: 2,
      losses: 2,
      gf: 24,
      ga: 11,
      diff: 13,
      points: 26,
    },
    {
      position: 2,
      name: "Vortex Amarillo",
      id: 10,
      played: 12,
      wins: 7,
      draws: 1,
      losses: 4,
      gf: 21,
      ga: 15,
      diff: 6,
      points: 22,
    },
  ],
}

const categories = ["SUPERLIGA", "PREMIER", "LALIGA"] as const

export default function StandingsPage() {
  const [activeCategory, setActiveCategory] = useState<"SUPERLIGA" | "PREMIER" | "LALIGA">("SUPERLIGA")

  const teams = standingsData[activeCategory]

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
            <span className="text-foreground font-semibold">Clasificaciones</span>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Clasificaciones</h1>
          <p className="text-lg text-muted-foreground mb-12">Posiciones de los equipos en cada categoría</p>

          <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-all text-sm md:text-base cursor-pointer ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-border text-foreground hover:bg-primary/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <Card className="border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base">
                <thead>
                  <tr className="bg-primary/10 border-b border-border">
                    <th className="px-2 md:px-4 py-3 text-left text-xs md:text-sm font-bold text-foreground">Pos</th>
                    <th className="px-2 md:px-4 py-3 text-left text-xs md:text-sm font-bold text-foreground">Equipo</th>
                    <th className="px-1 md:px-4 py-3 text-center text-xs md:text-sm font-bold text-foreground">PJ</th>
                    <th className="px-1 md:px-4 py-3 text-center text-xs md:text-sm font-bold text-foreground">G</th>
                    <th className="px-1 md:px-4 py-3 text-center text-xs md:text-sm font-bold text-foreground">E</th>
                    <th className="px-1 md:px-4 py-3 text-center text-xs md:text-sm font-bold text-foreground">P</th>
                    <th className="px-1 md:px-4 py-3 text-center text-xs md:text-sm font-bold text-foreground">GF</th>
                    <th className="px-1 md:px-4 py-3 text-center text-xs md:text-sm font-bold text-foreground">GC</th>
                    <th className="px-1 md:px-4 py-3 text-center text-xs md:text-sm font-bold text-foreground">DG</th>
                    <th className="px-2 md:px-4 py-3 text-center text-xs md:text-sm font-bold text-foreground">Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {teams.map((team, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-border hover:bg-muted/30 transition-colors ${
                        team.position === 1 ? "bg-green-50 dark:bg-green-900/20" : ""
                      }`}
                    >
                      <td className="px-2 md:px-4 py-3">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-primary/20 text-primary font-bold rounded-full text-xs md:text-sm">
                          {team.position}
                        </span>
                      </td>
                      <td className="px-2 md:px-4 py-3 font-semibold text-foreground">
                        <Link
                          href={`/teams/${team.id}`}
                          className="text-primary hover:text-primary transition-colors text-xs md:text-base cursor-pointer"
                        >
                          {team.name}
                        </Link>
                      </td>
                      <td className="px-1 md:px-4 py-3 text-center text-muted-foreground text-xs md:text-base">
                        {team.played}
                      </td>
                      <td className="px-1 md:px-4 py-3 text-center text-muted-foreground text-xs md:text-base">
                        {team.wins}
                      </td>
                      <td className="px-1 md:px-4 py-3 text-center text-muted-foreground text-xs md:text-base">
                        {team.draws}
                      </td>
                      <td className="px-1 md:px-4 py-3 text-center text-muted-foreground text-xs md:text-base">
                        {team.losses}
                      </td>
                      <td className="px-1 md:px-4 py-3 text-center text-foreground font-semibold text-xs md:text-base">
                        {team.gf}
                      </td>
                      <td className="px-1 md:px-4 py-3 text-center text-foreground font-semibold text-xs md:text-base">
                        {team.ga}
                      </td>
                      <td className="px-1 md:px-4 py-3 text-center font-semibold text-xs md:text-base">
                        <span
                          className={
                            team.diff > 0 ? "text-green-600" : team.diff < 0 ? "text-red-600" : "text-muted-foreground"
                          }
                        >
                          {team.diff > 0 ? "+" : ""}
                          {team.diff}
                        </span>
                      </td>
                      <td className="px-2 md:px-4 py-3 text-center">
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-white font-bold rounded text-xs md:text-base">
                          {team.points}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <div className="mt-8 p-4 bg-muted/30 rounded-lg">
            <h3 className="font-bold text-foreground mb-3 text-sm md:text-base">Leyenda</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 text-xs md:text-sm text-muted-foreground">
              <div>PJ = Partidos</div>
              <div>G = Ganancias</div>
              <div>E = Empates</div>
              <div>P = Pérdidas</div>
              <div>GF = Goles Favor</div>
              <div>GC = Goles Contra</div>
              <div>DG = Dif. Goles</div>
              <div>Pts = Puntos</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
