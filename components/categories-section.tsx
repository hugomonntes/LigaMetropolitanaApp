"use client"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    id: 1,
    name: "SUPERLIGA",
    level: "1ª División",
    teams: 12,
    matches: 48,
    color: "from-blue-600 to-blue-700",
  },
  {
    id: 2,
    name: "PREMIER",
    level: "2ª División",
    teams: 14,
    matches: 52,
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: 3,
    name: "LALIGA",
    level: "3ª División",
    teams: 16,
    matches: 60,
    color: "from-blue-400 to-blue-500",
  },
  {
    id: 4,
    name: "BUNDESLIGA",
    level: "4ª División",
    teams: 18,
    matches: 68,
    color: "from-indigo-600 to-blue-600",
  },
  {
    id: 5,
    name: "SERIE A",
    level: "5ª División",
    teams: 20,
    matches: 76,
    color: "from-indigo-500 to-indigo-600",
  },
  {
    id: 6,
    name: "PRIMERA SÁBADOS",
    level: "Liga de Sábados",
    teams: 10,
    matches: 36,
    color: "from-slate-600 to-slate-700",
  },
]

export default function CategoriesSection() {
  return (
    <section id="standings" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Categorías</h2>
          <p className="text-muted-foreground mt-2">Selecciona una categoría para ver clasificaciones y resultados</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card
              key={category.id}
              className={`bg-gradient-to-br ${category.color} p-1 hover:shadow-xl transition-all cursor-pointer group`}
            >
              <div className="bg-background rounded-lg p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{category.level}</p>

                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-muted-foreground">Equipos</p>
                      <p className="text-2xl font-bold text-foreground">{category.teams}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Partidos</p>
                      <p className="text-2xl font-bold text-foreground">{category.matches}</p>
                    </div>
                  </div>
                </div>

                <Link href="/standings">
                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-white font-semibold flex items-center justify-center gap-2">
                    Ver clasificación
                    <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
