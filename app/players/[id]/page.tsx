import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface PlayerDetailsPageProps {
  params: {
    id: string
  }
}

export default async function PlayerDetailsPage({ params }: PlayerDetailsPageProps) {
  const playerId = params.id

  const playerData = {
    id: 1,
    name: "Carlos Rodríguez",
    team: "FC Barcelona",
    number: 7,
    category: "SUPERLIGA",
    position: "Delantero",
    birthDate: "15/05/1990",
    nationality: "España",
    height: "180 cm",
    weight: "78 kg",
    stats: {
      goals: 24,
      assists: 8,
      matches: 12,
      minutesPlayed: 1080,
      dribbles: 34,
      tackles: 12,
      passes: 234,
      accuracy: 78,
    },
    seasonStats: [
      { category: "SUPERLIGA", goals: 24, assists: 8, matches: 12 },
      { category: "LALIGA", goals: 12, assists: 4, matches: 8 },
    ],
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/20 to-secondary/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="w-40 h-40 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-lg">
              <div className="text-center">
                <span className="text-6xl font-bold text-white">{playerData.number}</span>
                <p className="text-white text-xs mt-2">Foto de Perfil</p>
              </div>
            </div>

            {/* Player Info */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">{playerData.name}</h1>
              <p className="text-xl text-muted-foreground mb-4">{playerData.position}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-primary text-white font-semibold rounded">{playerData.team}</span>
                <span className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded">
                  {playerData.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Stats */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-6">Estadísticas de la Temporada</h2>

              {/* Main Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <Card className="p-6 text-center border border-border">
                  <p className="text-4xl font-bold text-primary mb-2">{playerData.stats.goals}</p>
                  <p className="text-sm text-muted-foreground">Goles</p>
                </Card>
                <Card className="p-6 text-center border border-border">
                  <p className="text-4xl font-bold text-primary mb-2">{playerData.stats.assists}</p>
                  <p className="text-sm text-muted-foreground">Asistencias</p>
                </Card>
                <Card className="p-6 text-center border border-border">
                  <p className="text-4xl font-bold text-primary mb-2">{playerData.stats.matches}</p>
                  <p className="text-sm text-muted-foreground">Partidos</p>
                </Card>
                <Card className="p-6 text-center border border-border">
                  <p className="text-4xl font-bold text-primary mb-2">{playerData.stats.minutesPlayed}</p>
                  <p className="text-sm text-muted-foreground">Minutos</p>
                </Card>
                <Card className="p-6 text-center border border-border">
                  <p className="text-4xl font-bold text-primary mb-2">{playerData.stats.dribbles}</p>
                  <p className="text-sm text-muted-foreground">Regates</p>
                </Card>
                <Card className="p-6 text-center border border-border">
                  <p className="text-4xl font-bold text-primary mb-2">{playerData.stats.accuracy}%</p>
                  <p className="text-sm text-muted-foreground">Precisión de Pases</p>
                </Card>
              </div>

              {/* Season Stats */}
              <h2 className="text-2xl font-bold text-foreground mb-6">Estadísticas por Categoría</h2>

              <Card className="p-6 border border-border">
                <div className="space-y-4">
                  {playerData.seasonStats.map((stat, idx) => (
                    <div key={idx} className="pb-4 border-b border-border last:border-b-0">
                      <h3 className="font-semibold text-foreground mb-3">{stat.category}</h3>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <p className="text-2xl font-bold text-primary">{stat.goals}</p>
                          <p className="text-xs text-muted-foreground">Goles</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-primary">{stat.assists}</p>
                          <p className="text-xs text-muted-foreground">Asistencias</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-primary">{stat.matches}</p>
                          <p className="text-xs text-muted-foreground">Partidos</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Right Column - Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Información Personal</h2>

              <Card className="p-6 border border-border mb-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">EQUIPO</p>
                    <p className="font-semibold text-foreground">{playerData.team}</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-xs text-muted-foreground mb-1">POSICIÓN</p>
                    <p className="font-semibold text-foreground">{playerData.position}</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-xs text-muted-foreground mb-1">NÚMERO</p>
                    <p className="font-semibold text-foreground">{playerData.number}</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-xs text-muted-foreground mb-1">NACIONALIDAD</p>
                    <p className="font-semibold text-foreground">{playerData.nationality}</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-xs text-muted-foreground mb-1">FECHA DE NACIMIENTO</p>
                    <p className="font-semibold text-foreground">{playerData.birthDate}</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-xs text-muted-foreground mb-1">ALTURA</p>
                    <p className="font-semibold text-foreground">{playerData.height}</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-xs text-muted-foreground mb-1">PESO</p>
                    <p className="font-semibold text-foreground">{playerData.weight}</p>
                  </div>
                </div>
              </Card>

              <Button className="w-full bg-primary hover:bg-primary/90">Seguir Jugador</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
