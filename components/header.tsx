"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { label: "Partidos", href: "/matches" },
    { label: "Goleadores", href: "/scorers" },
    { label: "Clasificaciones", href: "/standings" },
    { label: "Reglas", href: "/rules" },
    { label: "Colaboradores", href: "/collaborators" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-lg">LM</span>
            </div>
            <span className="font-bold text-xl text-foreground hidden md:inline group-hover:text-primary transition-colors">
              Liga Metropolitana
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors text-sm font-medium ${
                  pathname === item.href ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <Link href="/profile" className="hidden md:block">
              <Button className="bg-primary hover:bg-primary text-primary-foreground">Mi Perfil</Button>
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <nav className="flex flex-col gap-3 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    pathname === item.href ? "bg-primary text-white font-semibold" : "text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/profile" onClick={() => setMenuOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary text-primary-foreground">Mi Perfil</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
