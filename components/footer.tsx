"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">LM</span>
              </div>
              <span className="font-bold">Liga Metropolitana</span>
            </div>
            <p className="text-background/70 text-sm">La mejor plataforma para disfrutar del minifútbol profesional</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Partidos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Goleadores
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Equipos
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Términos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <p className="text-sm text-background/70 mb-2">info@ligametropolitana.com</p>
            <p className="text-sm text-background/70">Teléfono: +34 620 112 028</p>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-background/70">
          <p>Liga Metropolitana | Created by Hugo Montes</p>
        </div>
      </div>
    </footer>
  )
}
