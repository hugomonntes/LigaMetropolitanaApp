"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const scorers = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    team: "Dragones FC",
    goals: 24,
    assists: 8,
    category: "SUPERLIGA",
  },
  {
    id: 2,
    name: "Miguel Sánchez",
    team: "Titanes de Vigo",
    goals: 22,
    assists: 7,
    category: "SUPERLIGA",
  },
  {
    id: 3,
    name: "David López",
    team: "Halcones Unidos",
    goals: 19,
    assists: 5,
    category: "PREMIER",
  },
  {
    id: 4,
    name: "Juan Martínez",
    team: "Rayo Verde",
    goals: 18,
    assists: 9,
    category: "PREMIER",
  },
]

export default function TopScorers() {
  return (
    <section id="scorers" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Máximos Goleadores</h2>
            <p className="text-muted-foreground mt-2">Ranking de máximos anotadores de la temporada</p>
          </div>
          <Link href="/scorers">
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold flex items-center gap-2">
              Ver ranking completo
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {scorers.map((scorer, index) => (
            <Card
              key={scorer.id}
              className="p-6 flex items-center gap-4 hover:shadow-lg transition-all cursor-pointer border border-border hover:border-primary/50"
            >
              {/* Ranking badge */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">#{index + 1}</span>
                </div>
              </div>

              {/* Player info */}
              <div className="flex-grow min-w-0">
                <h3 className="font-bold text-foreground truncate">{scorer.name}</h3>
                <p className="text-sm text-muted-foreground truncate">{scorer.team}</p>
                <span className="inline-block text-xs bg-primary/10 text-primary font-semibold px-2 py-1 rounded mt-2">
                  {scorer.category}
                </span>
              </div>

              {/* Stats */}
              <div className="flex-shrink-0 text-center">
                <p className="text-2xl font-bold text-primary">{scorer.goals}</p>
                <p className="text-xs text-muted-foreground">goles</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
