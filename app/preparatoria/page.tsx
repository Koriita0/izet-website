import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, GraduationCap, BookOpen } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PreparatoriaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section (richer, alternating layout) */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-lg">
            <div className="decorative-blob blob-1 -left-28 -top-20" />
            <div className="decorative-blob blob-2 -right-20 -top-8" />
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-[color:var(--foreground)] mb-4">Preparatoria <span className="text-[color:var(--primary)]">IZET</span></h1>
                <p className="text-lg text-gray-600 mb-4">Obtén tu certificado oficial de preparatoria en solo 2 años con acompañamiento académico y prácticas formativas.</p>
                <p className="text-sm text-[color:var(--muted-foreground)] mb-6">RVOE: 0532BG250320</p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/inscripcion">
                    <Button size="lg" className="bg-[color:var(--primary)] hover:brightness-90 text-white">Inscríbete Ahora</Button>
                  </Link>
                  <Link href="/#contacto">
                    <Button size="lg" variant="outline" className="border-[color:var(--primary)] text-[color:var(--primary)]">Contacto</Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="w-full aspect-[16/9] rounded-lg shadow-lg image-placeholder">
                  Foto (reemplazar)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Ventajas de Estudiar con Nosotros</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-red-100">
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Certificado oficial con validez en toda la República Mexicana
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Duración de solo 2 años (6 cuatrimestres)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Horarios flexibles adaptados a tus necesidades</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-100">
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Docentes altamente capacitados y comprometidos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Ideal para jóvenes y adultos que trabajan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Grupos reducidos de máximo 15 alumnos</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Plan de Estudios</h2>

            <div className="bg-white rounded-lg p-6 border-2 border-[color:var(--primary)] mb-12">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <div className="w-full aspect-[4/3] rounded-lg bg-[color:var(--muted)] flex items-center justify-center">Foto (plan de estudios)</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Estructura y Materias</h3>
                  <p className="text-gray-700 mb-2">En nuestra Preparatoria ofrecemos un plan educativo equilibrado con materias básicas y optativas que fomentan el pensamiento crítico, las habilidades digitales y la formación humana.</p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Matemáticas y Ciencias</li>
                    <li>Lengua y Comunicación</li>
                    <li>Historia, Filosofía y Ética</li>
                    <li>Talleres: Teatro, Cultura Digital, Educación Física</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Materias Básicas</h3>
                  <p className="text-sm text-gray-600">Matemáticas, Ciencias, Lengua y Comunicación</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Humanidades</h3>
                  <p className="text-sm text-gray-600">Historia, Filosofía, Arte y Cultura</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Talleres</h3>
                  <p className="text-sm text-gray-600">Educación Física, Teatro, Cultura Digital</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

        {/* Alternating content blocks with image placeholders */}
        <section className="py-12 bg-[color:var(--secondary)]">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="space-y-12">
              <div className="section-split">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Acompañamiento Académico</h3>
                  <p className="text-gray-700">Tutorías personalizadas, monitoreo de avance y asesoría para la continuidad académica. Nuestro equipo docente apoya a estudiantes con horarios flexibles para trabajadores.</p>
                </div>
                <div className="image-placeholder w-full aspect-[4/3]">Foto (reemplazar)</div>
              </div>

              <div className="section-split">
                <div className="image-placeholder w-full aspect-[4/3]">Foto (reemplazar)</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Instalaciones y Talleres</h3>
                  <p className="text-gray-700">Aulas equipadas, laboratorio de cómputo y espacios para talleres prácticos. Los talleres fomentan habilidades técnicas y creativas que complementan la formación general.</p>
                </div>
              </div>

              <div className="section-split">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Becas y Apoyos</h3>
                  <p className="text-gray-700">Contamos con opciones de becas parciales y facilidades de pago. Habla con nuestras oficina de inscripciones para conocer promociones y apoyos disponibles.</p>
                </div>
                <div className="image-placeholder w-full aspect-[4/3]">Foto (reemplazar)</div>
              </div>
            </div>
          </div>
        </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para Comenzar?</h2>
            <p className="text-xl mb-8 text-red-100">Inscripciones abiertas. Aparta tu lugar hoy mismo.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/inscripcion">
                <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
                  Ver Requisitos de Inscripción
                </Button>
              </Link>
              <Link href="/#contacto">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-red-700 bg-transparent">
                  Contactar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
