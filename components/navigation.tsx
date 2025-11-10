"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const pathname = usePathname() || "/"
  const hideCarreras = pathname.startsWith("/carreras")

  return (
    <header className="sticky top-0 z-50 bg-[color:var(--background)] border-b border-[color:var(--border)] shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/icon.png.jpg"
              alt="IZET Logo"
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-[color:var(--foreground)]">IZET</h1>
              <p className="text-xs text-[color:var(--muted-foreground)]">Instituto Zacatecano de Estudios Técnicos</p>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-[color:var(--muted-foreground)] hover:text-[color:var(--primary)] transition-colors">
              Inicio
            </Link>
            <Link href="/#nosotros" className="text-[color:var(--muted-foreground)] hover:text-[color:var(--primary)] transition-colors">
              Nosotros
            </Link>
            <Link href="/preparatoria" className="text-[color:var(--muted-foreground)] hover:text-[color:var(--primary)] transition-colors">
              Preparatoria
            </Link>

            {/* Hide the carreras dropdown while already viewing a carreras page to avoid a redundant secondary nav */}
            {!hideCarreras && (
              <div className="relative group">
                <button className="text-[color:var(--muted-foreground)] hover:text-[color:var(--primary)] transition-colors">Carreras</button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-[color:var(--card)] border border-[color:var(--border)] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link
                    href="/carreras/belleza-integral"
                    className="block px-4 py-2 text-[color:var(--muted-foreground)] hover:bg-[color:var(--secondary)] hover:text-[color:var(--primary)]"
                  >
                    Belleza Integral
                  </Link>
                  <Link
                    href="/carreras/asistente-educativo"
                    className="block px-4 py-2 text-[color:var(--muted-foreground)] hover:bg-[color:var(--secondary)] hover:text-[color:var(--primary)]"
                  >
                    Asistente Educativo
                  </Link>
                  <Link
                    href="/carreras/barbero-profesional"
                    className="block px-4 py-2 text-[color:var(--muted-foreground)] hover:bg-[color:var(--secondary)] hover:text-[color:var(--primary)]"
                  >
                    Barbero Profesional
                  </Link>
                  <Link
                    href="/carreras/contador-privado"
                    className="block px-4 py-2 text-[color:var(--muted-foreground)] hover:bg-[color:var(--secondary)] hover:text-[color:var(--primary)]"
                  >
                    Contador Privado
                  </Link>
                  <Link
                    href="/carreras/criminologia"
                    className="block px-4 py-2 text-[color:var(--muted-foreground)] hover:bg-[color:var(--secondary)] hover:text-[color:var(--primary)]"
                  >
                    Criminología
                  </Link>
                  <Link
                    href="/carreras/idioma-ingles"
                    className="block px-4 py-2 text-[color:var(--muted-foreground)] hover:bg-[color:var(--secondary)] hover:text-[color:var(--primary)]"
                  >
                    Idioma Inglés
                  </Link>
                </div>
              </div>
            )}

            <Link href="/inscripcion" className="text-[color:var(--muted-foreground)] hover:text-[color:var(--primary)] transition-colors">
              Inscripción
            </Link>
            <Link href="/#contacto">
              <Button className="bg-[color:var(--primary)] hover:brightness-90 text-white">Contacto</Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
