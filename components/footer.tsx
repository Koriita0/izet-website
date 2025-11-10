import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[color:var(--sidebar)] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">IZET</h3>
            <p className="text-gray-400 text-sm">Instituto Zacatecano de Estudios Técnicos</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Programas</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/preparatoria" className="hover:text-white">
                  Preparatoria
                </Link>
              </li>
              <li>
                <Link href="/carreras/belleza-integral" className="hover:text-white">
                  Carreras Técnicas
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Información</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/#nosotros" className="hover:text-white">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/inscripcion" className="hover:text-white">
                  Inscripción
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Tel: 492 295 2643</li>
              <li>Tel: 492 942 1363</li>
              <li>Tel: 492 202 4303</li>
              <li>Tel: 492 130 7131</li>
              <li>Zacatecas, México</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 IZET - Instituto Zacatecano de Estudios Técnicos. Todos los derechos reservados.</p>
          <p className="mt-2">Validez Oficial SEP</p>
        </div>
      </div>
    </footer>
  )
}
