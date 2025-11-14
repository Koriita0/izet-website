import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, GraduationCap } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"




export default function BarberoProfesionalPage() {
  const fotosGaleria = ["IMG-20251021-WA0054", "IMG-20251021-WA0055", "IMG-20251021-WA0074", "IMG-20251021-WA0082", "IMG-20251107-WA0067"]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="bg-gradient-to-br from-red-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Carrera Técnica en <span className="text-red-600">Barbero Profesional</span>
            </h1>
            <p className="text-lg text-red-600 font-semibold mb-4">RVOE: Validez Oficial</p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Domina las técnicas modernas de barbería y estilismo masculino profesional con formación práctica y
              actualizada.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sobre la Carrera</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                La carrera técnica en Barbero Profesional te prepara para dominar el arte de la barbería moderna,
                incluyendo cortes clásicos y contemporáneos, afeitado tradicional, diseño de barba y bigote, y técnicas
                avanzadas de estilismo masculino.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Aprenderás sobre productos profesionales, atención al cliente, higiene y seguridad, así como las últimas
                tendencias en barbería. Esta carrera combina tradición con innovación para formar barberos altamente
                calificados.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4">Módulos y Habilidades</h3>
              <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                <li>- Técnicas de corte masculino</li>
                <li>- Diseño y cuidado de barba</li>
                <li>- Afeitado tradicional y tratamientos de piel</li>
                <li>- Productos, mezclas y mantenimiento</li>
                <li>- Atención al cliente y gestión de citas</li>
                <li>- Emprendimiento y gestión de barbería</li>
              </ul>
            </div>

            {/* Galería con placeholders foto1, foto2, foto3 */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4">Galería</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {fotosGaleria.map((foto) => (
                  <div
                    key={foto}
                    className="relative w-full aspect-[4/3] bg-[color:var(--muted)] rounded-lg overflow-hidden"
                  >
                    <Image
                      src={`/seleccionIZET/BarberoProfesional/${foto}.jpg`}
                      alt={`Galería Barbero Profesional - ${foto}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-2 border-red-100">
                <CardContent className="p-6 text-center">
                  <Clock className="w-12 h-12 text-red-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 mb-1">Duración</h3>
                  <p className="text-gray-600">4 Semestres</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-red-100">
                <CardContent className="p-6 text-center">
                  <GraduationCap className="w-12 h-12 text-red-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 mb-1">Modalidad</h3>
                  <p className="text-gray-600">Presencial</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-red-100">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-red-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 mb-1">Validez</h3>
                  <p className="text-gray-600">Oficial SEP</p>
                </CardContent>
              </Card>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Campo Laboral</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">Como egresado de Barbero Profesional podrás trabajar en:</p>
                <ul className="grid md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Barberías tradicionales y modernas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Salones de belleza</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Spas para hombres</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Hoteles y resorts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Barbero independiente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Tu propia barbería</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-red-600 text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">¿Listo para comenzar tu carrera como Barbero Profesional?</h3>
              <p className="mb-6">Contáctanos para más información sobre inscripciones</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/#contacto">
                  <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
                    Contactar Ahora
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-red-700 bg-transparent"
                  >
                    Ver Otras Carreras
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
