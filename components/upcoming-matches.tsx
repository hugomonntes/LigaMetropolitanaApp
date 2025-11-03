"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const matches = [
  {
    id: 1,
    category: "SUPERLIGA",
    team1: "Industrias",
    team1Icon: "🔵",
    team2: "Seis Hermanos",
    team2Icon: "⚫",
    date: "15 Mar",
    time: "20:00",
    location: "Cancha Centro",
  },
  {
    id: 2,
    category: "SUPERLIGA",
    team1: "Los Andes",
    team1Icon: "🟡",
    team2: "Cantera FC",
    team2Icon: "🔴",
    date: "15 Mar",
    time: "21:00",
    location: "Cancha Norte",
  },
  {
    id: 3,
    category: "PREMIER",
    team1: "Vigo City",
    team1Icon: "🟠",
    team2: "Sporting Vigo",
    team2Icon: "🟢",
    date: "16 Mar",
    time: "19:30",
    location: "Cancha Sur",
  },
  {
    id: 4,
    category: "PREMIER",
    team1: "Olímpico",
    team1Icon: "🔵",
    team2: "Balaídos United",
    team2Icon: "⚪",
    date: "16 Mar",
    time: "20:30",
    location: "Cancha Este",
  },
]

export default function UpcomingMatches() {
  return (
    <section id="matches" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Próximos Partidos</h2>
            <p className="text-muted-foreground mt-2">Sigue la acción de este fin de semana</p>
          </div>
          <Link href="/matches">
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold flex items-center gap-2">
              Ver todos
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {matches.map((match) => (
            <Link key={match.id} href={`/matches/${match.id}`}>
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-primary/20 hover:border-primary/50 bg-gradient-to-br from-primary/5 to-secondary/5">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded">
                    {match.category}
                  </span>
                </div>

                <div className="mb-6 flex items-center justify-between gap-2">
                  <div className="flex-1 text-center">
                    <div className="text-4xl mb-2">{match.team1Icon}</div>
                    <span className="font-semibold text-foreground text-xs line-clamp-2">{match.team1}</span>
                  </div>
                  <div className="text-muted-foreground font-bold text-sm">VS</div>
                  <div className="flex-1 text-center">
                    <div className="text-4xl mb-2">{match.team2Icon}</div>
                    <span className="font-semibold text-foreground text-xs line-clamp-2">{match.team2}</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex flex-col gap-3">
                    <div>
                      <p className="text-xs text-muted-foreground">
                        <span className="font-semibold">{match.date}</span> a las {match.time}
                      </p>
                      <p className="text-xs text-muted-foreground">{match.location}</p>
                    </div>
                    <button className="w-full py-2 bg-primary text-white hover:bg-primary/90 rounded font-semibold text-sm transition-colors cursor-pointer">
                      Ver detalles
                    </button>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
