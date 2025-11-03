"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ChevronRight, Home, ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"

const allMatches = [
  // SUPERLIGA - Jornadas 1-30
  ...Array.from({ length: 30 }, (_, i) => {
    const jornada = i + 1
    return [
      {
        id: i * 12 + 1,
        category: "SUPERLIGA",
        jornada,
        team1: "Dragones FC",
        team1Icon: "🔵",
        team2: jornada % 2 === 0 ? "Titanes de Vigo" : "Halcones Unidos",
        team2Icon: jornada % 2 === 0 ? "⚫" : "🟡",
        score1: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        score2: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        date: `${15 + jornada} Mar`,
        time: `${19 + (jornada % 3)}:00`,
        location: "Campo Centro",
        status: jornada <= 10 ? "ended" : "upcoming",
      },
      {
        id: i * 12 + 2,
        category: "SUPERLIGA",
        jornada,
        team1: "Fuego Metropolitano",
        team1Icon: "🔴",
        team2: jornada % 3 === 0 ? "Rayo Verde" : "Phoenix Squad",
        team2Icon: jornada % 3 === 0 ? "🟠" : "🟢",
        score1: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        score2: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        date: `${16 + jornada} Mar`,
        time: `${20 + (jornada % 2)}:00`,
        location: "Campo Norte",
        status: jornada <= 10 ? "ended" : "upcoming",
      },
      {
        id: i * 12 + 3,
        category: "SUPERLIGA",
        jornada,
        team1: "Vortex Amarillo",
        team1Icon: "🟡",
        team2: jornada % 4 === 0 ? "Dragones FC" : "Titanes de Vigo",
        team2Icon: jornada % 4 === 0 ? "🔵" : "⚫",
        score1: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        score2: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        date: `${17 + jornada} Mar`,
        time: `${21 + (jornada % 2)}:00`,
        location: "Campo Sur",
        status: jornada <= 10 ? "ended" : "upcoming",
      },
    ]
  }).flat(),
  // PREMIER - Jornadas 1-30
  ...Array.from({ length: 30 }, (_, i) => {
    const jornada = i + 1
    return [
      {
        id: 300 + i * 12 + 1,
        category: "PREMIER",
        jornada,
        team1: "Estrella Azul",
        team1Icon: "🔵",
        team2: jornada % 2 === 0 ? "Tormenta FC" : "Velocidad Roja",
        team2Icon: jornada % 2 === 0 ? "⚪" : "🔴",
        score1: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        score2: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        date: `${15 + jornada} Mar`,
        time: `${19 + (jornada % 3)}:30`,
        location: "Campo Este",
        status: jornada <= 10 ? "ended" : "upcoming",
      },
      {
        id: 300 + i * 12 + 2,
        category: "PREMIER",
        jornada,
        team1: "Velocidad Roja",
        team1Icon: "🔴",
        team2: jornada % 3 === 0 ? "Vortex Amarillo" : "Estrella Azul",
        team2Icon: jornada % 3 === 0 ? "🟡" : "🔵",
        score1: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        score2: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        date: `${16 + jornada} Mar`,
        time: `${20 + (jornada % 2)}:30`,
        location: "Campo Oeste",
        status: jornada <= 10 ? "ended" : "upcoming",
      },
      {
        id: 300 + i * 12 + 3,
        category: "PREMIER",
        jornada,
        team1: "Tormenta FC",
        team1Icon: "⚪",
        team2: jornada % 4 === 0 ? "Fuego Metropolitano" : "Rayo Verde",
        team2Icon: jornada % 4 === 0 ? "🔴" : "🟠",
        score1: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        score2: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        date: `${17 + jornada} Mar`,
        time: `${19 + (jornada % 3)}:00`,
        location: "Campo Principal",
        status: jornada <= 10 ? "ended" : "upcoming",
      },
    ]
  }).flat(),
  // LALIGA - Jornadas 1-30
  ...Array.from({ length: 30 }, (_, i) => {
    const jornada = i + 1
    return [
      {
        id: 600 + i * 12 + 1,
        category: "LALIGA",
        jornada,
        team1: "Vigo City",
        team1Icon: "🟣",
        team2: jornada % 2 === 0 ? "Sporting Vigo" : "Phoenix Squad",
        team2Icon: jornada % 2 === 0 ? "🟤" : "🟢",
        score1: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        score2: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        date: `${15 + jornada} Mar`,
        time: `${20 + (jornada % 3)}:00`,
        location: "Campo Central",
        status: jornada <= 10 ? "ended" : "upcoming",
      },
      {
        id: 600 + i * 12 + 2,
        category: "LALIGA",
        jornada,
        team1: "Sporting Vigo",
        team1Icon: "🟤",
        team2: jornada % 3 === 0 ? "Dragones FC" : "Halcones Unidos",
        team2Icon: jornada % 3 === 0 ? "🔵" : "🟡",
        score1: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        score2: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        date: `${16 + jornada} Mar`,
        time: `${21 + (jornada % 2)}:30`,
        location: "Campo Lateral",
        status: jornada <= 10 ? "ended" : "upcoming",
      },
      {
        id: 600 + i * 12 + 3,
        category: "LALIGA",
        jornada,
        team1: "Phoenix Squad",
        team1Icon: "🟢",
        team2: jornada % 4 === 0 ? "Vigo City" : "Tormenta FC",
        team2Icon: jornada % 4 === 0 ? "🟣" : "⚪",
        score1: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        score2: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        date: `${17 + jornada} Mar`,
        time: `${19 + (jornada % 3)}:30`,
        location: "Campo Nuevo",
        status: jornada <= 10 ? "ended" : "upcoming",
      },
    ]
  }).flat(),
  // BUNDESLIGA - Jornadas 1-30
  ...Array.from({ length: 30 }, (_, i) => {
    const jornada = i + 1
    return [
      {
        id: 900 + i * 12 + 1,
        category: "BUNDESLIGA",
        jornada,
        team1: "Titanes de Vigo",
        team1Icon: "⚫",
        team2: jornada % 2 === 0 ? "Rayo Verde" : "Fuego Metropolitano",
        team2Icon: jornada % 2 === 0 ? "🟠" : "🔴",
        score1: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        score2: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        date: `${15 + jornada} Mar`,
        time: `${20 + (jornada % 2)}:30`,
        location: "Campo Olimpico",
        status: jornada <= 10 ? "ended" : "upcoming",
      },
      {
        id: 900 + i * 12 + 2,
        category: "BUNDESLIGA",
        jornada,
        team1: "Halcones Unidos",
        team1Icon: "🟡",
        team2: jornada % 3 === 0 ? "Vortex Amarillo" : "Estrella Azul",
        team2Icon: jornada % 3 === 0 ? "🟡" : "🔵",
        score1: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        score2: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        date: `${16 + jornada} Mar`,
        time: `${19 + (jornada % 3)}:00`,
        location: "Campo Techado",
        status: jornada <= 10 ? "ended" : "upcoming",
      },
      {
        id: 900 + i * 12 + 3,
        category: "BUNDESLIGA",
        jornada,
        team1: "Rayo Verde",
        team1Icon: "🟠",
        team2: jornada % 4 === 0 ? "Phoenix Squad" : "Vigo City",
        team2Icon: jornada % 4 === 0 ? "🟢" : "🟣",
        score1: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        score2: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        date: `${17 + jornada} Mar`,
        time: `${21 + (jornada % 2)}:00`,
        location: "Campo Abierto",
        status: jornada <= 10 ? "ended" : "upcoming",
      },
    ]
  }).flat(),
  // SERIE A - Jornadas 1-30
  ...Array.from({ length: 30 }, (_, i) => {
    const jornada = i + 1
    return [
      {
        id: 1200 + i * 12 + 1,
        category: "SERIE A",
        jornada,
        team1: "Fuego Metropolitano",
        team1Icon: "🔴",
        team2: jornada % 2 === 0 ? "Tormenta FC" : "Dragones FC",
        team2Icon: jornada % 2 === 0 ? "⚪" : "🔵",
        score1: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        score2: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        date: `${15 + jornada} Mar`,
        time: `${19 + (jornada % 3)}:30`,
        location: "Campo Roma",
        status: jornada <= 10 ? "ended" : "upcoming",
      },
      {
        id: 1200 + i * 12 + 2,
        category: "SERIE A",
        jornada,
        team1: "Vortex Amarillo",
        team1Icon: "🟡",
        team2: jornada % 3 === 0 ? "Sporting Vigo" : "Halcones Unidos",
        team2Icon: jornada % 3 === 0 ? "🟤" : "🟡",
        score1: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        score2: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        date: `${16 + jornada} Mar`,
        time: `${20 + (jornada % 2)}:00`,
        location: "Campo Milán",
        status: jornada <= 10 ? "ended" : "upcoming",
      },
      {
        id: 1200 + i * 12 + 3,
        category: "SERIE A",
        jornada,
        team1: "Estrella Azul",
        team1Icon: "🔵",
        team2: jornada % 4 === 0 ? "Rayo Verde" : "Phoenix Squad",
        team2Icon: jornada % 4 === 0 ? "🟠" : "🟢",
        score1: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        score2: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        date: `${17 + jornada} Mar`,
        time: `${21 + (jornada % 2)}:30`,
        location: "Campo Nápoles",
        status: jornada <= 10 ? "ended" : "upcoming",
      },
    ]
  }).flat(),
  // PRIMERA SÁBADOS - Jornadas 1-30
  ...Array.from({ length: 30 }, (_, i) => {
    const jornada = i + 1
    return [
      {
        id: 1500 + i * 12 + 1,
        category: "PRIMERA SÁBADOS",
        jornada,
        team1: "Velocidad Roja",
        team1Icon: "🔴",
        team2: jornada % 2 === 0 ? "Phoenix Squad" : "Titanes de Vigo",
        team2Icon: jornada % 2 === 0 ? "🟢" : "⚫",
        score1: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        score2: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        date: `${15 + jornada} Sab`,
        time: `${18 + (jornada % 3)}:00`,
        location: "Campo Sabadell",
        status: jornada <= 10 ? "ended" : "upcoming",
      },
      {
        id: 1500 + i * 12 + 2,
        category: "PRIMERA SÁBADOS",
        jornada,
        team1: "Vigo City",
        team1Icon: "🟣",
        team2: jornada % 3 === 0 ? "Fuego Metropolitano" : "Estrella Azul",
        team2Icon: jornada % 3 === 0 ? "🔴" : "🔵",
        score1: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        score2: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        date: `${16 + jornada} Sab`,
        time: `${17 + (jornada % 3)}:30`,
        location: "Campo Saturday",
        status: jornada <= 10 ? "ended" : "upcoming",
      },
      {
        id: 1500 + i * 12 + 3,
        category: "PRIMERA SÁBADOS",
        jornada,
        team1: "Rayo Verde",
        team1Icon: "🟠",
        team2: jornada % 4 === 0 ? "Halcones Unidos" : "Vortex Amarillo",
        team2Icon: jornada % 4 === 0 ? "🟡" : "🟡",
        score1: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        score2: jornada <= 10 ? Math.floor(Math.random() * 5) : null,
        date: `${17 + jornada} Sab`,
        time: `${19 + (jornada % 2)}:00`,
        location: "Campo Fin de Semana",
        status: jornada <= 10 ? "ended" : "upcoming",
      },
    ]
  }).flat(),
]

const leagues = ["SUPERLIGA", "PREMIER", "LALIGA", "BUNDESLIGA", "SERIE A", "PRIMERA SÁBADOS"]
const MAX_JORNADAS = 30

export default function MatchesPage() {
  const [selectedLeague, setSelectedLeague] = useState("SUPERLIGA")
  const [selectedJornada, setSelectedJornada] = useState(1)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const filteredMatches = allMatches.filter((m) => m.category === selectedLeague)
  const jornadas = Array.from(new Set(filteredMatches.map((m) => m.jornada))).sort((a, b) => a - b)
  const matchesByJornada = filteredMatches.filter((m) => m.jornada === selectedJornada)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const getStatusDisplay = (match: (typeof allMatches)[0]) => {
    if (match.status === "ended") return "FINALIZADO"
    if (match.status === "ongoing") return "EN JUEGO"
    return match.time
  }

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
            <span className="text-foreground font-semibold">Partidos</span>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Todos los Partidos</h1>
            <p className="text-lg text-muted-foreground">Resultados y próximos encuentros de la temporada</p>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
            {leagues.map((league) => (
              <button
                key={league}
                onClick={() => {
                  setSelectedLeague(league)
                  setSelectedJornada(1)
                }}
                className={`px-3 md:px-4 py-2 rounded-lg font-semibold transition-all text-sm md:text-base cursor-pointer ${
                  selectedLeague === league ? "bg-primary text-white" : "bg-border text-foreground hover:bg-primary/20"
                }`}
              >
                {league}
              </button>
            ))}
          </div>

          {jornadas.length > 0 && (
            <div className="mb-8">
              <div className="relative inline-block w-full md:w-auto" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full md:w-auto px-4 py-3 bg-border text-foreground rounded-lg font-semibold flex items-center justify-between gap-2 hover:bg-primary/20 transition-all cursor-pointer border border-border"
                >
                  <span>
                    Jornada {selectedJornada} de {MAX_JORNADAS}
                  </span>
                  <ChevronDown size={18} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {dropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
                    <div className="p-3">
                      <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-10 gap-2">
                        {jornadas.map((jornada) => (
                          <button
                            key={jornada}
                            onClick={() => {
                              setSelectedJornada(jornada)
                              setDropdownOpen(false)
                            }}
                            className={`px-3 py-2 rounded font-semibold transition-all text-sm cursor-pointer flex items-center justify-center ${
                              selectedJornada === jornada
                                ? "bg-primary text-white"
                                : "bg-muted text-foreground hover:bg-primary/20"
                            }`}
                          >
                            {jornada}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="flex flex-col gap-4">
            {matchesByJornada.length > 0 ? (
              matchesByJornada.map((match) => (
                <Link key={match.id} href={`/matches/${match.id}`}>
                  <Card className="p-4 md:p-6 hover:shadow-lg transition-all cursor-pointer border border-border hover:border-primary/50">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      {/* Category and Status */}
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded">
                          {match.category}
                        </span>
                        <span
                          className={`text-xs font-semibold px-2 py-1 rounded ${
                            match.status === "ended"
                              ? "text-green-600 bg-green-50 dark:bg-green-900/20"
                              : match.status === "ongoing"
                                ? "text-orange-600 bg-orange-50 dark:bg-orange-900/20"
                                : "text-blue-600 bg-blue-50 dark:bg-blue-900/20"
                          }`}
                        >
                          {getStatusDisplay(match)}
                        </span>
                      </div>

                      <div className="flex-grow md:flex-grow-0 w-full md:w-auto">
                        <div className="flex items-center justify-center gap-3 md:gap-4">
                          <div className="text-center flex-1 md:flex-none">
                            <p className="text-2xl md:text-3xl mb-1">{match.team1Icon}</p>
                            <Link
                              href={`/teams/${match.team1}`}
                              className="font-semibold text-foreground text-xs md:text-sm hover:text-primary transition-colors cursor-pointer"
                            >
                              {match.team1}
                            </Link>
                          </div>

                          {match.score1 !== null ? (
                            <div className="text-center min-w-16">
                              <p className="text-2xl md:text-3xl font-bold text-primary">
                                {match.score1} - {match.score2}
                              </p>
                            </div>
                          ) : (
                            <div className="text-center min-w-12">
                              <p className="text-sm md:text-lg font-bold text-muted-foreground">VS</p>
                            </div>
                          )}

                          <div className="text-center flex-1 md:flex-none">
                            <p className="text-2xl md:text-3xl mb-1">{match.team2Icon}</p>
                            <Link
                              href={`/teams/${match.team2}`}
                              className="font-semibold text-foreground text-xs md:text-sm hover:text-primary transition-colors cursor-pointer"
                            >
                              {match.team2}
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Location and Details */}
                      <div className="flex flex-col items-end gap-2 text-right w-full md:w-auto">
                        <p className="text-xs md:text-sm text-muted-foreground">{match.location}</p>
                        <p className="text-xs text-muted-foreground">{match.date}</p>
                        <button className="mt-2 bg-primary hover:bg-primary/90 text-white text-xs md:text-sm px-4 py-2 rounded-lg cursor-pointer transition-all">
                          Ver Detalles
                        </button>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))
            ) : (
              <Card className="p-8 text-center border border-border">
                <p className="text-muted-foreground">No hay partidos en esta jornada</p>
              </Card>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
