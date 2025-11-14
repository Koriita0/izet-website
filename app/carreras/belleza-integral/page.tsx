import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, GraduationCap, ArrowLeft } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"


export default function BellezaIntegralPage() {
  const asistenteEducativoFotos = ["IMG-20251021-WA0049", "IMG-20251021-WA0056", "IMG-20251021-WA0047"]
  const bellezaFotos = ["IMG-20251021-WA0115", "IMG-20251021-WA0128", "IMG-20251021-WA0130", "IMG-20251021-WA0132", "IMG-20251021-WA0117"]
  const barberiaFotos = ["IMG-20251021-WA0075", "IMG-20251107-WA0019", "IMG-20251107-WA0015", "IMG-20251107-WA0014", "IMG-20251107-WA0016"]
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div>
                <h1 className="text-xl font-bold text-gray-900">IZET</h1>
                <p className="text-xs text-gray-600">Instituto Zacatecano de Estudios Técnicos</p>
              </div>
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-red-600 text-red-600 bg-transparent">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-red-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Carrera Técnica en <span className="text-red-600">Belleza Integral</span>
            </h1>
            <p className="text-lg text-red-600 font-semibold mb-4">RVOE: 01432CTBI240125</p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Conviértete en un profesional de la belleza con formación completa en estilismo, maquillaje, cuidado de la
              piel y tratamientos corporales.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sobre la Carrera</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Una carrera técnica en belleza integral ofrece formación en una variedad de habilidades relacionadas con
                la estética y el cuidado personal. Los programas suelen incluir estudios en estilismo, maquillaje,
                cuidado de la piel, manicura y pedicura, así como técnicas de masaje y tratamientos corporales.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Los estudiantes también pueden aprender sobre higiene, seguridad y prácticas comerciales en la industria
                de la belleza. Los graduados de esta carrera pueden encontrar empleo en salones de belleza, spas,
                cruceros, hoteles, o incluso pueden optar por trabajar de manera independiente.
              </p>
            </div>

            {/* Stats */}
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

            {/* Plan de Estudios */} 
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Plan de Estudios</h2>
              <div className="bg-white rounded-lg border-2 border-[color:var(--primary)] p-6 mb-6">
                <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden bg-[color:var(--muted)]">
                  <Image
                    src="/seleccionIZET/Belleza/plan de estudios.png"
                    alt="Plan de estudios de la carrera técnica en Belleza Integral"
                    fill
                    className="object-contain md:object-cover"
                    priority
                  />
                </div>
              </div>


              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-red-600 mb-4">Primer Semestre</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Corte de Cabello de Dama</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Colorimetría</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-red-600 mb-4">Segundo Semestre</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Prevención</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Epilación</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Manicura y Pedicura SPA</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Permacología</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Vinculación Interpersonal</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-red-600 mb-4">Tercer Semestre</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Diseño de uñas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Autoempleo</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-red-600 mb-4">Cuarto Semestre</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Peinado</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Maquillaje Profesional</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Campo Laboral */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Campo Laboral</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">Como egresado de Belleza Integral podrás trabajar en:</p>
                <ul className="grid md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Salones de belleza</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Spas y centros de estética</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Hoteles y resorts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Cruceros</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Trabajo independiente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Tu propio negocio</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-red-600 text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">¿Listo para comenzar tu carrera en Belleza Integral?</h3>
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
                    className="border-white text-white hover:bg-[color:var(--primary)] bg-transparent"
                  >
                    Ver Otras Carreras
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Galería de Programas */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Galería</h2>
              <div className="space-y-8">
                {/* Asistente Educativo */}
                <div>
                  <h3 className="font-semibold mb-4">Espacio de trabajo</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {asistenteEducativoFotos.map((foto) => (
                      <div
                        key={foto}
                        className="relative w-full aspect-[4/3] bg-[color:var(--muted)] rounded-lg overflow-hidden"
                      >
                        <Image
                          src={`/seleccionIZET/Belleza/${foto}.jpg`}  // 👈 aquí va Belleza
                          alt={`Galería Asistente Educativo - ${foto}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Belleza */}
                <div>
                  <h3 className="font-semibold mb-4">Maquillaje</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {bellezaFotos.map((foto) => (
                      <div
                        key={foto}
                        className="relative w-full aspect-[4/3] bg-[color:var(--muted)] rounded-lg overflow-hidden"
                      >
                        <Image
                          src={`/seleccionIZET/Belleza/${foto}.jpg`}  // 👈 misma carpeta
                          alt={`Galería Belleza - ${foto}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Barbería */}
                <div>
                  <h3 className="font-semibold mb-4">Uñas</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {barberiaFotos.map((foto) => (
                      <div
                        key={foto}
                        className="relative w-full aspect-[4/3] bg-[color:var(--muted)] rounded-lg overflow-hidden"
                      >
                        <Image
                          src={`/seleccionIZET/UnasBelleza/${foto}.jpg`}  // 👈 aquí ya coincide con tu ruta
                          alt={`Galería Barbería - ${foto}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>





          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
