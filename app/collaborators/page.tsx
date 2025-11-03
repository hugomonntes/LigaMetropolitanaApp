"use client"

import Header from "@/components/header"
import { ChevronRight, Home } from "lucide-react"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function CollaboratorsPage() {
  const collaborators = [
    {
      name: "GES Seguros",
      description: "Socio oficial en seguros deportivos",
      image: "/placeholder.svg?key=xolvy",
      link: "https://info.ges.es/estamossiemprecerca-raul-lozano",
    },
    {
      name: "Simples Energía",
      description: "Proveedor de energía sostenible",
      image: "/placeholder.svg?key=pzyf4",
      link: "https://www.simplesenergia.es",
    },
    {
      name: "Campo Metropolitano",
      description: "Instalaciones oficiales de la liga",
      image: "/placeholder.svg?key=g3bua",
      link: "#",
    },
    {
      name: "Liga Pro",
      description: "Plataforma de gestión de eventos deportivos",
      image: "/placeholder.svg?key=2fmdi",
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <nav className="flex items-center gap-2 mb-8 text-sm">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <Home size={18} />
            <span>Inicio</span>
          </Link>
          <ChevronRight size={18} className="text-muted-foreground" />
          <span className="text-muted-foreground">Colaboradores</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Colaboradores</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Conoce a nuestros socios que hacen posible la Liga Metropolitana
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {collaborators.map((collaborator, idx) => (
            <a key={idx} href={collaborator.link} target="_blank" rel="noopener noreferrer" className="group">
              <Card className="h-full p-6 border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <div className="mb-4 overflow-hidden rounded-lg bg-muted h-32">
                  <img
                    src={collaborator.image || "/placeholder.svg"}
                    alt={collaborator.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {collaborator.name}
                </h3>
                <p className="text-sm text-muted-foreground">{collaborator.description}</p>
              </Card>
            </a>
          ))}
        </div>

        {/* Call to action for sponsorship */}
        <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/30 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">¿Quieres ser Colaborador?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            La Liga Metropolitana ofrece oportunidades de patrocinio y colaboración para empresas que deseen formar
            parte de nuestro proyecto.
          </p>
          <a
            href="mailto:contacto@ligametropolitana.com"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Contáctanos
          </a>
        </Card>
      </div>
    </div>
  )
}
