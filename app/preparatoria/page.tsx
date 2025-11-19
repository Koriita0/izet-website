import Image from "next/image"
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
                <h1 className="text-4xl md:text-5xl font-bold text-[color:var(--foreground)] mb-4">
                  Preparatoria <span className="text-[color:var(--primary)]">IZET</span>
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  Obtén tu certificado oficial de preparatoria en solo 2 años con acompañamiento
                  académico y prácticas formativas.
                </p>
                <p className="text-sm text-[color:var(--muted-foreground)] mb-6">
                  RVOE: 0532BG250320
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/inscripcion">
                    <Button
                      size="lg"
                      className="bg-[color:var(--primary)] hover:brightness-90 text-white"
                    >
                      Inscríbete Ahora
                    </Button>
                  </Link>
                  <Link href="/#contacto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-[color:var(--primary)] text-[color:var(--primary)]"
                    >
                      Contacto
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="relative w-full aspect-[16/9] rounded-lg shadow-lg overflow-hidden image-placeholder">
                  <Image
                    src="estudiantes-mexicanos-felices-en-instituto-t-cnico.jpg"
                    alt="Preparatoria IZET - portada"
                    fill
                    className="object-cover"
                  />
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Ventajas de Estudiar con Nosotros
            </h2>
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
                      <span className="text-gray-700">
                        Duración de solo 2 años (6 cuatrimestres)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Horarios flexibles adaptados a tus necesidades
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-100">
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Docentes altamente capacitados y comprometidos
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Ideal para jóvenes y adultos que trabajan
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Grupos reducidos de máximo 15 alumnos
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section – recuadros claros para plan de estudios + modalidad */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Plan de Estudios
            </h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              La preparatoria IZET está organizada en 6 cuatrimestres que combinan áreas
              científicas, humanísticas y de formación integral para prepararte al mundo
              laboral o a estudios superiores.
            </p>

            {/* Recuadros de cuatrimestres */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {/* PRIMER CUATRIMESTRE */}
              <Card className="bg-white/80 border border-red-100 rounded-2xl shadow-sm">
                <CardContent className="p-6">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-red-600" />
                    <span className="text-xs font-semibold text-red-700 uppercase tracking-wide">
                      Primer cuatrimestre
                    </span>
                  </div>
                  <ul className="space-y-1 text-sm text-gray-800">
                    <li>La materia y sus interacciones</li>
                    <li>Ciencias sociales I</li>
                    <li>Cultura digital I</li>
                    <li>Pensamiento matemático I</li>
                    <li>Lengua y comunicación I</li>
                    <li>Inglés I</li>
                    <li>Humanidades I</li>
                    <li>Educación física</li>
                    <li>Teatro</li>
                  </ul>
                </CardContent>
              </Card>

              {/* SEGUNDO CUATRIMESTRE */}
              <Card className="bg-white/80 border border-red-100 rounded-2xl shadow-sm">
                <CardContent className="p-6">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-red-600" />
                    <span className="text-xs font-semibold text-red-700 uppercase tracking-wide">
                      Segundo cuatrimestre
                    </span>
                  </div>
                  <ul className="space-y-1 text-sm text-gray-800">
                    <li>Conservación de la energía y sus interacciones con la materia</li>
                    <li>Ciencias sociales II</li>
                    <li>Cultura digital II</li>
                    <li>Pensamiento matemático II</li>
                    <li>Lengua y comunicación II</li>
                    <li>Inglés II</li>
                    <li>Humanidades II</li>
                    <li>Educación física</li>
                    <li>Teatro</li>
                  </ul>
                </CardContent>
              </Card>

              {/* TERCER CUATRIMESTRE */}
              <Card className="bg-white/80 border border-red-100 rounded-2xl shadow-sm">
                <CardContent className="p-6">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-red-600" />
                    <span className="text-xs font-semibold text-red-700 uppercase tracking-wide">
                      Tercer cuatrimestre
                    </span>
                  </div>
                  <ul className="space-y-1 text-sm text-gray-800">
                    <li>Ecosistemas: interacciones, energía y dinámica</li>
                    <li>Pensamiento matemático III</li>
                    <li>Lengua y comunicación III</li>
                    <li>Inglés III</li>
                    <li>Humanidades III</li>
                    <li>Taller de ciencias I</li>
                    <li>Educación física</li>
                    <li>Teatro</li>
                  </ul>
                </CardContent>
              </Card>

              {/* CUARTO CUATRIMESTRE */}
              <Card className="bg-white/80 border border-red-100 rounded-2xl shadow-sm">
                <CardContent className="p-6">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-red-600" />
                    <span className="text-xs font-semibold text-red-700 uppercase tracking-wide">
                      Cuarto cuatrimestre
                    </span>
                  </div>
                  <ul className="space-y-1 text-sm text-gray-800">
                    <li>Reacciones químicas básicas</li>
                    <li>Conciencia histórica I</li>
                    <li>Cultura Digital III</li>
                    <li>Temas selectos de matemáticas I</li>
                    <li>Inglés IV</li>
                    <li>Educación Física</li>
                    <li>Teatro</li>
                  </ul>
                </CardContent>
              </Card>

              {/* QUINTO CUATRIMESTRE */}
              <Card className="bg-white/80 border border-red-100 rounded-2xl shadow-sm">
                <CardContent className="p-6">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-red-600" />
                    <span className="text-xs font-semibold text-red-700 uppercase tracking-wide">
                      Quinto cuatrimestre
                    </span>
                  </div>
                  <ul className="space-y-1 text-sm text-gray-800">
                    <li>La energía en los procesos de la vida diaria</li>
                    <li>Conciencia histórica II. México durante el expansionismo capitalista</li>
                    <li>Inglés V</li>
                    <li>Taller de probabilidad y estadística I</li>
                    <li>Derecho y sociedad I</li>
                    <li>Arte y cultura I</li>
                    <li>Educación física</li>
                    <li>Teatro</li>
                  </ul>
                </CardContent>
              </Card>

              {/* SEXTO CUATRIMESTRE */}
              <Card className="bg-white/80 border border-red-100 rounded-2xl shadow-sm">
                <CardContent className="p-6">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-red-600" />
                    <span className="text-xs font-semibold text-red-700 uppercase tracking-wide">
                      Sexto cuatrimestre
                    </span>
                  </div>
                  <ul className="space-y-1 text-sm text-gray-800">
                    <li>Organismo: estructuras y procesos. Herencia y evolución biológica</li>
                    <li>Conciencia histórica III. La realidad actual en perspectivas históricas</li>
                    <li>Temas selectos de matemáticas II</li>
                    <li>Inglés VI</li>
                    <li>Taller de probabilidad y estadística II</li>
                    <li>Derecho y sociedad II</li>
                    <li>Arte y cultura II</li>
                    <li>Educación física</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Modalidad, duración y validez */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Modalidad, duración y validez
            </h3>
            <div className="max-w-3xl mx-auto">
              <Card className="bg-white border-2 border-red-100 rounded-3xl shadow-sm">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="inline-flex px-6 py-2 rounded-full bg-red-600 text-white font-semibold tracking-wide">
                    ESCOLARIZADO
                  </div>
                  <p className="text-gray-700 text-sm md:text-base">
                    Estudia de <span className="font-semibold">martes a viernes</span> en un ambiente
                    académico cercano y acompañado.
                  </p>
                  <p className="text-gray-700 text-sm md:text-base">
                    La preparatoria tiene una <span className="font-semibold">duración de 2 años</span> y
                    cuenta con <span className="font-semibold">RVOE 0532BG250320</span>, con validez oficial
                    en toda la República Mexicana.
                  </p>
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
                <p className="text-gray-700">
                  Tutorías personalizadas, monitoreo de avance y asesoría para la continuidad
                  académica. Nuestro equipo docente apoya a estudiantes con horarios flexibles
                  para trabajadores.
                </p>
              </div>
              <div className="relative image-placeholder w-full aspect-[4/3] overflow-hidden">
                <Image
                  src="IMG-20251021-WA0175.jpg"
                  alt="Acompañamiento académico"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="section-split">
              <div className="relative image-placeholder w-full aspect-[4/3] overflow-hidden">
                <Image
                  src="/seleccionIZET/IZET/IMG-20251021-WA0066.jpg"
                  alt="Instalaciones y talleres"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Instalaciones y Talleres</h3>
                <p className="text-gray-700">
                  Aulas equipadas, laboratorio de cómputo y espacios para talleres prácticos.
                  Los talleres fomentan habilidades técnicas y creativas que complementan la
                  formación general.
                </p>
              </div>
            </div>

            <div className="section-split">
              <div>
                <h3 className="text-2xl font-semibold mb-3">Becas y Apoyos</h3>
                <p className="text-gray-700">
                  Contamos con opciones de becas parciales y facilidades de pago. Habla con
                  nuestra oficina de inscripciones para conocer promociones y apoyos
                  disponibles.
                </p>
              </div>
              <div className="relative image-placeholder w-full aspect-[4/3] overflow-hidden">
                <Image
                  src="/seleccionIZET/IZET/BecaIZET.png"
                  alt="Becas y apoyos"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para Comenzar?</h2>
            <p className="text-xl mb-8 text-red-100">
              Inscripciones abiertas. Aparta tu lugar hoy mismo.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/inscripcion">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-red-600 hover:bg-gray-100"
                >
                  Ver Requisitos de Inscripción
                </Button>
              </Link>
              <Link href="/#contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-red-700 bg-transparent"
                >
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
