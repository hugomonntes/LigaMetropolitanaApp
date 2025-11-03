"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-r from-primary/20 to-secondary/20 py-20 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/futbol7-campo-cancha-competicion.jpg"
          alt="Campo de fútbol 7"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-background/40 to-background/30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex items-center justify-start min-h-72 md:min-h-96">
        <div className="max-w-2xl text-left">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
            <span className="text-primary font-semibold text-sm">TEMPORADA 2025/26</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            La Mejor Liga de <span className="text-primary">Fútbol 7</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl">
            Compite con los mejores equipos de Vigo, sigue estadísticas en tiempo real y descubre a los mejores
            goleadores de la Liga Metropolitana.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Link href="/matches">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary text-primary-foreground cursor-pointer"
              >
                Ver Partidos
              </Button>
            </Link>
            <Link href="/teams">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent cursor-pointer">
                Explorar Equipos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
